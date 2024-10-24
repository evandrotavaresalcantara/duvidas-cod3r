'use client'
import Pagina from "@/app/components/template/Pagina"
import UsuarioContext from "@/app/data/context/UsuarioContext"
import { useContext } from "react"

export default function PaginaIntranet() {
    const { usuario } = useContext(UsuarioContext)
    console.log('Executei sem permissão')
    return (
        <Pagina>
            Página Intranet
            <span className="text-red-500 border border-red-500 m-4">{usuario?.nome}</span>
        </Pagina>
    )
}