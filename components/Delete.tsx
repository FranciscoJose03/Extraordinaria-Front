import { FunctionComponent } from "preact";
import { Contacto } from "../type.ts";

type Data = {
    contacto: Contacto;
};

const Delete: FunctionComponent<Data> = ({contacto}) => {
    const deletecont = async(contacto: Contacto) => {
        await fetch(`https://apicontacts.deno.dev/contact/${contacto.dni}/${contacto._id}`,{   
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
    }
    return(
        <button onClick={(_e) => deletecont(contacto)}> Delete</button>
    )
}

export default Delete;