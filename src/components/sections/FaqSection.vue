<template>
  <section id="faq" class="py-24 px-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Questions Fréquentes</h2>
    <div class="space-y-2">
      <FaqItem
        question="Quels modèles d'IA utilisez-vous ?"
        answer="Le meilleur des deux mondes. Pour le 100% local, nous installons Mistral directement sur votre Mac Mini. Pour des besoins connectés, nous utilisons l'API d'Euria (IA Suisse), choisie pour sa sécurité militaire et son approche éco-responsable (faible empreinte carbone)."
      />
      <FaqItem
        question="Où sont mes données si j'utilise l'API Euria ?"
        answer="Elles restent en Europe. Contrairement aux modèles américains, Euria est hébergée en Suisse (juridiction neutre et stricte) ou en France. Vos données transitent chiffrées, sont traitées, puis oubliées. Elles ne servent jamais à entraîner leurs modèles."
      />
      <FaqItem
        question="Pourquoi acheter un Mac Mini (CAPEX) ?"
        answer="Pour posséder votre 'cerveau' numérique. C'est un actif amortissable. Une fois le matériel payé, faire tourner Mistral en local ne vous coûte que l'électricité, contrairement à un abonnement SaaS qui augmente avec votre usage."
      />
      <FaqItem
        question="L'IA locale fonctionne-t-elle sans internet ?"
        answer="Absolument. Votre Mac Mini avec Mistral peut fonctionner en totale autonomie (Air-Gapped). C'est la configuration ultime pour les données ultra-sensibles (Médical, Défense, Brevets)."
      />
      <FaqItem
        question="L'argument 'Eco-responsable', c'est du marketing ?"
        answer="Non, c'est de la physique. Utiliser Euria (optimisée) ou faire tourner un petit modèle Mistral localement consomme 100x moins d'énergie qu'une requête vers un modèle géant comme GPT-4. Et Euria utilise des serveurs qui chauffent les batiments. C'est bon pour la planète et pour votre facture RSE."
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import FaqItem from '../ui/FaqItem.vue'
</script>
