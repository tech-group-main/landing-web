import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        svgLoader()],
    server: {
        host: true,
        port: 3000,
        watch: {
            usePolling: true,
        },
    }
})
