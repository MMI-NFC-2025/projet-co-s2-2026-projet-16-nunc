import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_ir9QOgyR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { T as Trophy } from '../chunks/Menu_BsNEgW-R.mjs';
import { C as Courone } from '../chunks/courone_CrdAgGv2.mjs';
import { F as Fleche } from '../chunks/fleche-droite_CG47Fsf7.mjs';
import { l as loadAstroAuth, k as acheterCadre, g as getUserById, o as obtenirCadrePremium, m as getCadres, n as getCadresUtilisateur, p as getCadresPremium, q as getCadresExclusifs, t as getFileUrl } from '../chunks/backend_DoxzlLrY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Boutique = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Boutique;
  const { pb, user: authUser } = await loadAstroAuth(Astro2);
  if (!authUser) {
    return Astro2.redirect("/connexion");
  }
  let message = "";
  let messageError = false;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    const cadreId = formData.get("cadreId")?.toString();
    try {
      if (action === "acheter-cadre" && cadreId) {
        await acheterCadre(authUser.id, cadreId, pb);
        message = "Cadre achet\xE9.";
      } else if (action === "obtenir-premium" && cadreId) {
        const freshUser = await getUserById(authUser.id, pb);
        if (!freshUser.premium) {
          return Astro2.redirect("/premium");
        }
        await obtenirCadrePremium(authUser.id, cadreId, pb);
        message = "Cadre premium ajout\xE9.";
      }
    } catch (error) {
      message = error?.message || "L'achat n'a pas fonctionn\xE9.";
      messageError = true;
    }
  }
  const [user, cadres, inventaire, cadresPremium, cadresExclusifs] = await Promise.all([
    getUserById(authUser.id, pb),
    getCadres(pb),
    getCadresUtilisateur(authUser.id, pb),
    getCadresPremium(pb),
    getCadresExclusifs(pb)
  ]);
  const points = user.points || 0;
  const niveau = user.niveau || Math.floor(points / 250) + 1;
  const maxXp = niveau * 250;
  const progress = maxXp > 0 ? points / maxXp * 100 : 0;
  const cadresPossedes = new Set(inventaire.map((item) => item.cadre).filter(Boolean));
  const cadresPremiumPossedes = new Set(inventaire.map((item) => item.cadre_premium).filter(Boolean));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Boutique", "hideHeader": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-32"> ${message && renderTemplate`<div${addAttribute([
    "fixed top-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl px-6 py-4 text-white-bk shadow-lg",
    messageError ? "bg-paprika-c" : "bg-green-600"
  ], "class:list")}> ${message} </div>`} <section class="bg-linear-to-r from-paprika-c to-yellow-c px-8 pt-10 pb-11"> <div class="flex items-start justify-between"> <div> <h2 class="text-white-bk">Boutique</h2> <small class="mt-2 text-white-bk">Personnalise ton profil</small> </div> <a href="/" class="rounded-full bg-white-c/40 px-7 py-3 text-white-bk text-base">Fermer</a> </div> <div class="mt-7 rounded-3xl bg-white-c p-6"> <div class="flex items-center justify-between"> <div class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-beige-c flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "", "class": "w-6 h-6" })} </div> <div> <h4 id="niveau" class="font-titan leading-none">Niveau ${niveau}</h4> <label id="points" class="mt-1 block text-marron-c">${points} / ${maxXp} points</label> </div> </div> <div id="premium-badge"${addAttribute([
    "items-center gap-2 rounded-full bg-paprika-c px-4 py-2 text-white-bk",
    user.premium ? "flex" : "hidden"
  ], "class:list")}> ${renderComponent($$result2, "Image", $$Image, { "src": Courone, "alt": "", "class": "h-4 w-4" })}
