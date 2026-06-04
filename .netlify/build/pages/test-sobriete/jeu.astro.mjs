import { c as createComponent, a as renderTemplate, d as addAttribute, f as defineScriptVars, r as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DAS6Hu3c.mjs';
import { l as loadAstroAuth, K as addUserPoints, V as getQuestionsSobriete } from '../../chunks/backend_DoxzlLrY.mjs';
export { renderers } from '../../renderers.mjs';

const testSobrieteScript = "data:text/javascript;base64,bGV0IHNjb3JlID0gMDsKbGV0IGN1cnJlbnRRdWVzdGlvbiA9IDA7CmxldCBxdWVzdGlvbnMgPSB3aW5kb3cuc29icmlldGVRdWVzdGlvbnMgfHwgW107CmxldCBoYXNBbnN3ZXJlZCA9IGZhbHNlOwpsZXQgcG9pbnRzQWRkZWQgPSBmYWxzZTsKCmNvbnN0IHN0ZXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGVwJyk7CmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtdGl0bGUnKTsKY29uc3QgcXVlc3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb24nKTsKY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbnN3ZXItYnRuJyk7CmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1tZXNzYWdlJyk7CmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1idG4nKTsKY29uc3Qgc2NvcmVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlLWRpc3BsYXknKTsKY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7CmNvbnN0IHNjb3JlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1mb3JtJyk7CmNvbnN0IHNjb3JlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUtaW5wdXQnKTsKCmlmIChxdWVzdGlvbnMubGVuZ3RoID4gMCkgewogICAgc2hvd1F1ZXN0aW9uKCk7Cn0gZWxzZSB7CiAgICBzdGVwLnRleHRDb250ZW50ID0gJ0luZGlzcG9uaWJsZSc7CiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUZXN0IGRlIHNvYnJpw6l0w6knOwogICAgcXVlc3Rpb24udGV4dENvbnRlbnQgPSAnQXVjdW5lIHF1ZXN0aW9uIGRpc3BvbmlibGUgcG91ciBsZSBtb21lbnQuJzsKICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpOwp9CgpmdW5jdGlvbiBzaG93UXVlc3Rpb24oKSB7CiAgICBoYXNBbnN3ZXJlZCA9IGZhbHNlOwoKICAgIGNvbnN0IGN1cnJlbnQgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uXTsKCiAgICBzdGVwLnRleHRDb250ZW50ID0gYFF1ZXN0aW9uICR7Y3VycmVudFF1ZXN0aW9uICsgMX0gLyAke3F1ZXN0aW9ucy5sZW5ndGh9YDsKICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1Rlc3QgZGUgc29icmnDqXTDqSc7CiAgICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnQucXVlc3Rpb247CiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJyc7CgogICAgc2NvcmVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7c2NvcmV9LzEwMGA7CiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAkeyhjdXJyZW50UXVlc3Rpb24gLyBxdWVzdGlvbnMubGVuZ3RoKSAqIDEwMH0lYDsKCiAgICBuZXh0QnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwoKICAgIGNvbnN0IGNob2ljZXMgPSBbCiAgICAgICAgY3VycmVudC5jaG9peF8xLAogICAgICAgIGN1cnJlbnQuY2hvaXhfMiwKICAgICAgICBjdXJyZW50LmNob2l4XzMsCiAgICAgICAgY3VycmVudC5jaG9peF80CiAgICBdOwoKICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4gewogICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGNob2ljZXNbaW5kZXhdOwogICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlOwoKICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYmctcGFwcmlrYS1jJywgJ3RleHQtd2hpdGUnKTsKICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYmctd2hpdGUtYmsnKTsKCiAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7CiAgICAgICAgICAgIGNoZWNrQW5zd2VyKGluZGV4ICsgMSwgY3VycmVudCk7CiAgICAgICAgfTsKICAgIH0pOwp9CgpmdW5jdGlvbiBjaGVja0Fuc3dlcihzZWxlY3RlZEFuc3dlciwgY3VycmVudCkgewogICAgaWYgKGhhc0Fuc3dlcmVkKSByZXR1cm47CgogICAgaGFzQW5zd2VyZWQgPSB0cnVlOwoKICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7CiAgICAgICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTsKICAgIH0pOwoKICAgIGlmIChzZWxlY3RlZEFuc3dlciA9PT0gY3VycmVudC5ib25uZV9yZXBvbnNlKSB7CiAgICAgICAgc2NvcmUgKz0gY3VycmVudC5wb2ludHM7CiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9IGBCb25uZSByw6lwb25zZSAhICske2N1cnJlbnQucG9pbnRzfSBwb2ludHNgOwogICAgfSBlbHNlIHsKICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ01hdXZhaXNlIHLDqXBvbnNlJzsKICAgIH0KCiAgICBzY29yZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtzY29yZX0vMTAwYDsKCiAgICBidXR0b25zW3NlbGVjdGVkQW5zd2VyIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgnYmctd2hpdGUtYmsnKTsKICAgIGJ1dHRvbnNbc2VsZWN0ZWRBbnN3ZXIgLSAxXS5jbGFzc0xpc3QuYWRkKCdiZy1wYXByaWthLWMnLCAndGV4dC13aGl0ZScpOwoKICAgIG5leHRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7Cn0KCm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7CiAgICBjdXJyZW50UXVlc3Rpb24rKzsKCiAgICBpZiAoY3VycmVudFF1ZXN0aW9uIDwgcXVlc3Rpb25zLmxlbmd0aCkgewogICAgICAgIHNob3dRdWVzdGlvbigpOwogICAgfSBlbHNlIHsKICAgICAgICBhd2FpdCBzaG93RmluYWxSZXN1bHQoKTsKICAgIH0KfSk7Cgphc3luYyBmdW5jdGlvbiBzaG93RmluYWxSZXN1bHQoKSB7CiAgICBpZiAoIXBvaW50c0FkZGVkICYmIHNjb3JlRm9ybSAmJiBzY29yZUlucHV0KSB7CiAgICAgICAgc2NvcmVJbnB1dC52YWx1ZSA9IFN0cmluZyhzY29yZSk7CiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh3aW5kb3cubG9jYXRpb24uaHJlZiwgewogICAgICAgICAgICBtZXRob2Q6ICdQT1NUJywKICAgICAgICAgICAgYm9keTogbmV3IEZvcm1EYXRhKHNjb3JlRm9ybSkKICAgICAgICB9KTsKCiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgewogICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gIkltcG9zc2libGUgZCdham91dGVyIGxlcyBwb2ludHMgcG91ciBsZSBtb21lbnQuIjsKICAgICAgICAgICAgcmV0dXJuOwogICAgICAgIH0KCiAgICAgICAgcG9pbnRzQWRkZWQgPSB0cnVlOwogICAgfQoKICAgIHN0ZXAudGV4dENvbnRlbnQgPSAnVGVybWluw6knOwogICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUsOpc3VsdGF0IGZpbmFsJzsKICAgIHF1ZXN0aW9uLnRleHRDb250ZW50ID0gYCR7c2NvcmV9LzEwMCBwb2ludHNgOwoKICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7CiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOwogICAgfSk7CgogICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7CgogICAgaWYgKHNjb3JlID49IDgwKSB7CiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdCb24gcsOpc3VsdGF0JzsKICAgIH0gZWxzZSBpZiAoc2NvcmUgPj0gNjApIHsKICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1LDqXN1bHRhdCBtb3llbic7CiAgICB9IGVsc2UgaWYgKHNjb3JlID49IDQwKSB7CiAgICAgICAgbWVzc2FnZS50ZXh0Q29udGVudCA9ICdUdSBwZXV4IGZhaXJlIG1pZXV4ICEnOwogICAgfSBlbHNlIHsKICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gJ1BvaW50cyBham91dMOpcyDDoCB0b24gY29tcHRlJzsKICAgIH0KCiAgICBuZXh0QnRuLnRleHRDb250ZW50ID0gJ1JldG91ciDDoCBs4oCZYWNjdWVpbCc7CiAgICBuZXh0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpOwoKICAgIG5leHRCdG4ub25jbGljayA9ICgpID0+IHsKICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJzsKICAgIH07Cn0K";

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
    const pointsAdded = await addUserPoints(user.id, safeScore, pb);
    if (!pointsAdded) {
      return new Response("Impossible d\u2019ajouter les points", { status: 500 });
    }
    return new Response(null, { status: 204 });
  }
  const questions = (await getQuestionsSobriete(pb)).sort(() => Math.random() - 0.5).slice(0, 5).map((question) => ({
    question: question.question,
    choix_1: question.choix_1,
    choix_2: question.choix_2,
    choix_3: question.choix_3,
    choix_4: question.choix_4,
    bonne_reponse: Number(question.bonne_reponse),
    points: Number(question.points || 0)
  }));
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n    window.sobrieteQuestions = questions;\n})();<\/script> <script type="module"', "><\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "D\xE9fis Sobri\xE9t\xE9 !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <div class="flex items-center justify-between"> <p id="game-step" class="text-lg text-marron-c">Question 1 / 5</p> <div class="flex h-12 min-w-24 items-center justify-center rounded-full border border-bordeaux-c bg-white-bk px-5"> <span id="score-display">0 / 100</span> </div> </div> <h2 id="game-title" class="mt-6 text-center text-paprika-c">
Test de sobriété
</h2> <div class="mt-6 h-3 overflow-hidden rounded-full bg-orange-c"> <div id="progress-bar" class="h-full w-0 bg-paprika-c transition-all"></div> </div> <div id="game-card" class="mt-8 rounded-3xl border-2 border-mocha-c bg-white-c p-8"> <h4 id="question" class="text-center font-bold"></h4> <div id="answers-container" class="mt-8 flex flex-col gap-4"> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> <button class="answer-btn rounded-2xl border-2 border-paprika-c bg-white-bk p-4"></button> </div> <p id="game-message" class="mt-10 text-center text-lg font-bold text-marron-c"></p> <button id="next-btn" class="hidden mx-auto mt-8 rounded-full bg-paprika-c px-8 py-4 text-white">
Question suivante
</button> <form id="score-form" method="post" class="hidden"> <input id="score-input" type="hidden" name="score" value="0"> </form> </div> </main> ` }), defineScriptVars({ questions }), addAttribute(testSobrieteScript, "src"));
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
