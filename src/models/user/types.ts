export interface User {
    username?: string;
    email?: string;
    password?: string;
    token?: string;
    refreshtoken?: string;
}

export interface TokenResponse {
    refresh: string;
    access: string;
}

