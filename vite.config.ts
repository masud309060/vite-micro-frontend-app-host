import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    // destructured env variables
    const {VITE_REMOTE_APP_ONE, VITE_DASHBOARD_APP, VITE_CONTACT_APP} = process.env;

    return defineConfig({
        plugins: [
            react(),
            federation({
                name: 'parent',
                remotes: {
                    remoteAppOne: `${VITE_REMOTE_APP_ONE}/assets/remoteEntry.js`,
                    dashboard: `${VITE_DASHBOARD_APP}/assets/remoteEntry.js`,
                    contact: `${VITE_CONTACT_APP}/assets/remoteEntry.js`,
                },
                shared: ['react', 'react-dom', 'react-router-dom', 'react-redux']

            })
        ],
        build:{
            target: "esnext",
            modulePreload: false,
            minify: false,
            cssCodeSplit: false
        }
    })
}

