<template>
  <div class="card">
    <div class="card-header">Exam01Promise</div>
    <div class="card-body">
      <div>
        <button class="btn btn-info btn-sm me-2" @click="handleBtn1">
          비동기 작업1
        </button>
        <button class="btn btn-info btn-sm me-2" @click="handleBtn2">
          비동기 작업2
        </button>
        <div class="mt-3" v-if="loading">
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="mt-3" v-else>
          <div>{{ result }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//상태 정의
const loading = ref(false);
const result = ref("결과가 나오는 부분");

//비동기 작업 정의
const asyncWork = () => {
  //3초후에 응답이 오는 Promise 생성
  const promise = new Promise((resolve, reject) => {
    //3초후에, 첫번째 매개값인 람다식이 실행
    setTimeout(() => {
      //성공적으롷 처리했을 경우
      resolve("성공 응답 내용");
      //실패 처리할 경우
      // reject("실패 응답 내용")
    }, 3000);
  });
  return promise;
};

const handleBtn1 = () => {
  loading.value = true;
  console.log("handleBtn1() 실행");
  asyncWork()
    .then((data) => {
      console.log("성공시 전달된 데이터: ", data);
      result.value = data;
    })
    .catch((error) => {
      console.log("실패시 전달된 데이터: ", error);
      result.value = error;
    })
    .finally(() => {
      console.log("마무리 작업 실행");
      loading.value = false;
    });
};

const handleBtn2 = async () => {
  console.log("시작");
  useAsyncWSork();
  console.log("끝");
};

const useAsyncWSork = async () => {
  loading.value = true;
  console.log("handleBtn2() 실행");
  try {
    const data = await asyncWork();
    console.log("성공시 데이터 실행", data);
    result.value = data;
  } catch (error) {
    console.log("실패시 데이터 실행", error);
    result.value = error;
  }
  loading.value = false;
};
</script>

<style scoped></style>
