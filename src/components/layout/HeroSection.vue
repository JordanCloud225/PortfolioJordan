<template>
    <section data-aos="zoom-in" class="flex justify-center items-center dark:text-white min-h-screen mt-20 lg:mt-0">
        <header class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
        </header>
        <header class="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#00c6cc] via-[#785ae4] to-secondary opacity-30 dark:opacity-20 blur-[100px] left-10 top-0 hidden md:block">
        </header>
        <main class="absolute grid lg:grid-cols-2 grid-cols-1 items-center p-2 lg:p-8">
            <header class="text-center lg:text-left" >
                <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold" >
                    Salut Mr/Mme 
                </h1>
                 <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold" >
                     Je suis <span class="text-secondary stroke-text text-stroke-primary dark:text-stroke-secondary">Zamblé Jordan</span>
                </h1>
                <p class="text-lg max-w-xl mx-auto lg:mx-0 font-semibold">
                    Un jeune Ivoirien passioné par tout ce qui touche à l'informatique, qui adore apprendre, apporté des solutions à des problèmes et par dessus tout, relévé des défis. j'ai des compétences dans divers domaines mais ici, je ne vous présenterai que mes compétences dans ma passion qui est L'INFORMATIQUE.
                </p>
                <div class="mt-6 flex justify-center lg:justify-start">
                    <Button label="Voir CV" @click="openCV" />
                    <!-- <a href="" class="font-semibold text-lg w-[10rem] h-[55px] dark:text-secondary rounded-full ml-2 border-2 dark:border-secondary hover:scale-105 bg-white dark:bg-transparent flex justify-center items-center text-primary border-primary">
                        <Icon icon="line-md:download-loop" class="text-3xl" />
                        <span class="ml-1"> Resume </span>
                    </a> -->
                </div>
            </header>
            <aside class="container flex justify-center lg:justify-end items-center flex-wrap mt-20 lg:mt-0">
            <figure class="card relative m-[30px]">
                <!-- Version simplifiée avec les classes Tailwind standard -->
                <div class="relative w-[280px] h-[350px] md:w-[420px] md:h-[420px] 
                            before:absolute before:inset-0 before:-z-10 
                            before:w-[300px] before:h-[300px] md:before:w-[450px] md:before:h-[450px] 
                            before:border-[25px] before:border-primary 
                            before:shadow-[7px_7px_21px_rgba(0,0,0,0.3),_-7px_-7px_21px_rgba(255,255,255,0.3)]
                            before:rounded-lg">
                    <div class="relative w-full h-full transform translate-x-2.5 translate-y-2.5">
                        <img 
                            src="@/assets/images/hero.png" 
                            alt="Hero picture" 
                            class="w-full h-full object-cover rounded-lg"
                            loading="lazy"
                        >
                    </div>
                </div>
            </figure>
        </aside>
        </main>
        <!-- SVG Filter (optionnel) -->
        <svg class="hidden">
            <filter id="wavy">
                <feTurbulence 
                    x="0" 
                    y="0" 
                    base-frequency="0.2" 
                    num-octaves="5" 
                    seed="1"
                ></feTurbulence>
                <feDisplacementMap 
                    in="SourceGraphic" 
                    scale="30"
                />
            </filter>
        </svg>
    </section>
</template>
<script setup>
import Button from '@/components/UI/Button.vue';

const openCV = () => {
  // Méthode 1 : Ouverture dans un nouvel onglet (Recommandé)
  // Le fichier doit être dans le dossier /public de ton projet Vue
  window.open('/CvJordan.pdf', '_blank');
  
  // Méthode 2 (Alternative) : Affichage direct dans la page actuelle
  // window.location.href = '/mon-cv.pdf';
};
</script>

<style scoped>
.container .card:before {
    content: "";
    position:absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background: transparent;
}

.container .card:nth-of-type(1)::before {
    filter : url(#wavy1);
}
</style>
