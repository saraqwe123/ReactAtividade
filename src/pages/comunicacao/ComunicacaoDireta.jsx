import { Pagina } from "../../components/Pagina"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import {PaiDireta} from '../../components/comunicacao/direta/PaiDireta'



export function ComunicacaoDireta() {

    const getEstilo = `
    p-5 bg-blue-800 rounded-full gap-4
    `

    return (
        <Pagina>

            <PaiDireta>

            </PaiDireta>
        </Pagina>

    )
}