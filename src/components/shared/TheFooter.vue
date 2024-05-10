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
          <RouterLink :to="{ name: 'quiz-listing' }">Quizzes</RouterLink>
        </section>
        <section>
          <h4 class="text-sm font-semibold text-custom-gray-900 mb-4 desktop:mb-6">Contact us</h4>
          <div class="space-y-6">
            <p>
              Email: <a :href="`mailto:${email}`">{{ email }}</a>
            </p>
            <p>Tel: {{ telephone }}</p>
          </div>
        </section>
        <section>
          <h4 class="text-sm font-semibold text-custom-gray-900 mb-4 desktop:mb-6">Social media</h4>
          <div class="space-y-6">
            <p><a :href="facebook" target="_blank">Facebook</a></p>
            <p><a :href="linkedin" target="_blank">LinkedIn</a></p>
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
import { RouterLink } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
import { getContactInfo } from '@/services/api/info'

export default {
  components: {
    RouterLink,
    IconLogo
  },
  computed: {
    email() {
      return this.$store.getters['info/email']
    },
    telephone() {
      return this.$store.getters['info/telephone']
    },
    facebook() {
      return this.$store.getters['info/facebook']
    },
    linkedin() {
      return this.$store.getters['info/linkedin']
    }
  },
  created() {
    if (!this.$store.getters['info/email']) {
      this.fetchContactInfo()
    }
  },
  methods: {
    async fetchContactInfo() {
      const { status, data } = await getContactInfo()
      if (status === 200) {
        this.$store.dispatch('info/setContactInfo', data)
      }
    }
  }
}
</script>
