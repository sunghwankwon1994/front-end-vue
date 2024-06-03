import { createStore } from "vuex";
import counter from "./counter";
//Store 객체를 생성
const store = createStore({
  //루트 상태를 정의
  state: {
    userId: "white",
  },
  //루트 상태를 읽는 메소드 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },
  },
  //루트 상태를 변경하는 메소드 정의 (동기방식)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
  },
  //루트 상태를 변경하는 메소드 정의(비동기 방식)
  actions: {
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        //서버와 통신 작업
        //...3초소요
        if (true) {
          //로그인 성공
          resolve({ result: "success", userId: payload.userId });
        } else {
          //로그인 실패
          reject({ result: "fail", reason: "password is wrong" });
        }
      })
        .then((data) => {
          //작업이 성공적으로 처리가 되었을 떄
          //상태 변경 작성
          console.log("로그인 성공");
          context.commit("setUserId", data.userId);
        })
        .catch((error) => {
          //작업이 실패처리 되었을 떄
          console.log("로그인 실패");
        });
    },
  },
  //루트 하위의 상태를 정의
  modules: {
    // counter: counter, 이름이 같으면 생략 가능
    counter
  },
});

//Store 객체 내보내기
export default store;
