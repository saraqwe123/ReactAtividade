import { useState } from "react"
import { Pagina } from "../../components/Pagina"
import { IconMinus, IconPlus } from "@tabler/icons-react"



export function Contador() {

    const [numero, setNumero] = useState(0);
    const [numero1, setNumero1] = useState(0);

    const getEstilo = `
    p-10 bg-blue-800 rounded-full gap-4 m-5
    `
    const getEstilo2 = `
    p-5 bg-red-800 rounded-full gap-4 m-5
    `
    function Soma(e) {
        if (e.target.id == "1") [
            setNumero(numero - 1)
        ]
        else if (e.target.id == "2") {
            setNumero(numero + 1)
        } 
        else if (e.target.id == "3") {
            setNumero1(numero1 - 5)
        } else {
            setNumero1(numero1 + 5)
        }
      }
    

    return (
        <Pagina>
            <div className="w-full h-full flex flex-col justify-center items-center"> 
                <span>
                    <button id="1" className={getEstilo} onClick={Soma}>
                        <IconMinus/>
                    </button>
                    <span>{numero}</span>
                    <button id="2" className={getEstilo} onClick={Soma}>
                        <IconPlus/>
                    </button>
                </span>
                <span>
                    <button id="3" className={getEstilo2} onClick={Soma}>
                        <IconMinus/>
                    </button>
                    <span>{numero1}</span>
                    <button id="4" className={getEstilo2} onClick={Soma}>
                        <IconPlus/>
                    </button>
                </span>

            </div>
        </Pagina>
    )
}