<template>
  <nav class="navbar justify-content-between bg-dark text-white">
    <div class="ms-2">
      <img src="@/assets/logo.png" width="30" height="30" />
      <span class="ms-2 text-white">Vue.js</span>
    </div>
    <div class="me-2">
      <div v-if="$store.state.userId === ''">
        <RouterLink to="/Ch08RestAPI/Exam03Login" class="btn btn-success btn-sm"
          >로그인</RouterLink
        >
      </div>
      <div v-else>
        <span class="me-3">User ID: {{ $store.state.userId }}</span>
        <button class="btn btn-info btn-sm" @click="handleLogout">
          로그아웃
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

const handleLogout = () => {
  store.dispatch("deleteAuth");
  router.push("/Ch08RestAPI/Exam03Login");  
};
</script>

<style scoped></style>
