import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C0Mj2Fxw.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
import { T as Trophy, C as Calendrier } from '../../chunks/Menu_BsNEgW-R.mjs';
import { C as Courone } from '../../chunks/courone_CrdAgGv2.mjs';
import { A as Amis } from '../../chunks/people_Dj-cI_yv.mjs';
import { l as loadAstroAuth, g as getUserById, a as getNbSortiesParticipees, b as getNbSortiesOrganisees, c as getNbAmis, d as getFileUrl } from '../../chunks/backend_DljU_PTa.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  const { pb } = await loadAstroAuth(Astro2);
  const user = await getUserById(id, pb).catch(() => null);
  if (!user) {
    return Astro2.redirect("/amis");
  }
  const nbSorties = await getNbSortiesParticipees(id, pb);
  const nbOrganisations = await getNbSortiesOrganisees(id, pb);
  const nbAmis = await getNbAmis(id, pb);
  const points = user.points || 0;
  const niveau = Math.floor(points / 250) + 1;
  const maxXp = niveau * 250;
  const currentXp = points;
  const progress = currentXp / maxXp * 100;
  const dateInscription = new Date(user.created).toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/auth-guard.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": `Profil de ${user.username}`, "hideHeader": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-linear-to-r from-paprika-c to-yellow-c px-8 pt-7 pb-16"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-white-bk/50 px-6 py-3 text-white-bk"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <div class="mt-4 flex flex-col items-center"> <img${addAttribute(getFileUrl(user, user.avatar, pb), "src")} alt="" class="h-40 w-40 rounded-full object-cover"> <h3 class="mt-5 text-center text-white-bk">${user.username}</h3> ${user.premium && renderTemplate`<div class="mt-3 flex items-center gap-2 rounded-full bg-white-c/40 px-5 py-2 font-bold text-white-bk"> ${renderComponent($$result2, "Image", $$Image, { "src": Courone, "alt": "", "class": "h-4 w-4" })}
Premium
</div>`} <small class="mt-2 text-white-c">Membre depuis ${dateInscription}</small> </div> <div class="mt-7 rounded-3xl bg-white-c p-6"> <div class="flex items-center justify-between"> <div class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-beige-c flex items-center justify-center shrink-0"> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "", "class": "w-6 h-6" })} </div> <div> <h4 class="font-titan leading-none">Niveau ${niveau}</h4> <small class="mt-1 block text-marron-c">${currentXp} / ${maxXp} points</small> </div> </div> </div> <div class="mt-8 h-5 bg-white rounded-full overflow-hidden"> <div class="h-full bg-orange-c rounded-full"${addAttribute(`width:${progress}%`, "style")}></div> </div> </div> </section> <div class="mt-8 grid grid-cols-3 gap-4 px-6"> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Calendrier", Calendrier, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 class="mt-4 font-titan">${nbSorties}</h4> <small class="mt-2 block text-marron-c">Sorties</small> </article> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Trophee", Trophy, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 class="mt-4 font-titan">${nbOrganisations}</h4> <small class="mt-2 block text-marron-c">Organiser</small> </article> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Amis", Amis, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 class="mt-4 font-titan">${nbAmis}</h4> <small class="mt-2 block text-marron-c">Ami(e)s</small> </article> </div> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/[id].astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/[id].astro";
const $$url = "/amis/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
