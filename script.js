
function checkPerfectSquare() {
     let m = document.getElementById("n");
     let n = Number(m.value);
     let output = document.getElementById("output");
     let steps = document.getElementById("steps");

     output.innerHTML = "";
     steps.innerHTML = "";

     for (let k = 1; k <= n; k += 2) {
          `${n} - ${k} = ${n - k}`;
          n -= k;
     }

     let yes = "The number is a perfect square.";
     let no = "The number is not a perfect square.";

     if (m.value == "") {
          output.innerHTML = "Enter a number";
     }
     else if (n == 0) {
          output.innerHTML = yes;
     }
     else {
          output.innerHTML = no;
     }
     let showStepsBtn = document.getElementById("showSteps");
     showStepsBtn.style.display = "block";
}


function clearSystem() {
     document.getElementById("n").value = "";
     document.getElementById("output").innerHTML = "";
     document.getElementById("steps").innerHTML = "";
     let showStepsBtn = document.getElementById("showSteps");
     showStepsBtn.style.display = "none";
}

var showed = true;


function showStepsFunc() {
     let m = document.getElementById("n")
     let n = Number(m.value);
     let steps = document.getElementById("steps");
     let btn = document.getElementById("showSteps");
     steps.innerHTML = "";


     for (let k = 1; k <= n; k += 2) {
          let step = `${n} - ${k} = ${n - k}`;
          steps.innerHTML += step + "<br>";
          n -= k;
     }
     if (showed == true) {
          steps.style.display = "block";
          showed = false;
          btn.innerHTML = "Hide Steps";
     }
     else {
          steps.style.display = "none";
          showed = true;
          btn.innerHTML = "Show Steps";
     }

}



