<script setup lang="ts">
import { ref } from "vue";
import type { Authentication } from "./../../../../packages/domain/usecases";

const props = defineProps<{
  authentication: Authentication;
}>();

const email = ref("");
const password = ref("");
const isLoading = ref(false);

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  isLoading.value = true;

  try {
    await props.authentication.auth({
      email: email.value,
      password: password.value,
    });

    alert("Login realizado com sucesso!");
  } catch (error) {
    alert("Erro ao autenticar. Verifique seus dados.");
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="container">
    <form @submit="handleSubmit" class="form">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="E-mail"
        v-model="email"
        class="input"
        required
      />

      <input
        type="password"
        placeholder="Senha"
        v-model="password"
        class="input"
        required
      />

      <button type="submit" :disabled="isLoading" class="button">
        {{ isLoading ? "Carregando..." : "Entrar" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;
}
.input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}
.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
