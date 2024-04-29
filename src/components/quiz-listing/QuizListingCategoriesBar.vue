<template>
  <div
    v-if="currentPosition > 0"
    class="hidden desktop:flex justify-center items-center hover:bg-custom-gray-200 size-10 rounded-full shrink-0 cursor-pointer"
    ref="carouselLeft"
    @click="moveLeft"
  >
    <IconCarouselLeft />
  </div>
  <div
    class="border-b border-custom-gray-200 overflow-x-scroll desktop:overflow-x-hidden"
    ref="categoriesOuter"
  >
    <div class="categories flex gap-4" ref="categoriesInner">
      <QuizListingCategoriesBarButton
        name="All Quizzes"
        :selected="!currentCategories.length"
        @confirm="$emit('confirm')"
      />
      <QuizListingCategoriesBarButton
        v-for="category in categories"
        :key="category.id"
        :name="category.name"
        :id="category.id"
        :selected="currentCategories.includes(category.id)"
        @confirm="$emit('confirm')"
      />
    </div>
  </div>
  <div
    v-if="contentWidth === 0 || currentPosition < maxOffset"
    class="hidden desktop:flex justify-center items-center hover:bg-custom-gray-200 size-10 rounded-full shrink-0 cursor-pointer"
    ref="carouselRight"
    @click="moveRight"
  >
    <IconCarouselRight />
  </div>
</template>

<script>
import QuizListingCategoriesBarButton from '@/components/quiz-listing/QuizListingCategoriesBarButton.vue'
import IconCarouselLeft from '@/components/icons/IconCarouselLeft.vue'
import IconCarouselRight from '@/components/icons/IconCarouselRight.vue'

export default {
  components: {
    QuizListingCategoriesBarButton,
    IconCarouselLeft,
    IconCarouselRight
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  emits: ['confirm'],
  data() {
    return {
      containerWidth: 0,
      contentWidth: 0,
      currentPosition: 0
    }
  },
  computed: {
    currentCategories() {
      return this.$store.getters['filter/currentCategories']
    },
    maxOffset() {
      return this.contentWidth - this.containerWidth
    }
  },
  mounted() {
    this.updateWidths()
  },
  updated() {
    this.updateWidths()
  },
  methods: {
    moveLeft() {
      let nextPosition = this.currentPosition - this.containerWidth * 0.8
      if (nextPosition < 0) {
        nextPosition = 0
      }
      this.currentPosition = nextPosition
      this.$refs.categoriesOuter.scroll({
        left: this.currentPosition,
        top: 0,
        behavior: 'smooth'
      })
    },
    moveRight() {
      let nextPosition = this.currentPosition + this.containerWidth * 0.8
      if (nextPosition > this.maxOffset) {
        nextPosition = this.maxOffset
      }
      this.currentPosition = nextPosition
      this.$refs.categoriesOuter.scroll({
        left: this.currentPosition,
        top: 0,
        behavior: 'smooth'
      })
    },
    updateWidths() {
      this.containerWidth = this.$refs.categoriesInner.offsetWidth
      this.contentWidth = this.$refs.categoriesInner.scrollWidth
    }
  }
}
</script>
