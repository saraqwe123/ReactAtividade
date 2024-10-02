import { Pagina } from "../../Pagina"

export function FilhoDireta(props) {
    return (
        <div className="w-full flex flex-col items-center p-7 rounded-md bg-blue-500 text-white">
            <span className="text-4xl p-5">{props.texto}</span>
        </div>
    )
}