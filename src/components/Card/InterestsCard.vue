<template>
  <div class="card">
    <div class="interests-header mb-1">
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
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
        </svg>

        <span class="ml-1">Interests</span>
      </span>
    </div>

    <div class="interests-main-info ml-3 mt-3 mb-1">
      <hr class="mb-3" />
      <div
        v-for="(interest, interestindex) in data"
        :style="getStyle(interestindex)"
        class="text-[0.6rem] inline-flex items-center font-bold leading-sm uppercase px-2 py-1 mr-2 mb-2 rounded-full">
        {{ interest.name }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { colorPairs2 as colorPairs } from "@/utils/colors";
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
