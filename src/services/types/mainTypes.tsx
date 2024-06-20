export type Permission = string;

export type User = {
    role: string;
    username: string;
    // email: string;
    permissions: Permission[];
}

export type ElementType = {
    name: string;
    price: number;
    currency: 'EUR' | 'USD';
}
