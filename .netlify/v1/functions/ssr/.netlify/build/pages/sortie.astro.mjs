import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_RQUlbrVw.mjs';
import { C as Calendrier, a as Carte } from '../chunks/Menu_BPR-JpcW.mjs';
import { A as Amis } from '../chunks/people_BCKZdRD0.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$SortieCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article id="sortie-template" class="hidden rounded-3xl border border-mocha-c bg-white-c pr-4 pl-2 py-5"> <div class="flex gap-5"> <img class="sortie-avatar h-19 w-19 shrink-0 rounded-full object-cover" alt=""> <div class="flex-1"> <h4 class="sortie-title text-bordeaux-c font-titan"></h4> <small class="mt-2 font-bold"> <span class="sortie-organisateur text-lg text-paprika-c"></span>
a créé(e) cet évènement
</small> <div class="mt-2 flex flex-col"> <small class="flex items-center gap-2"> ${renderComponent($$result, "Calendrier", Calendrier, { "class": "h-4 w-4" })} <span class="sortie-date"></span> </small> <small class="flex items-center gap-2"> ${renderComponent($$result, "Carte", Carte, { "class": "h-4 w-4" })} <span class="sortie-bar"></span> </small> <small class="flex items-center gap-2"> ${renderComponent($$result, "People", Amis, { "class": "h-4 w-4" })} <span class="sortie-participants"></span> </small> </div> </div> </div> </article>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/SortieCard.astro", void 0);

const $$InvitationCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article id="invitation-template" class="hidden rounded-3xl border border-mocha-c bg-white-c p-5"> <h4 class="invitation-title text-bordeaux-c font-titan"></h4> <small>
Invitation de
<span class="invitation-expediteur text-paprika-c"></span> </small> <div class="mt-4 flex gap-3"> <button class="accept-btn flex-1 rounded-full bg-paprika-c py-3 text-white">
Accepter
</button> <button class="refuse-btn flex-1 rounded-full border-2 border-paprika-c py-3 text-paprika-c">
Refuser
</button> </div> </article>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/InvitationCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/sortie.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Mes sorties", "description": "Organise, participe et gagne des points !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <div class="flex rounded-2xl bg-white-c p-1"> <button id="tab-events" class="tab-btn flex-1 rounded-2xl bg-paprika-c py-2 px-1 text-base text-white-bk">
Mes évènements
</button> <button id="tab-invitations" class="tab-btn flex-1 rounded-2xl py-2 px-1 text-base">
Invitations
</button> <button id="tab-history" class="tab-btn flex-1 rounded-2xl py-2 px-1 text-base">
Historique
</button> </div> <section class="mt-8"> <div id="sorties-container" class="flex flex-col gap-8"> ${renderComponent($$result2, "SortieCard", $$SortieCard, {})} </div> <div id="invitations-container" class="hidden flex-col gap-8"> ${renderComponent($$result2, "InvitationCard", $$InvitationCard, {})} </div> </section> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/index.astro";
const $$url = "/sortie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
