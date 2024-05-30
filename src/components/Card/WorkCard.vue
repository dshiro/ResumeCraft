<template>
  <div class="card">
    <div class="work-header mb-1">
      <span class="text-base pl-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-3 inline">
          <path
            fill-rule="evenodd"
            d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
            clip-rule="evenodd" />
        </svg>

        <span class="ml-1">Experience</span>
      </span>
    </div>

    <!-- <hr /> -->

    <div class="work-main-info ml-3 mt-3">
      <div v-for="work in data">
        <hr class="mb-2" />
        <div v-if="work.position">
          <span class="font-bold"> {{ work.position }} </span>
          <span>{{ work.name ? `, ${work.name}` : "" }} </span>
        </div>
        <div
          class="text-xs text-zinc-500"
          v-if="work.startDate || work.endDate">
          <span>
            {{ formatDate(work.startDate) }} - {{ formatDate(work.endDate) }}
          </span>
        </div>

        <div class="text-xs mt-2" v-if="work.summary">
          <span>
            {{ work.summary }}
          </span>
        </div>

        <div
          class="text-xs my-2 ml-4"
          v-if="work.highlights && work.highlights.length > 0">
          <ul class="list-disc">
            <li v-for="highlight in work.highlights">{{ highlight }}</li>
          </ul>
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
import { formatDate } from "@/utils/formatters";
</script>
