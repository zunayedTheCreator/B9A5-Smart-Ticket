function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}

function selectClick(elementId) {
    addClassById(elementId, 'bg-[#1DD100]');
    removeClassById(elementId, 'bg-[#f7f7f7]');
    addSelectedClassById(elementId, 'selected');

    const selectedIdElement = document.getElementById('selectedId');
    const selectedElementId = elementId;

    selectedIdElement.innerText = selectedElementId;

    countSelect()
    getSeat()
    countSeat()
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

        const selectedIdElement = document.getElementById('selectedId');
        const selectedId = selectedIdElement.innerText;
        
        noSelect(selectedId);

        const cuponBtn = document.getElementById('apply-btn');
        cuponBtn.removeAttributeAttribute("disabled");

        currentValueElement.innerText = 4;
    }
}

function getSeat() {
    const currentSeat = document.getElementById('current-seat')

    const seatValue = document.getElementsByClassName('selected');
    const value = seatValue.length;

    currentSeat.innerText = value
    return value;
}

function countSeat() {
    const currentSeatElement = document.getElementById('current-seat')
    const currentSeat = currentSeatElement.innerText;
    const seatValue = parseFloat(currentSeat);

    const totalSeat = 40;
    const seats = totalSeat - seatValue;

    currentSeatElement.innerText = seats;
}