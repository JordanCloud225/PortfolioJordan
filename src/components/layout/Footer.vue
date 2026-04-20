<template>
    <footer class="z-10 text-white border-t-2 border-t-white bg-primary mt-20">
        <div class="container pb[-10px] flex justify-between">
            <div class="text-3xl font-bold flex">
                    <img 
                            src="@/assets/images/logo.png" 
                            alt="logo picture" 
                            class="object-cover rounded-lg h-[200] w-[200px] -mt-12 -pt-8"
                            loading="lazy"
                        >
            </div>
            
            <div class="flex ml-2">Tout droit réservé</div>
        </div>
    </footer>
</template>
<script>
import imgdark from '@/assets/images/logo.png'
import imglight from '@/assets/images/logon.png'

const logoDark = imgdark;
const logoLight = imglight;
</script>
