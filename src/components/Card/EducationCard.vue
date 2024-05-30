<template>
  <div class="card">
    <div class="education-header mb-1">
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
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>

        <span class="ml-1">Education</span>
      </span>
    </div>

    <div class="education-main-info ml-3 mt-3">
      <div v-for="education in data">
        <hr class="mb-2" />

        <div v-if="education.institution">
          <span class="font-bold">
            {{ education.studyType }}
            <span>
              {{ education.studyType && education.area ? " in " : "" }}
            </span>
            {{ education.area }}
          </span>
          <span>
            {{
              education.studyType && education.area && education.institution
                ? ", "
                : ""
            }}
          </span>
          <span> {{ education.institution }} </span>
          <span v-if="education.score" class="text-[0.6rem]">
            ({{ education.score }})
          </span>
        </div>

        <div
          class="text-xs text-zinc-500"
          v-if="education.startDate || education.endDate">
          <span>
            {{ formatDate(education.startDate) }} -
            {{ formatDate(education.endDate) }}
          </span>
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
