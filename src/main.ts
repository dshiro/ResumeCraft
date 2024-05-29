import '@/assets/main.css'
import '@fontsource/fira-mono'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme';

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const themeStore = useThemeStore();
themeStore.initializeTheme();