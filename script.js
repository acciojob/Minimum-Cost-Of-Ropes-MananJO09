button.onclick = function () {
  const inputField = document.querySelector('input[type="text"]');
  const result = document.getElementById('result');
  
  // Get the input values and convert them into an array of integers
  const arr = inputField.value.split(',').map(Number);
  const n = arr.length;
  
  const minCost = calculateMinCost(arr, n);
  // Update the result div with the calculated minimum cost
  result.textContent = minCost;
}

function calculateMinCost(arr,n) {
  //your code here
	let pq=[];
	for (let i = 0; i < n; i++) {
		pq.push(arr[i]);
	}
	pq.sort(function (a,b) {
		return a-b;
	});
	let res=0;
  while (pq.length > 1) {
		// Extract shortest two ropes from pq
		let first = pq.shift();
		let second = pq.shift();

		// Connect the ropes: update result
		// and insert the new rope to pq
		res += first + second;
		pq.push(first + second);
		pq.sort(function(a,b){return a-b;});
	}
    return res;
}  