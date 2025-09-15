<template>

    <div class="p-10">
    <div class="bg-sapin-pastel text-white font-bold p-6 rounded-xl">
      Test sapin pastel
    </div>
  </div>
  
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <!-- Navbar en haut de la page -->
    <Header> </Header>
    <!-- Conteneur principal du contenu, centré et responsive -->
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
      <!-- Ici on aura la router view -->
       <router-view></router-view>
    </main>
    <!-- Footer en bas de la page -->
    <Footer> </Footer>
    
  </div>

</template>

<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

</script>

<style >

</style>
