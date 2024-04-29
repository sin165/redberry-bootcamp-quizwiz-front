<template>
  <div class="mt-6 space-y-4">
    <QuizListingFilterModalSortButton name="a-z">
      <IconSortByAlphabet /><span>A-Z</span>
    </QuizListingFilterModalSortButton>
    <QuizListingFilterModalSortButton name="z-a">
      <IconSortByAlphabet class="rotate-180" /><span>Z-A</span>
    </QuizListingFilterModalSortButton>
    <QuizListingFilterModalSortButton name="popular">
      <IconSortByPopularity /><span>Most popular</span>
    </QuizListingFilterModalSortButton>
    <QuizListingFilterModalSortButton name="newest">
      <IconSortByTime /><span>Newest</span>
    </QuizListingFilterModalSortButton>
    <QuizListingFilterModalSortButton name="oldest">
      <IconSortByTime class="rotate-180" /><span>Oldest</span>
    </QuizListingFilterModalSortButton>
  </div>
</template>

<script>
import QuizListingFilterModalSortButton from '@/components/quiz-listing/QuizListingFilterModalSortButton.vue'
import IconSortByAlphabet from '@/components/icons/IconSortByAlphabet.vue'
import IconSortByPopularity from '@/components/icons/IconSortByPopularity.vue'
import IconSortByTime from '@/components/icons/IconSortByTime.vue'

export default {
  components: {
    QuizListingFilterModalSortButton,
    IconSortByAlphabet,
    IconSortByPopularity,
    IconSortByTime
  }
}
</script>
