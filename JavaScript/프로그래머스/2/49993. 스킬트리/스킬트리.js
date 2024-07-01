function solution(skill, skill_trees) {
  let answer = skill_trees.length;

  for (let i = 0; i < skill_trees.length; i++) {
    const orderOfSkill = skill.split("");
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (!skill.includes(skill_trees[i][j])) continue;
      if (orderOfSkill.shift() !== skill_trees[i][j]) {
        answer -= 1;
        break;
      }
    }
  }
  return answer;
}