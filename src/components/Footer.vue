<template>
  <footer class="bg-sapin-pastel text-white shadow-md">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-22 mt-10">
      
      <!-- Contact -->
      <div>
        <h3 class="text-lg font-semibold mb-3">ME CONTACTER</h3>
        <p class="leading-6">
          Arthur JUAN<br>
          27 route de Lévignac<br>
          31820 Pibrac<br>
          <a href="tel:0667411228" class="hover:text-green-300 transition">06 67 41 12 28</a>
        </p>
      </div>

      <!-- Réseaux sociaux -->
      <div class="text-center md:text-left">
        <h3 class="text-lg font-semibold mb-3">ME SUIVRE</h3>
        <div class="flex justify-center md:justify-start gap-4">
          <a href="#" class="hover:scale-110 transition">
            <img src="/insta.png" alt="Instagram" class="w-8 h-8">
          </a>
          <a href="#" class="hover:scale-110 transition">
            <img src="/facebook.png" alt="Facebook" class="w-8 h-8">
          </a>
        </div>
      </div>

      <!-- Devis -->
      <div class="flex flex-col items-center md:items-end text-center md:text-right">
        <h3 class="text-lg font-semibold mb-3"></h3>
        <button 
         class="bg-sapin-bouton text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-900 hover:scale-110 transition"
        @click="ouvrirFormulaire"
         >
         Demander de devis
        </button>
      </div>
    </div>

    <!-- Ligne du bas -->
    <div class="mt-6 mb-6 border-t border-white pt-12 text-center text-sm text-white">
      © {{ new Date().getFullYear() }} Lisa DELBES — Tous droits réservés
    </div>
  </footer>
</template>


<script setup lang="js">
function ouvrirFormulaire() {
  window.location.href = "/formulaire-devis"; 
}
</script>

<style scoped>
/* Pas de styles spécifiques car DaisyUI est utilisé. */
</style>
