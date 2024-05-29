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

  <div class="flex justify-center h-screen">
    <div class="compatible-container">
      <div v-if="isAuthenticating" class="auth-container px-2">
        <PasswordPane
          :passwords="passwordData.passwords"
          @validated="isAuthenticating = false" />
      </div>

      <div v-else class="resume-container">
        <RouterView />
      </div>
    </div>

    <div
      class="incompatible-container hidden text-center self-center text-[2rem] px-2">
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
