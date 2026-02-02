"use client"

import UserList from "@/components/users/UserList"
import { useUser } from "@/contexts/UserContext"
import { Link } from "@tanstack/react-router"

export default function UsersPage() {
    const {users,loading}=useUser()
    if (loading) return <p className="text-black justify-center items-center">Cargando...</p>

    return (
        <div>
            <Link
            to="/new"
            className="bg-blue-600 text-white px-4 py-2 rounded">
                Nuevo usuario
            </Link>
            <UserList users={users}/>
        </div>
    )
}
