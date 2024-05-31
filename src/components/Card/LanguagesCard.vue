<template>
  <div class="card">
    <div class="language-header mb-1">
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
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>

        <span class="ml-1">Language</span>
      </span>
    </div>

    <div class="language-main-info ml-3 mt-3 mb-1">
      <hr class="mb-3" />
      <div
        v-for="(language, langindex) in data"
        :style="getStyle(langindex)"
        class="text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 rounded-full">
        {{ language.language }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { colorPairs } from "@/utils/colors";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const getStyle = (index: any) => {
  const colorPair = colorPairs[index % colorPairs.length];
  return {
    backgroundColor: colorPair.background,
    color: colorPair.text,
  };
};
</script>
