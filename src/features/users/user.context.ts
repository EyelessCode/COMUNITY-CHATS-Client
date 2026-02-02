"use client"

import {createContext} from "react"
import { ApiUser } from "./user.types"

interface UsersContextType {
    users: ApiUser[]
    addUser:(user:ApiUser)=>void
    loading: boolean
    error: string | null
    refetch: () => void
}

export const UsersContext = createContext<UsersContextType | null>(null)
