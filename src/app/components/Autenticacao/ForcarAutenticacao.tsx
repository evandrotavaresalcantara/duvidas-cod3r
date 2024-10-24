'use client'
import UsuarioContext from "@/app/data/context/UsuarioContext"
import { useRouter } from "next/navigation"
import { ReactNode, useContext, useEffect } from "react"
import Carregando from "../carregando"

interface ForcarAutenticacaoProps {
    children: ReactNode
}

export default function ForcarAutenticacao({ children }: ForcarAutenticacaoProps) {
    const { usuario } = useContext(UsuarioContext)
    const router = useRouter()

    useEffect(()=>{
        if(!usuario){
            router.push('/')
        }
    }, [usuario, router])

    if (usuario) {
        return <>{children}</>
    } else {
        return <Carregando/>
    }
}


