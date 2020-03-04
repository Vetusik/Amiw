export interface ISW {

    count: number,
    next: string,
    previous: string,
    results: [{
        name: string,
        height: number,
        mass: number,
        hair_color: string,
        skin_color: string,
        eye_color: string,
        birth_year: string,
        gender: string,
        homeworld: any,
        films: any,
        species: any,
        vehicles: [],
        starships: [],
        created: Date,
        edited: Date,
        url: any
    }]
}