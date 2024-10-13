document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the stored data from localStorage
    const retrievedData = localStorage.getItem("hotelgoldendata");

    // Parse the JSON string back to an object
    if (retrievedData) {
        const data = JSON.parse(retrievedData);

        // Get the display container
        const displayContainer = document.getElementById("displayData");

        // Generate HTML content to display the data
        const dataHtml = `
            <p><strong>Full Name:</strong> ${data.name}</p>
            <p><strong>Email Address:</strong> ${data.email}</p>
            <p><strong>Phone Number:</strong> ${data.phone}</p>
            <p><strong>Check-In Date:</strong> ${data.checkin}</p>
            <p><strong>Check-Out Date:</strong> ${data.checkout}</p>
            <p><strong>Room Type:</strong> ${data.room}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Document Number:</strong> ${data["document-number"]}</p>
            <p><strong>Arrive From:</strong> ${data["arrive-from"]}</p>
            <p><strong>Going To:</strong> ${data["going-to"]}</p>
            <p><strong>Document Type:</strong> ${data["document-type"]}</p>
            <p><strong>Number Of Persons:</strong> ${data["number-of-persons"]}</p>
            <p><strong>Room Number:</strong> ${data["room-number"]}</p>
            <p><strong>Additional Requests:</strong> ${data.requests}</p>
        `;

        // Inject the generated HTML into the display container
        displayContainer.innerHTML = dataHtml;
    } else {
        document.getElementById("displayData").innerHTML = "<p>No data found.</p>";
    }
});