Premium
</div> </div> <div class="mt-6 h-5 bg-white rounded-full overflow-hidden"> <div id="progress-bar" class="h-full bg-orange-c rounded-full"${addAttribute(`width:${progress}%`, "style")}></div> </div> </div> </section> <section class="px-8"> <a href="/premium" class="mt-8 flex items-center justify-between rounded-3xl bg-linear-to-br from-paprika-c to-yellow-c px-7 py-7 gap-4"> <div> <div class="flex items-center gap-4"> ${renderComponent($$result2, "Courone", Courone, { "class": "h-7 w-7" })} <h3 class="text-white-bk">Pass Premium</h3> </div> <small class="text-white-bk">Profite de réductions exclusives et d'avantages illimités</small> </div> ${renderComponent($$result2, "Fleche", Fleche, { "class": "h-14 w-14" })} </a> <h3 class="text-center text-paprika-c mt-7">Déco Classique</h3> <div id="cadres-list" class="mt-8 grid grid-cols-2 gap-6"> ${cadres.map((cadre) => {
    const possede = cadresPossedes.has(cadre.id);
    return renderTemplate`<article class="rounded-xl border border-mocha-c bg-white-c p-4 text-center"> <img class="cadre-image mx-auto h-40 w-40 object-contain"${addAttribute(getFileUrl(cadre, cadre.image, pb), "src")}${addAttribute(`Cadre ${cadre.nom}`, "alt")} loading="lazy"> <p class="cadre-nom mt-4">${cadre.nom}</p> <h3 class="cadre-prix mt-2 text-paprika-c">${cadre.prix} pts</h3> ${possede ? renderTemplate`<button disabled class="cadre-bouton mt-4 w-full rounded-full bg-beige-c px-6 py-3 text-white-bk">Possédé</button>` : renderTemplate`<form method="post"> <input type="hidden" name="action" value="acheter-cadre"> <input type="hidden" name="cadreId"${addAttribute(cadre.id, "value")}> <button class="cadre-bouton mt-4 w-full rounded-full bg-paprika-c px-6 py-3 text-white-bk">Acheter</button> </form>`} </article>`;
  })} </div> </section> <section class="relative overflow-hidden bg-linear-to-b from-white-bk via-orange-c/70 to-white-bk mt-15"> <div class=""></div> <div class="relative px-8"> <h3 class="text-center text-paprika-c">Place premium</h3> <p class="text-center text-bordeaux-c">Réservé aux membres Premium</p> <div id="cadres-premium-list" class="mt-13 grid grid-cols-2 gap-6"> ${cadresPremium.map((cadre) => {
    const possede = cadresPremiumPossedes.has(cadre.id);
    return renderTemplate`<article class="rounded-xl border border-paprika-c bg-white-c p-4 text-center"> <img class="cadre-premium-image h-40 mx-auto object-contain"${addAttribute(getFileUrl(cadre, cadre.image, pb), "src")}${addAttribute(`Cadre premium ${cadre.nom}`, "alt")} loading="lazy"> <p class="cadre-premium-nom mt-4">${cadre.nom}</p> ${possede ? renderTemplate`<button disabled class="cadre-premium-bouton mt-4 w-full rounded-full bg-beige-c px-6 py-3 text-white-bk text-base">Possédé</button>` : user.premium ? renderTemplate`<form method="post"> <input type="hidden" name="action" value="obtenir-premium"> <input type="hidden" name="cadreId"${addAttribute(cadre.id, "value")}> <button class="cadre-premium-bouton mt-4 w-full rounded-full bg-linear-to-r from-bordeaux-c via-paprika-c to-yellow-c px-6 py-3 text-white-bk text-base">Obtenir</button> </form>` : renderTemplate`<a href="/premium" class="cadre-premium-bouton mt-4 block w-full rounded-full bg-linear-to-r from-bordeaux-c via-paprika-c to-yellow-c px-6 py-3 text-white-bk text-base">Go Premium</a>`} </article>`;
  })} </div> </div> </section> <section class="px-8"> <h3 class="mt-15 text-center text-paprika-c">Déco Exclusive</h3> <div id="cadres-exclusifs-list" class="mt-8 grid grid-cols-2 gap-6"> ${cadresExclusifs.map((cadre) => renderTemplate`<article class="rounded-xl border border-mocha-c bg-white-c p-4 text-center"> <img class="cadre-exclusif-image h-40 mx-auto object-contain"${addAttribute(getFileUrl(cadre, cadre.image, pb), "src")}${addAttribute(`Cadre exclusif ${cadre.nom}`, "alt")} loading="lazy"> <p class="cadre-exclusif-nom mt-4">${cadre.nom}</p> <h3 class="cadre-exclusif-prix mt-2 text-paprika-c">${cadre.prix}€</h3> <button disabled class="cadre-exclusif-bouton mt-4 w-full rounded-full bg-beige-c px-6 py-3 text-white-bk">Bientôt</button> </article>`)} </div> </section> </main> ` })}`;
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
