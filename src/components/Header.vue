<template>
  <header class="bg-green-700 text-white shadow-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="logo.png" alt="Vieille Branche Logo" class="h-12 w-auto">
        <span class="text-xl font-bold tracking-wide">Vieille Branche</span>
      </div>

      <!-- Navigation -->
      <nav>
        <ul class="flex gap-6 text-sm font-medium">
         <li class="rounded-box">
            <router-link to="/" class="hover:text-primary">Accueil</router-link>>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Pas de styles spécifiques car DaisyUI est utilisé. */
</style>

