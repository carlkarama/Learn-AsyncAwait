let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

/*
 * a boolean to determine whether the store is open.
 * if store is open, serve ice cream
 * if store is closed, don't serve ice cream
 */
let isShopOpen = true

/**
 * @param time
 * @param  work
 */
let order = (time, work) => {

    return new Promise((resolve, reject) => {

        if (isShopOpen) {

            setTimeout(() => {
                resolve(work());

            }, time);

        } else {

            reject(console.log("Our shop is closed!"));
        }
    });
};

/**
 * @implNote When creating promise chaining make sure to always remove the semi-colon at the end of the statement (;)
 */
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

    //start production
    .then(() => {

        return order(1000, () => {
            console.log("Production has started")
        });
    })

    .then(() => {
        return order(2000, () => {
            console.log("Fruit was chopped");
        });
    })

    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
        })
    })

    .then(() => {
        return order(1000, () => console.log("start the machine"))
    })

    .then(() => {
        return order(2000, () => {
            console.log(`ice cream placed on ${stocks.holder[0]}`)
        })
    })

    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[0]} was selected`)
        })
    })

    // This catch will only work if our promise is rejected.
    .catch(() => {
        console.log("Customer has left")
    })

    // Finally will run whether the promise is resolved or rejected
    .finally(() => {
        console.log("day has ended, day ended")
    })