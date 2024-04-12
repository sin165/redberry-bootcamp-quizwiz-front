<template>
  <div>
    <button
      class="border px-3.5 py-2 rounded-0.5xl text-custom-gray-500 border-custom-gray-500-light flex items-center gap-2"
    >
      <IconSettingsSlider />
      Filter
    </button>
  </div>
</template>

<script>
import IconSettingsSlider from '@/components/icons/IconSettingsSlider.vue'

export default {
  components: {
    IconSettingsSlider
  }
}
</script>
