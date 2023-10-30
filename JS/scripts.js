let pokemonRepository = (function() {
    let pokemonList = [
        {
            name: 'Butterfree',
            height: 1.1,
            types: ['bug', 'flying'],
        },
        {
            name: 'Charizard',
            height: 1.7,
            types: ['fire', 'flying'],
        },
        {
            name: 'Venusaur',
            height: 2,
            types: ['grass', 'poison'],
        }
    ];

    let pokemonListElement = document.querySelector('.pokemonList'); 

    function addButtonEventListener(button, pokemon) {
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
    }

    function addListItem(pokemon) {
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name; 
        button.classList.add('selected');
        listItem.appendChild(button);
        pokemonListElement.appendChild(listItem);

        addButtonEventListener(button, pokemon);
    
    function showDetails(pokemon) {
        console.log(pokemon.name);
        button.addEventListener('click', function() {
        showDetails(pokemon);
        });
    }}
      
    function getAll() {
        return pokemonList;
        document.querySelector('.pokemon-list').appendChild(pokemonListElement);
    }

    pokemonList.forEach(addListItem);

    return {
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails
    };
})();
