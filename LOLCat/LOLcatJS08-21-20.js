var wakeUpTimeSelectorJS = document.getElementById("wakeUpTimeSelector");
var lolcatImageJS = document.getElementById("lolcatImage");
var messageJS = document.getElementById("messageText");

var timeChosen = 7;

function addTimeChosen() {
  timeChosen = wakeUpTimeSelectorJS.value;

  if (timeChosen == 4) {
    alert(timeChosen);
    lolcatImageJS.src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageJS.innerText = "Wake-Up!!!!!!!";
  }
  if (timeChosen == 2) {
    alert(timeChosen);
    lolcatImageJS.src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageJS.innerText = "Lunch Time - Yummmmmmm!!!";
  }
}

wakeUpTimeSelectorJS.addEventListener("change", addTimeChosen);
