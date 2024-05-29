import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: null as string | null,
    }),
    actions: {
        setTheme(theme: string) {
            this.theme = theme;
            localStorage.theme = theme;
            if (theme == 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },

        initializeTheme() {
            if ('theme' in localStorage) {
                this.setTheme(localStorage.theme);
            } else {
                this.setTheme(this.PrefersDark ? 'dark' : 'light');
            }
        },

        toggleTheme() {
            if ('theme' in localStorage) {
                this.setTheme(localStorage.theme == 'dark' ? 'light' : 'dark');
            } else {
                this.setTheme(this.PrefersDark ? 'light' : 'dark');
            }
        },
    },
    getters: {
        PrefersDark() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        },
    }
});