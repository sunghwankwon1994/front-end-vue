<template>
  <div class="card">
    <div class="card-header">Exam02Join</div>
    <div class="card-body">
      <form @submit.prevent="handleSubmit">
        <div class="input-group mb-2">
          <span class="input-group-text">아이디</span>
          <input type="text" class="form-control" v-model="member.mid" />
        </div>

        <div class="input-group mb-2">
          <span class="input-group-text">이름</span>
          <input type="text" class="form-control" v-model="member.mname" />
        </div>

        <div class="input-group mb-2">
          <span class="input-group-text">비밀번호</span>
          <input
            type="password"
            class="form-control"
            v-model="member.mpassword"
          />
        </div>

        <div class="input-group mb-2">
          <span class="input-group-text">이메일</span>
          <input type="email" class="form-control" v-model="member.memail" />
        </div>

        <div>
          <input
            type="submit"
            value="가입"
            class="btn btn-danger btn-sm me-2"
          />
          <!-- 체크 박스가 디폴트 값으로 바인딩 되지 않음 -->
          <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
          <!-- Vue에서 리셋 버튼은 양식을 초기화 하지 않음 -->
          <!-- <button type="reset" class="btn btn-info btn-sm">재작성</button> -->
          <button
            type="button"
            class="btn btn-info btn-sm"
            @click="handleReset"
          >
            재작성
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import memberAPI from "@/apis/memberAPI";
import { useRouter } from "vue-router";

//라우터 객체 얻기
const router = useRouter();

//상태정의
const member = ref({
  mid: "",
  mname: "",
  mpassword: "",
  memail: "",
});

//가입 버튼 클릭시 실행
const handleSubmit = async () => {
  try {
    console.log(JSON.parse(JSON.stringify(member.value)));
    //Axios를 이용해서 백엔드로 회원 가입 요청
    const data = JSON.parse(JSON.stringify(member.value));

    const response = await memberAPI.join(data);
    console.log(response.data);
    router.push("/"); //홈페이지
    // router.back(); // 이전페이지
  } catch (error) {
    console.log(error);
  }
};
//유효성 검사 생략

//재작성 버튼 클릭시 실행
const handleReset = () => {
  member.value.mid = "";
  member.value.mname = "";
  member.value.mpassword = "";
  member.value.memail = "";
};
</script>

<style scoped></style>
