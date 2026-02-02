"use client"

import UserList from "@/components/users/UserList"
import { useUser } from "@/contexts/UserContext"

export default function UsersPage() {
    const {users,loading}=useUser()
    if (loading) return <p className="text-black justify-center items-center">Cargando...</p>

    return <UserList users={users}/>
}
