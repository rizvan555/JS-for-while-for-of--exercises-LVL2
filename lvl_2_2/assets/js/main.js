const addLetters = () => {
  const input = document.querySelector("#inputLength").value;
  const result = document.querySelector("#result");
  let loopArr = ["L", "p"];

  const inputCount = Number(input);
  for (let index = 1; index <= inputCount; index++) {
    loopArr.splice(1, 0, "o");
  }
  const loopString = loopArr.join("");
  result.innerHTML = loopString;
};
addLetters();
