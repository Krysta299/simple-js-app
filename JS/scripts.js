// name , height , types
//pokemonList1: Butterfree , 1.1 , ('bug' , 'flying')
//pokemonList2: Charizard , 1.7 , ('fire' , 'flying')
//pokemonList3: Vennsaur , 2 , ('grass' , 'poison')
//console.log(document.write('pokemonList.name[i] + pokemonList[i}.height)  is a small pokemon'))
//console.log(document.write('pokemonList.name[i] + pokemonList[i}.height)  is average'))
//console.log(document.write('pokemonList.name[i] + pokemonList[i}.height) is a big '))

let pokemonList= [
    {name: 'Butterfree' , 
    height: 1.1 , 
    types: ['bug' , 'flying']
    } ,
    {name: 'Charizard' , 
    height: 1.7 , 
    types: ['fire' , 'flying']
    } ,
    {name: 'Vennsaur' , 
    height: 2 , 
    types: ['grass' , 'poison']
    }
];

for (let i= 0 ; i< pokemonList.length ; i++) {
    if (pokemonList[i].height <1.5 && pokemonList[i].height >0){
        console.log('this is a small pokemon');
    }else if (pokemonList[i].height <2){
        console.log('this is an average pokemon');
    }else {
        console.log('this is a big pokemon');
    }
}
