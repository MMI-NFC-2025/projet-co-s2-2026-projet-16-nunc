import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_RQUlbrVw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CdkVV2cw.mjs';
import { F as Fleche } from '../chunks/fleche_96AuL5ab.mjs';
import { T as Trophy, C as Calendrier } from '../chunks/Menu_BPR-JpcW.mjs';
import { C as Courone } from '../chunks/courone_BHGBd9_6.mjs';
import { A as Amis } from '../chunks/people_BCKZdRD0.mjs';
import { c as createSvgComponent } from '../chunks/runtime_BTGkwREA.mjs';
export { renderers } from '../renderers.mjs';

const Power = createSvgComponent({"meta":{"src":"/_astro/power.q-kovQPh.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"},"children":"\n<path d=\"M7 6C5.78639 7.02477 4.91697 8.39771 4.50943 9.93294C4.10189 11.4682 4.17592 13.0915 4.7215 14.5833C5.26708 16.0751 6.25786 17.3632 7.55971 18.2732C8.86156 19.1833 10.4116 19.6714 12 19.6714C13.5884 19.6714 15.1384 19.1833 16.4403 18.2732C17.7421 17.3632 18.7329 16.0751 19.2785 14.5833C19.8241 13.0915 19.8981 11.4682 19.4906 9.93294C19.083 8.39771 18.2136 7.02477 17 6\" stroke=\"#F6E3D4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M12 4V12\" stroke=\"#F6E3D4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Edit = createSvgComponent({"meta":{"src":"/_astro/edit.CJLDP27J.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_176_616)\">\n<path d=\"M7.99902 1.99976H3.33293C2.97935 1.99976 2.64025 2.14021 2.39023 2.39023C2.14021 2.64025 1.99976 2.97935 1.99976 3.33293V12.6651C1.99976 13.0187 2.14021 13.3578 2.39023 13.6078C2.64025 13.8578 2.97935 13.9983 3.33293 13.9983H12.6651C13.0187 13.9983 13.3578 13.8578 13.6078 13.6078C13.8578 13.3578 13.9983 13.0187 13.9983 12.6651V7.99902\" stroke=\"#DA4B05\" stroke-width=\"1.33317\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M12.2486 1.74979C12.5138 1.4846 12.8734 1.33562 13.2484 1.33562C13.6235 1.33562 13.9831 1.4846 14.2483 1.74979C14.5135 2.01497 14.6625 2.37464 14.6625 2.74967C14.6625 3.12469 14.5135 3.48436 14.2483 3.74954L8.24039 9.75814C8.08211 9.91629 7.88657 10.0321 7.67179 10.0948L5.75669 10.6547C5.69933 10.6714 5.63853 10.6724 5.58065 10.6576C5.52277 10.6428 5.46995 10.6127 5.4277 10.5704C5.38545 10.5282 5.35533 10.4753 5.34051 10.4175C5.32568 10.3596 5.32668 10.2988 5.34341 10.2414L5.90334 8.32632C5.96635 8.11171 6.08234 7.91641 6.24063 7.75839L12.2486 1.74979Z\" stroke=\"#DA4B05\" stroke-width=\"1.33317\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</g>\n<defs>\n<clipPath id=\"clip0_176_616\">\n<rect width=\"15.998\" height=\"15.998\" fill=\"white\" />\n</clipPath>\n</defs>\n"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Profil = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/auth-guard.js"><\/script> <script type="module" src="/src/js/profil.js"><\/script> <script type="module" src="/src/js/deconnexion.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Mon profil", "hideHeader": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-linear-to-r from-paprika-c to-yellow-c px-8 pt-7 pb-16"> <div class="flex items-start justify-between"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-white-bk/50 px-6 py-3 text-white-bk"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <button id="logout" class="flex h-12 w-12 items-center justify-center rounded-full bg-white-bk/50"> ${renderComponent($$result2, "Image", $$Image, { "src": Power, "alt": "D\xE9connexion", "class": "h-7 w-7" })} </button> </div> <div class="mt-4 flex flex-col items-center"> <div class="relative mt-4"> <img id="avatar" src="" alt="" class="h-40 w-40 rounded-full object-cover"> <input id="avatar-input" type="file" accept="image/*" class="hidden"> <label for="avatar-input" class="absolute top-1 right-1 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Edit, "alt": "Modifier la photo", "class": "h-6 w-6" })} </label> </div> <h3 id="username" class="mt-5 text-center text-white-bk"></h3> <div id="premium-badge" class="hidden mt-3 flex items-center gap-2 rounded-full bg-white-c/40 px-5 py-2 font-bold text-white-bk"> ${renderComponent($$result2, "Image", $$Image, { "src": Courone, "alt": "", "class": "h-4 w-4" })}
Premium
</div> <small id="date-inscription" class="mt-2 text-white-c"></small> </div> <div class="mt-7 rounded-3xl bg-white-c p-6"> <div class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-beige-c flex items-center justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "", "class": "w-6 h-6" })} </div> <div> <h4 id="niveau" class="font-titan leading-none"></h4> <small id="points" class="mt-1 block text-marron-c"></small> </div> </div> <div class="mt-8 h-5 bg-white rounded-full overflow-hidden"> <div id="progress-bar" class="h-full bg-orange-c rounded-full"></div> </div> </div> </section> <div class="mt-8 grid grid-cols-3 gap-4 px-6"> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Calendrier", Calendrier, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 id="nb-sorties" class="mt-4 font-titan"></h4> <small class="mt-2 block text-marron-c">Sorties</small> </article> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Trophee", Trophy, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 id="nb-organisations" class="mt-4 font-titan"></h4> <small class="mt-2 block text-marron-c">Organiser</small> </article> <article class="rounded-2xl border border-beige-c bg-white-c p-5 text-center"> ${renderComponent($$result2, "Amis", Amis, { "class": "mx-auto h-7 w-7 text-paprika-c" })} <h4 id="nb-amis" class="mt-4 font-titan"></h4> <small class="mt-2 block text-marron-c">Ami(e)s</small> </article> </div> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/profil.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/profil.astro";
const $$url = "/profil";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profil,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
