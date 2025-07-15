"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const productsTableBody = document.getElementById('productsTableBody');

  function loadProducts() {
    productsTableBody.innerHTML = '';
    let products = JSON.parse(localStorage.getItem('products')) || [];

    products.sort((a, b) => b.timestamp - a.timestamp);

    if (products.length === 0) {
      productsTableBody.innerHTML = '<tr><td colspan="4" class="text-center">There are no created items</td></tr>';
      return;
    }

    products.forEach(product => {
      const row = productsTableBody.insertRow();
      row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price} $</td>
                <td>
                    <button class="btn btn-warning btn-sm btn-action edit-btn" data-id="${product.id}">Edit</button>
                    <button class="btn btn-danger btn-sm btn-action delete-btn" data-id="${product.id}">Remove</button>
                </td>
            `;
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        localStorage.setItem('selectedProductId', productId);
        window.location.href = 'edit.html';
      });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', (event) => {
        const productId = event.target.dataset.id;
        deleteProduct(productId);
      });
    });
  }


  function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    loadProducts();
  }
  loadProducts();
});
