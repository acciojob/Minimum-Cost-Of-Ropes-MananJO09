function calculateMinCost() {

  var inputElement = document.getElementById('rope-lengths').value;
  var arr = inputElement.split(',');
   arr.sort(function (a,b) {return a-b});

 var cost = 0;
 while (arr.length>1){
  var res = Number(arr[0])+ Number(arr[1]);
        arr.shift()
        arr.shift()
  arr.push(res);
  cost +=res;

  

  arr.sort(function (a,b) {return a-b})
 }
  //your code here
  document.getElementById("result").innerHTML = cost
  
}