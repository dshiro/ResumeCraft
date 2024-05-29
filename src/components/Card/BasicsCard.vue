<template>
  <div class="card">
    <div class="basic-main-info text-center mb-1">
      <img v-if="data.image" :src="data.image" alt="" />
      <div class="text-[1.2rem] font-bold">{{ data.name || "no-name" }}</div>
      <div v-if="data.label" class="text-[0.8rem]">{{ data.label }}</div>
    </div>

    <hr />

    <div class="basic-sub-info ml-3 mt-3">
      <div v-if="data.email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4 inline">
          <path
            d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
          <path
            d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
        </svg>

        <a :href="`mailto:${data.email}`">{{ data.email }}</a>
      </div>

      <div v-if="data.phone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4 inline">
          <path
            d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
          <path
            fill-rule="evenodd"
            d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
            clip-rule="evenodd" />
        </svg>

        <span>{{ data.phone }}</span>
      </div>

      <div v-if="data.url">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4 inline">
          <path
            d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
          <path
            d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
        </svg>

        <a :href="data.url">
          {{ data.url }}
        </a>
      </div>

      <div v-if="data.location">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-4 inline">
          <path
            fill-rule="evenodd"
            d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
            clip-rule="evenodd" />
        </svg>

        <span>
          {{ data.location.city }}
          {{ data.location.city && data.location.countryCode ? ", " : "" }}
          {{ data.location.countryCode }}
        </span>
      </div>

      <div v-if="data.profiles && data.profiles.length > 0">
        <div v-for="profile in data.profiles" class="profiles">
          <span class="font-semibold"
            >{{ profile.network || "Unknown" }}:
          </span>
          <a v-if="profile.url" :href="profile.url">
            {{ profile.username || "Link" }}
          </a>
          <span v-else :href="profile.url">
            {{ profile.username || "N/A" }}
          </span>
        </div>
      </div>

      <div v-if="data.summary" class="mt-4">{{ data.summary }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

onMounted(() => {
  document.title = `${props.data.name} - Resume`;
});
</script>
<style>
.basic-sub-info div:not(.profiles) {
  @apply mb-2;
}

.basic-sub-info svg {
  @apply mr-2;
}
</style>
