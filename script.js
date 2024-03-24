// check if we have data in local storage or not 

const storedUserInformation = localStorage.getItem('userInformation');

if(storedUserInformation){
    console.log("data is present in the local storage");
    const userInformation = JSON.parse(storedUserInformation);
    document.getElementById("first-name").textContent = userInformation.firstName;
    document.getElementById("last-name").textContent = userInformation.lastName;
    document.getElementById("country").textContent = userInformation.country;
    document.getElementById("phone-number").textContent = userInformation.phoneNumber;
    document.getElementById("state").textContent = userInformation.state;
    document.getElementById("city").textContent = userInformation.city;
    document.getElementById("village").textContent = userInformation.village;

}else{
    userInformationTobeStored();
}

function userInformationTobeStored(){
    const firstName = prompt('Enter your first Name!!');
    const lastName = prompt('Enter your last Name!!');
    const country = prompt('Enter country name!!');
    const phoneNumber = prompt('Enter your phoneNumber!!');
    const state = prompt('Enter your state');
    const city = prompt('Enter city!!');
    const village = prompt('Enter the village');

    const userInformationObject = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    }
    // stored the data in local storage 
    localStorage.setItem('userInformation', JSON.stringify(userInformationObject));
   // show to the user 
   document.getElementById("first-name").textContent = userInformation.firstName;
   document.getElementById("last-name").textContent = userInformation.lastName;
   document.getElementById("country").textContent = userInformation.country;
   document.getElementById("phone-number").textContent = userInformation.phoneNumber;
   document.getElementById("state").textContent = userInformation.state;
   document.getElementById("city").textContent = userInformation.city;
   document.getElementById("village").textContent = userInformation.village;

   
}



