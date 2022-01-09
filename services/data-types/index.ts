export interface LoginTypes {
    username: string;
    password: string;
}

export interface ReservationTypes {
    username: string;
    phoneNumber: number;
    date: string;
    time: string;
}

export interface ReviewTypes {
    name: string;
    review: string;
    rating: number;
}

export interface ServiceTypes {
    name: string;
    price: number;
    desc: string;
}

export interface UserTypes {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export interface JWTTypes {
    username: string;
    phoneNumber: string;
}
