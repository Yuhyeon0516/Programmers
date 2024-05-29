function solution(rsp) {
  var answer = "";

  for (i = 0; i < rsp.length; i++) {
    switch (rsp[i]) {
      case "2":
        answer += "0";
        break;

      case "5":
        answer += "2";
        break;

      default:
        answer += "5";
        break;
    }
  }
  return answer;
}