function solution(record) {
  const userList = {};
  const chatListStack = [];

  for (let i = 0; i < record.length; i++) {
    const [action, uid, nickname] = record[i].split(" ");

    if (action !== "Change") chatListStack.push([action, uid]);

    if (action !== "Leave") {
      userList[uid] = {
        nickname,
      };
    }
  }

  return Object.values(chatListStack).map(
    (value) =>
      `${userList[value[1]].nickname}님이 ${
        value[0] === "Enter" ? "들어왔" : "나갔"
      }습니다.`
  );
}