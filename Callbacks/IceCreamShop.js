let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apples"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

//console.log(stocks.Fruits[2])

let order = (fruit, callProduction) => {

    // wait for 2 seconds and then print fruit passed in
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit]} was selected`);
    }, 2000);

    callProduction();
}

let production = () => {

    // wait for 0 seconds then print out production has started
    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log("The food has been chopped.");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`ice cream was placed on ${stocks.holder[0]} `);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                console.log("Serve ice cream")
                            }, 1000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000)
}

order(0, production)