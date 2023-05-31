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

/**
 * Imagine you are the chef of the restaurant & you make ice creams.
 * You take an order from the customer and realise the customer hasn't told you what toppings you'd like
 * So you have to go outside the kitchen and ask the customer which topping they'd like (chocolate or peanut).  
 * Then he gives you the order hmm...give me chocolate.
 * The you have to return to the kitchen and start working 
 * 
 * In summary, this process means you have to go outside, therefore, the kitchen is being stopped completely.
 * Because without the chef the kitchen doesn't work. But realise there are other employees at the restaurant
 * who are working, cleaning the tables, dishes, taking orders. 
 * Everything else except the kitchen is working.
 * 
 */
async function kitchen() {

    try {
        await abc();
    } catch(error) {
        console.log("abc function doesn't exist", error);
    } finally {
        console.log("Run anyway");
    }
}

kitchen().then(() => {
    console.log("After our promise runs, this is chaining...")
})