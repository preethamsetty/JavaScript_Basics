function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  async function fetchAsync() {
    console.log("Fetching data...");
    
    const result = await fetchData();  // Waits for fetchData to resolve
    console.log(result);  // Logs: Data fetched!
    
    console.log("Done!");
  }
  
  fetchAsync();
  