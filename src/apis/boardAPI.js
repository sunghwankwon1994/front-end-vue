import axios from "axios";
import qs from "qs";

//게시물 목록 가져오기
const getBoardList = (pageNo = 1) => {
  //GET: http://localhost/board/list?pageNo=1

  return axios.get("/board/list", { params: { pageNo } });
};
//게시물 쓰기
function boardWrite(formData) {
  return axios.post("/board/create", formData);
}
//게시물 수정
const boardUpdate = (formData) => axios.put("/board/update", formData);

//게시물 읽기
const boardRead = (bno) =>
  //PathVariable로 데이터 전송
  axios.get("/board/read/" + bno);

//첨부 다운로드
const boardAttachDownload = (bno) =>
  //PathVariable로 데이터 전송
  axios.get("/board/battach/" + bno, { responseType: "blob" });

const boardDelete = (bno) => axios.delete("/board/delete/" + bno);

export default {
  getBoardList,
  boardWrite,
  boardRead,
  boardAttachDownload,
  boardDelete,
  boardUpdate,
};
