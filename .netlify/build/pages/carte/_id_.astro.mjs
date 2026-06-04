import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dj7x1RIw.mjs';
import { $ as $$Map, R as Reset, F as Filtre, a as $$BarCard, b as $$PbImage, E as Etoile } from '../../chunks/reset_CA6TXSXe.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
import { c as createSvgComponent } from '../../chunks/runtime_5L0uaKXh.mjs';
import { l as loadAstroAuth, u as getBars, v as getBarById } from '../../chunks/backend_DoxzlLrY.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
export { renderers } from '../../renderers.mjs';

const Close = createSvgComponent({"meta":{"src":"/_astro/close.BtVECR_0.svg","width":20,"height":20,"format":"svg"},"attributes":{"width":"20","height":"20","viewBox":"0 0 20 20","fill":"none"},"children":"\n<path d=\"M14.9915 4.99713L4.99719 14.9914\" stroke=\"white\" stroke-width=\"1.66571\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M4.99719 4.99713L14.9915 14.9914\" stroke=\"white\" stroke-width=\"1.66571\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { pb } = await loadAstroAuth(Astro2);
  const bars = await getBars(pb);
  const { id } = Astro2.params;
  const selectedBar = await getBarById(id, pb);
  if (!selectedBar) {
    return Astro2.redirect("/carte");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carte des bars", "description": "Il y a 5 bars proche de toi" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative px-5 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-10 overflow-hidden rounded-3xl border-2 border-paprika-c"> ${renderComponent($$result2, "Map", $$Map, { "bars": bars })} </section> <section class="mt-12"> <div class="flex items-center justify-between"> <h3 class="text-paprika-c">Tous les bars</h3> <div class="flex items-center gap-3"> <button id="reset-btn" aria-label="Réinitialiser le tri des bars"> ${renderComponent($$result2, "Image", $$Image, { "src": Reset, "alt": "", "class": "h-6 w-6" })} </button> <button id="filter-btn" aria-label="Trier les bars par distance" class="flex h-16 w-16 items-center justify-center rounded-full bg-white-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Filtre, "alt": "", "class": "h-7 w-7" })} </button> </div> </div> <div id="bars-list" class="mt-4 flex flex-col gap-4"> ${bars.map((bar) => renderTemplate`<div class="bar-item"${addAttribute(bar.distance, "data-distance")}> ${renderComponent($$result2, "BarCard", $$BarCard, { "nom": bar.nom, "categorie": bar.categorie, "distance": bar.distance, "note": bar.note, "record": bar, "pb": pb })} </div>`)} </div> </section> <section class="fixed inset-0 z-50 overflow-y-auto bg-black/30 px-5 pt-36 pb-32"> <div class="mx-auto max-w-xl overflow-hidden rounded-3xl border-2 border-paprika-c bg-white-c"> <div class="relative h-64 overflow-hidden"> ${renderComponent($$result2, "PbImage", $$PbImage, { "record": selectedBar, "imageField": "image", "pb": pb })} <a href="/carte" aria-label="Fermer la fiche du bar" class="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-black/40"> ${renderComponent($$result2, "Image", $$Image, { "src": Close, "alt": "", "class": "h-5 w-5" })} </a> </div> <div class="px-6 py-7 text-marron-c"> <div class="flex items-start justify-between"> <div> <h3 class="text-bordeaux-c">${selectedBar.nom}</h3> <small class="mt-2 block">${selectedBar.categorie} • ${selectedBar.prix} €€</small> </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Etoile, "alt": "", "class": "h-5 w-5" })} <p class="font-bold">${selectedBar.note}</p> </div> </div> <small class="mt-3 block">${selectedBar.description}</small> <div class="mt-3 flex flex-col gap-2"> <small><strong>Adresse :</strong> ${selectedBar.adresse}</small> <small><strong>Horaires :</strong> ${selectedBar.horaires}</small> <small><strong>Distance :</strong> À ${selectedBar.distance} km</small> </div> <div class="mt-4 flex gap-2"> <a${addAttribute(`/sortie/organiser-sortie?bar=${selectedBar.id}`, "href")} class="flex-1 rounded-lg bg-paprika-c px-4 py-3 text-center font-bold text-white">
Organiser une sortie
</a> <button class="rounded-lg border-2 border-yellow-c bg-white px-4 py-3 font-bold text-marron-c">
Itinéraire
</button> </div> </div> </div> </section> </main> ` })} ${renderScript($$result, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/[id].astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/[id].astro";
const $$url = "/carte/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
