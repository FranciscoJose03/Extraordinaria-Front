import { FunctionComponent } from "preact";
import { Contacto } from "../type.ts";
import Delete from "../components/Delete.tsx";
import { useEffect } from "preact/hooks";

type Lista = {
    contactos: Contacto[]
}

const ListaContactos: FunctionComponent<Lista> = ({contactos}) => {
    return(
        contactos.map((contacto) => (        
            <li>
                <div>{contacto.name}</div>
                <div>{contacto.email}</div>
                <Delete contacto={contacto}/>
            </li>
        )) 
    ) 
}

export default ListaContactos