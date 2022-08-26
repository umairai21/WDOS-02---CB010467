let btnSubmit=document.getElementById("donate");
btnSubmit.addEventListener("click",donate);

function donate(){
    
    console.log("Cardholder Name:",document.getElementById("name").value);
    console.log("Card No:",document.getElementById("card-number").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Expiry Date",document.getElementById("expiry").value);

    let amount=document.querySelector("input[name='amount-donated']:checked").value;
console.log("amount-donated :"+amount);

}

//add event listener

let amount = document.querySelectorAll("input[name='amount-donated']");

for (let i = 0; i < amount-donated.length; i++) {
    amount-donated[i].addEventListener("change", checkAmountDonated);
}

//checking the slected option

function checkAmountDonated() {
    if (value == "100") {
        console.log("Donated amount 100 LKR");
    }
    else if (value == "250") {
        console.log("Donated amount 250 LKR");
    }
    else if (value == "500") {
        console.log("Donated amount500 LKR");
    }
    else if (value == "1000") {
        console.log("Donated amount 1000 LKR");
    }
    else if (value == "2500") {
        console.log("Donated amount 2500 LKR");
    }
    else if (value == "5000") {
        console.log("Donated amount 5000 LKR");
    }
    else {
        console.log("Donated amount 10000 LKR");
    }
}

function notifyFunction() {

    let cardnumber = document.getElementById("card-number").value
    if (cardnumber == "")
    {
        alert("Your donation is unsuccessful, Please try again");
    }
    else{
        alert("Your donation is successful, Thank you!")
    }
  }





  const durationConditions = (types, durations) => {
    if (types === "local" && durations === "three_hours") {
        return 0
      } 
      else if ((types === "foreign" && durations === "three_hours") || (types === "foreignChild" && durations === "three_hours")) {
        return 1000
      }
      else if (types === "local" && durations === "half_a_day") {
        return 250
      }
      else if ((types === "foreign" && durations === "half_a_day") || (types === "foreignChild" && durations === "half_a_day")) {
        return 500
      }
      else if (types === "local" && durations === "one_day") {
        return 500
      }
      else if ((types === "foreign" && durations === "one_day") || (types === "foreignChild" && durations === "one_day")) {
        return 1000
      }
    }
    

    