// i) Declaration: Allocating the memory location of the variable
// ii) Assignment: Allocating a value to the memory location of the variable
// iii) Argument: Values passed while Calling the function
// iv) Parameter: Values passed while declaring the function

// Difference between Normal Function and Arrow Function

// Normal Function:

// Properties:
// i) Hoisting: The incident of going the declaration of normal function is sent to the top of the module/script/code
// ii) 'this' keyword: [this keyword refers to the most recent outer context.] In normal function this keyword refers to the Global object.

// Syntax:

// function <function_name> (<parameter>) {
//     Statements
//     may be return or may not be
// }

// i) Hoisting =>
// display('Shahbaj') //Calling the function

// function display (name) {
//     console.log(name)
// }

// display('Abdul', 'metho ka saher') //Calling the function


// function display (n, address = 'India') {
//     console.log(n, address)
// }
// display('Sourav', 'Jharkhand', 'lol')

// ii) 'this' keyword =>

// function work() {
//     console.log(this) // prints the global context/object of node environment
// }
// work()

// let student = {
//     name: 'Abdul',
//     category: 'Mitho',
//     address: function() { // Annonymous function
//         this.address = this.category + ' ka saher'
//         return this
//     }
// }

// console.log(student.address()) // => refers to the whole student object

