// console.log("Linked"); // sanity check

// select all needed elements from the DOM and check selections
let confidenceField = document.querySelector("#confidenceField");
// console.log(confidenceField);
let entryField = document.querySelector("#entryField");
// console.log(entryField);
let dateField = document.querySelector("#dateField");
// console.log(dateField);
let submitBtn = document.querySelector("#submitBtn");
// console.log(submitBtn);
let entryBlock = document.querySelector("#entryBlock")
// console.log(entryBlock);

// define and empty array to keep journal entries
let entryArray = [];

// create a callback function for on click event
let formSubmission = (event) => {
    event.preventDefault(); // keep form from reloading
    // console.log("callback works"); // check that call back is being called

    // define and object using object literal notation with form input values as property values
    let newEntry = {
        confidence : confidenceField.value,
        entry : entryField.value,
        date : dateField.value,
    }
    // console.log(newEntry) // check that object is being created
    entryArray.push(newEntry); // push object to array defined on line 16
    displayEntries(entryArray); // call function to display entries and pass array
}

// arrow function to display entries from array
let displayEntries = (entryArray) => {
    // console.log("array function called"); // check that function is being called
    let entryBlockString = ""; // define an empty string to build string to display
    entryArray.forEach(entry => {
        entryBlockString = `${entryBlockString} ${entry.entry} \n ${entry.confidence} \n ${entry.date}\n`
        console.log(entryBlockString);
        // iterate through array and for each element in the array append the new element to the string defined on line 37
    });
    entryBlock.innerText = `${entryBlockString}`; // display built string as innerText in empty div
}

// call callback function when form submit button is clicked
submitBtn.addEventListener("click", formSubmission);