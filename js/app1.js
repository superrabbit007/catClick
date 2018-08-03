

let cat1 = document.getElementsByClassName('cat0');
// console.log(cat1);
let cat1Text = cat1[0].outerHTML;
let cat2Text = cat1Text;
let cat5 = cat4 = cat3 = cat2 = cat1;

let cats = [cat1,cat2, cat3, cat4, cat5];
// document.body.innerHTML = '';


src1 = '<img class = "my-elem" src = "img/cat1.jpg">';
src2 = '<img class = "my-elem" src = "img/cat2.jpg">';
src3 = '<img class = "my-elem" src = "img/cat3.jpg">';
src4 = '<img class = "my-elem" src = "img/cat4.jpg">';
src5 = '<img class = "my-elem" src = "img/cat5.jpg">';

let catsSrc = [src1,src2, src3, src4, src5];



function click11() {

	document.querySelector('.c1').addEventListener('click', function() {
		let current = document.getElementsByClassName('cat');
		let am1 = document.getElementsByClassName('cat1');
		let el1 = document.querySelector('.cat');
		console.log(current[0].innerHTML);
		console.log(am1);
		let aa = document.createElement('div');
		aa.innerHTML = am1[0].innerHTML;
		aa.classList.add('cat1');
		let bb = document.getElementsByClassName('container');
		bb[0].appendChild(aa);
		el1.remove();



	});
}





function sidebarClick() {


}


// sidebar的html绘制 

let side1 = document.getElementsByClassName('c0');
for (var i = 0; i < cats.length; i++) {
	let side = side1[0].innerHTML;

	let eleSide = document.createElement('li');
	eleSide.innerHTML = side;
	eleSide.classList.add('c'+ (i+1));
	console.log(eleSide.children);
	eleSide.children[0].innerText = "cat" + (i+1);

	let sideBar = document.getElementsByClassName('list');
	sideBar[0].appendChild(eleSide);
	if(i === 4) {
		side1[0].remove();
	}
}







for (var i = 0; i < cats.length; i++) {

	let cat = cats[i];
	// console.log(cat);
	//将列表中每只猫的innerHTML赋值给catInner
	let catInner = cat[0].innerHTML;
	//每只猫重命名
	let catName = ("cat" + (i+1));
	//新建div,包裹每只猫的代码
	let elem = document.createElement('div');
	elem.innerHTML = catInner;
	//从第二只猫开始，所以class从cat2开始
	elem.classList.add('cat'+(i+1));
	// let a = elem;
	// console.log(a);
	// console.log(elem.children[0]);
	elem.children[0].textContent = catName ;
	//将图片的地址放在列表中，根据对应的i， 加载不同的图片，写入innerHTML中
	elem.children[1].outerHTML = catsSrc[i];

	// console.log(elem);
	
	// console.log(elem.children);
	let count = 0;
	elem.addEventListener('click', (function(catDiv,countN) {
		return function() {
			countN += 1;
			console.log(countN);
			console.log(catDiv);
			// catDiv.children[1].innerText = catName;

			catDiv.children[2].textContent = 'Total clicks is ' + countN +'.';
			
		};
	})(elem,count));

	document.getElementsByClassName('cat')[0].appendChild(elem);
	//当添加完5张图片后，删除原始的图片(如果下面的条件中i<4时，就删除原始图片，则会报错，图片加载不完)
	if(i === 4) {
		let el = document.querySelector('.cat0');
		el.remove();
	}
}