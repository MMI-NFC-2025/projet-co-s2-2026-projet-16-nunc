import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C0Mj2Fxw.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
export { renderers } from '../../renderers.mjs';

const $$Paiement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paiement Premium" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10"> <a href="/premium" class="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-orange-c/70
                px-6
                py-3
                text-white
            "> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <h2 class="mt-12 text-paprika-c">
Paiement Premium
</h2> <div class="
                mt-8
                rounded-3xl
                border-2
                border-yellow-c
                bg-white-c
                p-6
            "> <h3>
Démonstration
</h3> <p class="mt-4">
Cette page est une maquette.
                Aucun paiement réel n'est effectué.
</p> <input type="text" placeholder="Numéro de carte" class="
                    mt-8
                    w-full
                    rounded-2xl
                    border-2
                    border-mocha-c
                    p-4
                "> <div class="mt-4 flex gap-4"> <input type="text" placeholder="MM/AA" class="
                        w-1/2
                        rounded-2xl
                        border-2
                        border-mocha-c
                        p-4
                    "> <input type="text" placeholder="CVC" class="
                        w-1/2
                        rounded-2xl
                        border-2
                        border-mocha-c
                        p-4
                    "> </div> <button class="
                    mt-8
                    w-full
                    rounded-full
                    bg-paprika-c
                    py-4
                    text-white
                ">
Payer
</button> </div> </main> ` })}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/paiement.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/paiement.astro";
const $$url = "/premium/paiement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Paiement,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
