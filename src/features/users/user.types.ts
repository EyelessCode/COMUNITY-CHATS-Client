export interface ApiUser {
    id: number
    name: string
    username: string
    email: string
    address: {
        street:string,
        suite:string,
        zipcode:string,
        geo:{
            lat:string,
            lng:string
        }
    }
    phone:string
    website:string
    company: {
        name:string,
        catchPhrase:string,
        bs:string
    }
}

export interface ForExamUser{
    id: number
    name: string
    username: string
    email: string
    adress: {
        street:string
    }
}

