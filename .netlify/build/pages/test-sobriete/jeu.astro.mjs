import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_RQUlbrVw.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Jeu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/test-sobriete.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "D\xE9fis Sobri\xE9t\xE9 !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <div class="flex items-center justify-between"> <p id="game-step" class="text-lg text-marron-c">Question 1 / 5</p> <div class="flex h-12 min-w-24 items-center justify-center rounded-full border border-bordeaux-c bg-white-bk px-5"> <span id="score-display">0 / 100</span> </div> </div> <h2 id="game-title" class="mt-6 text-center text-paprika-c">
Test de sobriété
</h2> <div class="mt-6 h-3 overflow-hidden rounded-full bg-orange-c"> <div id="progress-bar" class="h-full w-0 bg-paprika-c transition-all"></div> </div> <div id="game-card" class="mt-8 rounded-3xl border-2 border-mocha-c bg-white-c p-8"> <h4 id="question" class="text-center font-bold"></h4> <div id="answers-container" class="mt-8 flex flex-col gap-4"> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> </div> <p id="game-message" class="mt-10 text-center text-lg font-bold text-marron-c"></p> <button id="next-btn" class="hidden mx-auto mt-8 rounded-full bg-paprika-c px-8 py-4 text-white">
Question suivante
</button> </div> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/jeu.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/jeu.astro";
const $$url = "/test-sobriete/jeu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Jeu,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
