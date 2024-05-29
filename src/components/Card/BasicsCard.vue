<template>
  <div class="card">
    <div class="basic-main-info text-center mb-1">
      <img v-if="data.image" :src="data.image" alt="" />
      <span class="text-[1.2rem]"> {{ data.name || "no-name" }}</span>
      <br />
      <span v-if="data.label" class="text-[0.8rem]"> {{ data.label }}</span>
    </div>

    <hr />

    <div class="basic-sub-info ml-3 mt-3">
      <div v-if="data.email">{{ data.email }}</div>
      <div v-if="data.phone">{{ data.phone }}</div>
      <div v-if="data.url">{{ data.url }}</div>
      <div v-if="data.location">
        {{ data.location.city }}, {{ data.location.countryCode }}
      </div>
      <div v-if="data.profiles && data.profiles.length > 0">
        <div v-for="profile in data.profiles" class="profiles">
          {{ profile.network || "Unknown" }}:
          <a v-if="profile.url" :href="profile.url">
            {{ profile.username || "Link" }}
          </a>
          <span v-else :href="profile.url">
            {{ profile.username || "N/A" }}
          </span>
        </div>
      </div>
      <div v-if="data.summary">{{ data.summary }}</div>
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
<style>
.basic-sub-info div:not(.profiles) {
  @apply mb-2;
}
</style>
