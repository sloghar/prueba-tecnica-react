import { createRoot } from 'react-dom/client'
import { App } from './src/App'
const root = createRoot(document.getElementById('app'))
root.render(<App />)

/*
1 - instalar el plugin de vite de react : npm install @vitejs/plugin-react
2- configurar vite para que use el plugin
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react"

    export default defineConfig({
        plugins: [react()]
    })
3 - Instalar react y react-dom
4 - Crear la etiqueta en index.html que contendrá la aplicacion
    <div id="root"></div>
5 - Crear el punto de entrada de la aplicacion
    import {createRoot} from 'react-dom/client'
    const root = createRoot(document.getElementById('root'))
    root.render(<h1>Hola mundo</h1>)
6 - Cambiar el archivo a la extensión jsx tanto en el javascript como en el index.html
*/
