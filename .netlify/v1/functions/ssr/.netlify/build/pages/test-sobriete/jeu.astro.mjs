import { c as createComponent, a as renderTemplate, f as defineScriptVars, r as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C0Mj2Fxw.mjs';
import { l as loadAstroAuth, I as addUserPoints, S as getQuestionsSobriete } from '../../chunks/backend_DljU_PTa.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Jeu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Jeu;
  const { pb, user } = await loadAstroAuth(Astro2);
  if (!user) {
    return Astro2.redirect("/connexion");
  }
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const score = Number(formData.get("score") || 0);
    const safeScore = Number.isFinite(score) ? Math.max(0, Math.min(Math.trunc(score), 100)) : 0;
    await addUserPoints(user.id, safeScore, pb);
    return new Response(null, { status: 204 });
  }
  const questions = (await getQuestionsSobriete(pb)).sort(() => Math.random() - 0.5).slice(0, 5).map((question) => ({
    question: question.question,
    choix_1: question.choix_1,
    choix_2: question.choix_2,
    choix_3: question.choix_3,
    choix_4: question.choix_4,
    bonne_reponse: question.bonne_reponse,
    points: question.points
  }));
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n    window.sobrieteQuestions = questions;\n})();<\/script> <script type="module" src="/src/js/test-sobriete.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "D\xE9fis Sobri\xE9t\xE9 !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <div class="flex items-center justify-between"> <p id="game-step" class="text-lg text-marron-c">Question 1 / 5</p> <div class="flex h-12 min-w-24 items-center justify-center rounded-full border border-bordeaux-c bg-white-bk px-5"> <span id="score-display">0 / 100</span> </div> </div> <h2 id="game-title" class="mt-6 text-center text-paprika-c">
Test de sobriété
</h2> <div class="mt-6 h-3 overflow-hidden rounded-full bg-orange-c"> <div id="progress-bar" class="h-full w-0 bg-paprika-c transition-all"></div> </div> <div id="game-card" class="mt-8 rounded-3xl border-2 border-mocha-c bg-white-c p-8"> <h4 id="question" class="text-center font-bold"></h4> <div id="answers-container" class="mt-8 flex flex-col gap-4"> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> </div> <p id="game-message" class="mt-10 text-center text-lg font-bold text-marron-c"></p> <button id="next-btn" class="hidden mx-auto mt-8 rounded-full bg-paprika-c px-8 py-4 text-white">
Question suivante
</button> <form id="score-form" method="post" class="hidden"> <input id="score-input" type="hidden" name="score" value="0"> </form> </div> </main> ` }), defineScriptVars({ questions }));
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
