<template>
  <div class="w-full min-h-screen" style="background: #f5f5f5;">
    <div class="px-4 md:px-12 py-4 bg-white w-full flex items-center filter drop-shadow-md">
      <Logo />
    </div>

    <div class="px-4 md:px-10 w-full lg:px-20 xl:px-24 mx-auto">
      <section id="metrics-section" class="glide mt-20">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides py-2 px-1 lg:flex justify-between">
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <total-jobs />
              <div class="metrics-data__text">
                <span class="block text-3xl font-bold">{{ processed_jobs }}</span>
                <span class="text-xl font-normal" style="color: #383B3E;">Total jobs</span>
              </div>
            </div>
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <processed-jobs />
            </div>
            <div class="glide__slide metrics-data filter drop-shadow-md">
              <failed-jobs />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="sass">
body
  color: #010C13
.metrics-data
  @apply bg-white pl-10 pr-4 py-6 inline-flex
  width: 300px
  @screen lg
    width: 346px
  &__text
    padding-left: 28px
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
      processed_jobs: 300,
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
  },
}
</script>
