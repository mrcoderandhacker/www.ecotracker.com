//this code will not beused for now
// Function to handle adding data
function addData() {
    // Get user input
    var zone = document.getElementById("zone").value;
    var date = document.getElementById("date").value;
    var garbageProduced = parseFloat(document.getElementById("garbageProduced").value);
    var recyclableGarbage = parseFloat(document.getElementById("recyclableGarbage").value);
    var nonRecyclableGarbage = parseFloat(document.getElementById("nonRecyclableGarbage").value);

    // Create an object to store the data
    var data = {
        zone: zone,
        date: date,
        garbageProduced: garbageProduced,
        recyclableGarbage: recyclableGarbage,
        nonRecyclableGarbage: nonRecyclableGarbage
    };

    // Get existing data from local storage or initialize empty array
    var existingData = JSON.parse(localStorage.getItem("garbageData")) || [];

    // Add new data to the array
    existingData.push(data);

    // Save updated data to local storage
    localStorage.setItem("garbageData", JSON.stringify(existingData));

    // Clear input fields
    document.getElementById("zone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("garbageProduced").value = "";
    document.getElementById("recyclableGarbage").value = "";
    document.getElementById("nonRecyclableGarbage").value = "";

    // Optional: Display success message or update UI
    alert("Data added successfully!");
}

// Function to handle adding recovery data
function addRecoveryData() {
    // Get user input
    var treatedGarbage = parseFloat(document.getElementById("treatedGarbage").value);
    var recycledRecyclableGarbage = parseFloat(document.getElementById("recycledRecyclableGarbage").value);
    var treatedNonRecyclableGarbage = parseFloat(document.getElementById("treatedNonRecyclableGarbage").value);

    // Create an object to store the recovery data
    var recoveryData = {
        treatedGarbage: treatedGarbage,
        recycledRecyclableGarbage: recycledRecyclableGarbage,
        treatedNonRecyclableGarbage: treatedNonRecyclableGarbage
    };

    // Get existing recovery data from local storage or initialize empty object
    var existingRecoveryData = JSON.parse(localStorage.getItem("recoveryData")) || {};

    // Add new recovery data to the object
    existingRecoveryData = recoveryData;

    // Save updated recovery data to local storage
    localStorage.setItem("recoveryData", JSON.stringify(existingRecoveryData));

    // Clear input fields
    document.getElementById("treatedGarbage").value = "";
    document.getElementById("recycledRecyclableGarbage").value = "";
    document.getElementById("treatedNonRecyclableGarbage").value = "";

    // Optional: Display success message or update UI
    alert("Recovery data added successfully!");
}
