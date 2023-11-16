/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */


// eslint-disable-next-line no-unused-vars
function filterTea(){
  let teaType = document.getElementById("selectTea").value;
  //let imgWhite = document.getElementById("imgWhiteTea");
  let message = "";

switch (teaType) {

 case "White Tea":
 message += "<h3>White Tea</h3><p>White tea is made from the young buds and immature tea leaves that are covered in small white hairs, which were picked shortly before the buds have fully opened. Straight after harvesting, the young, unfurled leaves aren't rolled but are immediately fired to minimise oxidation, giving white tea one of the most light and delicate flavors out of all the tea varieties. <p>White tea has the lowest caffeine content of all the teas because it is the least processed tea with the shortest oxidation time.</p>";
 //imgWhite.style.display = "block";
 break;
 
 case "Yellow Tea":
 message += "<h3>Yellow Tea</h3><p>Yellow tea is produced in a similar way to green tea but has an additional step to lock in its distinctive yellow color. After being withered, rolled, and going through a quick oxidation process, the leaves are dried using steam instead of hot air. This turns the tea yellow and gives it a slightly lighter, more mellow taste than green tea.</p>";
break;
 
case "Green Tea":
 message += "<h3>Green Tea</h3><p>Green tea is heated for a short time after harvesting, so it undergoes a short oxidation process and keeps its green color. As this tea is allowed to oxidise slightly, it still contains caffeine, although not as much as black tea. Green tea is usually green, yellow or light brown when brewed.</p";
 break;
 
 case "Oolong Tea":
 message += "<h3>Oolong Tea</h3><p>Oolong tea is partially oxidized and the degree of oxidation can range from slightly oxidized to very oxidized (but not fully oxidized). The depth of character of oolong tea depends on the degree of oxidation, so an oolong can end up being closer to a green tea, or a black tea, depending on how it is produced.</p";
 break;

 case "Black Tea":
 message += "<h3>Black Tea</h3><p>Black tea is generally stronger than the other tea types - white, yellow, green and oolong tea. During the production of black tea, tea leaves are allowed to oxidize fully before being fired (dried). When brewed, black tea produces a dark drink with a rich, malty flavor. Because black tea is allowed to oxidize for a long time, it typically has the highest caffeine content of all the teas, although still less than the caffeine content of coffee.</p";
 break;

 default:

 }

document.getElementById("output").innerHTML = message;
}


