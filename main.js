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

let filteredItems = items.filter (function (items) {
    return items.price >= 14 && items.price <= 18
})

// create an array of item names with a price between $14 and $18

let itemNamePrice = filteredItems.map (function (name) {
    return `${name.title}<br>`
})

let htmlStr = itemNamePrice.join ('')

document.querySelector(`#answer2`).innerHTML = (htmlStr)

// filter array to find item listed in "GBP"
// list the items name and price on the web page

let gbp = items.filter (function (item) {
    return item.currency_code == "GBP"
    })

let gbpNamePrice = gbp.map (function (item) {
    return `${item.title} costs $${item.price}`
})

document.querySelector(`#answer3`).innerHTML = (gbpNamePrice)

// filter the items array for items made of wood
// list those items on the web page

let woodItems = items.filter (function (wooden) { 
    return wooden.materials.includes ('wood')
})

let woodArray = woodItems.map (function (items) {
    return `${items.title}<br>`
})

let htmlStr2 = woodArray.join ('')

 document.querySelector(`#answer4`).innerHTML = (htmlStr2)


// filter array to determine how mainy items are made from 8 or more materials
// list the each items' name, number of materials, and what materials the item is made from


let eightOrMore = items.filter (function (item) {
    return item.materials.length >= 8
    })

let newArray = eightOrMore.map (function (item) {
    return `${item.title} has ${item.materials.length} materials:<br> ${item.materials}<br>` 
})

let htmlStr3 = newArray.join ('')

document.querySelector(`#answer5`).innerHTML = (htmlStr3)

// filter the array for items that are made by the seller
// list the number + "were made by their sellers"


let sellerMade = items.filter (function (item) {
    return item.who_made.includes ("i_did")
    })

let htmlStr4 = `${sellerMade.length} were made by their sellers`

document.querySelector(`#answer6`).innerHTML = (htmlStr4)
