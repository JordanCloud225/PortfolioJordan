<template>
    <section id="services" class="relative text-white mt-32">
        <SectionHeader title="Mes Services" />
        <div
            class="mt-20 py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <article 
    v-for="element in services" 
    :key="element.id"
    class="px-3 mb-6"
>
    <div 
        class="relative bg-primary dark:bg-[#ffffff29] border border-secondary rounded-[30px] text-center overflow-hidden"
        data-aos="fade-up" 
        :data-aos-delay="element.id * 100"
    >
        <!-- Section icône avec effet de cercle -->
        <div class="relative flex justify-center pt-6">
            <div class="relative -mt-8 bg-primary rounded-full p-5 shadow-lg">
                <!-- Cercle décoratif -->
                <span class="absolute inset-0 m-auto h-[60px] w-[60px] border border-secondary rounded-full"></span>
                <!-- Icône -->
                <img 
                    :src="element.icon" 
                    :alt="element.name"
                    class="relative h-[35px] w-[35px] z-10"
                />
            </div>
        </div>

        <!-- Contenu texte -->
        <div class="px-6 pb-8 pt-2">
            <h3 class="uppercase font-semibold text-secondary text-base mb-2">
                {{ element.name }}
            </h3>
            <p class="text-sm leading-5 text-white tracking-wide">
                {{ element.description }}
            </p>
        </div>
    </div>
</article>
        </div>
    </section>
</template>
<script setup>
import { ref } from "vue";
import SectionHeader from '@/components/UI/SectionHeader.vue';

const services=ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/daed1a/google-code.png',
        name: "Développement d'application web",
        description: "Developpe aussi bien le backend que le front-end de votre application, le tout sécurisé et optimale a votre demande mais surtout à vos besoins pour résoudre votre problème."
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/wired/100/daed1a/social-network.png',
        name: 'Gestion de page social',
        description: "Vendre, faire connaitre votre entreprise ou produit sur les reseaux sociaux comme il se doit pour vous donner de la visibilté et de nombreux clients"
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/sf-black-filled/100/daed1a/image.png',
        name: 'Montage photo',
        description: "Création d'affiche ou modification d'image pour mieux vendre votre produit, votre entreprise, ou autres..."
    },
    {
        id: 4,
        icon: 'https://img.icons8.com/external-vectorslab-glyph-vectorslab/100/daed1a/external-Technical-Writing-mobile-app-development-vectorslab-glyph-vectorslab.png',
        name: 'Technicien',
        description: "Maintenance de vos appareils informatiques et assistance aux câblages reseaux et téléphoniques de votre local"
    },
    {
        id: 5,
        icon: 'https://img.icons8.com/ios-filled/100/daed1a/document-1.png',
        name: 'Rédacteur',
        description: "Rédaction de vos documents administratifs rapidement et professionnellement"
    },
    {
        id: 6,
        icon: 'https://img.icons8.com/external-parzival-1997-detailed-outline-parzival-1997/100/daed1a/external-commerce-digital-globalization-parzival-1997-detailed-outline-parzival-1997.png',
        name: 'SUperviseur Commercial',
        description: "Gestion de votre boutique Jumia, que ce soit pour le stock, la distribution et meme les livraisons"
    },
])
</script>
