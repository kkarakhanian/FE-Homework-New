"use strict"

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productNameInput = document.getElementById('productName');
    const productDescriptionInput = document.getElementById('productDescription');
    const productPriceInput = document.getElementById('productPrice');
    const alertContainer = document.getElementById('alertContainer');


    function showAlert(message, type) {
        alertContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = productNameInput.value.trim();
        const description = productDescriptionInput.value.trim();
        const price = parseFloat(productPriceInput.value);

        if (!name || !description || isNaN(price) || price <= 0) {
            showAlert('Please fill all fields. Cost sho;d be a positive number.', 'danger');
            return;
        }


        const id = Date.now().toString();
        const timestamp = Date.now();


        const newProduct = {
            id: id,
            name: name,
            description: description,
            price: price,
            timestamp: timestamp
        };

        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        showAlert('Item successfully create!', 'success');
        productForm.reset();
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });
});
