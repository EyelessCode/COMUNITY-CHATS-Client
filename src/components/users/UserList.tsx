import { useState } from "react"
import UserModal from "./UserModal"
import { ApiUser } from "@/features/users/user.types"

interface Props{
    users:ApiUser[]
}

function UserList({users}:Props) {
    const [selectedUser,setSelectedUser]=useState<ApiUser|null>(null)
    return (
        <>
        <div className="mt-6 space-y-4">
            {users.map(user => (
                <div
                    key={user.id}
                    className="bg-white p-4 rounded shadow flex justify-between">
                    <div>
                    <p className="font-semibold text-black">{user.username}</p>
                    <p className="text-sm text-gray-500">
                        Nombre: {user.name}
                    </p>
                    </div>

                    <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-600 hover:underline">
                        Ver info
                    </button>
                </div>
            ))}
        </div>

        <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}/>
        </>
    )
}

export default UserList
