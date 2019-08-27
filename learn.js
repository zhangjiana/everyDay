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







// 驼峰转连接符
// 
// 






// 给定一个数组，一个值。求数组中哪两个数的和为这个值
// 