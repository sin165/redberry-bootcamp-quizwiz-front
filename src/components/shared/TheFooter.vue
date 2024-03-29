<template>
  <footer class="border-t border-custom-gray-300 text-custom-gray-600 text-xs leading-5">
    <div class="px-10 py-6 desktop:flex desktop:px-24 desktop:py-11">
      <div
        class="border-b border-custom-gray-300-transparent h-11 desktop:border-none desktop:w-52"
      >
        <IconLogo />
      </div>
      <div class="pt-6 flex flex-col gap-10 desktop:flex-row desktop:gap-24 desktop:pt-0">
        <section class="">
          <h4 class="text-sm font-semibold text-custom-gray-900 mb-4 desktop:mb-6">Content</h4>
          <a href="#">Quizzes</a>
        </section>
        <section>
          <h4 class="text-sm font-semibold text-custom-gray-900 mb-4 desktop:mb-6">Contact us</h4>
          <div class="space-y-6">
            <p>Email: <a href="mailto:quizwiz@gmail.com">quizwiz@gmail.com</a></p>
            <p>Tel: +995 328989</p>
          </div>
        </section>
        <section>
          <h4 class="text-sm font-semibold text-custom-gray-900 mb-4 desktop:mb-6">Social media</h4>
          <div class="space-y-6">
            <p><a href="#">Facebook</a></p>
            <p><a href="#">LinkedIn</a></p>
          </div>
        </section>
      </div>
    </div>
    <div
      class="border-t border-custom-gray-300-transparent h-16 flex justify-start items-center px-10 desktop:justify-end desktop:px-24"
    >
      © 2024 QW. All rights reserved
    </div>
  </footer>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo.vue'

export default {
  components: {
    IconLogo
  }
}
</script>
