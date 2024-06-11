function solution(park, routes) {
  let robotPosition = [];
  const parkX = park[0].length - 1;
  const parkY = park.length - 1;
  for (let i = 0; i < park.length; i++) {
    const index = park[i].indexOf("S");
    if (index > -1) {
      robotPosition = [i, index];
      break;
    }
  }

  for (let route of routes) {
    const [direction, countString] = route.split(" ");
    const count = Number(countString);
    let obstacle = false;

    if (direction === "E" && robotPosition[1] + count > parkX) obstacle = true;
    else if (direction === "W" && robotPosition[1] - count < 0) obstacle = true;
    else if (direction === "S" && robotPosition[0] + count > parkY)
      obstacle = true;
    else if (direction === "N" && robotPosition[0] - count < 0) obstacle = true;
    else {
      for (let i = 1; i <= count; i++) {
        if (obstacle) break;
        switch (direction) {
          case "E":
            if (park[robotPosition[0]][robotPosition[1] + i] === "X")
              obstacle = true;
            break;
          case "W":
            if (park[robotPosition[0]][robotPosition[1] - i] === "X")
              obstacle = true;
            break;
          case "S":
            if (park[robotPosition[0] + i][robotPosition[1]] === "X")
              obstacle = true;
            break;
          case "N":
            if (park[robotPosition[0] - i][robotPosition[1]] === "X")
              obstacle = true;
            break;
        }
      }
    }

    if (!obstacle) {
      if (direction === "E") robotPosition[1] += count;
      else if (direction === "W") robotPosition[1] -= count;
      else if (direction === "S") robotPosition[0] += count;
      else robotPosition[0] -= count;
    }
  }
  return robotPosition;
}