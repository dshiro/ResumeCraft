<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";

import PasswordPane from '@/components/PasswordPane.vue'
import resumeData from '@/assets/resume.json';
import passwordData from '@/assets/password.json';

const data = resumeData;
const isAuthenticating = ref(true);
</script>

<template>
  <div class="container mx-auto px-2 flex justify-center h-screen">
    <div class="compatible-container">
      <div v-if="isAuthenticating" class="auth-container">
        <PasswordPane :passwords="passwordData.passwords" @validated="isAuthenticating = false" />
      </div>

      <div v-else class="resume-container">
        <RouterView />
      </div>
    </div>

    <div
      class="incompatible-container hidden text-center self-center text-[2rem]">
      Screen size must more than 320px to view this content
    </div>
  </div>
</template>

<style>
@media screen and (max-width: 319px) {
  .incompatible-container {
    display: block;
  }
  .compatible-container {
    display: none;
  }
}
</style>