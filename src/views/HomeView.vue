<template>
  <LayoutsMain>
    <main>
      <section class="mt-5">
        <IconHeroTitle class="ml-12 mb-2 desktop:ml-24 desktop:w-164 desktop:h-64" />
        <p
          class="ml-12 mb-6 text-lg text-custom-gray-450 font-raleway font-semibold desktop:text-3xl desktop:ml-24 desktop:mb-0"
        >
          Play with us, Explore with us
        </p>
        <div class="relative overflow-hidden desktop:pt-28 desktop:overflow-visible">
          <div
            class="w-full h-118 overflow-hidden desktop:absolute desktop:bottom-0 desktop:right-0 desktop:w-220 desktop:h-full desktop:overflow-visible"
          >
            <div class="h-30 desktop:h-0 desktop:ml-32">
              <IconArtHomepage
                class="w-107 h-43 desktop:w-164 desktop:h-85 desktop:-translate-y-56"
              />
            </div>
            <div class="-ml-7 desktop:w-220 desktop:h-160 overflow-hidden desktop:ml-0">
              <div
                class="bg-black size-121 desktop:size-274 rounded-full pt-24 pl-24 desktop:ml-0 desktop:pt-60 desktop:pl-60"
              >
                <IconMissionText class="desktop:w-96 desktop:h-80" />
              </div>
            </div>
          </div>
          <div class="bg-accent h-72 pt-18 pl-12 desktop:pl-24">
            <RouterLink :to="{ name: 'quiz-listing' }" class="block w-max">
              <p class="text-7.5xl text-white font-raleway font-black">{{ quizCount }}+</p>
              <p
                class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6 desktop:no-underline"
              >
                <span>Quiz games</span>
                <IconArrowUpRight class="mt-3 desktop:hidden" />
              </p>
            </RouterLink>
          </div>
          <div class="bg-primary h-72 pt-12 pl-12 desktop:h-60 desktop:pl-24">
            <RouterLink :to="{ name: 'quiz-listing' }" class="block w-max">
              <p class="text-7.5xl text-white font-raleway font-black">{{ categoryCount }}+</p>
              <p
                class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6 desktop:no-underline"
              >
                <span class="w-min desktop:w-max">Different genre</span>
                <IconArrowUpRight class="mt-3 desktop:hidden" />
              </p>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </LayoutsMain>
</template>

<script>
import { RouterLink } from 'vue-router'
import LayoutsMain from '@/layouts/LayoutsMain.vue'
import IconHeroTitle from '@/components/icons/IconHeroTitle.vue'
import IconArtHomepage from '@/components/icons/IconArtHomepage.vue'
import IconMissionText from '@/components/icons/IconMissionText.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'
import { getStatistics } from '@/services/api/info'

export default {
  components: {
    RouterLink,
    LayoutsMain,
    IconHeroTitle,
    IconArtHomepage,
    IconMissionText,
    IconArrowUpRight
  },
  computed: {
    quizCount() {
      return this.$store.getters['info/quizCount']
    },
    categoryCount() {
      return this.$store.getters['info/categoryCount']
    }
  },
  created() {
    if (!this.$store.getters['info/quizCount']) {
      this.fetchStatistics()
    }
  },
  methods: {
    async fetchStatistics() {
      const { status, data } = await getStatistics()
      if (status === 200) {
        this.$store.dispatch('info/setQuizCount', data.quiz_count)
        this.$store.dispatch('info/setCategoryCount', data.category_count)
      }
    }
  }
}
</script>
