let saveEl = document.getElementById("save-el")
let carWishlistEl = document.getElementById("car-wishlist-el")
let carNameEl = document.getElementById("car-name-el")
let carsNumberEl = document.getElementById("cars-number-el")
carsNumber = 1

function save() {
    let carsNumberStr = carsNumber + " - "
    let carWishlistElValue = carWishlistEl.value
    carNameEl.textContent = carWishlistElValue
    carsNumberEl.textContent = carsNumber
    saveEl.textContent += carWishlistElValue + " " + carsNumberStr
    carsNumber += 1
}
