function calc(){
let hours=parseFloat(document.getElementById('a').value)||0;
let cost=parseFloat(document.getElementById('b').value)||0;
let requests=parseFloat(document.getElementById('c').value)||0;

// simplified model
let trainingCost = hours * cost;
let inferenceCost = requests * 0.20;

let total = trainingCost + inferenceCost;

let level = total < 100 ? "Low ML cost ✅" :
            total < 1000 ? "Moderate cost ⚖️" :
            "High ML cost ⚠️";

let insights = "";
if(hours > 100) insights += "Long training time. Optimize models.<br>";
if(cost > 5) insights += "Expensive instance. Consider alternatives.<br>";
if(requests > 10) insights += "High inference usage. Optimize endpoints.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + total.toFixed(2) + "<br><br>" +
"Training Cost: $" + trainingCost.toFixed(2) + "<br>" +
"Inference Cost: $" + inferenceCost.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
