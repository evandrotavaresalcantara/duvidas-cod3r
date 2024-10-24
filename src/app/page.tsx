'use client'
import Link from "next/link";
import { useContext } from "react";
import usuarioContext from "./data/context/UsuarioContext";

export default function Home() {
  const { usuario, loginGoogle } = useContext(usuarioContext)
  
  return (
    <div className="flex flex-col items-center border border-orange-500 m-4 p-4">
      <span className="text-orange-500 border border-orange-500 p-4">Meu App - Home</span>
      <Link href={'/intranet'} className="border border-green-500 m-4 p-4">
        Intranet
      </Link>
      <Link href={'/extranet'} className="border border-green-500 p-4">
        Extranet
      </Link>
      <h1 className="text-red-500 border border-red-500 m-4">{usuario?.nome}</h1>
      <button onClick={loginGoogle} className="border border-red-200">
        Login Google
      </button>
      {JSON.stringify(usuario)}
    </div>
  )
}
