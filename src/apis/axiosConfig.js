import axios from "axios";

//기본 경로 설정
axios.defaults.baseURL = "http://localhost";

//AccessToken을 받고나서 다음 요청시 전달할 수 있도록 요청 헤더에 추가
//로그인 성공했을 때 호출됨
const addAuthHeader = (accessToken) => {
  //common 객체에 동적 속성으로 Authorization을 추가
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
};

//공통 요청 헤더에서 Authorization 헤더 삭제
//로그아웃시 호출됨
const removeAuthHeader = () => {
  //common 객체의 Authorization속성을 삭제
  delete axios.defaults.headers.common["Authorization"];
};

//로컬 스토리지에 AccessToken을 저장
const saveAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

//로컬 스토리지에 있는 AccessToken을 읽기
const readAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken") || "";
  // if (accessToken !="") {
  //     addAuthHeader(accessToken);
  // }
  return accessToken;
};

export default {
  addAuthHeader,
  removeAuthHeader,
  saveAccessToken,
  readAccessToken,
};
