import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, f as renderHead, g as renderSlot, b as createAstro } from './astro/server_mM6q6Q3f.mjs';
import 'piccolore';
/* empty css                             */
import { L as Logo } from './logo_DJTs1Tov.mjs';
import { I as Instagram, F as Facebook, T as Tiktok } from './tiktok_epX9F8PE.mjs';
import { $ as $$Image } from './_astro_assets_CdkVV2cw.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-beige-c/50 pb-12 mt-5"> <div class="border-t-4 border-dashed border-paprika-c"></div> <div class="max-w-xs mx-auto"> <div class="mt-16 flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": Logo, "alt": "Logo N\xDCNC", "class": "w-72 h-auto" })} </div> <div class="mt-5 flex items-center gap-6 pl-4"> <a href="/" aria-label="Instagram"> ${renderComponent($$result, "Image", $$Image, { "src": Instagram, "alt": "Instagram", "class": "w-9 h-9" })} </a> <a href="/" aria-label="Facebook"> ${renderComponent($$result, "Image", $$Image, { "src": Facebook, "alt": "Facebook", "class": "w-9 h-9" })} </a> <a href="/" aria-label="TikTok"> ${renderComponent($$result, "Image", $$Image, { "src": Tiktok, "alt": "TikTok", "class": "w-9 h-9" })} </a> <a href="/" class="text-yellow-c text-3xl font-bold">
@nunc
</a> </div> <nav class="mt-10 pl-4"> <ul class="space-y-5"> <li><a href="/a-propos">À propos</a></li> <li><a href="/">Conditions d'utilisation</a></li> <li><a href="/mentions-legales">Mentions légales</a></li> <li><a href="/contact">Contact</a></li> </ul> </nav> <div class="mt-10 pl-4 text-center"> <p>
© 2026 NŨNC. Tous droits réservés.
</p> <small class="mt-3 block text-paprika-c font-titan">
Buvez avec modération
</small> </div> </div> </footer>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$LayoutLandingpage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutLandingpage;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="NŨNC"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ?? "N\u0168NC"}</title>${renderHead()}</head> <body class="bg-white-bk text-bordeaux-c font-tuffy"> <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/layouts/Layout-landingpage.astro", void 0);

export { $$LayoutLandingpage as $ };
