import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'parent',
            remotes: {
                remoteAppOne: "http://localhost:3001/assets/remoteEntry.js",
                dashboard: "http://localhost:3002/assets/remoteEntry.js",
                contact: "http://localhost:3003/assets/remoteEntry.js",
            },
            shared: ['react', 'react-dom', 'react-router-dom']
        })
    ],
    build:{
        target:['edge90','chrome90','firefox90','safari15'],
        modulePreload: false,
        minify: false,
        cssCodeSplit: false
    }
})
