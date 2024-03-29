console.log(
  '========= API getElementsByTagName() to select element by tag name ',
)
const h2Element = document.getElementsByTagName('h2')
console.log(h2Element[1].innerHTML)
h2Element[1].innerHTML = 'My Hobbies'

console.log('========= API getElementById() to select element by ID ')
const elementProfile = document.getElementById('profile') // select the element by id name
console.log(elementProfile.innerHTML)

console.log(
  '========= API getElementsByClassName() to select element by class name ',
)
const elementLi = document.getElementsByClassName('liItem')
console.log(elementLi[1].innerHTML)

console.log('========= API querySelector() to select element by id ')
const elementProfileByQuery = document.querySelector('#profile')
console.log(elementProfileByQuery)

console.log('========= API querySelector() to select element by class ')
const elementByQuery = document.querySelector('.liItem')
console.log(elementByQuery)

console.log('========= API querySelectorAll() to select all element by class ')
const elementByQueryAll = document.querySelectorAll('.liItem');
elementByQueryAll[2].innerHTML = "Oracle Database"
console.log(elementByQueryAll[2]);

console.log('=========Changing the attribute of an element =====')
const elementmyProfile = document.querySelector("#myProfile");
elementmyProfile.setAttribute("href", " https://www.linkedin.com/")
console.log(elementmyProfile);

console.log('=========Changing the CSS properties of an element =====')
const elementTechstack = document.querySelector("#techstack");
elementTechstack.style.color = "red";
elementTechstack.style.fontFamily = "Arial";

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);


console.log("========== Remove the Agile and JIRA ==========");
const elementULList = document.querySelector("#list");
const elementlist = document.querySelector("#liItem")
elementULList.removeChild(elementlist)

console.log('=========Changing the CSS properties of an element =====')
const elementMyProfile = document.querySelector("#profile");
elementMyProfile.style.color = "rgb(6, 206, 190)"
elementMyProfile.style.fontFamily = 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans' ;


console.log("========= Adding Elemement ========");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

// document.body.appendChild();
console.log("===== Event ======");
function show (){
  console.log( "Click event...... ");
}

const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click",()=>{
    console.log("Listening click event");
   // alert("You have cliclked on address")
   const inputVAlue = prompt("This is the title", "Default Value");
   console.log(inputVAlue);
});

elementAddress.addEventListener("mouseover",()=>{
  console.log("Mouse over......");
  elementAddress.style.color= "red"
});

const isEvenButton = document.querySelector("#isEventButton");
isEvenButton.addEventListener("click",()=>{
   const inputValue=  prompt("Please Enter number to check", 0);
   const givenNumber = +inputValue;
   if (inputValue == null || isNaN(givenNumber)|| givenNumber<0) {
     alert("Invalid Value");
   }else{
      const result =  inputValue%2==0 ? true : false 
      if(result){
        alert("Given Number is Even");
    
      }else{
        alert("Given number is Odd")
      }
   }
 
 })

 const confirmElement = document.querySelector("#confirm");
 confirmElement.addEventListener("click", ()=>{
   const result =  confirm("Are you sure..")
   console.log(result);
 })








