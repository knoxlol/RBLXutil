// Run in your browser's console
// Retrives version for the Windows deploy history.

const endpoint = 'https://setup.rbxcdn.com/DeployHistory.txt'; // This is the endpoint for the Windows deploy history.

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error fetching data:', error);
    console.log(`Error fetching data: ${error.message}`);
  });

// This isn't really useful tbh but im including it anyway.
