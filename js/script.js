'use strict';


const select = document.getElementById('filter');
const productCards = document.querySelectorAll('.card');

select.addEventListener('change', function () {
    const selectedValue = this.value;
    for (const card of productCards) {
        const cardCategory = card.dataset.category;
        if (selectedValue === 'all' || cardCategory === selectedValue) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    }
});
select.dispatchEvent(new Event('change'));
