import { FunctionComponent } from "preact";


const Anadir: FunctionComponent = () => (
    <div class="add-contact-container">
        <h1>Añadir contacto</h1>
        <form method="post">
            <label for="name">Nombre:</label>
                <input type="text" name="name" id="name"/>
            <label for="email">Email:</label>
                <input type="email" name="email" id="email"/>
            <button type="submit">Añadir</button>
        </form>
    </div>
)

export default Anadir;