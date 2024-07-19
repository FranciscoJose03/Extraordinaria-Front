import Inicio from "../components/Inicio.tsx"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import { setCookie } from "$std/http/cookie.ts"
import ListaContactos from "../islands/ListaContactos.tsx"
import { Contacto } from "../type.ts"
import { getCookies } from "$std/http/cookie.ts"
import Anadir from "../components/Anadir.tsx"
type Data = {
  message: string
};

export const handler: Handlers = {
  POST: async(req: Request, ctx: FreshContext) => {
    const form = await req.formData();
    const dni = form.get("dni")?.toString() || " ";
    if(dni.length !== 9) {
      return ctx.render({message: "El DNI debe tener 9 caracteres"})
    }else{
      const headers = new Headers();
      setCookie(headers, {
        name: "dni",
        value: dni,
        path: "/"
      })
      headers.set("location","/contactos")
      return new Response(null, {
        status: 303, 
        headers
      })
    }
  }
}


const Page = (props: PageProps<Data>) => (
  <Inicio message = {props.data?.message}/>
)
export default Page