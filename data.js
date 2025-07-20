fetch(`https://api-dattebayo.vercel.app/cards`)
.then(response=>response.json())
.then(value=>console.log(value))
.catch(error=>console.error(error));

console.log(`version3`);