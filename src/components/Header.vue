<template>
  <header class="bg-sapin-pastel text-white shadow-md">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Vieille Branche Logo" class="h-12 w-auto">
        <span class="text-xl font-bold tracking-wide">Vieille Branche, au service des arbres</span>
      </div>

      <!-- Navigation -->
      <nav>
        <ul class="flex gap-6 text-sm font-medium">
          <li>
            <RouterLink to="/apropos" class="hover:text-sapin-surbrillance">A propos</RouterLink>
          </li>
          <!-- <li>
            <RouterLink to="/services" class="hover:text-green-300">Services</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-green-300">Contact</RouterLink>
          </li> -->
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

