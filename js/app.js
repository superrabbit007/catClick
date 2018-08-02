let ele = document.getElementsByClassName('my-elem');
let ele1 = document.getElementsByClassName('my-elem2');

let catName = 'cat' + 1;
let count =0 ,count1 = 0;


let totalCount = document.getElementsByClassName('total');
let totalCount2 = document.getElementsByClassName('total2');


console.log("test");







ele[0].addEventListener('click', function() {
	count +=1;
	console.log(totalCount);
	console.log(count);
	totalCount[0].textContent = "Total clicks is " + count + "." 
	// textCount(count);

});


	const t1 = document.querySelector('.cat');
	const img = document.querySelector('.my-elem');
	const t2img = '<img class = "my-elem2" src="img/cat.jpg">';
	const t2title = '<h3>ele2</h3>';
	const t2click = '<p class = "total2">Total clicks is 0.</p>';
	const t2 = document.createElement('div');
	t2.insertAdjacentHTML('afterbegin', t2img);
	t2.insertAdjacentHTML('afterbegin', t2title);
	t2.insertAdjacentHTML('beforeend', t2click);
	t1.appendChild(t2);



function cat() {
	const t1 = document.querySelector('.cat1');
	const t1Text = t1.outerHTML;
	t1.insertAdjacentHTML('afterend', t1Text);
	const t2 = document.createElement('div');
	t1.appendChild(t2);
}

// cat();

function textCount(count) {
	let cat = document.getElementsByClassName('total1');
	totalCount[0].textContent = "Total clicks is " + count + "." 

}


ele1[0].addEventListener('click', function() {
	count1 +=1;
	// console.log(totalCount);
	// console.log(count);
	totalCount2[0].textContent = "Total clicks is " + count1 + "." 
	// textCount(count);

});