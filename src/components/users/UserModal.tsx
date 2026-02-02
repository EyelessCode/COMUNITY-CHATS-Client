import { useUser } from "@/contexts/UserContext"
import { ApiUser } from "@/features/users/user.types"

interface Props{
    user:ApiUser|null
    onClose:()=>void
}

function UserModal({user,onClose}:Props) {
    // const {loading}=useUser()
    if(!user)return null
    

    // if (loading) return <p className="text-black justify-center items-center">Cargando...</p>
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded p-6 w-80 text-black">
                <h2 className="text-xl font-bold mb-2">
                    Información del usuario
                </h2>

                <p><strong>Usuario:</strong> {user.username}</p>
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Correo:</strong> {user.email}</p>
                <p><strong>Calle:</strong> {user.address.street}</p>

                <button onClick={onClose} className="mt-4 bg-red-500 text-black px-4 py-2 rounded">
                    Cerrar
                </button>
            </div>
        </div>
    )
}

export default UserModal
