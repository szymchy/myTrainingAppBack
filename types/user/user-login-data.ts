export interface IUserLogIn {
    id?: string,
    name: string,
    password: string,
}

export interface IUserSignUp {
    name: string,
    email: string
    password: string,
    gender: string,
    weight: string,
    height: string,
}

export interface ICreateNewExercise {
    id?: string,
    setName?: string,
    name: string,
    series: number,
    repeats: number,
    weight: number,
    time: number,
}

export interface IExerciseName {
    name?: string,
    set_name?: string,
}

export interface ISetName {
    id: string,
    setName: string,
}

export interface IRefreshToken {
    id: string,
}