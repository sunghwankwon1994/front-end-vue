import axios from "axios";
import qs from "qs";

const join = (member) => {
  //user Data
  // {
  //     mid: "youngzo",
  //     mname: "심기금",
  //     mpassword: "12345",
  //     memail : "simpson@naver.com"
  // }
  //POST 방식 : raw/JSON 방식으로 데이터 전달
  return axios.post("/member/join", member);
};

//로그인
const login = (member) => {
  /*
        user = {
            mid: "user",
            mpassword: "12345"
        }
    */

  //POST 방식 : QueryString(mid=user&mpassword=12345) 방식으로 데이터 전달
  return axios.post("/member/login", qs.stringify(member));
};

export default {
  join,
  login,
};
