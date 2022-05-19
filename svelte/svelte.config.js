import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(sveltePreprocess({
            scss: {},
        })
    ),

    kit: {
        adapter: adapter()
    }
};

export default config;
