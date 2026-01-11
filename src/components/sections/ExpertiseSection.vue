<template>
  <section id="expertise" class="py-12 md:py-24 px-6 bg-slate-900/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 break-words">Agents IA Sécurisés & Solutions Local First</h2>
        <p class="text-slate-400 mt-2 break-words">IA sécurisée pour finance, santé et juridique. Protection des données sensibles garantie.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <FadeInSection delay="0ms">
          <div class="group relative p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl h-full transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Lock class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3 break-words">Sécurité & Local First</h3>
            <p class="text-slate-400 leading-relaxed break-words">
              Zéro fuite de données. Soit l'IA tourne 100% sur votre Mac (<strong class="text-white">Mistral</strong>), soit via des <strong class="text-white">API Françaises souveraines</strong>. Confidentialité totale pour la <strong class="text-white">finance</strong> et la <strong class="text-white">santé</strong>.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="200ms">
          <div class="group relative p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl h-full transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Database class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3 break-words">Souveraineté des Données</h3>
            <p class="text-slate-400 leading-relaxed break-words">
              Vous êtes propriétaire du <strong class="text-white">code</strong>, des <strong class="text-white">modèles</strong> et de la <strong class="text-white">data</strong>. Finis les abonnements à vie : vous capitalisez sur votre propre actif technologique.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection delay="400ms">
          <div class="group relative p-6 md:p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl h-full transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors duration-300">
              <Zap class="text-cyan-400 w-6 h-6" />
            </div>
            <h3 class="text-xl font-bold text-white mb-3 break-words">Performance & Green IT</h3>
            <p class="text-slate-400 leading-relaxed break-words">
              L'IA locale consomme <strong class="text-white">100x moins d'énergie</strong> qu'une requête Cloud. Une solution <strong class="text-white">éco-responsable</strong> qui allie puissance de calcul et respect de votre <strong class="text-white">bilan RSE</strong>.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Lock, Database, Zap } from 'lucide-vue-next'
import FadeInSection from '@/components/ui/FadeInSection.vue'
</script>
