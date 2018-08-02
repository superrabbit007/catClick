



let cat1 = document.getElementsByClassName('cat0');
// document.body.innerHTML = '';
console.log(cat1);
let cat1Text = cat1[0].outerHTML;
let cat2Text = cat1Text;
let cat3 = cat2 = cat1;

let cats = [cat1, cat2, cat3];

for (var i = 0; i < cats.length; i++) {
	let cat = cats[i];
	// cat[0].classList.add('cat'+(i+1));
	let cat111 = cat[0].innerHTML;
	let catName = "cat" + i ;
	let elem = document.createElement('div');
	elem.innerHTML = cat111;
	elem.classList.add('cat'+(i+1));
	let a = elem;
	console.log(a);
	console.log(elem.children[0]);
	elem.children[0].innerHTML = "cat" + (i+1) ;
	elem.children[1];
	//将图片的地址放在列表中，根据对应的i， 加载不同的图片，写入innerHTML中


	
	console.log(elem.children);
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
}