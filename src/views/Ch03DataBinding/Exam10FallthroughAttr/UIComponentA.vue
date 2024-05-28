<template>
  <div class="card">
    <div class="card-header">UIComponentA</div>
    <div class="card-body">
      <!-- <div :class="props.class" :style="props.style">Content</div> -->
      <div :class="prop.class" :style="prop.style" @click="emit('click')">
        Content
      </div>

      <button class="mt-2 btn btn-info btn-sm" @click="handleClick">버튼</button>
    </div>
  </div>
</template>

<script setup>
const prop = defineProps(["class", "style"]);
const emit = defineEmits(["click"]);

function handleClick() {
  //컴포넌트의 속성값 읽기
  console.log(prop.class);
  console.log(prop.style);
  //click
  emit('click');
}
</script>

<style scoped></style>
