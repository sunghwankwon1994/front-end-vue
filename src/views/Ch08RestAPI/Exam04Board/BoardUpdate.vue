<template>
  <div class="card">
    <div class="card-header">BoardUpdate</div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="form-group row">
          <label for="btitle" class="col-sm-2 col-form-label">제목</label>
          <div class="col-sm-10">
            <input
              id="btitle"
              type="text"
              class="form-control"
              v-model="board.btitle"
            />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
          <div class="col-sm-10">
            <textarea
              id="bcontent"
              type="text"
              class="form-control"
              v-model="board.bcontent"
            ></textarea>
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
          <div v-if="board.battachoname !== null" class="col-sm-10">
            <img
              width="300"
              :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`"
            />
          </div>
          <div class="col-sm-10 mt-2">
            <input
              id="battach"
              type="file"
              class="form-control-file"
              ref="battach"
            />
          </div>
        </div>

        <div class="form-group row mt-3">
          <div class="col-sm-12 d-flex justify-content-center">
            <input
              type="submit"
              class="btn btn-info btn-sm me-2"
              value="수정"
            />
            <input
              type="button"
              class="btn btn-info btn-sm"
              value="취소"
              @click="handleCancel"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import boardAPI from "@/apis/boardAPI";

const board = ref({});
const battach = ref(null);
//router 객체 얻기
const router = useRouter();
const route = useRoute();

//쿼리스트링으로 전달된 bno 얻기
const bno = route.query.bno;
const pageNo = route.query.pageNo;
//수정 버튼 클릭시 실행하는 함수

const handleSubmit = async () => {
  //multipart/form-data 객체 생성
  const formData = new FormData();
  //문자 파트 넣기
  formData.append("bno", board.value.bno);
  formData.append("btitle", board.value.btitle);
  formData.append("bcontent", board.value.bcontent);
  //파일 파트 넣기
  const elBattach = battach.value;
  if (elBattach.files.length != 0) {
    formData.append("battach", elBattach.files[0]);
  }
  //게시물 수정 요청
  try {
    const response = await boardAPI.boardUpdate(formData);
    console.log(response);
    router.push(`/Ch08RestAPI/Exam04Board/BoardList?pageNo=${pageNo}`);
  } catch (error) {
    console.log(error);
  }
};

//취소 버튼을 클릭시 실행하는 함수 정의
const handleCancel = () => {};

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
  } catch (error) {
    console.log(error);
  }
};
//bno에 해당하는 게시물 정보 가져오기
getBoard(bno);
</script>

<style scoped></style>
