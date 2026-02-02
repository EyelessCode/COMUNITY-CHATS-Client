import { apiFetch } from "@/libs/fetcher"
import { ApiUser } from "./user.types"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers(): Promise<ApiUser[]> {
    return apiFetch<ApiUser[]>(`${BASE_URL}/users`)
}

export async function getUser(id:number):Promise<ApiUser>{
    return apiFetch<ApiUser>(`${BASE_URL}/users/${id}`)
}
