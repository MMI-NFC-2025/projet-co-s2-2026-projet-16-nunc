import { c as createComponent, a as renderTemplate, r as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_RQUlbrVw.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CdkVV2cw.mjs';
import { F as Fleche } from '../../chunks/fleche_96AuL5ab.mjs';
import { l as getSortieById, e as getBars } from '../../chunks/backend_CmHEyYCM.mjs';
export { renderers } from '../../renderers.mjs';

function formatDate(
    date
) {

    return new Date(
        date
    ).toLocaleDateString(
        'fr-FR',
        {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    );

}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const sortie = await getSortieById(id);
  if (!sortie) {
    return Astro2.redirect("/sortie");
  }
  const allBars = await getBars();
  const bars = sortie.expand.bar || [];
  const nomBars = sortie.type === "bar crawl" ? bars.map((bar) => bar.nom).join(", ") : bars[0]?.nom || "Bar inconnu";
  const typeFormate = sortie.type === "bar crawl" ? "Bar Crawl" : "Classique";
  const dateFormatee = formatDate(sortie.date);
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/js/sortie-details.js"><\/script> <script type="module" src="/src/js/auth-guard.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": sortie.titre, "description": "Retrouvez tous les d\xE9tails de la sortie ici !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"${addAttribute(sortie.organisateur, "data-organisateur")}> <a href="/sortie" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-12 rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Informations sur la sortie</h3> ${sortie.description && renderTemplate`<p class="mt-4">${sortie.description}</p>`} </section> <section class="mt-6 rounded-3xl bg-white-c p-6"> <div class="flex gap-4"> <div class="flex-1"> <small class="font-bold">Date</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${dateFormatee} </div> </div> <div class="flex-1"> <small class="font-bold">Heure</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${sortie.heure.replace(":", "h")} </div> </div> </div> <div class="mt-4"> <small class="font-bold">Participants</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${sortie.participants} </div> </div> <div class="mt-4"> <small class="font-bold">Type</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${typeFormate} </div> </div> <div class="mt-4"> <small class="font-bold">Bar(s)</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${nomBars} </div> </div> </section> <section class="mt-6 rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Participants</h3> <div id="participants-list" class="mt-4 flex flex-col gap-3"> <div id="participant-template" class="hidden rounded-3xl border border-yellow-c bg-white-bk p-4"> <div class="flex items-center gap-4"> <img class="participant-avatar h-16 w-16 rounded-full object-cover" alt=""> <div> <p class="participant-name font-bold text-xl"></p> <small class="participant-role text-paprika-c"></small> </div> </div> </div> </div> </section> <section id="organisateur-panel" class="mt-10 hidden rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Modifier la sortie</h3> <div class="mt-4 flex flex-col gap-4"> <input id="date" type="date"${addAttribute(sortie.date.substring(0, 10), "value")} class="rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> <input id="heure" type="time"${addAttribute(sortie.heure, "value")} class="rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> ${sortie.type === "bar crawl" ? renderTemplate`<div id="bar-crawl-container" class="flex flex-col gap-3"> ${allBars.map((bar) => renderTemplate`<label class="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border-2
                                        border-yellow-c
                                        bg-white-bk
                                        px-5
                                        py-4
                                    "> <span class="font-bold">${bar.nom}</span> <input type="checkbox" name="bar"${addAttribute(bar.id, "value")}${addAttribute(bars.some((currentBar) => currentBar.id === bar.id), "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div>` : renderTemplate`<div class="flex flex-col gap-3"> ${allBars.map((bar) => renderTemplate`<label${addAttribute(`flex items-center justify-between rounded-2xl border-2 px-5 py-4 ${bars[0]?.id === bar.id ? "border-paprika-c bg-paprika-c text-white" : "border-yellow-c bg-white-bk text-bordeaux-c"}`, "class")}> <span>${bar.nom}</span> <input type="radio" name="bar"${addAttribute(bar.id, "value")}${addAttribute(bars[0]?.id === bar.id, "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div>`} <button id="save-btn"${addAttribute(sortie.id, "data-sortie-id")} class="rounded-full bg-paprika-c px-6 py-4 font-bold text-white">
Enregistrer
</button> <button id="invite-btn" class="rounded-full border-2 border-yellow-c px-6 py-4 font-bold text-bordeaux-c">
Inviter un ami
</button> <div id="invite-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 px-6"> <div class="w-full max-w-md rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Inviter un ami</h3> <div id="users-list" class="mt-6 flex flex-col gap-3"></div> <div class="mt-6 flex gap-3"> <button id="send-invite-btn" class="flex-1 rounded-full bg-paprika-c py-3 text-white">
Envoyer
</button> <button id="close-invite-btn" class="flex-1 rounded-full border-2 border-paprika-c py-3 text-paprika-c">
Fermer
</button> </div> </div> </div> <button id="delete-btn"${addAttribute(sortie.id, "data-sortie-id")} class="rounded-full border-2 border-paprika-c px-6 py-4 font-bold text-paprika-c">
Supprimer la sortie
</button> <div id="delete-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 px-8"> <div class="w-full max-w-md rounded-4xl bg-white-c p-8 text-center"> <h4 class="text-bordeaux-c">Supprimer cette sortie ?</h4> <div class="mt-8 flex gap-4"> <button id="cancel-delete" class="flex-1 rounded-full border-2 border-paprika-c py-4 text-paprika-c">
Annuler
</button> <button id="confirm-delete" class="flex-1 rounded-full bg-paprika-c py-4 text-white">
OK
</button> </div> </div> </div> </div> </section> </main> ` }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/[id].astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/[id].astro";
const $$url = "/sortie/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
