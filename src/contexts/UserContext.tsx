import { getUsers } from "@/features/users/user.api"
import { UsersContext } from "@/features/users/user.context"
import { ApiUser, ForExamUser } from "@/features/users/user.types"
import { useContext, useEffect, useState } from "react"

export function UsersProvider({children}: {children: React.ReactNode}) {
    const [users, setUsers] = useState<ApiUser[]>([])
    const [user, setUser] = useState<ForExamUser>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const addUser=(user:ForExamUser)=>{
        try{
            setLoading(true)
            setError(null)
            setUsers(prev=>[...prev,user])
            setUser(user)
        } catch (err) {
            setError("Error cargando usuarios")
        } finally {
            setLoading(false)
        }
    }

    const fetchUsers = async () => {
        try {
            setLoading(true)
            setError(null)

            const data = await getUsers()
            setUsers(data)
        } catch (err) {
            setError("Error cargando usuarios")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <UsersContext.Provider
            value={{
                addUser,
                users,
                loading,
                error,
                refetch: fetchUsers,
            }}>
            {children}
        </UsersContext.Provider>
    )
}

export const useUser=()=>{
    const ctx=useContext(UsersContext)
    if(!ctx)throw new Error("ERROR, NO PUEDES USAR USEUSER SIN USERPROVIDER")
    
    return ctx
}
