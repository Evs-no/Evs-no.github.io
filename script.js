// Generate activity
var factList=[
  "Text or journal back and forth to eachother.",
  "Make a picture or greeting card to decorate the hospital room.",
  "Graditude Circle (3 things you are grateful for).",
  "Talk on the phone, videochat, or play games together on the Internet."
];

var activity = document.getElementById("activity");
var factBtn = document.getElementById("factBtn");
var count = 0;

if(factBtn){
  factBtn.addEventListener("click", displayActivity);
}

function displayActivity(){
  activity.innerHTML = factList[count];
  count++;
  if(count == factList.length){
    count = 0;
  }
}
