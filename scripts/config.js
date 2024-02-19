function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}

function selectClick(elementId) {
    if(document.getElementById(elementId).classList.contains('selected')){
        return ;
    }

    addClassById(elementId, 'bg-[#1DD100]');
    removeClassById(elementId, 'bg-[#f7f7f7]');
    addSelectedClassById(elementId, 'selected');

    const selectedIdElement1 = document.getElementById('selectedId1');
    const selectedElementId1 = elementId;

    selectedIdElement1.innerText = selectedElementId1;

    countSelect()
    getSeat()
    countSeat()
    totalPrice()
}

function noSelect(elementId) {
    addClasssById(elementId, 'bg-[#f7f7f7]');
    removeClasssById(elementId, 'bg-[#1DD100]');
    removeClasssById(elementId, 'selected');
}

function countSelect() {
    const currentValueElement = document.getElementById('current-count')
    const currentValue = document.getElementsByClassName('selected');
    const value = currentValue.length;

    currentValueElement.innerText = value;

    if (value > 4) {
        my_modal_1.showModal();

        const selectedIdElement = document.getElementById('selectedId1');
        const selectedId = selectedIdElement.innerText;
        
        noSelect(selectedId);

        currentValueElement.innerText = 4;
    }
    else if (value === 4) {
        const cuponBtn = document.getElementById('apply-btn');
        cuponBtn.removeAttribute("disabled");

        const cuponInput = document.getElementById('apply-input');
        cuponInput.removeAttribute("disabled");
    }

    else if (value < 4) {
        const cuponBtn = document.getElementById('apply-btn');
        cuponBtn.setAttribute("disabled", true);

        const cuponInput = document.getElementById('apply-input');
        cuponInput.setAttribute("disabled", true);
    }

    if (value === 0) {
        hideElementById('seat-1');
    }
    else if (value === 1) {
        showElementById('seat-1');
        hideElementById('seat-2');

        const currentIdElement = document.getElementById('selectedId1');
        const currentId = currentIdElement.innerText;

        const selectedIdElement = document.getElementById('seat-id-1');

        selectedIdElement.innerText = currentId;
    }
    else if (value === 2) {
        showElementById('seat-2');
        hideElementById('seat-3');

        const currentIdElement = document.getElementById('selectedId1');
        const currentId = currentIdElement.innerText;

        const selectedIdElement = document.getElementById('seat-id-2');

        selectedIdElement.innerText = currentId;
    }
    else if (value === 3) {
        showElementById('seat-3');
        hideElementById('seat-4');

        const currentIdElement = document.getElementById('selectedId1');
        const currentId = currentIdElement.innerText;

        const selectedIdElement = document.getElementById('seat-id-3');

        selectedIdElement.innerText = currentId;
    }
    else if (value === 4) {
        showElementById('seat-4');

        const currentIdElement = document.getElementById('selectedId1');
        const currentId = currentIdElement.innerText;

        const selectedIdElement = document.getElementById('seat-id-4');

        selectedIdElement.innerText = currentId;
    }
}

function getSeat() {
    const currentSeat = document.getElementById('current-seat')

    const seatValue = document.getElementsByClassName('selected');
    const value = seatValue.length;

    currentSeat.innerText = value
}

function countSeat() {
    const currentSeatElement = document.getElementById('current-seat')
    const currentSeat = currentSeatElement.innerText;
    const seatValue = parseFloat(currentSeat);

    const totalSeat = 40;
    const seats = totalSeat - seatValue;

    currentSeatElement.innerText = seats;
}

function totalPrice() {
    const grandTotalElement = document.getElementById('grand-total');
    const totalPriceElement = document.getElementById('total-price');

    const seatValue = document.getElementsByClassName('selected');
    const value = seatValue.length;

    const ticketPrice = 550;

    const totalPrice = ticketPrice * value;

    totalPriceElement.innerText = totalPrice;
    grandTotalElement.innerText = totalPrice;

    if (totalPrice > 0) {
        const nameInput = document.getElementById('name-input');
        const phoneInput = document.getElementById('phone-input');
        const emailInput = document.getElementById('email-input');

        nameInput.removeAttribute("disabled");
        phoneInput.removeAttribute("disabled");
        emailInput.removeAttribute("disabled");
    }
}


function checkCoupon() {
    const codeInputElement = document.getElementById('apply-input');
    const codeInput = codeInputElement.value;


    if (codeInput === 'NEW15') {
        console.log('correct code');
        hideElementById('coupon-error')
        showElementById('coupon-success')

        codeInputElement.value = '';

        const grandTotalElement = document.getElementById('grand-total');

        const totalPriceElement = document.getElementById('total-price');
        const totalPriceValue = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceValue);

        const percent = 15 / 100;
        const amountToRemove = totalPrice * percent;
        const grandTotal = totalPrice - amountToRemove;

        grandTotalElement.innerText = grandTotal;
    }
    else if (codeInput === 'Couple 20') {
        console.log('correct code');
        hideElementById('coupon-error')
        showElementById('coupon-success')

        codeInputElement.value = '';

        const grandTotalElement = document.getElementById('grand-total');

        const totalPriceElement = document.getElementById('total-price');
        const totalPriceValue = totalPriceElement.innerText;
        const totalPrice = parseFloat(totalPriceValue);

        const percent = 20 / 100;
        const amountToRemove = totalPrice * percent;
        const grandTotal = totalPrice - amountToRemove;

        grandTotalElement.innerText = grandTotal;
    }
    else if (codeInput === '') {
        hideElementById('coupon-error')
        hideElementById('coupon-success')
    }
    else{
        showElementById('coupon-error')
        hideElementById('coupon-success')

        codeInputElement.value = '';

        const grandTotalElement = document.getElementById('grand-total');
        const totalPriceElement = document.getElementById('total-price');

        const seatValue = document.getElementsByClassName('selected');
        const value = seatValue.length;

        const ticketPrice = 550;

        const totalPrice = ticketPrice * value;

        totalPriceElement.innerText = totalPrice;
        grandTotalElement.innerText = totalPrice;
    }
}

function checkInput() {
    const nameInput = document.getElementById('name-input');
    const nameInputValue = nameInput.value;
    const phoneInput = document.getElementById('phone-input');
    const phoneInputValue = phoneInput.value;

    if (nameInputValue === '' || phoneInputValue === '') {
        console.log('Input box is empty!');

        const formBtn = document.getElementById('form-btn');
        formBtn.setAttribute("disabled", true);
    }
    else if (nameInputValue !== '' && phoneInputValue !== '') {
        console.log('Input box has a value: ' + nameInputValue);
        console.log('Input box has a value: ' + phoneInputValue);

        const formBtn = document.getElementById('form-btn');
        formBtn.removeAttribute("disabled");
    }
}

function clearInput() {
    const nameInput = document.getElementById('name-input');
    const phoneInput = document.getElementById('phone-input');
    const emailInput = document.getElementById('email-input');

    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
}

function refreshPage() {
    location.reload();
}