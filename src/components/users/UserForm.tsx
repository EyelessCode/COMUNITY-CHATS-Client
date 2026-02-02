import { ApiUser } from "@/features/users/user.types"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

interface Props{
    onAddUser:(user:ApiUser)=>void
}

function UserForm({onAddUser}:Props) {
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [street,setStreet]=useState("")
    // const [rol,setRol]=useState("")
    const router=useRouter()

    const handleSubmit=(e:React.SubmitEvent)=>{
        e.preventDefault()

        onAddUser(
            {
                id: Date.now(),
                name,
                username,
                email,
                adress: {
                    street,
                    suite:"",
                    zipcode:"",
                    geo:{
                        lat:"",
                        lng:""
                    }
                },
                phone: "",
                website: "",
                company: {
                    name: "",
                    catchPhrase: "",
                    bs: ""
                }
            }
        )
        setName("")
        setUsername("")
        setEmail("")
        setStreet("")
    }
    return (
        <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow max-w-md text-black">
            <input
                className="border p-2 w-full mb-2"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />

            <input
                className="border p-2 w-full mb-2"
                placeholder="Nombre"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
            />
            <input
                className="border p-2 w-full mb-2"
                placeholder="Nombre"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                className="border p-2 w-full mb-2"
                placeholder="Nombre"
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
                required
            />

            <button className="bg-blue-600 text-black px-4 py-2 rounded">
                Crear usuario
            </button>
            <button className="bg-amber-500 text-black px-4 ml-2 py-2 rounded"
                onClick={()=>router.back()}>
                Regresar
            </button>
        </form>
    )
}

export default UserForm
