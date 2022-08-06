<template>
  <div class="w-full min-h-screen pb-4" style="background: #f5f5f5;">
    <div class="px-4 md:px-12 py-4 bg-white w-full flex items-center filter drop-shadow-md">
      <Logo />
    </div>

    <div class="px-4 md:px-10 w-full lg:px-20 xl:px-24 mx-auto">
      <section id="metrics-section" class="glide mt-10">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides py-2 px-1 lg:flex justify-between">
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <total-jobs />
              <div class="metrics-data__text">
                <span class="block text-3xl font-bold">{{ total_jobs }}</span>
                <span class="text-xl font-normal" style="color: #383B3E;">Total jobs</span>
              </div>
            </div>
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <processed-jobs />
              <div class="metrics-data__text">
                <span class="block text-3xl font-bold">{{ processed_jobs }}</span>
                <span class="block text-xl font-normal truncate" style="color: #383B3E;">Processed jobs</span>
              </div>
            </div>
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <failed-jobs />
              <div class="metrics-data__text">
                <span class="block text-3xl font-bold">{{ failed_jobs }}</span>
                <span class="text-xl font-normal" style="color: #383B3E;">Failed jobs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-10">
        <h1 class="text-xl font-bold uppercase">Log Terminal</h1>
        <div class="terminal" ref="terminal">
          <ul class="job-list" aria-live="assertive">
            <li
              class="job"
              :data-status="event.status"
              :data-latest="i == 0"
              v-for="event, i in job_events"
              v-bind:key="event.id">

              <div class="job__status">
                [{{event.job.id}}] {{ event.status }}
              </div>
              <a class="job__name">
                {{ event.job.name }}
              </a>
              <time>
                [{{ parseDate(event.created_at) }}]
              </time>

            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3&display=swap')

body
  color: #010C13
  font-family: 'Source Sans 3', sans-serif !important

.metrics-data
  @apply bg-white pl-10 pr-4 py-6 inline-flex
  width: 300px
  @screen lg
    width: 346px
  &__text
    padding-left: 28px

.terminal
  background: #2E071C
  height: calc(100vh - 386px)
  width: 100%
  margin-top: 28px
  padding: 25px 32px
  overflow: auto

  .job-list
    color: #ffffff
    overflow-x: auto
    padding-bottom: 4px
    .job
      @apply flex py-1 items-start
      &__id
        max-width: 18%
        @screen md
          max-width: 20%
          width: 150px
        @screen lg
          max-width: 100%
          width: 310px
        color: #E5E5E5
        @apply truncate lg:max-w-full hidden md:block
      &__name
        @apply font-bold ml-4 text-left
      &__time
        color: #e5e5e5
        @apply ml-4 opacity-70 hidden md:inline

      &:not(:first-child)
        @apply mt-2

    .job[data-status="processed"] .job__status
      color: #28BF25

    .job[data-status="processing"] .job__status
      @apply text-yellow-300

    .job[data-status="processing"].job[data-latest="true"] .job__status
      animation-name: pending
      animation-duration: 1.3s
      animation-iteration-count: infinite

    .job[data-status="failed"] .job__status
      color: #ff0000

@keyframes pending
  0%
    opacity: 0.2
  50%
    opacity: 1
  100%
    opacity: 0.2
</style>

<script>
import FailedJobs from '@/components/svg/FailedJobs.vue';
import Logo from '@/components/svg/Logo.vue';
import ProcessedJobs from '@/components/svg/ProcessedJobs.vue';
import TotalJobs from '@/components/svg/TotalJobs.vue';
import { api } from '@/http';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.css';

export default {
  components: {
    Logo,
    TotalJobs,
    ProcessedJobs,
    FailedJobs,
  },

  data() {
    return {
      total_jobs: 0,
      processed_jobs: 0,
      failed_jobs: 0,
      job_events: [],
      jobs_fetched: false,
      event_source: null,
      sse_not_supported: typeof(EventSource) === 'undefined',
      sse_not_supported_msg: `Server-Sent events not supported on this browser.
        Please use the refresh button to update events.`
    };
  },

  computed: {
    //
  },

  methods: {

    parseDate(date) {
      console.log(date)
      let d = new Date(date)
      let year = d.getFullYear()
      let month = d.getMonth().toString().padStart(2, '0')
      let day = d.getDate().toString().padStart(2, '0')
      let time = d.toLocaleTimeString()

      return `${year}-${month}-${day} ${time}`
    },

    /**
     * Fetch previous job events.
     */
    async fetchJobs() {
      return await api.get('job-events').then(({ data }) => {
        return data;
      });
    },

    /**
     * Update the component with previous job events.
     */
    async fetchAndUpdateJobs() {
      const res = await this.fetchJobs();
      this.job_events = res.data;
      this.total_jobs = res.meta.total_jobs_count;
      this.processed_jobs = res.meta.processed_jobs_count;
      this.failed_jobs = res.meta.failed_jobs_count;

      if (this.jobs_fetched === false) {
        this.jobs_fetched = true;
      }
    },

    /**
     * Adds the given job data to the top of the job events.
     */
    addToJobLogs(job) {
      this.job_events.unshift(job);
    },

    /**
     * Find job by id.
     */
    findJob(id) {
      return this.job_events.find((job) => job.id == id);
    },

    /**
     * Remove a job from the list.
     */
    deleteJob(id) {
      const index = this.job_events.findIndex((job) => job.id == id);

      if (index < 0) {
        return false;
      }

      this.job_events.splice(index, 1);

      return true;
    },

    /**
     * listen for new jobs
     */
    startLogStream() {
      if (this.sse_not_supported === true) {
        return console.error(this.sse_not_supported_msg);
      }

      const baseUrl = api.defaults.baseURL;
      const source = new EventSource(baseUrl + 'job-events/stream');
      source.onmessage = (event) => {
        const data = JSON.parse(event.data);

        this.total_jobs = data.meta.total_jobs_count;
        this.processed_jobs = data.meta.processed_jobs_count;
        this.failed_jobs = data.meta.failed_jobs_count;

        const events = data.data;
        // we want to push from the oldest
        // that's why we are reversing.
        events.reverse();
        events.forEach(job => this.addToJobLogs(job));
      };
      this.event_source = source;
    },

    /**
     * Close the open stream
     */
    endLogStream() {
      if (null == this.event_source) {
        return console.warn('No open stream.');
      }

      this.event_source.close();
    }
  },

  async mounted() {
    new Glide('#metrics-section', {
      // type: 'carousel',
      perView: 0,
      breakpoints: {
        767.9: {
          perView: 1.2,
        },
      },
    }).mount();

    const terminal = this.$refs.terminal;
    terminal.scrollTo(0, terminal.scrollHeight);

    await this.fetchAndUpdateJobs();
    this.startLogStream();
    window.addEventListener('beforeunload', (e) => {
      this.endLogStream();
    });
  },
}
</script>
