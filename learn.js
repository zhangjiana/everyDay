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
// 

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
			cloneTarget = clone2(target, map);
		})
		return cloneTarget;
	} else {
		return target;
	}
}




