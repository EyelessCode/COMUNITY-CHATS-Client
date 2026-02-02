"use client"

import UserForm from "@/components/users/UserForm"
import { useUser } from "@/contexts/UserContext"
import { ApiUser } from "@/features/users/user.types"
import { useNavigate } from "@tanstack/react-router"

export default function NewUserPage() {
    const navigate = useNavigate()
    const {addUser}=useUser()
    const handleAddUser = (user: ApiUser) => {
        addUser(user)
        navigate({ to: "/" })
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Crear usuario
            </h1>

            <UserForm onAddUser={handleAddUser} />
        </div>
    )
}
