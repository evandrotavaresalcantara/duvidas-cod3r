'use client'
import Pagina from "@/app/components/template/Pagina"
import UsuarioContext from "@/app/data/context/UsuarioContext"
import { useContext } from "react"

export default function PaginaExtranet() {
    const { usuario } = useContext(UsuarioContext)
    return (
        <Pagina externa>
            Página Extranet
            <span className="text-red-500 border border-red-500 m-4">{usuario?.nome}</span>
        </Pagina>
    )
}