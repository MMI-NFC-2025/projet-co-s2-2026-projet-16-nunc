import { c as createComponent, d as addAttribute, f as renderHead, r as renderComponent, a as renderTemplate, g as renderSlot, b as createAstro } from './astro/server_mM6q6Q3f.mjs';
import 'piccolore';
/* empty css                             */
import { $ as $$Header } from './Header_DAXJAv1W.mjs';
import { $ as $$Menu } from './Menu_BPR-JpcW.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, hideHeader = false } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title" content="NŨNC"><link rel="manifest" href="/site.webmanifest"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title ?? "N\u0168NC"}</title>${renderHead()}</head> <body class="bg-white-bk text-bordeaux-c font-tuffy"> ${!hideHeader && renderTemplate`${renderComponent($$result, "Header", $$Header, { "title": title, "description": description })}`} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Menu", $$Menu, {})} </body></html>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
