import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Dj7x1RIw.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { F as Flechegauche, a as Flechedroite } from '../chunks/flecheorange-droite_ZVQDZnmQ.mjs';
import { c as createSvgComponent } from '../chunks/runtime_5L0uaKXh.mjs';
import { a as Carte } from '../chunks/Menu_BsNEgW-R.mjs';
import { I as Instagram, T as Tiktok, F as Facebook } from '../chunks/tiktok_CZRKFt0f.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { x as createServerPocketBase, z as addContact } from '../chunks/backend_DoxzlLrY.mjs';
export { renderers } from '../renderers.mjs';

const Mail = createSvgComponent({"meta":{"src":"/_astro/mail.DtmojuP_.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"},"children":"\n<path d=\"M19.9976 3.99951H3.99951C2.89508 3.99951 1.99976 4.89483 1.99976 5.99927V17.9978C1.99976 19.1022 2.89508 19.9976 3.99951 19.9976H19.9976C21.102 19.9976 21.9973 19.1022 21.9973 17.9978V5.99927C21.9973 4.89483 21.102 3.99951 19.9976 3.99951Z\" stroke=\"white\" stroke-width=\"1.99976\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M21.9973 6.99915L13.0284 12.6984C12.7197 12.8919 12.3628 12.9944 11.9985 12.9944C11.6343 12.9944 11.2774 12.8919 10.9687 12.6984L1.99976 6.99915\" stroke=\"white\" stroke-width=\"1.99976\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Telephone = createSvgComponent({"meta":{"src":"/_astro/telephone.CXtKGWR7.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"},"children":"\n<path d=\"M21.9973 16.9179V19.9175C21.9985 20.196 21.9414 20.4716 21.8299 20.7268C21.7183 20.9819 21.5547 21.211 21.3495 21.3992C21.1443 21.5875 20.902 21.7308 20.6382 21.82C20.3744 21.9092 20.0949 21.9424 19.8176 21.9173C16.7408 21.583 13.7853 20.5316 11.1886 18.8477C8.77276 17.3125 6.72452 15.2643 5.18937 12.8484C3.49956 10.2399 2.44795 7.27008 2.11975 4.17946C2.09476 3.90297 2.12762 3.62429 2.21624 3.36119C2.30485 3.09809 2.44728 2.85632 2.63445 2.65127C2.82162 2.44623 3.04944 2.28241 3.3034 2.17023C3.55735 2.05806 3.83188 1.99999 4.10951 1.99973H7.10914C7.59439 1.99495 8.06481 2.16679 8.43274 2.4832C8.80066 2.79962 9.04098 3.23903 9.10889 3.71952C9.2355 4.67947 9.4703 5.62202 9.80881 6.52918C9.94334 6.88706 9.97245 7.276 9.89271 7.64992C9.81296 8.02384 9.62769 8.36706 9.35886 8.63892L8.08902 9.90876C9.5124 12.412 11.585 14.4847 14.0883 15.908L15.3581 14.6382C15.63 14.3694 15.9732 14.1841 16.3471 14.1043C16.721 14.0246 17.11 14.0537 17.4679 14.1882C18.375 14.5268 19.3176 14.7615 20.2775 14.8882C20.7632 14.9567 21.2068 15.2013 21.5239 15.5756C21.841 15.9498 22.0095 16.4275 21.9973 16.9179Z\" stroke=\"white\" stroke-width=\"1.99976\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  let retour = "";
  let retourOk = false;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const pb = createServerPocketBase(Astro2.request);
    try {
      await addContact({
        nom: formData.get("nom")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        sujet: formData.get("sujet")?.toString() || "",
        message: formData.get("message")?.toString() || ""
      }, pb);
      retour = "Message envoy\xE9 avec succ\xE8s.";
      retourOk = true;
    } catch {
      retour = "Erreur lors de l'envoi du message.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "w-4 h-4" })}
Retour
</a> <section class="mt-16"> <h2 class="text-paprika-c">Contactez-nous</h2> <p class="mt-6 max-w-md">
Une question, une suggestion ou besoin d'aide ? N'hésitez pas à nous contacter.
                Notre équipe vous répondra dans les plus brefs délais.
</p> </section> <section class="mt-16 rounded-lg border border-mocha-c bg-white-c px-6 py-8"> <form id="contact-form" method="post" class="flex flex-col gap-8"> <label class="block font-bold">
Nom complet *
<input type="text" name="nom" required placeholder="Votre nom" class="mt-4 w-full rounded-lg border border-yellow-c bg-white-bk px-5 py-4 font-normal placeholder:text-marron-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Email *
<input type="email" name="email" required placeholder="votre.email@exemple.com" class="mt-4 w-full rounded-lg border border-yellow-c bg-white-bk px-5 py-4 font-normal placeholder:text-marron-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Sujet *
<input type="text" name="sujet" required placeholder="Le sujet de votre message" class="mt-4 w-full rounded-lg border border-yellow-c bg-white-bk px-5 py-4 font-normal placeholder:text-marron-c outline-none focus:border-paprika-c"> </label> <label class="block font-bold">
Message *
<textarea name="message" required placeholder="Écrivez votre message ici..." rows="7" class="mt-4 w-full resize-none rounded-lg border border-yellow-c bg-white-bk px-5 py-4 font-normal placeholder:text-marron-c outline-none focus:border-paprika-c"></textarea> </label> ${retour && renderTemplate`<div id="retour-contact"${addAttribute([
    "rounded-lg px-4 py-3 font-semibold",
    retourOk ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
  ], "class:list")}> ${retour} </div>`} <button type="submit" id="btn-contact" class="relative mx-auto mt-2 flex w-72 items-center justify-center rounded-full bg-paprika-c py-4 text-white-bk"> <span class="absolute inset-y-0 left-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechegauche, "alt": "", "class": "h-12 w-12" })} </span>
Envoyer le message
<span class="absolute inset-y-0 right-4 flex items-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Flechedroite, "alt": "", "class": "h-12 w-12" })} </span> </button> </form> </section> <section class="mt-16 flex flex-col gap-12"> <article class="flex items-start gap-6 rounded-2xl bg-white-c px-8 py-6"> <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Mail, "alt": "", "class": "h-6 w-6" })} </div> <div> <p class="font-bold">Email</p> <small class="mt-1 block leading-relaxed text-marron-c">contact@nunc.app</small> <small class="block text-marron-c">support@nunc.app</small> </div> </article> <article class="flex items-start gap-6 rounded-2xl bg-white-c px-8 py-6"> <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Telephone, "alt": "", "class": "h-6 w-6" })} </div> <div> <p class="font-bold">Téléphone</p> <small class="mt-1 block leading-relaxed text-marron-c">+33 1 23 45 67 89</small> <label class="block text-marron-c">Du lundi au vendredi, 9h - 18h</label> </div> </article> <article class="flex items-start gap-6 rounded-2xl bg-white-c px-8 py-6"> <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-c"> ${renderComponent($$result2, "Localisation", Carte, { "class": "h-6 w-6 text-white" })} </div> <div> <p class="font-bold">Adresse</p> <small class="mt-1 block leading-relaxed text-marron-c">123 Avenue des Champs-Élysées</small> <small class="block text-marron-c">75008 Paris, France</small> </div> </article> </section> <section class="mt-15 rounded-2xl bg-beige-c px-12 py-6 text-center"> <h3 class="text-bordeaux-c">Réseaux sociaux</h3> <small class="mt-3 block leading-relaxed">
Suivez-nous pour rester informé des dernières nouveautés !
</small> <div class="mt-4 flex justify-center gap-4"> <a href="/" aria-label="Instagram" class="flex h-15 w-15 items-center justify-center rounded-2xl bg-paprika-c"> ${renderComponent($$result2, "Instagram", Instagram, { "class": "h-11 w-11 text-white" })} </a> <a href="/" aria-label="TikTok" class="flex h-15 w-15 items-center justify-center rounded-2xl bg-paprika-c"> ${renderComponent($$result2, "Tiktok", Tiktok, { "class": "h-11 w-11 text-white" })} </a> <a href="/" aria-label="Facebook" class="flex h-15 w-15 items-center justify-center rounded-2xl bg-paprika-c"> ${renderComponent($$result2, "Facebook", Facebook, { "class": "h-11 w-11 text-white" })} </a> </div> </section> </main> ` })}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/contact.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
