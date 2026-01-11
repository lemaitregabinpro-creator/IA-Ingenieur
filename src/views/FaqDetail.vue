<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 font-sans">
    <NavBar />
    
    <div v-if="faq" class="max-w-4xl mx-auto px-6 py-20">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm text-slate-400">
        <router-link to="/" class="hover:text-cyan-400 transition-colors">Accueil</router-link>
        <span class="mx-2">/</span>
        <router-link to="/#faq" class="hover:text-cyan-400 transition-colors">FAQ</router-link>
        <span class="mx-2">/</span>
        <span class="text-slate-300">{{ faq.question }}</span>
      </nav>

      <!-- Question principale -->
      <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {{ faq.question }}
      </h1>

      <!-- Réponse courte -->
      <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 mb-8">
        <p class="text-lg text-slate-300 leading-relaxed">
          {{ faq.shortAnswer }}
        </p>
      </div>

      <!-- Réponse détaillée -->
      <div class="prose prose-invert max-w-none mb-12">
        <div 
          class="text-slate-300 leading-relaxed space-y-4"
          v-html="faq.detailedAnswer"
        ></div>
      </div>

      <!-- Navigation entre questions -->
      <div class="border-t border-slate-800 pt-8 mt-12">
        <h3 class="text-xl font-bold text-white mb-4">Autres questions fréquentes</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <router-link
            v-for="otherFaq in otherFaqs"
            :key="otherFaq.id"
            :to="`/faq/${otherFaq.slug}`"
            class="block p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition-colors group"
          >
            <h4 class="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">
              {{ otherFaq.question }}
            </h4>
            <p class="text-sm text-slate-400 line-clamp-2">
              {{ otherFaq.shortAnswer }}
            </p>
          </router-link>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <p class="text-slate-400 mb-6">Une question non résolue ?</p>
        <CallButton @click="openCal" class="text-lg px-8 py-4">
          <div class="flex items-center gap-3">
            <Calendar class="w-5 h-5" />
            <span>Réserver un appel découverte</span>
          </div>
        </CallButton>
      </div>
    </div>

    <div v-else class="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 class="text-4xl font-bold text-white mb-4">Question non trouvée</h1>
      <p class="text-slate-400 mb-8">La question que vous recherchez n'existe pas.</p>
      <router-link 
        to="/#faq" 
        class="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg font-bold hover:bg-cyan-400 transition-colors"
      >
        <ArrowLeft class="w-5 h-5" />
        Retour à la FAQ
      </router-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { faqData } from '@/data/faqData'
import NavBar from '@/components/sections/NavBar.vue'
import Footer from '@/components/sections/Footer.vue'
import CallButton from '@/components/ui/CallButton.vue'
import { Calendar, ArrowLeft } from 'lucide-vue-next'

const route = useRoute()

const faq = computed(() => {
  return faqData.find(f => f.slug === route.params.slug)
})

const otherFaqs = computed(() => {
  return faqData.filter(f => f.id !== faq.value?.id).slice(0, 4)
})

const openCal = () => {
  window.open('https://app.cal.eu/smartunityia/30min', '_blank')
}

// SEO Meta tags
const updateMetaTags = () => {
  if (faq.value) {
    document.title = faq.value.seoTitle || faq.value.question
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', faq.value.seoDescription || faq.value.shortAnswer)
  }
}

watch(() => faq.value, updateMetaTags, { immediate: true })
onMounted(updateMetaTags)
</script>

<style scoped>
.prose :deep(h3) {
  @apply text-xl font-bold text-white mb-3 mt-6;
}

.prose :deep(ul) {
  @apply list-disc list-inside space-y-2 mb-4 text-slate-300;
}

.prose :deep(strong) {
  @apply text-white font-semibold;
}

.prose :deep(p) {
  @apply mb-4;
}
</style>
