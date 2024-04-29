<template>
  <div class="relative">
    <button
      class="relative px-3.5 py-2 rounded-0.5xl flex items-center gap-2 -translate-y-px"
      :class="{
        'border-black border-2 text-black': numberOfChanges,
        'border border-custom-gray-500-light m-px text-custom-gray-500': !numberOfChanges
      }"
      @click="open = !open"
    >
      <IconSettingsSlider />
      Filter
      <span
        v-if="numberOfChanges"
        class="flex justify-center items-center bg-black rounded-full absolute size-5 -top-2 -right-1.5 overflow-visible border-2 border-white box-content text-xxs text-white font-bold"
      >
        {{ numberOfChanges }}
      </span>
    </button>
    <QuizListingFilterModalMobile
      v-if="isMobile && open"
      @close="open = false"
      @confirm="confirm"
    />
    <QuizListingFilterModalDesktop
      v-if="!isMobile && open"
      @close="open = false"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import IconSettingsSlider from '@/components/icons/IconSettingsSlider.vue'
import QuizListingFilterModalDesktop from './QuizListingFilterModalDesktop.vue'
import QuizListingFilterModalMobile from './QuizListingFilterModalMobile.vue'
import { getDifficulties } from '@/services/api/quiz'

export default {
  components: {
    IconSettingsSlider,
    QuizListingFilterModalDesktop,
    QuizListingFilterModalMobile
  },
  emits: ['confirm'],
  data() {
    return {
      open: false,
      isMobile: false
    }
  },
  computed: {
    numberOfChanges() {
      return this.$store.getters['filter/numberOfChanges']
    }
  },
  created() {
    if (!this.$store.getters['quiz/difficulties'].length) {
      this.fetchDifficulties()
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1440
    },
    async fetchDifficulties() {
      const { status, data } = await getDifficulties()
      if (status === 200) {
        this.$store.dispatch('quiz/setDifficulties', data)
      }
    },
    confirm() {
      this.$emit('confirm')
      this.open = false
    }
  }
}
</script>
