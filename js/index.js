document.querySelector(`#username`)
    .addEventListener(`input`, function (evt) {
    	document.querySelector(`.username-container`).innerHTML = evt.target.value;
});

document.querySelector(`#frame-picker`)
    .addEventListener(`input`, function (evt) {
    	document.querySelector(`.frame`).style.backgroundColor = evt.target.value;
});

document.querySelector(`#tshirt-picker`)
    .addEventListener(`input`, function (evt) {
    	document.querySelector(`.tshirt-color`).style.fill = evt.target.value;
});

document.querySelector(`#frame-select`)
    .addEventListener(`input`, function (evt) {
    	document.querySelector(`.frame`).classList = `frame frame-${evt.target.value}`;
});

document.querySelector(`#hair-range`)
    .addEventListener(`input`, function (evt) {
    	document.querySelector(`.hair`).src = `assets/hair-${evt.target.value}.svg`;
});

document.querySelector(`#hat-check`)
    .addEventListener(`input`, function (evt) {
    if (evt.target.checked) {
    	document.querySelector(`#hat-range`).disabled = false;
    	document.querySelector(`.hat`).classList.remove(`hidden`);
        document.querySelector(`#hat-range`)
    .addEventListener(`input`, function (evt) {
        document.querySelector(`.hat`).src = `assets/hat-${evt.target.value}.svg`;
});
    } else {
    	document.querySelector(`#hat-range`).disabled = true;
    	document.querySelector(`.hat`).classList.add(`hidden`);
    }
});

document.querySelector(`#glasses-check`)
    .addEventListener(`input`, function (evt) {
    if (evt.target.checked) {
        document.querySelector(`#glasses-range`).disabled = false;
        document.querySelector(`.glasses`).classList.remove(`hidden`);
        document.querySelector(`#glasses-range`)
    .addEventListener(`input`, function (evt) {
        document.querySelector(`.glasses`).src = `assets/glasses-${evt.target.value}.svg`;
});
    } else {
        document.querySelector(`#glasses-range`).disabled = true;
        document.querySelector(`.glasses`).classList.add(`hidden`);
    }
});

document.querySelector(`#earings-check`)
    .addEventListener(`input`, function (evt) {
    if (evt.target.checked) {
        document.querySelector(`#earings-range`).disabled = false;
        document.querySelector(`.earings`).classList.remove(`hidden`);
        document.querySelector(`#earings-range`)
    .addEventListener(`input`, function (evt) {
        document.querySelector(`.earings`).src = `assets/earings-${evt.target.value}.svg`;
});
    } else {
        document.querySelector(`#earings-range`).disabled = true;
        document.querySelector(`.earings`).classList.add(`hidden`);
    }
});