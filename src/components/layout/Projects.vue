<template>
    <section id="projects" class="relative w-4/5 px-48 mx-auto" >
        <SectionHeader  title="Mes Projets"/><br><br>
        <!--Custom Navigation Buttons-->

<div class="contenant">
        <!--Swiper Component-->
        <swiper :effect="'cube'" :grab-cursor="true" :cube-effect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }" :pagination="{
            clickable: true,
          }" :modules="modules" class="mySwiper">
          <swiper-slide v-for="(project, index) in projects" :key="index">
            <div class="cube-slide">
              <div class="cube-face cube-front">
                <img :src="project.image" :alt="project.title" class="project-image" />
                <div class="project-content">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tags">
                    <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                      {{ tag }}
                    </span>
                  </div>
                  <a :href="project.liveLink" class="project-button" target="_blank" rel="noopener noreferrer">
                    Voir le projet →
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        </div>
    </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Pagination } from 'swiper/modules';
import SectionHeader from '@/components/UI/SectionHeader.vue';
import ProjectCard from '@/components/layout/ProjectCard.vue';
import imgschool from '@/assets/images/ecole.jpg';
import imgpb from '@/assets/images/pb.jpg';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { ref } from "vue";


const projects = [
  {
    title: "Application Web de gestion d'école",
    description: "Une application web de gestion d'école qui prend en compte plusieurs paramètres scolaires...",
    image: imgschool,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony'],
    liveLink: '/',
    codeLink: ''
  },
  {
    title: 'Application Web de gestion de pont bascule',
    description: "Une application web de gestion de pont bascule pour délivrer des certificats de validation...",
    image: imgpb,
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Symfony'],
    liveLink: '/',
    codeLink: ''
  },
  {
    title: 'Réservé',
    description: 'Réservé pour le prochain projet',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
    tags: ['...'],
    liveLink: '/',
    codeLink: ''
  },
  {
    title: 'Réservé',
    description: 'Réservé pour le prochain projet',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=600&fit=crop',
    tags: ['...'],
    liveLink: '/',
    codeLink: ''
  }
];

const modules = [EffectCube, Pagination];
</script>

<style scoped>
.contenant{
  display: flex;
  justify-content: center;
}
.swiper-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  background: transparent;
  width: 100%;           /* ← Ajoutez ceci */
  overflow: hidden;      /* ← Ajoutez ceci */
  padding: 0 20px;       /* ← Ajoutez des marges internes */
}

.mySwiper {
  width: clamp(300px, 500px, 700px);
  height: clamp(300px, 500px, 700px);
  aspect-ratio: 1 / 1; /* Garde une forme carrée */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .mySwiper {
    max-width: 350px;   /* Plus petit sur mobile */
  }
}

.mySwiper :deep(.swiper-slide) {
  width: 100%;
  height: 100%;
}

.cube-slide {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.95), rgba(168, 85, 247, 0.95));
  border-radius: 12px;
  overflow: hidden;
}

.cube-face {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  box-sizing: border-box;
}

.project-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 20px;
  filter: brightness(0.9) contrast(1.1);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.cube-slide:hover .project-image {
  filter: brightness(1.05) contrast(1.15);
  transform: scale(1.05);
}

.project-content {
  text-align: center;
  color: white;
}

.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.project-description {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 16px;
  opacity: 0.9;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: 20px;
}

.tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.project-button {
  display: inline-block;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #1f2937;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
}

.project-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(251, 191, 36, 0.5);
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  background: #fbbf24;
}
</style>