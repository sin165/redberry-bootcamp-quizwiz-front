<template>
  <div
    class="flex flex-wrap justify-center text-sm font-semibold text-custom-gray-500 mt-2 divide-x"
  >
    <div tabindex="-1" class="flex items-center gap-2 h-3.5 px-3 my-2 group">
      <IconThumbtack />
      <div v-if="quiz.categories.length > 2">
        <p class="cursor-pointer">{{ quiz.categories.length }} categories</p>
        <ul class="hidden group-focus:block absolute bg-white border p-2">
          <li v-for="category in quiz.categories" :key="category.id" class="text-sm font-semibold">
            {{ category.name }}
          </li>
        </ul>
      </div>
      <ul v-else class="flex items-center flex-wrap">
        <template v-for="(category, index) in quiz.categories" :key="category.id">
          <span v-if="index > 0" class="size-1 bg-custom-gray-300 rounded-full mx-3"></span>
          <li class="text-sm font-semibold">{{ category.name }}</li>
        </template>
      </ul>
    </div>
    <p class="flex items-center gap-2 h-3.5 px-3 my-2">
      <IconHashtag />{{ quiz.questions.length }} Questions
    </p>
    <p class="flex items-center gap-2 h-3.5 px-3 my-2">
      <IconDiploma />{{ quiz.max_points }} Points
    </p>
    <p class="flex items-center gap-2 h-3.5 px-3 my-2">
      <IconRocket />{{ quiz.results_count }} Plays
    </p>
    <p class="flex items-center gap-2 h-3.5 px-3 my-2">
      <IconTime />{{ Math.floor(quiz.time_limit / 60) }}m
    </p>
  </div>
</template>

<script>
import IconThumbtack from '@/components/icons/IconThumbtack.vue'
import IconHashtag from '@/components/icons/IconHashtag.vue'
import IconDiploma from '@/components/icons/IconDiploma.vue'
import IconRocket from '@/components/icons/IconRocket.vue'
import IconTime from '@/components/icons/IconTime.vue'

export default {
  components: {
    IconThumbtack,
    IconHashtag,
    IconDiploma,
    IconRocket,
    IconTime
  },
  props: {
    quiz: {
      type: Object,
      required: true
    }
  }
}
</script>
