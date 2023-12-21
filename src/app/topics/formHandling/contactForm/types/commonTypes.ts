export type directorType = {
    name: string,
    title: string,
    intro: string,
    facebookUrl: string
}

export type studentType = {
    name: string,
    gender: string,
    physics: number,
    maths: number,
    english: number
}

export type contactTypes = {
        name: string,
        cnic: number,
        address: string,
        email:string,
        phone:number,
        city:string,
        state:string,
        country:string,
        education:string,
        message:string

}


export type onChangeEventType = {
     target: { value: string, name:string } 
}