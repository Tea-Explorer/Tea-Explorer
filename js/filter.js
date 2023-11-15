

function filterTea(){
let teaType = document.getElementById("selectTea").value;
let imgWhite = document.getElementById("imgWhiteTea");
let message = "";

switch (teaType) {

 case "White Tea":
 message += "<h2>White Tea</h2><p>White tea is made from the young buds and immature tea leaves that are covered in small white hairs, which were picked shortly before the buds have fully opened. Straight after harvesting, the young, unfurled leaves aren't rolled but are immediately fired to minimise oxidation, giving white tea one of the most light and delicate flavors out of all the tea varieties. <p>White tea has the lowest caffeine content of all the teas because it's the least processed tea with the shortest oxidation time.</p>";
 imgWhite.style.display = "block";
 break;

 case "Math &141":
 message += "<p>Prerequisite(s): Math 098 or placement." + "</br>" + "<</p>";
 break;
 
 case "Math &142":
 message += "<p>Prerequisite(s): Math &141." + "</br>" + "</br>" + "You need to take more Math classes." + 
 "</br>" + "Next class to take: Math &151 - Calculus I.</p>";
 break;
 
case "Math &151":
 message += "<p>Prerequisite(s): Math &142 or placement test." + "</br>" + "</br>" + "You need to take more Math classes." + 
 "</br>" + "Next class to take: Math &152 - Calculus II.</p>";
 break;

case "Math &152":
 message += "<p>Prerequisite(s): Math &151 or placement test." + "</br>" + "</br>" + "You need to take more Math classes." + 
 "</br>" + "Next class to take: Math &163 - Calculus III.</p>";
 break; 
 
case "Math &163":
 message += "<p>Prerequisite(s): Math &152 or instructor permission." + "</br>" + "</br>" + "You need to take more Math classes." + 
 "</br>" + "Next class to take: Math 220 (Linear Algebra), Math 224 (Vector Calculus) and Math 238 (Differential Equations) in any order.</p>";
 break; 
 
case "Math 211":
 message += "<p>Prerequisite(s): Math 116 or Math &141 or placement test." + "</br>" + "Note: Math 116 is usually taken by Business and Social Sciences students." + "</br>" +
 "</br>" + "Next class to take: Math 220 (Linear Algebra), Math 224 (Vector Calculus) and Math 238 (Differential Equations) in any order to complete the 200-level Math classes.</p>";
 break; 
 
case "Math 220":
 message += "<p>Prerequisite(s): Math &163 or instructor permission." + "</br>" + 
 "</br>" + "Next class to take: Math 211 (Elements of Statistical Methods), Math 224 (Vector Calculus) and Math 238 (Differential Equations) in any order to complete the 200-level Math classes.</p>";
 break; 
 
case "Math 224":
 message += "<p>Prerequisite(s): Math &163." + "</br>" + 
 "</br>" + "Next class to take: Math 211 (Elements of Statistical Methods), Math 220 (Linear Algebra) and Math 238 (Differential Equations) in any order to complete the 200-level Math classes.</p>";
 break;
 
case "Math 238":
 message += "<p>Prerequisite(s): Math &152 or higher or instructor permission." + "</br>" + "Math &163 strongly recommended." + "</br>" + 
 "</br>" + "Next class to take: Math 211 (Elements of Statistical Methods), Math 220 (Linear Algebra) and Math 224 (Vector Calculus) in any order to complete the 200-level Math classes.</p>";
 break;
 
 default:

 }

document.getElementById("output").innerHTML = message;
}



// eslint-disable-next-line no-unused-vars
function resetImage(){
    // eslint-disable-next-line no-undef
    document.getElementById("selectTea").value = teaType;

}
