// Nasa API
const apiKey = 'qeTK5Fs5T4ZvZkB4fmv8tkweHsZvMR7sk0zmliV4';

// URL for Fetch
function fetchAPOD(date) {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  // Fetching NASA Data
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }
      return response.json();
    })
    .then(data => {
      const title = data.title;
      const date = data.date;
      let imageUrl = data.url;
      const explanation = data.explanation;

      // Clear pic-container content to make room for API Data
      const pictureContainer = document.getElementById('picture-container');
      pictureContainer.innerHTML = '';

      // Show Pic
      const img = document.createElement('img');
      img.src = imageUrl;
      pictureContainer.appendChild(img);

      // Show Description Title
      const heading = document.createElement('h2');
      heading.textContent = title;
      pictureContainer.appendChild(heading);

      // Show Description
      const paragraph = document.createElement('p');
      paragraph.textContent = `${date}: ${explanation}`;
      pictureContainer.appendChild(paragraph);
    })
    .catch(error => console.error('Error:', error));
}

// Fetch Todays Pic
fetchAPOD('');

// Change Date Button
document.getElementById('date').addEventListener('click', () => {
  const date = prompt('Enter date (YYYY-MM-DD):');
  if (date) {
    fetchAPOD(date);
  }
});
