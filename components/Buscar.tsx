import { FunctionalComponent } from "preact/src/index.d.ts";

const Buscar: FunctionalComponent = () => {
    return(
        <div>
            <form method="GET">
            <input type = "text" name = "telefono" placeholder="Nº telefono"></input>
            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}

export default Buscar;