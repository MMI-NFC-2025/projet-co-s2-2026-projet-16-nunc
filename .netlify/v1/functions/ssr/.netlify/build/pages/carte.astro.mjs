import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C0Mj2Fxw.mjs';
import { $ as $$Map, R as Reset, F as Filtre, a as $$BarCard } from '../chunks/reset_Dab7sKAu.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { l as loadAstroAuth, u as getBars } from '../chunks/backend_DljU_PTa.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { pb } = await loadAstroAuth(Astro2);
  const bars = await getBars(pb);
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/filtre.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Carte des bars", "description": "Il y a 5 bars proche de toi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-5 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-10 overflow-hidden rounded-3xl border-2 border-paprika-c"> ${renderComponent($$result2, "Map", $$Map, { "bars": bars })} </section> <section class="mt-12"> <div class="flex items-center justify-between"> <h3 class="text-paprika-c">Tous les bars</h3> <div class="flex items-center gap-3"> <button id="reset-btn"> ${renderComponent($$result2, "Image", $$Image, { "src": Reset, "alt": "", "class": "h-6 w-6" })} </button> <button id="filter-btn" class="flex h-16 w-16 items-center justify-center rounded-full bg-white-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Filtre, "alt": "", "class": "h-7 w-7" })} </button> </div> </div> <div id="bars-list" class="mt-4 flex flex-col gap-4"> ${bars.map((bar) => renderTemplate`<div class="bar-item"${addAttribute(bar.distance, "data-distance")}> ${renderComponent($$result2, "BarCard", $$BarCard, { "nom": bar.nom, "categorie": bar.categorie, "distance": bar.distance, "note": bar.note, "record": bar, "pb": pb })} </div>`)} </div> </section> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/index.astro";
const $$url = "/carte";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
