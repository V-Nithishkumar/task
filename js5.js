
let selectedTitle = "";
let selectedPrice = 0;

// value storing array
let titles = [];
let times = [];
let quantities = [];
let emails = [];
let totals = [];

function selectMovie(name, price, availableTimes) {
    selectedTitle = name;
    selectedPrice = price;

    document.getElementById("display-movie").value = name;

    // movi time showing
    let dropdown = document.getElementById("showtime");
    dropdown.innerHTML = "<option value=''>-- Choose a time --</option>";
    
    for (let i = 0; i < availableTimes.length; i++) {
        dropdown.innerHTML += "<option value='" + availableTimes[i] + "'>" + availableTimes[i] + "</option>";
    }
    calculateTotal();
}
//ticket calculation
function calculateTotal() {
    let qtyInput = document.getElementById("quantity").value;
    let qty = Number(qtyInput);

    if (selectedPrice > 0 && qty > 0) {
        let cost = selectedPrice * qty;
        document.getElementById("live-total").innerText =cost+"Rs";
    } else {
        document.getElementById("live-total").innerText = "0Rs";
    }
}

function clearForm() {
    document.getElementById("booking-form").reset();
    document.getElementById("showtime").innerHTML = "<option value=''>-- Choose a time --</option>";
    document.getElementById("live-total").innerText = "0Rs";
    selectedTitle = "";
    selectedPrice = 0;
}

//show in movie dash
function showTickets() {
    let search = document.getElementById("search-filter").value.toLowerCase()
    let container = document.getElementById("tickets-container")
    let htmlBlock = ""

    for (let i = 0; i < titles.length; i++) {
        if (titles[i].toLowerCase().indexOf(search) !== -1) {
            htmlBlock += "<div style='border: 1px solid black; padding: 10px; margin: 10px 0;'>"
            htmlBlock += "<h4>" + titles[i] + "</h4>"
            htmlBlock += "<p>" + times[i] + " | " + quantities[i] + " tickets | Email: " + emails[i] + "</p>"
            htmlBlock += "<p><strong>Paid: Rs" + totals[i] + "</strong></p>"
            htmlBlock += "<button type='button' onclick='cancelTicket(" + i + ")'>Cancel Ticket</button>"
            htmlBlock += "</div>"
        }
    }
    container.innerHTML = htmlBlock;
}
//delete booking
function cancelTicket(index) {
    titles.splice(index, 1)
    times.splice(index, 1)
    quantities.splice(index, 1)
    emails.splice(index, 1)
    totals.splice(index, 1)
    showTickets();
}
// submit the movie
function confirmBooking(event) {
    event.preventDefault();

    let time = document.getElementById("showtime").value;
    let qtyInput = document.getElementById("quantity").value
    let qty = Number(qtyInput)
    let email = document.getElementById("email").value.trim()

    if (selectedTitle === "") return alert("Error: Please select a movie box button first.");
    if (time == "") return alert("Error: Please select a showtime choice.");
    if (isNaN(qty) || qty <= 0) return alert("Error: Please type a valid number of tickets (greater than 0).");
    if (email == "") return alert("Error: Email field cannot be left blank.");
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) return alert("Error: Invalid email address formatting.");

    let finalBill = selectedPrice * qty;
    alert(" Email Sent!\nTo: " + email + "\nMovie: " + selectedTitle + "\nShowtime: " + time + "\nTotal: Rs." + finalBill);

    titles.push(selectedTitle);
    times.push(time);
    quantities.push(qty);
    emails.push(email);
    totals.push(finalBill);

    showTickets();
    clearForm();
}
