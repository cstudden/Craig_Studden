const apiKey = 'qeTK5Fs5T4ZvZkB4fmv8tkweHsZvMR7sk0zmliV4';

function fetchAPOD(date) {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const title = data.title;
      const date = data.date;
      let imageUrl = data.url;
      const explanation = data.explanation;

      // Check if high-resolution image URL is available
      if (data.hdurl) {
        imageUrl = data.hdurl;
      }

      // Clear previous content
      const pictureContainer = document.getElementById('picture-container');
      pictureContainer.innerHTML = '';

      // Display the picture
      const img = document.createElement('img');
      img.src = imageUrl;
      pictureContainer.appendChild(img);

      // Display additional information
      const heading = document.createElement('h2');
      heading.textContent = title;
      pictureContainer.appendChild(heading);

      const paragraph = document.createElement('p');
      paragraph.textContent = `${date}: ${explanation}`;
      pictureContainer.appendChild(paragraph);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Initial fetch for today's date
fetchAPOD('');

// Add event listener for the "Change Date" button
document.getElementById('change-date-button').addEventListener('click', () => {
  const date = prompt('Enter date (YYYY-MM-DD):');
  if (date) {
    fetchAPOD(date);
  }
});
