export interface IPokemonData {
    name?: string
    id?: string
    height?: number,
    weight?: number
    abilities?: IPokemonAbilitie
    species?: IPokemonSpecies
    sprites?: IPokemonSprites
    types?: IPokemonType
    stats?: IStatsPokemon
}

export interface IStatsPokemon {
    base_stat?: number
    effort?: number
    stat?: IStatPokemon
}

interface IStatPokemon {
    name?: string
    url?: string
}

export interface IPokemonListData {
    id?: number
    image?: IPokemonSprites
    name?: IPokemonData
}

interface IPokemonAbilitie {
    name?: string
    url?: string
}

interface IPokemonSpecies {
    name?: string
    url?: string
}

export interface IPokemonType {
    slot?: number
    type?: IType
}

interface IType {
    name?: string,
    url?: string
}

interface IPokemonSprites {
    front_default?: string
    front_shiny?: string
}

