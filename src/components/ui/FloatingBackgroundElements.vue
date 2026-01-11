<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Élément Gauche -->
    <img 
      src="/effect/logo.png" 
      alt="Element décoratif IA" 
      class="absolute top-1/4 -left-24 w-96 h-96 object-contain opacity-20 blur-sm animate-spin-slow"
    />
    
    <!-- Élément Droite -->
    <img 
      src="/effect/logo.png" 
      alt="Element décoratif IA" 
      class="absolute bottom-1/4 -right-24 w-96 h-96 object-contain opacity-20 blur-sm animate-spin-reverse-slow"
    />
  </div>
</template>

<script setup>
// Composant purement visuel, pas de logique nécessaire
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 120s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spin-reverse-slow 120s linear infinite;
}
</style>
