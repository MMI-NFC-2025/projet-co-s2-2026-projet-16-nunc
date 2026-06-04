import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_Dj7x1RIw.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
import { l as loadAstroAuth, g as getUserById, A as activatePremium } from '../../chunks/backend_DoxzlLrY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Paiement = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paiement;
  const { pb, user: authUser } = await loadAstroAuth(Astro2);
  if (!authUser) {
    return Astro2.redirect("/connexion");
  }
  const user = await getUserById(authUser.id, pb);
  if (Astro2.request.method === "POST") {
    await activatePremium(user.id, pb);
    return Astro2.redirect("/profil");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paiement", "description": "Ceci est une page de d\xE9monstraion !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/premium" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <h2 class="mt-12 text-paprika-c">Paiement</h2> <div class="mt-8 rounded-3xl border-2 border-yellow-c bg-white-c p-6"> <h3>Validation de l'abonnement</h3> ${user.premium ? renderTemplate`<div class="mt-4 rounded-2xl bg-white-bk p-4 text-marron-c">
Ton compte est déjà Premium.
</div>` : renderTemplate`<p class="mt-4 leading-relaxed">
L'étape bancaire est simulée.
</p>`} <form method="post" class="mt-8"> <input type="text" name="cardNumber" inputmode="numeric" autocomplete="off" placeholder="Numéro de carte" class="w-full rounded-2xl border-2 border-mocha-c bg-white-bk p-4 text-marron-c outline-none focus:border-paprika-c"> <div class="mt-4 flex gap-4"> <input type="text" name="expiry" inputmode="numeric" autocomplete="off" placeholder="MM/AA" class="w-1/2 rounded-2xl border-2 border-mocha-c bg-white-bk p-4 text-marron-c outline-none focus:border-paprika-c"> <input type="text" name="cvc" inputmode="numeric" autocomplete="off" placeholder="CVC" class="w-1/2 rounded-2xl border-2 border-mocha-c bg-white-bk p-4 text-marron-c outline-none focus:border-paprika-c"> </div> <small class="mt-3 block text-marron-c">
Ces informations ne sont ni vérifiées ni enregistrées : elles servent seulement à simuler l'étape de paiement.
</small> <button class="mt-8 w-full rounded-full bg-paprika-c py-4 font-bold text-white"> ${user.premium ? "Retourner au profil" : "Activer Premium"} </button> </form> </div> </main> ` })}`;
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
