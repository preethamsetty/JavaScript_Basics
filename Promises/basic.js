//example of promises

const myPromise = new Promise((resolve, reject) => {
    let isSuccess = true;
  
    if (isSuccess) {
      resolve("The operation was successful!");
    } else {
      reject("The operation failed!");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result); // This runs if the promise is resolved
    })
    .catch(error => {
      console.log(error); // This runs if the promise is rejected
    });

//--------------------------------------------------------------------------------
//Fetching user data

function getUserData(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: userId, name: "John Doe", age: 30 };
        resolve(user);
      }, 2000); // Simulating a 2 second delay
    });
  }
  
  getUserData(1)
    .then(user => {
      console.log("User Data:", user); // Logs: { id: 1, name: "John Doe", age: 30 }
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });

   // -------------------------------------------------------------------------

   //File uploading

   function uploadFile(file) {
    return new Promise((resolve, reject) => {
      const isUploadSuccess = Math.random() > 0.5; // Simulating a 50% success rate
  
      setTimeout(() => {
        if (isUploadSuccess) {
          resolve(`File ${file} uploaded successfully!`);
        } else {
          reject(`Failed to upload file: ${file}`);
        }
      }, 3000); // Simulating a 3 second delay
    });
  }
  
  uploadFile("photo.jpg")
    .then(message => {
      console.log(message); // Logs success message if upload succeeds
    })
    .catch(error => {
      console.error(error); // Logs error message if upload fails
    });
  