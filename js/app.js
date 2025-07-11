'use strict';

function createUserInterface() {
    const form = document.querySelector('[data-form]');
    const submitBtn = form.querySelector('[type="submit"]');
    const inputs = Array.from(form.querySelectorAll('input'));
    const contactsList = document.querySelector('[data-contacts-list]');

    // Функція для відображення контактів
    const renderContacts = () => {
        contactsList.innerHTML = '';
        const contacts = dataBase.getData();

        if (contacts.length === 0) {
            contactsList.innerHTML = '<p>Список контактів порожній.</p>';
            return;
        }

        contacts.forEach(contact => {
            const contactCard = document.createElement('div');
            contactCard.classList.add('contact-card');
            contactCard.dataset.id = contact.id;

            contactCard.innerHTML = `
                <h3>${contact.firstName} ${contact.lastName}</h3>
                <p>Телефон: ${contact.phone}</p>
                <button type="button" data-action="delete" data-id="${contact.id}">Видалити</button>
            `;
            contactsList.appendChild(contactCard);
        });
    };

    contactsList.addEventListener('click', (e) => {
        const { target } = e;
        if (target.dataset.action === 'delete') {
            const idToDelete = Number(target.dataset.id);
            if (dataBase.deleteData({ id: idToDelete })) {
                renderContacts();
            } else {
                console.error('Failed to delete contact with ID:', idToDelete);
            }
        }
    });


    const updateSubmitButtonState = () => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled');
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    };


    updateSubmitButtonState();


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;


        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});

        dataBase.setData(data);
        target.reset();
        updateSubmitButtonState();
        renderContacts();
    });

    form.addEventListener('input', updateSubmitButtonState);


    renderContacts();
}

createUserInterface();