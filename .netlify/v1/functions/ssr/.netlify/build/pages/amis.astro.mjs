import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_RQUlbrVw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CdkVV2cw.mjs';
import { F as Fleche } from '../chunks/fleche_96AuL5ab.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/amis.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Listes de tes amis" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <input id="search-user" type="text" placeholder="Rechercher un utilisateur" class="mt-8 w-full rounded-2xl border-2 border-mocha-c bg-white-bk p-4 outline-none"> <div class="mt-6 flex gap-3"> <button id="tab-friends" class="friend-tab rounded-full bg-paprika-c px-4 py-3 text-white">
Mes amis
</button> <button id="tab-requests" class="friend-tab rounded-full bg-white-c px-4 py-3 text-marron-c">
Demandes
</button> <button id="tab-pending" class="friend-tab rounded-full bg-white-c px-4 py-3 text-marron-c">
En attente
</button> </div> <div id="friends-list" class="mt-8 flex flex-col gap-4"></div> <article id="user-template" class="hidden w-full items-center gap-4 rounded-2xl border-2 border-mocha-c bg-white-c p-4"> <img class="user-avatar h-16 w-16 rounded-full object-cover" src="" alt=""> <div class="flex-1"> <h4 class="user-name font-bold text-bordeaux-c"></h4> <small class="user-status text-marron-c"></small> </div> <div class="flex flex-col gap-2"> <button class="user-action rounded-full bg-paprika-c px-5 py-2 text-white text-sm"></button> <button class=" user-refuse hidden rounded-full border-2 border-mocha-c px-5 py-2 text-mocha-c text-sm"> Refuser </button> </div> </article> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro";
const $$url = "/amis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
