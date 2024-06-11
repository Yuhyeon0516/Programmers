function solution(new_id) {
  const step2Regex = new RegExp("[^a-z0-9-_.]+", "g");
  const step3Regex = new RegExp(`\\.\\.+`, "g");
  // 1단계 전부 소문자로 바꾸기
  new_id = new_id.toLowerCase();
  // 2단계 a~z, -, _, .을 제외한 문자 제외하기
  new_id = new_id.replaceAll(step2Regex, "");
  // 3단계 연속된 .들을 .으로 변경하기
  new_id = new_id.replaceAll(step3Regex, ".");
  // 4단계 처음과 끝에 위치한 .을 제거
  while (new_id[0] === "." || new_id.at(-1) === ".") {
    if (new_id[0] === ".") {
      new_id = new_id.slice(1);
    }

    if (new_id.at(-1) === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }
  // 5단계 new_id가 빈 문자열이 되었다면 new_id에 a를 대입
  if (!new_id) new_id = "a";
  // 6단계 new_id의 길이가 16자 이상이면 첫 15개의 문자만 남기고 뒤에 다 지우고 지움
  // 지운 후 다시 .이 뒤에 오면 이거도 지움
  if (new_id.length >= 16) new_id = new_id.slice(0, 15);
  while (new_id.at(-1) === ".") {
    if (new_id.at(-1) === ".") {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }
  // 7단계 new_id가 2글자 이하라면 3글자가 될때까지 new_id의 마지막 글자를 더해줌
  while (new_id.length < 3) {
    new_id += new_id.at(-1);
  }

  return new_id;
}