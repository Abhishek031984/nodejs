const { readFile, writeFile } = require('fs')
console.log('start');
readFile ('./content/first.txt', (err, result)=>
{
    if (err)
    {
        console.log(err)
        return
    } 
    const first = result;
    readFile ('./content/second.txt', (err, result) =>
    {
        if (err)
        {
            console.log(err)
            return
        } 
        const second = result;
        writeFile ('./content/ab1.txt', `Here is the last one: ${first}, ${second}`, (err, result)=> 
        {
            if (err)
            {
                console.log(err)
                return
            } 
            console.log(result);
        }) 
        console.log('done with this task');
    })
})
console.log('starting with new task');
