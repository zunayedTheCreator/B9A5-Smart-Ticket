function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: 'smooth'});
}

function selectClick(elementId) {
    addClassById(elementId, 'bg-[#1DD100]')
    removeClassById(elementId, 'bg-[#f7f7f7]')
    addSelectedClassById(elementId, 'selected')

    countSelect()
    getSeat();
    countSeat()
}

function countSelect() {
    const currentValueElement = document.getElementById('current-count')
    const currentValue = document.getElementsByClassName('selected');
    const value = currentValue.length;

    currentValueElement.innerText = value;

    if (value >= 4) {
        console.log('cant buy more');
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