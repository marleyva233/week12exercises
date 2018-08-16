//my original array
var myNumArray=[1.1, 3.2, 4.3, 5.4, 6.5];

//empty array
var roundedArray=[];


for (var i=0; i<myNumArray.length; i++){
	//rounding an array and pushing to another
	roundedArray.push(Math.round(myNumArray[i]));
}







//an empty array 
function randomNumbers(){
	var randomNumberArray=[];
//pushing random numbers to an array
	while(randomNumberArray.length<10)	{
	var randomNumber=Math.floor(Math.random()*100)+1;
	if (randomNumberArray.indexOf(randomNumber)===-1){
		randomNumberArray.push(randomNumber);}
		}
		
	document.getElementById("displayNumbers").innerHTML=randomNumberArray;

}



//next excercise is to work with date and time
function displayDate(){
	var myDate = new Date();

	var currentSs=myDate.getSeconds();
	if(currentSs<10){
		currentSs="0"+currentSs;
	}


	var currentHr=myDate.getHours();
		currentHr=currentHr-12;
	if (currentHr<12){
		currentSs=currentSs+" pm";
	}else{
		currentSs=currentSs+" am";
	}


	var currentMin=myDate.getMinutes();
	if(currentMin<10){
		currentMin="0"+""+currentMin;
	}


	var time=currentHr+":"+currentMin+":"+currentSs;


	var currentYear=myDate.getFullYear();
	var currentMonth=myDate.getMonth()+1;
		if (currentMonth<10){
			currentMonth="0"+currentMonth;
		}
	var currentDay=myDate.getDate();

	var date=currentDay+"/"+currentMonth+"/"+currentYear;

	var displayArea=document.getElementById("displayArea");
		displayArea.innerHTML=date +" "+ time;

setTimeout(function() {
    displayDate();
  }, 1000)
}
displayDate();






