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
            <li class="job" :data-status="job.status" v-for="job in jobs" v-bind:key="job.id">
              <span class="job__id">#{{job.uuid}}:</span>
              <button class="job__name">
                {{job.name}}
              </button>
              <span class="job__time">{{job.updated_at}}</span>
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
  height: 300px
  width: 100%
  margin-top: 28px
  padding: 25px 32px
  overflow: auto

  .job-list
    color: #ffffff
    overflow-x: auto
    padding-bottom: 4px
    .job
      @apply flex py-1
      &__id
        max-width: 18%
        @screen md
          max-width: 20%
        @screen lg
          max-width: 100%
        color: #E5E5E5
        @apply truncate lg:max-w-full hidden md:block
      &__name
        @apply font-bold ml-4
      &__time
        color: #e5e5e5
        @apply ml-4 opacity-70 hidden md:inline

      &:not(:first-child)
        @apply mt-2

    .job[data-status="processed"] .job__name
      color: #28BF25

    .job[data-status="pending"] .job__name
      @apply text-yellow-300 opacity-20
      animation-name: pending
      animation-duration: 1.3s
      animation-iteration-count: infinite

    .job[data-status="failed"] .job__name
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
import Glide from '@glidejs/glide';
import Logo from '@/components/svg/Logo.vue';
import TotalJobs from '@/components/svg/TotalJobs.vue';
import ProcessedJobs from '@/components/svg/ProcessedJobs.vue';
import FailedJobs from '@/components/svg/FailedJobs.vue';
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
      total_jobs: 300,
      processed_jobs: 257,
      failed_jobs: 43,
      jobs: [
        {
          id: 1,
          uuid: '4e7ef713-312e-4d11-9665-4fa1eaf5b7b0',
          status: 'processed',
          name: 'App/Jobs/SendEmail',
          created_at: '16 Dec 21\' 13:02',
          updated_at: '16 Dec 21\' 13:02',
        },
        {
          id: 2,
          uuid: '4e7ef713-312e-4d11-9665-4fa1eaf5b7b0',
          status: 'pending',
          name: 'App/Jobs/InnerFolder/HelloWorld',
          created_at: '16 Dec 21\' 13:02',
          updated_at: '16 Dec 21\' 13:02',
        },
      ],
    };
  },

  mounted() {
    new Glide('#metrics-section', {
      // type: 'carousel',
      perView: 0,
      breakpoints: {
        767.9: {
          perView: 1.2,
        },
      },
    }).mount();

    const terminal = this.$refs.terminal
    terminal.scrollTo(0, terminal.scrollHeight)
  },
}
</script>
