"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const editProductForm = document.getElementById('editProductForm');
    const productIdInput = document.getElementById('productId');
    const productNameInput = document.getElementById('productName');
    const productDescriptionInput = document.getElementById('productDescription');
    const productPriceInput = document.getElementById('productPrice');
    const alertContainer = document.getElementById('alertContainer');

    const selectedProductId = localStorage.getItem('selectedProductId');

    function showAlert(message, type) {
        alertContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    if (!selectedProductId) {
        showAlert('Do not chose an item to edit', 'danger');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        return;
    }

    let products = JSON.parse(localStorage.getItem('products')) || [];
    const productToEdit = products.find(p => p.id === selectedProductId);

    if (productToEdit) {
        productIdInput.value = productToEdit.id;
        productNameInput.value = productToEdit.name;
        productDescriptionInput.value = productToEdit.description;
        productPriceInput.value = productToEdit.price;
    } else {
        showAlert('Do not find an item', 'danger');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
        return;
    }

    editProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = productNameInput.value.trim();
        const description = productDescriptionInput.value.trim();
        const price = parseFloat(productPriceInput.value);

        if (!name || !description || isNaN(price) || price <= 0) {
            showAlert('Please fill all the gaps. Cost should be a positive number.', 'danger');
            return;
        }

        const productIndex = products.findIndex(p => p.id === selectedProductId);

        if (productIndex !== -1) {
            products[productIndex].name = name;
            products[productIndex].description = description;
            products[productIndex].price = price;

            localStorage.setItem('products', JSON.stringify(products));

            showAlert('Item successfully updated!', 'success');

            localStorage.removeItem('selectedProductId');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            showAlert('Error: do not find an item to edit.', 'danger');
        }
    });
});
