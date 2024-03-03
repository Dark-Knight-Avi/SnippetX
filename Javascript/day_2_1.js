// Arrow Function (ES6 Feature) Ecma Script(2015)

// Syntax:

// const/let <function_name> = (<Parameters>) => {
//      Other statemnets
//      may return or may not return
// }

// Properties:
// i) Hoisting: Doesn't get hoisted
// ii) this keyword: In Arrow function, this has no context, i.e., empty object({})
// iii) ES6 Feature

// Example:

const display = (name) => {
    console.log(this)
}

display("Abdul")