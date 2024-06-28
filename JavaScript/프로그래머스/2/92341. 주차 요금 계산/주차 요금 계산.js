function solution(fees, records) {
  let parkingHistory = {};
  for (let record of records) {
    const [time, carNumber, status] = record.split(" ");
    const [hour, minute] = time.split(":");
    const timeToMinute = hour * 60 + +minute;

    if (!parkingHistory[carNumber]) {
      parkingHistory[carNumber] = {
        totalTime: 0,
        carNumber,
      };
    }
    parkingHistory[carNumber].status = status;

    if (status === "IN") {
      parkingHistory[carNumber].inTime = timeToMinute;
      continue;
    }

    parkingHistory[carNumber].totalTime +=
      timeToMinute - parkingHistory[carNumber].inTime;
  }

  return Object.values(parkingHistory)
    .sort((a, b) => a.carNumber - b.carNumber)
    .map((value) => {
      if (value.status === "IN") value.totalTime += 1439 - value.inTime;
      if (fees[0] > value.totalTime) return fees[1];

      return (
        fees[1] + Math.ceil((value.totalTime - fees[0]) / fees[2]) * fees[3]
      );
    });
}