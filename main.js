const tributeChest = []



const createQueens = []

const queens = []
const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}


createQueen(1, "Trinity Terry")
createQueen(2, "Athena Perez")
createQueen(3, "Charisse Ford")
createQueen(4, "Jenna Solis")
createQueen(5, "Robin Lindelof")
createQueen(6, "Margo Tuck")
createQueen(7, "Mother Earth")
createQueen(8, "Monica Dinglehopper")

   /* Define a function with a single parameter. When the function
    is invoked, an argument is required.*/

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const payTribute = (tributeId, tributeDescription, queenId) => {    // Create a tribute object
    const tributeObject = {
        id: tributeId,
        description: tributeDescription,
        queenId: queenId


    // Add the tribute object to the tribute chest
}
    tributeChest.push(tributeObject)
}
for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  // What should be passed as an argument?
    console.log(hailMessage)
}


payTribute(1,"My immortal Soul", 5)
payTribute(2,"Flagon of Ale", 6)
payTribute(3,"Barrel of Cream Cheese", 7)

// iterate the queenObject to show tribute for each one
for (const queenObject of queens) {

    //each queenObject will look at every tributeObject to see if it is hers
    for (const tributeObject of tributeChest) {
     //console.log(tributeObject) This bit was extra and printing too much!
    
     if (tributeObject.queenId === queenObject.id) {
     console.log(`${queenObject.name} has tribute ${tributeObject.description}`)
     }
    }
    }