import { RequestInit } from "next/dist/server/web/spec-extension/request";

export async function apiFetch<T>(url:string,options?:RequestInit):Promise<T>{
    const res=await fetch(url,{
        ...options,headers:{
            "Content-Type":"application/json",
            ...options?.headers
        }
    })
    if(!res)throw new Error("API ERROR.")
    
    return res.json()
}
