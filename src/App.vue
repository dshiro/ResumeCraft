<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";

import ThemeToggle from "@/components/ThemeToggle.vue";
import PasswordPane from "@/components/PasswordPane.vue";
import passwordData from "@/assets/password.json";

const isAuthenticating = ref(true);
</script>

<template>
  <div class="fixed right-4 bottom-1">
    <ThemeToggle />
  </div>

  <div
    v-if="isAuthenticating"
    class="auth-container flex h-screen justify-center">
    <div class="auth-wrapper">
      <PasswordPane
        :passwords="passwordData.passwords"
        @validated="isAuthenticating = false" />
    </div>
  </div>

  <div v-else class="resume-container">
    <RouterView />
  </div>

  <div
    class="incompatible-container hidden h-screen items-center text-center text-[2rem] px-2">
    Screen size must more than 320px to view this content
  </div>
</template>

<style>
@media screen and (max-width: 319px) {
  .incompatible-container {
    display: flex;
  }
  .resume-container,
  .auth-container {
    display: none;
  }
}
</style>
