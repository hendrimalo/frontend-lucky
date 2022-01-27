export interface LoginTypes {
    username: string;
    password: string;
}

export interface ReservationTypes {
    _id: string;
    username: string;
    phoneNumber: number;
    date: string;
    time: string;
}

export interface orderTypes {
    _id: string;
    transactionId: {
        date: string;
        payment: string;
        product: string;
        total: string;
    }
}

export interface orderDetailTypes {
    orderDetail: {
        _id: string;
        username: string;
        userStatus: string;
        phoneNumber: string;
        date: string;
        time: string;
        status: string;
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
