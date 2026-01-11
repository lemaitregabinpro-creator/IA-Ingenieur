<template>
  <section id="pricing" class="py-12 md:py-24 px-6 bg-slate-900/30 border-y border-slate-800/50 relative">
    <TerminalBackground />
    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 break-words">Solutions IA Souveraines & Agents IA Autonomes</h2>
        <p class="text-slate-400 break-words">IA sécurisée Local First pour finance, santé, juridique. Chaque Mac Mini configuré = 100€ de don à la santé animale.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
        <PricingCard
          title="Pack Essentiel"
          subtitle="Indépendants & Administratif"
          price="2 490€"
          delay="0ms"
          disclaimer="*Matériel inclus. Acompte de 50% à la commande."
          :features="[
            'Mac Mini M4 (16 Go RAM / 256 Go) inclus',
            'IA Locale (Mistral 7B / Llama 3)',
            'Automation Emails & Synthèse doc',
            'Don de 100€ à la cause animale inclus',
            'Installation Clé en main & Formation (1h)'
          ]"
          button-text="Commander"
          :cta="openCal"
        />
        <PricingCard
          title="Pack Pro"
          subtitle="Développeurs & Experts"
          price="5 490€"
          :recommended="true"
          delay="200ms"
          disclaimer="*Matériel inclus. Acompte de 50% à la commande."
          :features="[
            'Mac Mini M4 Pro (48 Go RAM) inclus',
            'IA Avancée (Modèles 32B+ & Coding)',
            'RAG sur Base de données massive',
            'Contexte Long (Analyse livres/code)',
            'Don de 100€ à la cause animale inclus',
            'Support Prioritaire & Maintenance (3 mois)'
          ]"
          button-text="Commander"
          :cta="openCal"
        />
        <PricingCard
          title="Infrastructure Enterprise"
          subtitle="Cluster GPU & Multi-Agents"
          price="Sur devis"
          delay="400ms"
          :features="[
            'Architecture complexe & Agents',
            'Maintenance long terme',
            'SLA & Support prioritaire',
            'Formation des équipes techniques',
            'Audit de conformité continu'
          ]"
          button-text="Nous contacter"
          :cta="openCal"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TerminalBackground from '@/components/ui/TerminalBackground.vue'
import PricingCard from './PricingCard.vue'

const openCal = () => {
  window.open('https://app.cal.eu/smartunityia/30min', '_blank')
}
</script>
