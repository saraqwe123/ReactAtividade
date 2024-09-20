import { useState } from "react"
import { Pagina } from "../../components/Pagina"

export function CampoTexto() {

    const [texto, setTexto] = useState("aaaa")


    return (
        <Pagina titulo = "Campo de Texto" subtitulo = "Conceito de estado no React">
            <div className="flex flex-col gap-4">
                <input className="w-50 h-8 bg-slate-950" type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
                <button className="bg-azul p-2 rounded-xl" onClick={() => setTexto("")}>Limpar</button>
                <span>{texto}</span>
            </div>
        </Pagina>
    )
}