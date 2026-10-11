let keepShopping = true
do {
    console.log("===VENDING MACHINE MENU===");
    console.log("1. Milk Chocolate- 20rs.");
    console.log("2. coffee - 30rs")
    console.log("3. Brownie - 25rs.");
    console.log("4. cupcake- 15rs")
    console.log("5. Chocolate milkshake-45rs.")
    console.log("============================");
    const prices = { 1: 20, 2: 30, 3:25, 4: 15, 5:45 }
    const itemNames = { 1: "Milk chocolate", 2: "cofee", 3: "Brownie", 4: "cupcake", 5: "Chocolate milkshake" }
    let itemNumber = Number(prompt("Please enter the item number (1-5) from menu:"))
    let moneyAmount =Number(prompt("Please enter the amount of money you have:"))
    if (isNaN(itemNumber) || itemNumber < 0 || itemNumber > 5) {
        alert("Error: Invalid item number selected! Please choose a number between 1 and 5.")
    } else if (isNaN(moneyAmount) || moneyAmount < 0) {
        alert("Error: Invalid money amount entered! Please enter a valid positive number.");
    } else {
        purchase(itemNumber, moneyAmount)
    }
    function purchase(item, money) {
        let price = prices[item];
        let itemName = itemNames[item]
        
        if (money < price) {
            alert(`Insufficient balance! ${itemName} costs ${price}, but you only provided ${money}`)
        } else {
            let change = money - price
            alert(`Item Selected: ${itemName}`)
            alert(`Price: ${price}`)
            alert(`Money Inserted: ${money}`)
            
            console.log(`Item Selected: ${itemName}`)
            console.log(`Price: ${price}`)
            console.log(`Money Inserted: ${money}`)
            
            if (change === 0) {
                alert("Exact money given")
                console.log("Exact money given...")
            } else {
                alert(`Chacge Returned:${change}`)
                console.log(`Change Returned: ${change}`)
            }

            console.log("\nProcessing your order...");
            for (let i = 3; i >= 1; i--) {
                console.log(i + "...");
            }
            console.log(`\n Your ${itemName} is ready! Enjoy!`);
            console.log("---------------------");
        }
    }
    keepShopping = confirm("Would you like to make another purchase?");
    
    if (!keepShopping) {
        console.log("\nThank you for using the Vending machine..");
        alert("Thank you for your purchase");
    }

} while (keepShopping);
