"use client"

import UserForm from "@/components/users/UserForm"
import { useUser } from "@/contexts/UserContext"
import { ForExamUser } from "@/features/users/user.types"
import { useNavigate } from "@tanstack/react-router"

export default function NewUserPage() {
    const navigate = useNavigate()
    const {addUser}=useUser()
    const handleAddUser = (user: ForExamUser) => {
        addUser(user)
        navigate({ to: "/" })
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-black">
                Crear usuario
            </h1>

            <UserForm onAddUser={handleAddUser} />
        </div>
    )
}
