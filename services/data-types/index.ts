export interface LoginTypes {
    username: string;
    password: string;
}

export interface ReservationTypes {
    _id: string;
    username: string;
    userStatus: string;
    phoneNumber: string;
    date: string;
    time: string;
}

export interface PostReservationTypes {
    username: string;
    userStatus: string;
    phoneNumber: string;
    date: any;
    time: any;
}

export interface orderTypes {
    _id: string;
    reviewId: object;
    transactionId: {
        date: string;
        payment: string;
        product: string;
        total: string;
    }
}

export interface ReviewTypes {
    username: string;
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
    user: {
        username: string;
        phoneNumber: string;
    }
}
