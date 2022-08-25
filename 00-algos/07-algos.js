var pokémon = [
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
];


function greater(num) {
    console.log("These Pokemon have an id greater than " + num);
    for (i = 1; i < pokémon.length; i++) {
        if (pokémon[i].id > num) {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

function remainder(num) {
    console.log("These pokemon are divible by " + num);
    for (i = 1; i < pokémon.length; i++) {
        if (pokémon[i].id % num == 0) {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

function typeCount(num) {
    console.log("These pokemon have " + num + " or more types");
    for (i = 1; i < pokémon.length; i++) {
        if (pokémon[i].types.length >= num) {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

function type(type) {
    console.log("These pokemon have " + type + " as their type");
    for (i = 1; i < pokémon.length; i++) {
        if (pokémon[i].types == type) {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

function flyingSecond() {
    console.log("These pokemon have flying as their second type");
    for (i = 1; i < pokémon.length; i++) {
        if (pokémon[i].types[1] == "flying") {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

function typeReverse(type) {
    console.log("This is the list of pokemon that have " + type + " as their type, but in reverse")
    for (i = pokémon.length - 1; i >= 0; i--) {
        if (pokémon[i].types == type) {
            console.log(pokémon[i].name);
        }
    }
    console.log("");
}

greater(99);
remainder(3);
typeCount(2);
type("poison");
flyingSecond();
typeReverse("fire");


