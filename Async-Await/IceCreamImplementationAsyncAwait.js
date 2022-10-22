let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let isShopOpen = true;

let toppingsChoice = () => {
    return new Promise((resolve, reject) => {
        // asking process 3sec
        setTimeout(() => {
            console.log("Which topping would you love?");
        }, 3000);
    });
};

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")

    await toppingsChoice();

    console.log("D")
    console.log("E")
}

kitchen()