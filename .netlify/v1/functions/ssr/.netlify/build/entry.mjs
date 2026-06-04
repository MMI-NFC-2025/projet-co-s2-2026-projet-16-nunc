import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CGvFG243.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/a-propos.astro.mjs');
const _page2 = () => import('./pages/amis/_id_.astro.mjs');
const _page3 = () => import('./pages/amis.astro.mjs');
const _page4 = () => import('./pages/boutique.astro.mjs');
const _page5 = () => import('./pages/carte/_id_.astro.mjs');
const _page6 = () => import('./pages/carte.astro.mjs');
const _page7 = () => import('./pages/connexion.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/inscription.astro.mjs');
const _page10 = () => import('./pages/landing-page.astro.mjs');
const _page11 = () => import('./pages/mentions-legales.astro.mjs');
const _page12 = () => import('./pages/premium/paiement.astro.mjs');
const _page13 = () => import('./pages/premium.astro.mjs');
const _page14 = () => import('./pages/profil.astro.mjs');
const _page15 = () => import('./pages/retour-programme.astro.mjs');
const _page16 = () => import('./pages/sortie/organiser-sortie.astro.mjs');
const _page17 = () => import('./pages/sortie/_id_.astro.mjs');
const _page18 = () => import('./pages/sortie.astro.mjs');
const _page19 = () => import('./pages/test-sobriete/jeu.astro.mjs');
const _page20 = () => import('./pages/test-sobriete.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/a-propos.astro", _page1],
    ["src/pages/amis/[id].astro", _page2],
    ["src/pages/amis/index.astro", _page3],
    ["src/pages/boutique.astro", _page4],
    ["src/pages/carte/[id].astro", _page5],
    ["src/pages/carte/index.astro", _page6],
    ["src/pages/connexion.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/inscription.astro", _page9],
    ["src/pages/landing-page.astro", _page10],
    ["src/pages/mentions-legales.astro", _page11],
    ["src/pages/premium/paiement.astro", _page12],
    ["src/pages/premium/index.astro", _page13],
    ["src/pages/profil.astro", _page14],
    ["src/pages/retour-programme.astro", _page15],
    ["src/pages/sortie/organiser-sortie.astro", _page16],
    ["src/pages/sortie/[id].astro", _page17],
    ["src/pages/sortie/index.astro", _page18],
    ["src/pages/test-sobriete/jeu.astro", _page19],
    ["src/pages/test-sobriete/index.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c39eefa0-49f0-419f-820b-018512ca1404"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
