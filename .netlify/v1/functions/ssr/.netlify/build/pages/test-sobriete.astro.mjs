import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dj7x1RIw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { O as Orange } from '../chunks/orange_Cz3fDFH3.mjs';
import { T as Trophy } from '../chunks/coupe_DXo6-omo.mjs';
import { W as Warning } from '../chunks/tw_sVE_cmhm.mjs';
import { F as Flechegauche, a as Flechedroite } from '../chunks/flecheorange-droite_ZVQDZnmQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Test de Sobri\xE9t\xE9", "description": "Challenge ton cerveau et v\xE9rifie que tu es en forme !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-9 rounded-3xl border-2 border-mocha-c bg-white-c p-5"> <h3 class="text-center text-paprika-c">Comment ça marche ?</h3> <div class="mt-5 flex flex-col gap-5"> <div class="flex items-center gap-5 rounded-3xl bg-white-bk p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Orange, "alt": "", "class": "h-8 w-8 shrink-0" })} <div> <p class="font-bold">5 questions rapides</p> <small class="mt-1 block text-marron-c">
Culture cinématographique
</small> </div> </div> <div class="flex items-center gap-5 rounded-3xl bg-white-bk p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Orange, "alt": "", "class": "h-8 w-8 shrink-0" })} <div> <p class="font-bold">Gagne des points</p> <small class="mt-1 block text-marron-c">
Chaque défi réussi te permet de gagner des points
</small> </div> </div> <div class="flex items-center gap-5 rounded-3xl bg-white-bk p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": Orange, "alt": "", "class": "h-8 w-8 shrink-0" })} <div> <p class="font-bold">Obtiens ton résultat</p> <small class="mt-1 block text-marron-c">
Plus ton score est élevé, plus tu es sobre
</small> </div> </div> </div> </section> <section class="mt-8 rounded-3xl bg-linear-to-r from-paprika-c to-yellow-c px-5 py-5 text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "Troph\xE9e", "class": "mx-auto h-13 w-auto" })} <h3 class="mt-5 text-white">Score maximum :</h3> <h3 class="mt-2 text-bordeaux-c">100 points</h3> <small class="mt-5 text-white block">
Tes points de sobriété s'ajoutent à ton compte !
</small> </section> <section class="mt-9 rounded-lg bg-white-c p-2"> <div class="flex items-start gap-3"> ${renderComponent($$result2, "Image", $$Image, { "src": Warning, "alt": "", "class": "h-8 w-8 shrink-0" })} <div> <p class="text-paprika-c font-bold">Rappel important</p> <small class="mt-3 text-paprika-c block">
Ce test est ludique et ne remplace pas un véritable test
                        d'alcoolémie. Si tu as bu, ne prends pas le volant.
</small> </div> </div> </section> <a href="/test-sobriete/jeu" class="relative mx-auto mt-9 flex w-full items-center justify-center rounded-full bg-paprika-c py-5 text-white"> <span class="absolute inset-y-0 left-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechegauche, "alt": "", "class": "h-12 w-12" })} </span>
Commencer le test
<span class="absolute inset-y-0 right-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechedroite, "alt": "", "class": "h-12 w-12" })} </span> </a> </main> ` })}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/index.astro";
const $$url = "/test-sobriete";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
