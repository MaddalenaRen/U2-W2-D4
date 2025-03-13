
const hot = document.querySelectorAll("#hot .card")

hot.forEach((card, i) => {
    const label = document.createElement('p')
    label.innerText = 'Hot'
    label.classList.add('bg-danger', 'text-light')
    label.classList.add('position-absolute')
    hot[i].classList.add('position-relative')
    hot[i].appendChild(label)

    label.style.top = '5px'
    label.style.top = '5px'

})

document.getElementById("contaViaggi").addEventListener("click", function () {
    let viaggi = document.querySelectorAll(".viaggio").length;
    alert(`Ci sono ${viaggi} viaggi disponibili.`);
});

document.getElementById("rimuoviCard").addEventListener("click", function () {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => card.remove());
});