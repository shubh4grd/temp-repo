export interface User {
    account_type: number;
    address: string;
    authentication_type: number;
    email: string;
    password: string;
    token: string;
    first_name: string;
    last_name: string;
    id: string;
    phone_number: string;
    image: any;
    file_name:any;
    isAdmin: boolean;
    rolesMapped: string;
    userType: string;
    subscription_active: number;   
}

export interface LoginInputModel {
    email: any;
    password: any;
}