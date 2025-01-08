const arrow = document.querySelector("#arrow")
const nameSubmit = document.querySelectorAll(".name-submit")
const moneySubmit = document.querySelectorAll(".money-submit")

function expandWheelCon() {
    const wheelCon = document.querySelector("#wheel-con")
    const wheel = document.querySelector("#wheel")

    if (wheelCon.style.right === "0px") {
        arrow.textContent = "◄"
        wheel.style.display = "none"
        wheelCon.style.right = "-1180px"
    } else {
        arrow.textContent = "►"
        wheel.style.display = "block"
        wheelCon.style.right = "0px"
    }
}

function nameChange() {
    const parentCheck = this.parentNode 
    const nameValueCheck = parentCheck.querySelector(".name-value")
    const nameValue = nameValueCheck.value
    const dataCheck = parentCheck.dataset.player
    const nameTextCheck = document.querySelector(`#player-${dataCheck}`)
    const name = nameTextCheck.querySelector(".player-name")

    name.textContent = nameValue
    nameValueCheck.value = ""
}

function changeMoney() {
    const parentCheck = this.parentNode 
    const moneyValueCheck = parentCheck.querySelector(".money-value")
    const moneyValue = moneyValueCheck.value
    const dataCheck = parentCheck.dataset.player
    const moneyTextCheck = document.querySelector(`#player-${dataCheck}`)
    const moneySelect = moneyTextCheck.querySelector(".money-amount")
    const money = moneySelect.textContent
    const newValue = parseFloat(moneyValue)
    const oldValue = parseFloat(money)
    const newAmount = newValue + oldValue

    moneySelect.textContent = newAmount
    moneyValueCheck.value = ""
}

arrow.addEventListener("click", expandWheelCon)
nameSubmit.forEach(button => button.addEventListener("click", nameChange))
moneySubmit.forEach(button => button.addEventListener("click", changeMoney))