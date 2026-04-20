<template>
    <section id="projects" class="relative w-4/5 px-48 mx-auto" >
        <SectionHeader  title="Mes Projets"/>
        <!--Custom Navigation Buttons-->
        <button class="swiper-prev absolute top-2/3 left-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-left" class="font-bold text-3xl" />
        </button>
        <button class="swiper-next absolute top-2/3 right-4 transform -translate-y-1/2 z-10 text-white dark:bg-secondary bg-primary p-4 rounded-full">
            <Icon icon="line-md:arrow-right" class="font-bold text-3xl" />
        </button>

        <!--Swiper Component-->
        <swiper 
        :effect="'coverflow'"
        :slides-per-view="2"
        :slides-per-group="1"
        :loop="true"
        grabCursor
        centeredSlides
        :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }"
        :navigation="navigationOptions"
        pagination
        :modules="[EffectCoverflow, Navigation]"
        class="max-w-full mt-32" > 
            <swiper-slide class="max-w-[300px]" v-for="(project,index) in projects" :key="index">
                <ProjectCard 
                :title="project.title" 
                :description="project.description"
                :image="getImageUrl(project.image)"
                :tags="project.tags" 
                :liveLink="project.liveLink"
                :codeLink="project.codeLink"/>
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import ProjectCard from '@/components/layout/ProjectCard.vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { ref } from "vue";
import imgschool from '@/assets/images/webecole.png'

function getImageUrl(name) {
  return new URL(`../assets/images${name}`, import.meta.url).href;
}

//Define navigation options
const navigationOptions={
    prevEl:'.swiper-prev',
    nextEl:'.swiper-next'
};

const projects=ref([
    {
        title:'APK Web ecole',
        description:"Une application web de gestion d'école qui prend en compte plusieurs paramètres scolaires...",
        image:imgschool,
        tags:['HTML','CSS','Javascript','PHP','Twig'],
        liveLink:'/',
        codeLink:""
    },
    {
        title:'APK Web Pont Bascule',
        description:"Une application web de gestion de pont bascule prévu pour delivré des certificat de validation apres avoir entrée les donnée des différents contrôles...",
        image:'/img2.jpg',
        tags:['HTML','CSS','Javascript','PHP'],
        liveLink:'/',
        codeLink:""
    },
    {
        title:'Portfolio wbsite',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, blanditiis',
        image:'/img3.jpg',
        tags:['HTML','CSS','Javascript'],
        liveLink:'/',
        codeLink:""
    },


    ])
</script>

<style>
.swiper-button-prev,
.swiper-button-next{
    cursor: pointer;
}
.swiper-slide{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>