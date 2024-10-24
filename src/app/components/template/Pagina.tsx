import UsuarioContext from "@/app/data/context/UsuarioContext"
import { ReactNode, useContext } from "react"
import ForcarAutenticacao from "../Autenticacao/ForcarAutenticacao"

interface PaginaProps {
    children: ReactNode
    externa?: boolean
}

export default function Pagina({ children, externa }: PaginaProps) {
    const { usuario } = useContext(UsuarioContext)

    function renderizarPagina() {
        return (
            <div>
                {children}
            </div>
        )
    }
    return externa ? renderizarPagina() : (
        <ForcarAutenticacao>
            {children}
        </ForcarAutenticacao>
    )
    
}