fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const cardsContainer = document.querySelector('.cards');
    cardsContainer.style.display = 'grid';
    cardsContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    cardsContainer.style.gap = '20px';
    cardsContainer.style.padding = '20px';

    data.products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <p>${product.category}</p>
      `;

      cardsContainer.appendChild(card);
    });
  });

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
});