<template>
  <MainLayout>
    <main>
      <section class="mt-5">
        <IconHeroTitle class="ml-12 mb-2 desktop:ml-24 desktop:w-[657px] desktop:h-[258px]" />
        <p
          class="ml-12 mb-6 text-lg text-custom-gray-450 font-semibold desktop:text-3xl desktop:ml-24 desktop:mb-0"
        >
          Play with us, Explore with us
        </p>
        <div class="relative overflow-hidden desktop:pt-28 desktop:overflow-visible">
          <div
            class="w-full h-[474px] overflow-hidden desktop:absolute desktop:bottom-0 desktop:right-0 desktop:w-[880px] desktop:h-full desktop:overflow-visible"
          >
            <div class="h-[119px] desktop:h-0 desktop:ml-32">
              <IconArtHomepage
                class="w-[430px] h-[174px] desktop:w-[655px] desktop:h-[340px] desktop:-translate-y-56"
              />
            </div>
            <div class="-ml-7 desktop:w-[880px] desktop:h-[640px] overflow-hidden desktop:ml-0">
              <div
                class="bg-black size-[486px] desktop:size-[1091px] rounded-full pt-24 pl-24 desktop:ml-0 desktop:pt-60 desktop:pl-60"
              >
                <IconMissionText class="desktop:w-96 desktop:h-80" />
              </div>
            </div>
          </div>
          <div class="bg-accent h-72 pt-18 pl-12 desktop:pl-24">
            <p class="text-7.5xl text-white font-raleway font-black">200+</p>
            <a
              href="#"
              class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6 desktop:no-underline"
            >
              <span>Quiz games</span>
              <IconArrowUpRight class="mt-3 desktop:hidden" />
            </a>
          </div>
          <div class="bg-primary h-72 pt-12 pl-12 desktop:h-60 desktop:pl-24">
            <p class="text-7.5xl text-white font-raleway font-black">25+</p>
            <a
              href="#"
              class="text-5xl text-white font-raleway font-black underline flex gap-6 mt-6 desktop:no-underline"
            >
              <span class="w-min desktop:w-max">Different genre</span>
              <IconArrowUpRight class="mt-3 desktop:hidden" />
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
