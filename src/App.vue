<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref, computed, onMounted } from "vue";

const isAuthenticating = ref(true);
const password = ref("");
const panes = computed(() => {
  let tpanes = [];
  for (let i = 1; i <= 9; i++) {
    tpanes.push(i);
  }
  tpanes.push("DEL");
  tpanes.push(0);
  tpanes.push("GO");

  return tpanes;
});

const loadTheme = async () => {};

const clickPanel = (pane: string | number) => {
  if (password.value == "INVALID") {
    password.value = "";
  }

  if (pane == "DEL" || pane == "GO") {
    switch (pane) {
      case "DEL":
        password.value =
          password.value.length <= 0
            ? password.value
            : password.value.slice(0, -1);
        break;

      case "GO":
        validatePassword(password.value, false);
        break;
    }

    return;
  }
  password.value += password.value.length < 12 ? pane : "";
};

const validatePassword = (pw: string, initial: boolean) => {
  if (pw == "883445") {
    localStorage.setItem("rsmpw", pw);
    isAuthenticating.value = false;
    password.value = "";
    return;
  }
  password.value = !initial ? "INVALID" : password.value;
};

onMounted(() => {
  loadTheme();

  const storedPw = localStorage.getItem("rsmpw") as string;
  validatePassword(storedPw, true);
});
</script>

<template>
  <div class="container mx-auto px-2 flex justify-center h-screen bg-zinc-900">
    <div class="compatible-container">
      <div v-if="isAuthenticating" class="auth-container">
        <div
          class="mt-5 w-0 font-mono overflow-hidden whitespace-nowrap text-[1.6rem] border-r-[.10em] text-white typing-text">
          Please enter password
        </div>
        <!-- <div class="w-0 font-mono overflow-hidden whitespace-nowrap border-r-[.10em] typing-text-desc">(your company new reg num)</div> -->

        <div
          class="invisible overflow-hidden whitespace-nowrap font-mono text-white password-text">
          >
          <span :class="password == 'INVALID' ? 'text-red-500' : ''">
            {{ password }}
          </span>
        </div>

        <div
          class="invisible grid grid-cols-3 mt-5 font-mono text-center text-[1.6rem] border rounded password-panel">
          <div
            v-for="pane in panes"
            class="p-5 border cursor-pointer bg-zinc-800 text-white hover:bg-gray-200 hover:text-black select-none"
            @click="clickPanel(pane)">
            {{ pane }}
          </div>
        </div>
      </div>

      <div v-else class="resume-container">
        <RouterView />
      </div>
    </div>

    <div
      class="incompatible-container hidden text-center self-center font-mono text-[2rem]">
      Screen size must more than or equal to 320px to view this content
    </div>
  </div>
</template>

<style>
.typing-text {
  animation: typing 1s steps(20, end) forwards;
}

.password-text {
  animation: appear 0s forwards 1.1s;
}

.password-panel {
  animation: appear 1s forwards 1.2s;
}

@keyframes typing {
  to {
    width: 100%;
    border-color: transparent;
  }
}

@keyframes appear {
  to {
    visibility: visible;
  }
}

/*
.typing-text-desc {
  animation: 
    typing 1s steps(20, end) forwards 1s,
    blinking 1s infinite 1s;
}
*/

/*
@keyframes blinking {
  0%, 50% { border-color: transparent; }
  51%, 100% { border-color: black; }
}
*/

@media screen and (max-width: 320px) {
  .incompatible-container {
    display: block;
  }
  .compatible-container {
    display: none;
  }
}
</style>
