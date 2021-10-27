export interface LoginModel {
    userName: string,
    password: string,
}

export interface Role {
    authority: string,
}

export interface LoginResponse {
    token?: string | null,
    authorities?: Array<Role> | null,
    email?: string | null,
    userName: string | null,
    name: string | null,
}