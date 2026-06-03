import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$LayoutLandingpage } from '../chunks/Layout-landingpage_DwL7enlT.mjs';
import { $ as $$Header } from '../chunks/Header_DAXJAv1W.mjs';
import { E as Eye } from '../chunks/eye-open_BHBviRK-.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CdkVV2cw.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Inscription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/inscription.js"><\/script>'])), renderComponent($$result, "Layout", $$LayoutLandingpage, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": "Inscription" })} ${maybeRenderHead()}<main class="flex items-center justify-center px-6 py-10"> <div class="w-full max-w-2xl"> <div class="mb-10 rounded-3xl bg-white-c px-5 py-5"> <h3 class="text-paprika-c">Inscris-toi !</h3> </div> <form id="form-register" class="rounded-3xl bg-white-c px-5 py-5 flex flex-col gap-6"> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"> <label class="block font-bold">
Nom
<input id="nom" name="nom" type="text" required class="mt-2 w-full rounded-xl border-2 border-yellow-c bg-white-bk px-4 py-3 font-normal outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Prénom
<input id="prenom" name="prenom" type="text" required class="mt-2 w-full rounded-xl border-2 border-yellow-c bg-white-bk px-4 py-3 font-normal outline-none focus:border-paprika-c"> </label> </div> <label class="block font-bold">
Pseudonyme
<input id="username" name="username" type="text" required placeholder="Ex: Nunc_participant023" class="mt-2 w-full rounded-xl border-2 border-yellow-c bg-white-bk px-4 py-3 font-normal placeholder:text-mocha-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Email
<input id="email" name="email" type="email" required placeholder="Ex : Nunc@participant.fr" class="mt-2 w-full rounded-xl border-2 border-yellow-c bg-white-bk px-4 py-3 font-normal placeholder:text-mocha-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Mot de passe
<div class="relative mt-2"> <input id="password" name="password" type="password" required minlength="8" maxlength="20" placeholder="Max 20 caractères" class="w-full rounded-xl border-2 border-yellow-c bg-white-bk font-normal px-4 py-3 pr-14 placeholder:text-mocha-c outline-none focus:border-paprika-c"> <button type="button" id="toggle-password" class="absolute right-4 top-1/2 -translate-y-1/2"> ${renderComponent($$result2, "Image", $$Image, { "id": "eye-icon", "src": Eye, "alt": "", "class": "w-5 h-5" })} </button> </div> <small class="mt-2 block text-mocha-c">Le mot de passe doit contenir au moins 8 caractères.</small> </label> <div id="retour-register" class="hidden font-semibold px-4 py-3 rounded-xl"></div> <button type="submit" id="btn-register" class="text-xl w-full mt-4 rounded-full bg-paprika-c py-4 text-white-bk font-bold hover:bg-orange-700 transition">
Me connecter
</button> </form> <p class="mt-6 text-center"> <a href="/connexion" class="underline">J'ai déjà un compte</a> </p> </div> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/inscription.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
