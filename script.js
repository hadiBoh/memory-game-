const imgIndex = [2, 1, 9, 3,7,14,9,7,14,2,13,8,3,13,8,1];
const shuffledArray = imgIndex.sort((a, b) => 0.5 - Math.random());
const secondShuffledArray = shuffledArray.sort((a, b) => 0.5 - Math.random());
var divs = document.querySelectorAll('.cube');
var permision = 0;

for (var main = 0; main < 16; main++) {
		var backImage = document.createElement("img");
		backImage.classList.add("back-side");
		backImage.setAttribute("src","images/main.jpg");
		divs[main].appendChild(backImage);
}
for (var i = 0; i < 16; i++) {	
	if (secondShuffledArray[i] < 10) {
		var forntImage = document.createElement("img");
		forntImage.classList.add('img'+i);
		forntImage.classList.add("front-side");
		forntImage.setAttribute("src","images/0"+secondShuffledArray[i]+"."+"jpg");
		divs[i].appendChild(forntImage);
		}else{
		var forntImage = document.createElement("img");
		forntImage.classList.add('img'+i);
		forntImage.classList.add("front-side");
		forntImage.setAttribute("src","images/"+secondShuffledArray[i]+"."+"jpg");
		divs[i].appendChild(forntImage);

		}
}

setTimeout(()=>{
var allDivs = document.querySelectorAll('.cube');
for (var i = 0; i < allDivs.length; i++) {

 allDivs[i].style.transform = "rotateY(180deg)"

}
permision = 1;
},10000);
/************ click handle ************/
var cubes = document.querySelectorAll(".cube");
 var f=0;  
cubes.forEach(cube => {
  cube.addEventListener('click', function handleClick(event) {
	  event.preventDefault;
	  var winCheck = document.querySelector(".congrat");
	if (permision == 1 && !winCheck.classList.contains("end")) {
	  var allofthem = document.querySelectorAll(".cube");
	  cube.style.transform = "rotateY(0deg)"

	cube.setAttribute('name', 'clicked');
	var j=0;
	for(var i=0; i<cubes.length; i++){
		if(cubes[i].getAttribute("name")=="clicked"){
			j++;
		}

	}
		if(j==2){
			
			var moraba = document.querySelectorAll(".cube");
			for(var k=0; k < moraba.length; k++){
				if(moraba[k].getAttribute("name") == "clicked")
				{
					moraba[k].classList.add("clkt");
					moraba[k].removeAttribute("name")
				}
			}
			var clked = document.querySelectorAll(".clkt");
				if(clked[0].childNodes[1].getAttribute('src').substr(7,2) === clked[1].childNodes[1].getAttribute('src').substr(7,2)){
					clked[0].classList.remove("clkt")
					clked[1].classList.remove("clkt")	
					clked[0].classList.add("fin")
					clked[1].classList.add("fin")							
				
				}else{

					setTimeout(()=>{
						clked[0].style.transform = "rotateY(180deg)"	
						clked[1].style.transform = "rotateY(180deg)"					
					},1000)
					clked[0].classList.remove("clkt")
					clked[1].classList.remove("clkt")
					f++;
					
				}
				
		}
    		
	

/**********attempt number*********/
var attemptSection = document.querySelector(".attempt");
var att = document.querySelector(".attemptP");
if(att){
attemptSection.removeChild(att);
}
var attempt = "Number of wrong answers = "
	
	var attemptP = document.createElement("p");	
	attemptP.classList.add("attemptP");
	attemptP.innerText = attempt + f;

	attemptSection.appendChild(attemptP);


	var colorP = document.querySelector(".attemptP");	
	if (f === 0){
		colorP.style.color = "green";
	}else if(0 < f <= 3){
		colorP.style.color = "orange";
	}else if(f >= 4){
		colorP.style.color = "red";
	}
/********** end of attempt number********/


var conter=0;
for(var v=0; v<allofthem.length; v++){
	if(allofthem[v].classList.contains("fin")){conter++}
}
	var txt = "Congrats you won!!!!"
	if(conter == 16){
		var areaSection = document.querySelector(".congrat");
		var txt = document.createElement("p");
		txt.classList.add("message");
		txt.innerText = "Congrats You've Won !!!";
		areaSection.classList.add("end");
		areaSection.appendChild(txt);
	}
	

	}  // permision to click
  });
});
