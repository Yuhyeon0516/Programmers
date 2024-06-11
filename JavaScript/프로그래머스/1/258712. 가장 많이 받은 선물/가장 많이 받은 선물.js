function solution(friends, gifts) {
  // friendsObj 초기화
  const friendsObj = {};
  for (let friend of friends) {
    friendsObj[friend] = {
      sent: [],
      receive: [],
      nextMonthGift: [],
      giftScore: 0,
    };
  }
  // 주고 받은 선물을 기록
  for (let gift of gifts) {
    const [senter, receiver] = gift.split(" ");
    friendsObj[senter]["sent"].push(receiver);
    friendsObj[receiver]["receive"].push(senter);
  }
  // 선물 지수 계산
  Object.keys(friendsObj).forEach((value) => {
    friendsObj[value]["giftScore"] =
      friendsObj[value]["sent"].length - friendsObj[value]["receive"].length;
  });

  // 서로 주고받은 선물 비교
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const sentCount = friendsObj[friends[i]]["sent"].filter(
        (value) => value === friends[j]
      ).length;
      const receiveCount = friendsObj[friends[i]]["receive"].filter(
        (value) => value === friends[j]
      ).length;
      const iFriendGiftScore = friendsObj[friends[i]]["giftScore"];
      const jFriendGiftScore = friendsObj[friends[j]]["giftScore"];
      if (sentCount > receiveCount) {
        friendsObj[friends[i]]["nextMonthGift"].push(friends[j]);
      } else if (sentCount < receiveCount) {
        friendsObj[friends[j]]["nextMonthGift"].push(friends[i]);
      } else if (iFriendGiftScore > jFriendGiftScore) {
        friendsObj[friends[i]]["nextMonthGift"].push(friends[j]);
      } else if (iFriendGiftScore < jFriendGiftScore) {
        friendsObj[friends[j]]["nextMonthGift"].push(friends[i]);
      }
    }
  }

  return Math.max(
    ...Object.keys(friendsObj).map(
      (value) => friendsObj[value]["nextMonthGift"].length
    )
  );
}