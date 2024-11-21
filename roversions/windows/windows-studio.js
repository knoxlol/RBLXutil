// Run in your browser's console
// Retrives version for the windows port of RobloxStudio (non-QT).

const endpoint = 'https://setup.rbxcdn.com/versionStudio'; // This is the endpoint for the Windows version of RobloxStudio (non-QT).

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
