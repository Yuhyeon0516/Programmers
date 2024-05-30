function solution(id_pw, db) {
  let answer = "fail";
  const [id, pw] = id_pw;
  for (let i = 0; i < db.length; i++) {
    if (db[i][0] === id) {
      if (db[i][1] === pw) {
        return "login";
      }

      answer = "wrong pw";
    }
  }
  return answer;
}