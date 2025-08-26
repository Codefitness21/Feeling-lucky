document.querySelector("#pickFiveNum").addEventListener("click", pickFiveNum);
document.querySelector("#pickOneNum").addEventListener("click", pickOneNum);

function pickFiveNum() {
  let nums = [ ];
  document.querySelector("#lottoTopLine").innerHTML = "  ";
  for (let i = 1; i <= 5; i++) {
    let lottoNums = Math.floor(Math.random() * 69) + 1;
    nums.push(lottoNums);
  }
  document.querySelector("#lottoTopLine").innerHTML += nums.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}

function pickOneNum() {
  let num = [];
   document.querySelectorAll("#lottoBottomLine").innerHTML = " ";
  for (let i = 0; i < 1; i++) {
   
    let lottoNum = Math.floor(Math.random() * 26)+1;
    num.push(lottoNum);
  }
  document.querySelector("#lottoBottomLine").innerHTML = num;
}

