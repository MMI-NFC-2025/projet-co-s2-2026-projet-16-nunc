import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro } from './astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="w-full px-6 py-10 bg-linear-to-br from-paprika-c to-yellow-c"> <div class="max-w-md ml-4"> <h2 class="text-white-bk"> ${title} </h2> ${description && renderTemplate`<small class="block text-white-bk"> ${description} </small>`} </div> </header>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/Header.astro", void 0);

export { $$Header as $ };
