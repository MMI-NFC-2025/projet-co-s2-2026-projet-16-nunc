import { c as createComponent, a as renderTemplate, d as addAttribute, r as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$LayoutLandingpage } from '../chunks/Layout-landingpage_RFplN3e3.mjs';
import { $ as $$Header } from '../chunks/Header_BASlXZdf.mjs';
import { i as inscriptionScript, E as Eye, a as EyeClose } from '../chunks/inscription_DmIeFo8i.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { x as createServerPocketBase, y as createAuthCookie } from '../chunks/backend_CNX6c8lU.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Connexion;
  let error = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const pb = createServerPocketBase(Astro2.request);
    try {
      await pb.collection("users").authWithPassword(email, password);
      const response = Astro2.redirect("/");
      response.headers.append("Set-Cookie", createAuthCookie(pb));
      return response;
    } catch {
      error = "Identifiants incorrects";
    }
  }
  return renderTemplate(_a || (_a = __template(["", ' <script type="module"', "><\/script>"])), renderComponent($$result, "Layout", $$LayoutLandingpage, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": "Connexion" })} ${maybeRenderHead()}<main class="flex items-center justify-center px-6 py-10"> <section class="w-full max-w-xl"> <div class="mb-10 rounded-3xl bg-white-c px-5 py-5"> <h3 class="text-paprika-c">Connecte-toi !</h3> </div> <form id="form-login" method="post" class="rounded-3xl bg-white-c px-5 py-5 flex flex-col gap-6"> <label class="block font-bold">
Email
<input id="email" name="email" type="email" required placeholder="Ex : Nunc@participant.fr" class="mt-2 w-full rounded-xl border-2 border-yellow-c bg-white-bk font-normal px-4 py-3 placeholder:text-mocha-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Mot de passe
<div class="relative mt-2"> <input id="password" name="password" type="password" required class="w-full rounded-xl border-2 border-yellow-c bg-white-bk px-4 py-3 pr-14 font-normal outline-none focus:border-paprika-c"> <button type="button" id="toggle-password" aria-label="Afficher ou masquer le mot de passe" class="absolute right-4 top-1/2 -translate-y-1/2"${addAttribute(Eye.src, "data-open-src")}${addAttribute(EyeClose.src, "data-closed-src")}> ${renderComponent($$result2, "Image", $$Image, { "id": "eye-icon", "src": Eye, "alt": "", "class": "w-5 h-5" })} </button> </div> </label> <div id="retour-login"${addAttribute([
    "font-semibold px-4 py-3 rounded-xl bg-red-100 text-red-700",
    { hidden: !error }
  ], "class:list")}> ${error} </div> <button type="submit" id="btn-login" class="text-xl w-full mt-4 rounded-full bg-paprika-c py-4 text-white-bk font-bold hover:bg-orange-700 transition">
Se connecter
</button> </form> <p class="mt-6 text-center">
Pas encore de compte ?
<a href="/inscription" class="underline">Inscris-toi</a> </p> </section> </main> ` }), addAttribute(inscriptionScript, "src"));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/connexion.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Connexion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
