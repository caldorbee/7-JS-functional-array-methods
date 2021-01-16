// The sum of all item prices, divided by the number of items
// show avg price of items on webpage

let total = 0
let itemsAverage = items.forEach

items.forEach (function (items) {
    let itemsPrice = items.price
    total = total + itemsPrice
})

let avg = total / items.length

document.querySelector(`#answer1`).innerHTML = (avg)

// filter array to return items that cost between $14 and $18.
// show the name and price of the products between $14 and $18 


let filteredItems =
    items.filter (function (items) {
    return (items.price >= 14 && items.price <= 18)
})

document.querySelector(`#answer2`).innerHTML = (itemName)





