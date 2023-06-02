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

function calculateMinCost(arr, n) {
	let minHeap = new PriorityQueue((a, b) => a - b);
	for (let i = 0; i < n; i++) {
	minHeap.push(arr[i]);
	}

	let res = 0;
	while (minHeap.size() > 1) {
	let first = minHeap.pop();
	let second = minHeap.pop();
	
	res += first + second;
	minHeap.push(first + second);
	}
	return res;
}

class PriorityQueue {
	constructor(comparator) {
	this._heap = [];
	this._comparator = comparator;
	}
	
	size() {
	return this._heap.length;
	}
	
	isEmpty() {
	return this.size() === 0;
}

peek() {
	return this._heap[0];
}

push(value) {
	this._heap.push(value);
	this._siftUp();
	}

pop() {
	const poppedValue = this.peek();
	const bottom = this.size() - 1;
	if (bottom > 0) {
	this._swap(0, bottom);
	}
	this._heap.pop();
	this._siftDown();
	return poppedValue;
	}
	
	_parent(i) {
	return ((i + 1) >>> 1) - 1;
	}
	
	_left(i) {
	return (i << 1) + 1;
	}
	
	_right(i) {
	return (i + 1) << 1;
	}
	
	_greater(i, j) {
	return this._comparator(this._heap[i], this._heap[j]) < 0;
	}
	
	_swap(i, j) {
	[this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
	}
	
	_siftUp() {
	let node = this.size() - 1;
	while (node > 0 && this._greater(node, this._parent(node))) {
	this._swap(node, this._parent(node));
	node = this._parent(node);