<template>
    <section class="mt-32" id="contact">
        <SectionHeader title="Contactez Moi" />
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form @submit.prevent="sendEmail" class="space-y-8">
                <div v-for="(item, index) in input" :key="index">
                    <Input 
                        :id="item.id" 
                        :label="item.label" 
                        :type="item.type" 
                        :placeholder="item.placeholder"
                        :rows="item.rows"
                        v-model="formData[item.id]"
                    />
                </div>
                <div class="flex justify-between">
                    <Button :label="isLoading ? 'Envoi en cours...' : 'Envoyer'" :disabled="isLoading" />

                    <!-- <div class="mt-2 flex justify-center space-x-3 md:space-x-8">
                        <a href="https://twitter.com/votre_compte" target="_blank" class="text-gray-600 hover:text-blue-500">
                            <Icon icon="fa-brands:twitter" style="font-size:2rem" />
                        </a>
                        <a href="https://linkedin.com/in/votre_profil" target="_blank" class="text-gray-600 hover:text-blue-700">
                            <Icon icon="fa-brands:linkedin" style="font-size:2rem" />
                        </a>
                        <a href="https://github.com/votre_username" target="_blank" class="text-gray-600 hover:text-gray-500">
                            <Icon icon="fa-brands:github" style="font-size:2rem" />
                        </a>
                        <a href="https://instagram.com/votre_compte" target="_blank" class="text-gray-600 hover:text-pink-500">
                            <Icon icon="fa-brands:instagram" style="font-size:2rem" />
                        </a>
                    </div> -->
                </div>

                <!-- Message de confirmation ou d'erreur -->
                <div v-if="statusMessage" :class="statusClass" class="p-4 rounded-lg text-center">
                    {{ statusMessage }}
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/UI/SectionHeader.vue';
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { ref, reactive } from 'vue';
import emailjs from '@emailjs/browser';



// Données du formulaire
const formData = reactive({
    email: '',
    subject: '',
    message: ''
});

const isLoading = ref(false);
const statusMessage = ref('');
const statusClass = ref('');

// ⚠️ IMPORTANT: Remplace ces identifiants par les tiens (récupérés sur EmailJS)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_SERVICE_ID;      // ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;    // ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;      // ex: 'user_xxxxxx'

const input = ref([
    { id: 'email', label: 'Votre email', type: 'email', placeholder: 'email@exemple.com' },
    { id: 'subject', label: 'Titre', type: 'text', placeholder: 'Le titre de votre message' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'je vous écoute...', rows: 6 },
]);

// Fonction d'envoi d'email
const sendEmail = async () => {
    // Validation basique
    if (!formData.email || !formData.subject || !formData.message) {
        statusMessage.value = 'Veuillez remplir tous les champs';
        statusClass.value = 'bg-red-100 text-red-700';
        setTimeout(() => statusMessage.value = '', 3000);
        return;
    }

    isLoading.value = true;
    statusMessage.value = '';

    try {
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'zamblejordan0779@gmail.com' // Ton adresse Gmail
            },
            EMAILJS_PUBLIC_KEY
        );

        console.log('Email envoyé avec succès!', response);
        statusMessage.value = '✅ Message envoyé avec succès ! Je vous répondrai rapidement.';
        statusClass.value = 'bg-green-100 text-green-700';
        
        // Réinitialiser le formulaire
        formData.email = '';
        formData.subject = '';
        formData.message = '';
        
        setTimeout(() => statusMessage.value = '', 5000);
    } catch (error) {
        console.error('Erreur détaillée:', error);
        statusMessage.value = '❌ Erreur lors de l\'envoi. Veuillez réessayer.';
        statusClass.value = 'bg-red-100 text-red-700';
        setTimeout(() => statusMessage.value = '', 5000);
    } finally {
        isLoading.value = false;
    }
};
</script>