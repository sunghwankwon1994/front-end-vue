<template>
  <div class="card">
    <div class="card-header">Exam03State</div>
    <div class="card-body">
      <p>번호: {{ no }}</p>
      <p>이름: {{ `${name} - ${company}` }}</p>
      <p>설명: {{ detail.info }}</p>
      <p>상태: {{ detail.sale ? "판매" : "품절" }}</p>
      <p>상태: {{ getPrice() }}</p>
      <hr />

      <button @click="changeData()" class="btn btn-danger btn-sm">
        변수값 변경
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let no = ref(1);
let name = ref("미니백");
let company = ref("클레인");

let detail = ref({
  info: "시그너츠 Cecycle Lock 마그네틱 클로저가 특징입니다.",
  sale: false,
});
let price = ref(300000);
function getPrice() {
  return price.value;
}
function changeData() {
  no.value = 2;
  name.value = "백팩";
  price.value += 1000;
  // detail value.info = "시그너츠 Cecycle Lock 마그네틱 클로저와 빨간색의 조화가 좋습니다." 
  // detail.value.sale=!detail.value.sale;

  detail.value = {
    info: "시그너츠 Cecycle lock 마그네틱 클로저와 빨간색의 조화가 좋습니다.",
    sale: !detail.value.sale,
  };
}
</script>

<style scoped></style>
