<template>
  <div class="max-w-5xl mx-auto px-6 py-10">
    <!-- Titre -->
    <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">
      Ressources pédagogiques : comprendre le métier
    </h2>

    <!-- Grille -->
    <div class="grid md:grid-cols-2 gap-8">
      
      <!-- Carte 1 -->
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
        <img 
          src="/Office_national_des_forêts_logo.svg 1.png"
          alt="Office national des forêts"
          class="w-32 h-32 object-contain mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-700 mb-2">
          Office national des forêts
        </h3>
        <p class="text-gray-500 mb-4">
          Découvrez le site officiel de l’ONF et ses ressources pour comprendre la gestion durable des forêts.
        </p>
        <a 
          href="https://www.onf.fr/" 
          target="_blank"
          class="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Visiter le site
        </a>
      </div>

      <!-- Carte 2 -->
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center text-center">
        <img 
          src="/silence_ca_pousse 1.png"
          alt="Silence ça pousse"
          class="w-32 h-32 object-contain mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-700 mb-2">
          Silence ça pousse
        </h3>
        <p class="text-gray-500 mb-4">
          Une émission passionnante pour découvrir le monde des plantes et apprendre à jardiner autrement.
        </p>
        <a 
          href="https://www.youtube.com/watch?v=eP7K2b-D3g0" 
          target="_blank"
          class="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
        >
          Voir la vidéo
        </a>
      </div>

    </div>
  </div>
</template>

<style scoped>
</style>
