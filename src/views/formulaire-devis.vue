<script setup lang="js">
import { reactive } from "vue"

// Objet réactif qui stocke les données du formulaire
const form = reactive({
  nom: "",
  email: "",
  telephone: "",
  typeTravaux: "",
  budget: "",
  description: ""
})

// Fonction appelée lors de l’envoi du formulaire
const envoyerFormulaire = () => {
  // 👉 Ici tu peux envoyer vers ton backend ou API
  // Exemple : console.log
  console.log("Données du formulaire :", form)

  // Exemple d’enregistrement dans localStorage
  localStorage.setItem("demandeDevis", JSON.stringify(form))

  alert("Votre demande de devis a bien été enregistrée ✅")

  // Réinitialiser le formulaire
  form.nom = ""
  form.email = ""
  form.telephone = ""
  form.typeTravaux = ""
  form.budget = ""
  form.description = ""
}
</script>

<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6 text-center">Demande de devis</h1>

    <form class="space-y-4" @submit.prevent="envoyerFormulaire">
      <!-- Nom -->
      <label class="form-control">
        <div class="label"><span class="label-text">Nom complet</span></div>
        <input v-model="form.nom" type="text" placeholder="Votre nom"
               class="input input-bordered w-full" required />
      </label>

      <!-- Email -->
      <label class="form-control">
        <div class="label"><span class="label-text">Email</span></div>
        <input v-model="form.email" type="email" placeholder="exemple@mail.com"
               class="input input-bordered w-full" required />
      </label>

      <!-- Téléphone -->
      <label class="form-control">
        <div class="label"><span class="label-text">Téléphone</span></div>
        <input v-model="form.telephone" type="tel" placeholder="06 12 34 56 78"
               class="input input-bordered w-full" required />
      </label>

      <!-- Type de travaux -->
      <label class="form-control">
        <div class="label"><span class="label-text">Type de travaux</span></div>
        <select v-model="form.typeTravaux" class="select select-bordered w-full" required>
          <option disabled value="">Choisissez...</option>
          <option>Coupe arbre</option>
          <option>Entretien arbre</option>
          <option>Autre</option>
        </select>
      </label>

      <!-- Budget -->
      <label class="form-control">
        <div class="label"><span class="label-text">Budget estimé (€)</span></div>
        <input v-model="form.budget" type="number" min="0" placeholder="Ex : 2000"
               class="input input-bordered w-full" />
      </label>

      <!-- Description -->
      <label class="form-control">
        <div class="label"><span class="label-text">Description du projet</span></div>
        <textarea v-model="form.description" class="textarea textarea-bordered w-full"
                  rows="4" placeholder="Décrivez votre besoin..."></textarea>
      </label>

      <!-- Bouton -->
      <button type="submit" class="btn btn-primary w-full">Envoyer la demande</button>
    </form>
  </div>
</template>


<style scoped>
</style>