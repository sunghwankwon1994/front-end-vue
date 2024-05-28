<template>
  <div class="card">
    <div class="card-header">Exam10FallthroughAttr</div>
    <div class="card-body">
      <UIComponentA
        id="uiComponentA"
        class="bg-info"
        style="color:orange"
        @click="handleClick"
      />
      <UIComponentB
        id="uiComponentB"
        class="bg-info"
        style="color:orange"
        @click="handleClick"
      />  <UIComponentB
        id="uiComponentB"
        myClass="bg-warning"
        myStyle="color:red"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script setup>
import UIComponentB from "./UIComponentB.vue";
import UIComponentA from "./UIComponentA.vue";

function handleClick() {
  console.log("Exam10FallthroughAttr.handleClick() 실행됨");
}
</script>

<style scoped></style>
