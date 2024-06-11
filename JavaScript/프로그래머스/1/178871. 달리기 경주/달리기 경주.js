function solution(players, callings) {
  const playerRanks = {};
  for (let i = 0; i < players.length; i++) {
    playerRanks[players[i]] = i;
  }
  for (let calling of callings) {
    const curRank = playerRanks[calling];
    const temp = players[curRank - 1];

    players[curRank - 1] = calling;
    players[curRank] = temp;

    playerRanks[temp] = curRank;
    playerRanks[calling] = curRank - 1;
  }
  return players;
}