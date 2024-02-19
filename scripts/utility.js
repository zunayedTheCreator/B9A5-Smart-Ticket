function addClassById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.toggle(value);
}
function addSelectedClassById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.toggle(value);
}

function removeClassById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.toggle(value);
}

function addClasssById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.add(value);
}

function removeClasssById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.remove(value);
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}