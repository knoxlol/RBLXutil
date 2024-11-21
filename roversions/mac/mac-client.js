// Run in your browser's console
// Retrives version for the mac port of RobloxPlayer.
const endpoint = 'https://setup.rbxcdn.com/mac/version'; // This is the endpoint for the mac port of RobloxPlayer.

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
