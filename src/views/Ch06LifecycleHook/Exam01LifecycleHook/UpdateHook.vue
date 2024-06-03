<template>
  <div class="card">
    <div class="card-header">UpdateHook</div>
    <div class="card-body">
      <p>count: {{ count }}</p>
      <button class="btn btn-info btn-sm mt-2" @click="count++">
        상태 변경
      </button>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";

//상태 생성
const count = ref(0);
onMounted(() => {
  console.log("UpdateHook 컴포넌트가 마운트 됨");
  count.value = 100;
});
onUnmounted(() => {
  console.log("UpdateHook 컴포넌트가 언마운트 됨");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate 컴포넌트가 업데이트 직전임");
});
onUpdated(() => {
  console.log("onUpdated 컴포넌트가 업데이트 됨");
});
</script>

<style scoped></style>
