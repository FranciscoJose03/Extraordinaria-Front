import ListaContactos from "../islands/ListaContactos.tsx"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import { Contacto } from "../type.ts"
import { getCookies } from "$std/http/cookie.ts"
import Anadir from "../components/Anadir.tsx"

type Contactos = {
    contactos: Contacto[]
    dni: string
}

export const handler: Handlers = {
    POST: async(req: Request, ctx: FreshContext) => {
        const dni = getCookies(req.headers).dni
        const form = await req.formData();
        const email = form.get("email")?.toString() || "";
        const name =  form.get("name")?.toString() || "";       
        
        console.log(email + name + dni) 
        await fetch(`https://apicontacts.deno.dev/contact`,{   
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, dni }),
        })
        const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`,{   
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const contactos = await response.json()
        return ctx.render({contactos: contactos, dni})
    },
    GET: async(req: Request, ctx: FreshContext<unknown, Contactos>) => {
        const dni = getCookies(req.headers).dni
        const response = await fetch(`https://apicontacts.deno.dev/contacts/${dni}`,{   
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        const contactos = await response.json()
        return ctx.render({contactos: contactos, dni})
    }
}

const Page = (props: PageProps<Contactos>) => {
    return(
    <>
    <div class="main-container">
        <div class="contacts-container">
            <h1>Contactos de {props.data.dni}</h1>
            <ul>
                <ListaContactos contactos={props.data.contactos}></ListaContactos>
            </ul>
                <Anadir/>
        </div>
    </div>
    </>
    )
}
export default Page