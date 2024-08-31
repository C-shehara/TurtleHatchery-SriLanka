const txtname=document.getElementById("name");
const txtnickname=document.getElementById("nickname");
const btnsubmit=document.getElementById("submit");
const tboutput=document.getElementById("output")
var response=[]//an array to capture user inputs (a empty array)

txtname.addEventListener("click",updateTable);//updateTable add to storage and update the tble
txtnickname.addEventListener("click",updateTable);

function updateTable(){
  //building a JSON object store name and nickname
  const jsonData={"name":txtname.value,"nickname":txtnickname.value};
  //adding the JSON object to ressponse array
  response.push(jsonData);
  //adding response array to local storage
  localStorage.setItem('details',JSON.stringify(response));

  //building the structureof header row
  let nameList=`<tr><th>Name</th><th>Nickname</th></tr>`;

  //using a for loop to go through the response array
  for(entry in response){
    nameList+=`<tr class='entry'><td>${response[entry].name}</td><td>${response[entry].nickname}</td>s</tr>`
  }

  //output the response objects in a table
  tboutput.innerHTML=nameList
//log the localstorage to console
console.log(localStorage)
}