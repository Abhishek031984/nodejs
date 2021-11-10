//Module

const x = 'Abhishek'
const y = 'Bhattacharya'
const z = 35
const u = 'My first project in node javascript'

const sayStatement = (statement) =>
{
    console.log(`Show ${statement}`);
}

const sayHi = (name) =>
{
    console.log(`Present ${name}`)
}

const sayAge = (age) =>
{
    console.log(`Given ${age}`);
}

sayAge(z)
sayStatement(u)
sayHi(x)
sayHi(y)