import json

# loads
# with open("pokemons.json") as file:
#     content = file.read()
#     pokemons = json.loads(content)["results"]

# print(pokemons[0])

# load
with open('pokemons.json') as file:
    pokemons = json.load(file)['results']

print(pokemons[0])
grass_type = [
    pokemon for pokemon in pokemons if 'Grass' in pokemon['type']
]

with open('grass_pokemon.json', 'w') as file:
    json_to_write = json.dumps(
        grass_type
    )
    file.write(json_to_write)
