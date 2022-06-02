alert ("Hello");


let btn = document.getElementById('btn');

let content = document.getElementById('content');

function getdata(){
	console.log("Started getData")
	url = "new.txt";
	fetch(url).then((response)=>{
		console.log("inside first them");
		return response.text();
	}).then()=>{
		console.log(data);
	}
}

console.log("Before getData");
getdata()
console.log("After getData");