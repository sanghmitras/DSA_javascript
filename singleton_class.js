class Car{
    #petrol=false
    color='white'
    constructor(){
        this.#petrol = true;
        this.color = 'black'
    }
    get(){
        return this.#petrol
    }
}

let myCar = new Car()
myCar.color = 'Red'
console.log('myCar', myCar.get(), myCar.color)

// class ClassWithPrivateField {
//     #privateField='hello';
  
//     constructor() {
//     //   this.#privateField = 42;
//     //   delete this.#privateField; // Syntax error
//     //   this.#undeclaredField = 444; // Syntax error
//     }
//     get(){
//         return this.#privateField
//     }
//   }

// const instance = new ClassWithPrivateField();
// // instance.#privateField === 42; // Syntax error
// console.log('private', instance.get())
