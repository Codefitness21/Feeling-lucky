document.querySelector("#rollFiveNum").addEventListener("click", rollFiveNum);
document.querySelector("#rollOneNum").addEventListener("click", rollOneNum);

function rollFiveNum() {
  let nums = [ ];
  document.querySelector("#lottoTopLine").innerHTML = "  ";
  for (let i = 1; i <= 5; i++) {
    let lottoNums = Math.floor(Math.random() * 69) + 1;
    nums.push(lottoNums);
  }
  document.querySelector("#lottoTopLine").innerHTML += nums.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}

function rollOneNum() {
  let num = [];
   document.querySelectorAll("#lottoBottomLine").innerHTML = " ";
  for (let i = 0; i < 1; i++) {
   
    let lottoNum = Math.floor(Math.random() * 26)+1;
    num.push(lottoNum);
  }
  document.querySelector("#lottoBottomLine").innerHTML = num;
}

