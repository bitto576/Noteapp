// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4NhKzLB1hgI7KVESI39ZBuL-7yi13QiI",
    authDomain: "notes-3-8b166.firebaseapp.com",
    projectId: "notes-3-8b166",
    storageBucket: "notes-3-8b166.appspot.com",
    messagingSenderId: "938087077523",
    appId: "1:938087077523:web:308ab8de28939ee6cfdf66",
    measurementId: "G-6RD8TCCW4L"
  };

firebase.initializeApp(firebaseConfig);

// Initialize the Firebase Realtime Database
const database = firebase.database();

// Define a reference to your data
const dataRef = database.ref("your-data-path");

// Function to add data to Firebase
function addData(title, description, imageLink) {
    dataRef.push({
        title: title,
        description: description,
        imageLink: imageLink
    });
}

// Function to read data from Firebase
function readData(callback) {
    dataRef.on("value", (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}

// Function to update data in Firebase
function updateData(key, newData) {
    dataRef.child(key).update(newData);
}

// Function to delete data from Firebase
function deleteData(key) {
    dataRef.child(key).remove();
}

// Add event listeners to buttons
document.getElementById("addButton").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const imageLink = document.getElementById("imageLink").value;
    addData(title, description, imageLink);
});

document.getElementById("updateButton").addEventListener("click", () => {
    // Implement update logic here
});

document.getElementById("deleteButton").addEventListener("click", () => {
    // Implement delete logic here
});

// Call readData to display data
readData((data) => {
    // Handle retrieved data and display it in the dataList div
    // You can use data.forEach() to loop through the data and display it as needed
});
