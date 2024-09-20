import { useState } from "react"
import { Pagina } from "../../components/Pagina"
import { IconMinus, IconPlus } from "@tabler/icons-react"



export function Contador() {

    const getEstilo = `
    p-5 bg-blue-800 rounded-full gap-4
    `

    return (
        <Pagina>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <span>0</span>
                <span>
                    <button className={getEstilo}>
                        <IconMinus/>
                    </button>
                    <button>
                        <IconPlus/>
                    </button>
                </span>
                <span>
                    <button>
                        <IconMinus/>
                    </button>
                    <button>
                        <IconPlus/>
                    </button>
                </span>

            </div>
        </Pagina>
    )
}