export interface ISPECIES {

    count: number,
    next: string,
    previous: string,
    results: [{
        name: string, 
        classification: string, 
        designation: string, 
        average_height: string, 
        skin_colors: string, 
        hair_colors: string, 
        eye_colors: string, 
        average_lifespan: string, 
        homeworld: string, 
        language: string, 
        people: [], 
        films: [], 
        created: Date, 
        edited: Date, 
        url: string
    }]
}

