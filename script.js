
const selectProduct = document.getElementById('options');
const descriptionContainer = document.getElementById('desc');
const priceContainer = document.getElementById('product-price');
const taxContainer = document.getElementById('tax-amount');
let taxAmount = 0;

const firstPrice = 750;
const secondPrice = 249;
const thirdPrice = 599;
const firstDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At cumque maiores voluptatibus dicta, pariatur temporibus! Asperiores, consectetur beatae. Provident quos blanditiis corporis perferendis nam assumenda consectetur! Illum ad beatae atque.';
const secondDescription = 'Expedita blanditiis alias reiciendis assumenda ea illo minus itaque reprehenderit, totam vel quasi labore? Pariatur minima molestias incidunt non architecto nobis quo alias corporis? Eligendi molestiae reiciendis facere nulla reprehenderit?';
const thirdDescription = 'Fuga dolore minus dolores excepturi assumenda exercitationem saepe quia alias quas architecto vitae enim laboriosam, fugiat quam facere porro explicabo, maiores, consectetur facilis blanditiis. Et optio consectetur vel accusamus reiciendis!';

const prices = [firstPrice, secondPrice, thirdPrice];
const descriptions = [firstDescription, secondDescription, thirdDescription];

selectProduct.addEventListener('click', function (event) {
    if (event.target.localName == 'img') {
        document.getElementById('art').src = event.target.src;

        this.querySelector('.selected').classList.remove('selected');
        event.target.classList.add('selected');

        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] == event.target.parentNode) {
                changeDescAndPrice(i);
            }
        }
    }
})

function changeDescAndPrice(index) {
    descriptionContainer.innerText = descriptions[index];
    priceContainer.innerText = prices[index];
    updateTotalWithTax();
}
// set first description and price when webpage loaded
changeDescAndPrice(0);

function updateTotalWithTax() {
    document.getElementById('total-price').innerText = parseFloat(priceContainer.innerText) + taxAmount;
}

document.getElementById('select-tax').addEventListener('click', function (event) {
    if (event.target != this) {
        this.querySelector('.selected').classList.remove('selected');
        if (event.target.id == 'free') { taxAmount = 0; event.target.classList.add('selected'); taxContainer.innerText = taxAmount; }
        else if (event.target.id == 'express') { taxAmount = 30; event.target.classList.add('selected'); taxContainer.innerText = taxAmount; }
        updateTotalWithTax();
    }
})
updateTotalWithTax();