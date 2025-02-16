
  

  document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value;
    if (query) {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    } else {
      alert('Please enter a search query!');
    }
  });