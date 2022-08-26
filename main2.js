var ticketPrices = new Array();
ticketPrices["localPrice"] = 2500;
ticketPrices["foreignPass"] = 3000;
ticketPrices["foreignChild"] = 2500;
ticketPrices["childPass16"] = 1000;
ticketPrices["childPass6"] = 500;

var theForm = document.getElementById("ticketsJS")

function getTicketPrices() {
    var ticketSelected = 0;

    var theForm = document.forms["ticketsJS"];

    var selectedTicket = theForm.elements["ticketType"];

    ticketSelected = ticketPrices[selectedTicket.value];

    return ticketSelected;
}

function getTicketPrice() {
    var ticketPrice = getTicketPrice();

    document.getElementById("totalPrice").innerHTML = "Price for ticket$"+ticketPrice;
}

var btnOrder = document.getElementById("addorder");

btnOrder.addEventListener("click", event => {
    event.preventDefault();

    getTicketPrice();

})


