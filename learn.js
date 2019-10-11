// 数组中的对象去重
// var brr = [{id: 1, name: 'a'}, {id: 2, name: 'a'}, {id: 3, name: 'b'}, {id: 4, name: 'b'}]
// 去除数组的对象中重复的， 使最后输出['a', 'b']
 Array.prototype.unique = function () {
 	this.map((item) => {
 		this[item.id - 1] = item.name
 	})
 	var res = new Set(this);
 	var result = Array.from(res);
 	return result;
 }

 // 数组去重
 // 
 // 
Array.prototype.unique2 = function () {
	var res = [];
	for (var i = 0; i < this.length; i++) {
		if (res.indexOf(i) === -1) {
			res.push(i);
		}
	}
	return res;
}

Array.prototype.unique3 = function () {
	var obj = {};
	var res = [];
	for (var i = 0; i < this.length; i++) {
		if (!obj[this[i]]) {
			obj[this[i]] = 1;
			res.push(this[i]);
		}
	}
	return res;
}
Array.prototype.unique4 = function () {
	return [...new Set(this)]
}

// 多维数组变一维数组
function flatten(arr) {
	return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])
}
// 如果浏览器支持数组的flat函数
// arr.flat(Infinity)

// 连接符转驼峰
var str = 'pop-up'
str.replace(/-\D/, function(a) {
	return a.charAt(1).toUpperCase();
})
// 驼峰转连接符
var str = 'popUp'
str.replace(/[A-Z]/, function(a) {
	return '-' + a.toLowerCase();
})


// 给定一个数组，一个值。求数组中哪两个数的和为这个值

function findSome(arr, target) {
	var res = [];
	for(let i = 0; i < arr.length; i++) {
		for(let j = 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				res.push([i, j])
			}
		}
	}
	return res;
}

function findSome2(arr, target) {
	var res = []
	var _some = function(arrs, tar) {
		if(arrs.length === 0){
			return false
	    }
		for (let i = 0; i < arrs.length; i++) {
			if (arrs[0] + arrs[i] === tar) {
				res.push[arrs[0], arrs[i]];
			}
		}
		console.log(arrs);
		arrs.shift();
		return _some(arrs, tar);
	}
	_some(arr, target);
	return res;
}

// debounce 防抖函数
// 触发事件后，n秒后执行，如果n秒内又触发了这个事件，则重新计数

function debounce(fn, delay) {
	let timer = null;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	}
}

// 深克隆
// 基本实现
function clone(target) {
	if (typeof target === 'object') {
		let obj = Array.isArray(target) ? [] : {};
		for (const key in target) {
            obj[key] = clone(target[key], map);
        }
		return obj;
	} else {
		return targe;
	}
}
// 性能优化
function forEach(array, interte) {
	let index = -1;
	while(++index < array.length ) {
		interte(array[index], index)
	}
	return array;
}
function clone2(target, map = new WeakMap()) {
	if (typeof target === 'object') {
		let isArray = Array.isArray(target);
		let cloneTarget = isArray ? [] : {};
		if (map.get(target)) {
			return map.get(target)
		}
		map.set(target, cloneTarget);
		let keys = isArray ? undefined : Object.keys(target);
		forEach(keys || target, (value, key) {
			if (keys) {
				key = value
			}
			cloneTarget[key] = clone2(target[key], map);
		})
		return cloneTarget;
	} else {
		return target;
	}
}

// 冒泡排序
// 
// 
function popSort(arr) {
	for (let i = 0; i < arr.length; i++ ){
		for(let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr
}
// 快速排序

function quickSort(arr) {
	// 如果数组为空，则返回
	if (arr.length <= 1) { return arr; }
	var index = parseInt(arr.length / 2)
	// 将中间的数取出来
	var mid = arr.splice(index, 1)[0];
	var left = [];
	var right = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < mid) {
			left.push(arr[i])
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([mid], quickSort(right))
}

// throttle 节流函数
// 在一定时间内，某事件只触发一次, 如果单位时间内多次触发，只有一次生效。
function throttle(fn, delay = 500) {
	let flag = true;
	return (...args) {
		if (!flag) = return;
		flag = false;
		setTimeout(() => {
			fn.apply(this, args);
			flag = true;
		}, delay);
	}
}

// 模版引擎实现
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
  name: '姓名',
  age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined

function render(template, data) {
	let reg = /\{\{(\w+)\}\}/;
	if (reg.test(template)) {
		const name = reg.exec(template)[1];
		template = template.replace(reg, data[name]);
		return render(template, data);
	}
	return template;
}

// 手写promise

function MyPromise(executor) {
	let self = this;
	self.status = 'pending';
	self.value = undefined;
	self.reason = undefined;
	self.onResolvedCallbacks = [];
	self.onRejectedCallbacks = [];
	function reslove(val) {
		if (self.status === 'pending') {
			self.status = 'reslove';
			self.value = val;
			self.onResolvedCallbacks.forEach(fn => { fn() })
		}
	}

	function reject(reason) {
		if (self.status === 'pending') {
			self.status = 'reject';
			self.reason = reason;
			self.onRejectedCallbacks.forEach(fn => { fn() })
		}
	}

	executor(reslove, reject)
}
MyPromise.prototype.then = function(onFulfiled, onFailed) {
	let self = this;
	let promise2 = new MyPromise(function(reslove, reject) {
		// 如果没有执行完前一个函数，状态没有改变，就先将回调函数存起来，等到执行完之后，再按顺序执行回调
		if (self.status === 'pending') {
			self.onResolvedCallbacks.push(function() {
				try {
					let y = onFulfiled(self.value)
					reslove(y)
				} catch(e) {
					reject(e)
				}
			})
			self.onRejectedCallbacks.push(function() {
				try {
					let y = onFailed(self.reason)
					reslove(y)
				} catch(e) {
					reject(e)
				}
			})
		}

		if (self.status === 'reslove') {
			try {
				let x = onFulfiled(self.value)
				reslove(x)
			} catch(e) {
				reject(e)
			}
			
		}

		if (self.status === 'reject') {
			try {
				let x = onFailed(self.reason)
				reslove(x)
			} catch(e) {
				reject(e)
			}
		}
	})
	return promise2;
}

let my = new MyPromise((reslove, reject) => {
	console.log('start');
	reslove('123');
}).then((val) => {
	console.log('get' + val);
}, (err) => {
	console.log('err' + err);
})
console.log('end')


// 正则匹配 , 12345 => 12,345
str.split('').reverse().join('').replace(/(\d{3}\B)/g, '$1,').split('').reverse().join('');


























































