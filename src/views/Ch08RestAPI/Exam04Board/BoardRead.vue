<template>
  <div class="card">
    <div class="card-header">BoardRead</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-6">
          <p>bno: {{ board.bno }}</p>
          <p>btitle: {{ board.btitle }}</p>
          <p>bcontent: {{ board.bcontent }}</p>
          <p>bwriter: {{ board.bwriter }}</p>
          <p>bdate: {{ board.bdate }}</p>
          <p>bhitcount: {{ board.bhitcount }}</p>
        </div>
        <div class="col-md-6">
          <!-- 방법 -->
          <!-- <img v-if="battach != null" width="300" :src="battach" /> -->

          <!-- 방법2 이미지가 많을 경우-->

          <img
            v-if="battach != null"
            width="300"
            :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`"
          />
        </div>
      </div>

      <div class="mt-3">
        <button class="btn btn-info btn-sm me-2" @click="goBoardList">
          목록
        </button>
        <span v-if="$store.state.userId == board.bwriter">
          <button class="btn btn-warning btn-sm me-2" @click="goBoardUpdate">
            수정
          </button>
          <button class="btn btn-danger btn-sm me-2" @click="handleRemove">
            삭제
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import boardAPI from "@/apis/boardAPI";
import { useStore } from "vuex";

//상태 정의
const board = ref({});
const battach = ref(null);
const router = useRouter();
//쿼리스트링
const route = useRoute();

const bno = route.query.bno;
const pageNo = route.query.pageNo;
//해당 bno의 게시물 얻기
const getBoard = async (argBno) => {
  try {
    const response = await boardAPI.boardRead(argBno);
    board.value = response.data;
    if (board.value.battachoname != null) {
      getAttach(argBno);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAttach = async (argBno) => {
  try {
    const response = await boardAPI.boardAttachDownload(argBno);
    const blob = response.data;
    battach.value = URL.createObjectURL(blob);
  } catch (error) {
    console.log(error);
  }
};
//store 객체 얻기
const store = useStore();

if (store.state.userId !== "") {
  //bno에 해당하는 게시물 가져오기
  getBoard(bno);
} else {
  router.push("/Ch08RestAPI/Exam03Login");
}

const goBoardList = () => {
  router.back();
};
const goBoardUpdate = () => {
  router.push(`/Ch08RestAPI/Exam04Board/BoardUpdate?bno=${bno}&pageNo=${pageNo}`);
};

const handleRemove = async () => {
  try {
    await boardAPI.boardDelete(bno);
    router.back();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped></style>
