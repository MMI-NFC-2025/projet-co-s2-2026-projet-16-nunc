import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_RQUlbrVw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CdkVV2cw.mjs';
import { T as Trophy } from '../chunks/Menu_BPR-JpcW.mjs';
import { C as Courone } from '../chunks/courone_BHGBd9_6.mjs';
import { F as Fleche } from '../chunks/fleche-droite_favDL0ce.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Boutique = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/auth-guard.js"><\/script> <script type="module" src="/src/js/boutique.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Boutique", "hideHeader": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-32"> <div id="message" class="hidden fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-6 py-4 text-white-bk shadow-lg"></div> <section class="bg-linear-to-r from-paprika-c to-yellow-c px-8 pt-10 pb-11"> <div class="flex items-start justify-between"> <div> <h2 class="text-white-bk">Boutique</h2> <small class="mt-2 text-white-bk">Personnalise ton profil</small> </div> <a href="/" class="rounded-full bg-white-c/40 px-7 py-3 text-white-bk text-base">Fermer</a> </div> <div class="mt-7 rounded-3xl bg-white-c p-6"> <div class="flex items-center justify-between"> <div class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-beige-c flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "", "class": "w-6 h-6" })} </div> <div> <h4 id="niveau" class="font-titan leading-none"></h4> <label id="points" class="mt-1 block text-marron-c"></label> </div> </div> <div id="premium-badge" class="hidden items-center gap-2 rounded-full bg-paprika-c px-4 py-2 text-white-bk"> ${renderComponent($$result2, "Image", $$Image, { "src": Courone, "alt": "", "class": "h-4 w-4" })}
Premium
</div> </div> <div class="mt-6 h-5 bg-white rounded-full overflow-hidden"> <div id="progress-bar" class="h-full bg-orange-c rounded-full"></div> </div> </div> </section> <section class="px-8"> <a href="/premium" class="mt-8 flex items-center justify-between rounded-3xl bg-linear-to-br from-paprika-c to-yellow-c px-7 py-7 gap-4"> <div> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Courone", Courone, { "class": "h-7 w-7" })} <h3 class="text-white-bk">Pass Premium</h3> </div> <small class="text-white-bk">Profite de réductions exclusives et d'avantages illimités</small> </div> ${renderComponent($$result2, "Fleche", Fleche, { "class": "h-14 w-14" })} </a> <h3 class="text-center text-paprika-c mt-7">Déco Classique</h3> <div id="cadres-list" class="mt-8 grid grid-cols-2 gap-6"></div> </section> <article id="cadre-template" class="hidden rounded-xl border border-mocha-c bg-white-c p-4 text-center"> <img class="cadre-image mx-auto h-40 w-40 object-contain" src="" alt=""> <p class="cadre-nom mt-4"></p> <h3 class="cadre-prix mt-2 text-paprika-c"></h3> <button class="cadre-bouton mt-4 w-full rounded-full bg-paprika-c px-6 py-3 text-white-bk">Acheter</button> </article> <section class="relative overflow-hidden bg-linear-to-b from-white-bk via-orange-c/70 to-white-bk mt-15"> <div class=""></div> <div class="relative px-8"> <h3 class="text-center text-paprika-c">Place premium</h3> <p class="text-center text-bordeaux-c">Réservé aux membres Premium</p> <div id="cadres-premium-list" class="mt-13 grid grid-cols-2 gap-6"></div> </div> </section> <article id="cadre-premium-template" class="hidden rounded-xl border border-paprika-c bg-white-c p-4 text-center"> <img class="cadre-premium-image h-40 mx-auto object-contain" src="" alt=""> <p class="cadre-premium-nom mt-4"></p> <button class="cadre-premium-bouton mt-4 w-full rounded-full bg-linear-to-r from-bordeaux-c via-paprika-c to-yellow-c px-6 py-3 text-white-bk text-base">Go Premium</button> </article> <section class="px-8"> <h3 class="mt-15 text-center text-paprika-c">Déco Exclusive</h3> <div id="cadres-exclusifs-list" class="mt-8 grid grid-cols-2 gap-6"></div> </section> <article id="cadre-exclusif-template" class="hidden rounded-xl border border-mocha-c bg-white-c p-4 text-center"> <img class="cadre-exclusif-image h-40 mx-auto object-contain" src="" alt=""> <p class="cadre-exclusif-nom mt-4"></p> <h3 class="cadre-exclusif-prix mt-2 text-paprika-c"></h3> <button class="cadre-exclusif-bouton mt-4 w-full rounded-full bg-paprika-c px-6 py-3 text-white-bk">Acheter</button> </article> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/boutique.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/boutique.astro";
const $$url = "/boutique";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Boutique,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
