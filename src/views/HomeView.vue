<template>
  <MainLayout>
    <main>
      <section class="mt-5">
        <IconHeroTitle class="ml-12 mb-2" />
        <p class="ml-12 mb-6 text-lg">Play with us, Explore with us</p>
        <div class="relative overflow-hidden">
          <div class="w-full h-[474px] overflow-hidden">
            <div class="h-[119px]">
              <IconArtHomepage class="w-[430px] h-[174px]" />
            </div>
            <div class="bg-black size-[486px] -ml-7 rounded-full pt-24 pl-24">
              <IconMissionText />
            </div>
          </div>
          <div class="bg-accent h-72 pt-18 pl-12">
            <p class="text-7.5xl text-white font-raleway font-black">200+</p>
            <a
              href="#"
              class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6"
            >
              <span>Quiz games</span>
              <IconArrowUpRight class="mt-3" />
            </a>
          </div>
          <div class="bg-primary h-72 pt-12 pl-12">
            <p class="text-7.5xl text-white font-raleway font-black">25+</p>
            <a
              href="#"
              class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6"
            >
              <span class="w-min">Different genre</span>
              <IconArrowUpRight class="mt-3" />
            </a>
          </div>
        </div>
      </section>
    </main>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import IconHeroTitle from '@/components/icons/IconHeroTitle.vue'
import IconArtHomepage from '@/components/icons/IconArtHomepage.vue'
import IconMissionText from '@/components/icons/IconMissionText.vue'
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue'

export default {
  components: {
    MainLayout,
    IconHeroTitle,
    IconArtHomepage,
    IconMissionText,
    IconArrowUpRight
  }
}
</script>
