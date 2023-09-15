let pokemonRepository = (function(){

    let message = 'Wow, that’s big!'; // Define the message variable

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

    return {
        getAllPokemonList: function(){
            return pokemonList;
        },
        addPokemon: function(pokemon){
           let expectedKeys = ['name' , 'height' , 'types'];
           let providedKeys = Object.keys(pokemon);
           let keysMatch = expectedKeys.every((key) => providedKeys.includes(key))
           if(keysMatch){
           pokemonList.push(pokemon);
            document.write('<p>' + pokemon.name + '-' + 'Height:' + pokemon.height + '</p>');
            if (pokemon.height < 1.5 && pokemon.height >= 1) {
                console.log('this is a small pokemon');
            } else if (pokemon.height < 2) {
                console.log('this is an average pokemon');
            } else {
                console.log('this is a big pokemon');
                document.write('<p>' + pokemon.name + '-' + message + '</p>');
            }
        }else {
            console.error('Invalid Pokemon object. It must have the following keys: ' + expectedKeys.join(', '));
        }
    }}()})