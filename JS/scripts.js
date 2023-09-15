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
    }];
    
    pokemonList.forEach(function(pokemon) {
    let message = 'Wow, that’s big!';
    document.write('<p>' + pokemon.name + '-' + 'Height:' + pokemon.height + '</p>');
    if (pokemon.height < 1.5 && pokemon.height >= 1) {
        console.log('this is a small pokemon');
    }else if (pokemon.height < 2) {
        console.log('this is an average pokemon');
    }else {
        console.log('this is a big pokemon');
        document.write('<p>' + pokemon.name + '-' + message + '</p>');
    }
    });
    
