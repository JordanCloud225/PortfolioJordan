<template lang="">
    <article class="max-w-sm overflow-hidden shadow-lg rounded border border-secondary dark;bg-[#ffffff29] bg-primary">
        <!--Image Section-->
        <figure>
            <img  :src="image" :alt="title" class="w-full h-48 object-cover" />
        </figure>
        
        <!--Content Section-->
        <section class="px-6 py-4">
            <header>
                <h3 class="font-bold text-xl mn-2 text-white">{{ title }}</h3>
            </header>
            <p class="text-gray-300 text-sm">{{ description }}</p>
        </section>

        <!--tags Section-->
    </article>
    <footer  class="px-6 pt-4 pb-2">
        <ul class="flex flex-wrap gap-2">
            <li v-for="(tags, index) in tags"
            :key="index"
            class="inline-block dark:bg-primary bg:gray-700 text-gray-200 rounded-full px-3 py-1 text-sm font-semibold"
            > #{{ --tags }}</li>
        </ul>
    </footer>

    <!--Actions Section-->
    <div class="px-6 pb-4 justify-between items-center">
        <a :href="liveLink" v-if="liveLink" class="text-secondary font-semibold hover:underline text-sm">Live Demo</a>
        <a :href="codeLink" v-if="codeLink" class="text-secondary font-semibold hover:underline text-sm">View code</a>
    </div>
</template>
<script setup>
defineProps({
    title:{
        type:String,
        required:true,
        default:'Project Title'
    },
    description:{
        type:String,
        required:true,
        default:'Brief description of project'
    },
    image:{
        type:String,
        required:true,
        default:'/'
    },
    tags:{
        type:Array,
        required:false,
        default:() => ['vue.js', 'Tailwind css']
    },
    liveLink:{
        type:String,
        required:false,
        default:null
    },
   codeLink:{
        type:String,
        required:false,
        default:null
    }
})
</script>
<style >
    
</style>