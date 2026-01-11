<template>
  <section id="faq" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Questions Fréquentes</h2>
    <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
      Découvrez nos réponses détaillées sur les solutions IA souveraines, Local First, et la protection des données sensibles pour finance, santé et juridique.
    </p>
    <div class="space-y-2">
      <div
        v-for="faq in faqData"
        :key="faq.id"
        class="bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 transition-colors"
      >
        <router-link
          :to="`/faq/${faq.slug}`"
          class="block p-6 group"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {{ faq.question }}
              </h3>
              <p class="text-slate-400 text-sm line-clamp-2">
                {{ faq.shortAnswer }}
              </p>
            </div>
            <ArrowRight class="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors shrink-0 mt-1" />
          </div>
        </router-link>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <p class="text-slate-400 mb-6">Une question non résolue ?</p>
      <CallButton @click="openCal" class="text-lg px-8 py-4">
        <div class="flex items-center gap-3">
          <Calendar class="w-5 h-5" />
          <span>Réserver un appel découverte</span>
        </div>
      </CallButton>
    </div>
  </section>
</template>

<script setup>
import { faqData } from '@/data/faqData'
import CallButton from '@/components/ui/CallButton.vue'
import { ArrowRight, Calendar } from 'lucide-vue-next'

const openCal = () => {
  window.open('https://app.cal.eu/smartunityia/30min', '_blank')
}
</script>
