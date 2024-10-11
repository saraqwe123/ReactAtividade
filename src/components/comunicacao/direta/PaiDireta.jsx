import { useState } from "react"
import { FilhoDireta } from "./FilhoDireta"

export function PaiDireta() {
    const botoes = `   bg-purple-500 px-4 py-2 rounded-3xl m-2`
    const [nome, setNome ] = useState("")

    return (
        <div className="w-full flex flex-col items-center p-7 rounded-md bg-blue-500 text-white">
            <div>
            <button className="botao" onclick={() => setNome("Pedroca mozinho")}>Joao</button>
            <button className="botao" onclick={() => setNome("Pedroca mozinho")}>Sara</button>
            <button className="botao" onclick={() => setNome("Pedroca o cara")}>Pedro</button>
            </div>
            <FilhoDireta texto = {nome}/>


        </div>
    )
}