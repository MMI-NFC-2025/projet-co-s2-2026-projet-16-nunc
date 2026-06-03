import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, d as addAttribute } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_C0Mj2Fxw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { P as Photo } from '../chunks/photo-verre_pUW6spG4.mjs';
import { F as Flechegauche, a as Flechedroite } from '../chunks/flecheorange-droite_ZVQDZnmQ.mjs';
import { O as Orange } from '../chunks/orange_Cz3fDFH3.mjs';
import 'clsx';
import { l as loadAstroAuth, A as getAbonnements, B as getAvantages, C as getFaq } from '../chunks/backend_DljU_PTa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$AvantageCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AvantageCard;
  const { titre, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-4 rounded-xl bg-marron-c p-3"> ${renderComponent($$result, "Image", $$Image, { "src": Orange, "alt": "", "class": "h-10 w-10 shrink-0" })} <div> <p class="text-white-c">${titre}</p> <small class="mt-2 text-white-bk">${description}</small> </div> </div>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/AvantageCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$FaqCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FaqCard;
  const {
    question,
    reponse
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h4 class="text-marron-c font-bold"> ${question} </h4> <p class="mt-3 text-marron-c"> ${reponse} </p> </div>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/FaqCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { pb } = await loadAstroAuth(Astro2);
  const abonnements = await getAbonnements(pb);
  const avantages = await getAvantages(pb);
  const faq = await getFaq(pb);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "N\u0168NC Premium", "hideHeader": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-32"> <section class="w-full px-6 py-10 bg-linear-to-br from-bordeaux-c via-paprika-c to-yellow-c"> <h2 class="text-center text-white-bk">NŨNC Premium</h2> </section> <div class="px-8 py-10"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <h2 class="mt-15 text-paprika-c">
Parce que les tournées <span class="text-orange-c">gratuites</span>, ça ne se refuse pas.
</h2> <section class="relative -mx-8 mt-2"> <div class="relative h-120 overflow-hidden"> ${renderComponent($$result2, "Image", $$Image, { "src": Photo, "alt": "", "class": "absolute inset-0 h-full w-full object-cover opacity-70" })} <div class="absolute inset-0 bg-linear-to-b from-white-bk via-transparent to-white-bk"></div> </div> </section> <section class="mt-10"> <div class="relative rounded-2xl border-2 border-yellow-c bg-white-c p-6"> <div class="absolute -top-16 right-4 rounded-full bg-yellow-c px-5 py-2 font-bold text-base text-white">
Populaire
</div> <h2 class="text-center text-paprika-c">Choisis ton abonnement</h2> <div class="mt-10 flex justify-center gap-3"> ${abonnements.map((abonnement) => renderTemplate`<button${addAttribute(
    abonnement.type === "Mensuel" ? "w-45 h-45 rounded-xl bg-linear-to-br from-bordeaux-c via-paprika-c to-yellow-c p-7 flex flex-col items-center justify-center" : "w-45 h-45 rounded-xl border border-yellow-c bg-white-bk p-7 flex flex-col items-center justify-center",
    "class"
  )}> <small${addAttribute(abonnement.type === "Mensuel" ? "text-center font-bold text-white-bk" : "text-center font-bold text-marron-c", "class")}> ${abonnement.type} </small> <h3${addAttribute(abonnement.type === "Mensuel" ? "mt-2 min-h-2 text-center text-white-bk" : "mt-2 min-h-2 text-center text-marron-c", "class")}> ${abonnement.prix}€
</h3> <small${addAttribute(abonnement.type === "Mensuel" ? "text-center text-white-bk" : "text-center text-marron-c", "class")}>
/${abonnement.duree} </small> </button>`)} </div> <a href="/premium/paiement" class="relative mx-auto mt-10 flex w-full items-center justify-center rounded-full bg-paprika-c py-5 text-white"> <span class="absolute inset-y-0 left-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechegauche, "alt": "", "class": "h-12 w-12" })} </span>
S'abonner maintenant
<span class="absolute inset-y-0 right-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechedroite, "alt": "", "class": "h-12 w-12" })} </span> </a> </div> </section> <section class="mt-16"> <h3 class="text-center text-paprika-c">Le kit du parfait fêtard</h3> <div class="mt-8 space-y-6"> ${avantages.map((avantage) => renderTemplate`${renderComponent($$result2, "Card", $$AvantageCard, { "titre": avantage.titre, "description": avantage.description })}`)} </div> </section> <section class="mt-16"> <div class="rounded-2xl border-2 border-yellow-c bg-white-c p-8"> <h3 class="text-paprika-c">Questions fréquentes</h3> <div class="mt-10 space-y-10"> ${faq.map((item) => renderTemplate`${renderComponent($$result2, "FaqCard", $$FaqCard, { "question": item.question, "reponse": item.reponse })}`)} </div> </div> </section> </div> </main> ` })}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/index.astro";
const $$url = "/premium";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
