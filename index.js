document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customerForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Create an object to hold the form data
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Log the form data to the console
        console.log("Form Data:", data);

        // Store the data object in local storage
        localStorage.setItem("hotelgoldendata", JSON.stringify(data));

        // Optionally, you can also do something with the form data here
        // For example, you could send it to a server using fetch() or XMLHttpRequest

        // Clear the form (optional)
        form.reset();
    });
});

