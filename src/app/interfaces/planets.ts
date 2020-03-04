export interface IPLANETS {

    count: number,
    next: string,
    previous: string,
    results: [{
        name: string, 
        rotation_period: string, 
        orbital_period: string, 
        diameter: string, 
        climate: string, 
        gravity: string, 
        terrain: string, 
        surface_water: string, 
        population: string, 
        residents: [], 
        films: [], 
        created: Date, 
        edited: Date, 
        url: any
    }]
}