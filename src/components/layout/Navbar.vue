<template>
    <header>
        <div class="flex justify-between items-start p-8 lg:px-12 relative z-20">
            <div class="text-3xl font-bold dark:text-white">
                <img :src="isDarkMode ? logoDark : logoLight" alt="logo picture"
                    class="object-cover rounded-lg h-[200] w-[200px] -mt-12" loading="lazy">
            </div>

            <!-- Mobile Toggle Button -->
            <div class="md:hidden z-30">
                <button class="block focus:outline-none" @click="isMenuOpen = !isMenuOpen">
                    <span v-if="isMenuOpen" class="text-5xl md:text-primary text-white dark:text-white">
                        <Icon icon="material-symbols:close" />
                    </span>
                    <span v-else class="text-5xl md:text-primary text-white dark:text-white">
                        <Icon icon="material-symbols:menu" />
                    </span>
                </button>
            </div>

            <!-- Navbar Link -->
            <nav :class="[
                'fixed inset-0 z-20 flex flex-col items-center justify-center bg-primary md:relative md:flex md:flex-row md:justify-between md:bg-transparent',
                isMenuOpen ? 'flex' : 'hidden'
            ]">
                <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <li v-for="item in Menu" :key="item.name">
                        <a :href="item.href"
                            class="block transition ease-linear font-bold text-white hover:text-secondary md:text-lg md:text-primary lg:text-xl dark:text-white dark:hover:text-secondary"
                            @click="scrollToSection(item.href)">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
                <button @click="toggleDarkMode" class="text-white ml-20 hidden md:block">
                    <!-- Show moon icon if dark mode is off, otherwise show sun icon -->
                    <Icon v-if="!isDarkMode" icon="line-md:moon-filled" class="text-5xl text-primary" />
                    <Icon v-else icon="line-md:sunny-outline" class="text-5xl text-secondary" />
                </button>
            </nav>
        </div>
    </header>
</template>
<script setup>
import { ref } from 'vue';
import imgdark from '@/assets/images/logo.png'
import imglight from '@/assets/images/logon.png'

const logoLight = imglight;
const logoDark = imgdark
const isMenuOpen = ref(false);
const Menu = ref([
    { name: 'Services', href: '#services' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Pourquoi moi', href: '#whyme' },
    // { name: 'Projets', href: '#projects' },
    { name: 'Contacts', href: '#contact' },
]);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

//Reactive property to track dark mode state
const isDarkMode = ref(localStorage.getItem('theme') === 'dark');

const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode.value) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    //Update dark mode state
    isDarkMode.value = !isDarkMode.value;
}
</script>
<style>
.logo-image {
    background-image: url('@/assets/images/logon.png');
}

/* Mode dark */
.dark .logo-image {
    background-image: url('@/assets/images/logo.png');
}
</style>