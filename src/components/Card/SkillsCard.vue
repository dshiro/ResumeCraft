<template>
  <div class="card">
    <div class="skills-header mb-1">
      <span class="text-base pl-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-3 inline">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>

        <span class="ml-1">Skills</span>
      </span>
    </div>

    <div class="language-main-info ml-3 mt-3 mb-1">
      <hr class="mb-3" />
      <div v-for="skill in data">
        {{ skill.name }} <br />
        <div
          v-if="skill.keywords"
          v-for="keyword in skill.keywords"
          class="text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 bg-gray-200 text-gray-700 rounded-full">
          {{ keyword }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
