'use client'
import { createContext, ReactNode, useEffect, useState } from "react";
import Autenticacao from "@/app/logic/core/firebase/auth/Autenticacao";
import Usuario from "@/app/logic/core/usuario/Usuario";

interface usuarioContextProps {
    usuario: Usuario | null
    carregando: boolean
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
}

interface UsuarioProvedorProps {
    children: ReactNode
}

const UsuarioContext = createContext<usuarioContextProps>({
    usuario: null,
    carregando: false,
    loginGoogle: async () => null,
    logout: async () => {}
})


export function UsuarioProvedor({children}: UsuarioProvedorProps){
    const autenticacao = new Autenticacao()
    
    const [usuario, setUsuario] = useState<Usuario | null>(null)
    const [carregando, setCarregando] = useState<boolean>(true)

     useEffect(()=>{
            const cancelar = autenticacao.monitorar(usuario => {
                setUsuario(usuario)
                setCarregando(false)
            })
            return ()  => cancelar()
     },[])


    async function loginGoogle() {
        const usuario = await autenticacao.loginGoogle()
        if (!usuario) return null
        
        setUsuario(usuario)
        
        return usuario
    }

    async function  logout() {
        await autenticacao.logout()
        setUsuario(null)
    }
   

    return(
        <UsuarioContext.Provider value={{
             usuario: usuario,
             carregando: carregando,
             loginGoogle: loginGoogle,
             logout: logout
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext