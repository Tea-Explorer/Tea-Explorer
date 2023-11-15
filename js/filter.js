/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */


// eslint-disable-next-line no-unused-vars
function filterTea(){
  let teaType = document.getElementById("selectTea").value;
  let imgWhite = document.getElementById("imgWhiteTea");
  let message = "";

switch (teaType) {

 case "White Tea":
 message += "<h2>White Tea</h2><p>White tea is made from the young buds and immature tea leaves that are covered in small white hairs, which were picked shortly before the buds have fully opened. Straight after harvesting, the young, unfurled leaves aren't rolled but are immediately fired to minimise oxidation, giving white tea one of the most light and delicate flavors out of all the tea varieties. <p>White tea has the lowest caffeine content of all the teas because it's the least processed tea with the shortest oxidation time.</p>";
 imgWhite.style.display = "block";
 break;
 
 case "Yellow Tea":
 message += "<h2>Yellow Tea</h2><p>Yellow tea is produced in a similar way to green tea but has an additional step to lock in its distinctive yellow color. After being withered, rolled, and going through a quick oxidation process, the leaves are dried using steam instead of hot air. This turns the tea yellow and gives it a slightly lighter, more mellow taste than green tea.</p>";
break;
 
case "Green Tea":
 message += "<h2>Prerequisite(s): Math &142 or placement test." + "</br>" + "</br>" + "You need to take more Math classes." + 
 "</br>" + "Next class to take: Math &152 - Calculus II.</h2>";
 break;
 
 default:

 }

document.getElementById("output").innerHTML = message;
}


