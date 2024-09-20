import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function SemEstado() {

  let numero = 0

  function Incrementar() {
    numero += 1
    console.log(numero)
  }


  return (
    <Pagina titulo="SemEstado" subtitulo="Conceito de Estado no React">
      <div className="flex flex-col gap-4">
          <span>{numero}</span>
          <button className="bg-azul p-3 rounded-xl" onClick={Incrementar}>Incrementar</button>
      </div>
    </Pagina>
  );
}
