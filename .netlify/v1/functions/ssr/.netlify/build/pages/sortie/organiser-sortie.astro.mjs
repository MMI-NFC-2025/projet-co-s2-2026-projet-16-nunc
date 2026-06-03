import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_C0Mj2Fxw.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
import { a as Carte } from '../../chunks/Menu_BsNEgW-R.mjs';
import { A as Amis } from '../../chunks/people_Dj-cI_yv.mjs';
import { T as Trophy } from '../../chunks/coupe_DXo6-omo.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
import { l as loadAstroAuth, g as getUserById, u as getBars, G as createSortie, H as addParticipantSortie, I as addUserPoints } from '../../chunks/backend_DljU_PTa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$OrganiserSortie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OrganiserSortie;
  const { pb, user: authUser } = await loadAstroAuth(Astro2);
  if (!authUser) {
    return Astro2.redirect("/connexion");
  }
  const user = await getUserById(authUser.id, pb).catch(() => authUser);
  const bars = await getBars(pb);
  const barId = Astro2.url.searchParams.get("bar");
  let error = "";
  function calculatePoints(participants, hasPremium) {
    let points = 30 + participants;
    if (participants >= 20) points = 50;
    if (hasPremium && participants > 20) {
      points = 50 + (participants - 20) * 5;
    }
    return Math.min(points, hasPremium ? 130 : 50);
  }
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const participants = Number(formData.get("participants"));
    const hasPremium = Boolean(user?.premium);
    const type = String(formData.get("type") || "classique");
    const defaultBar = String(formData.get("defaultBar") || "").trim();
    const classicBar = String(formData.get("classicBar") || "").trim();
    const selectedBars = formData.getAll("bar").map((id) => String(id || "").trim()).filter(Boolean);
    const sortieBars = type === "classique" ? [defaultBar || classicBar].filter(Boolean) : selectedBars;
    if (!Number.isFinite(participants) || participants < 1) {
      error = "Indique un nombre de participants valide.";
    } else if (!hasPremium && participants > 20) {
      error = "Sans abonnement Premium, la limite est de 20 participants.";
    } else if (sortieBars.length === 0) {
      error = "Vous devez s\xE9lectionner au moins un bar.";
    } else {
      const points = calculatePoints(participants, hasPremium);
      const result = await createSortie({
        titre: String(formData.get("titre") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        date: String(formData.get("date") || ""),
        heure: String(formData.get("heure") || ""),
        participants,
        type,
        organisateur: user.id,
        bar: sortieBars,
        points
      }, pb);
      if (result.success) {
        await addParticipantSortie(result.sortie.id, user.id, "Organisateur", "Accept\xE9", pb);
        await addUserPoints(user.id, points, pb);
        return Astro2.redirect(`/sortie/${result.sortie.id}`);
      }
      error = "Une erreur est survenue lors de la cr\xE9ation de la sortie.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Organiser une sortie", "description": "Cr\xE9er un nouvel \xE9v\xE9nement" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "w-4 h-4" })}
Retour
</a> <form id="sortie-form" method="post" class="mt-10 flex flex-col gap-8"${addAttribute(user?.premium ? "true" : "false", "data-premium")}> <input type="hidden" name="defaultBar"${addAttribute(barId || "", "value")}> <input type="hidden" name="type" id="type-sortie" value="classique"> ${error && renderTemplate`<section class="rounded-3xl bg-white-c p-5 text-center font-bold text-bordeaux-c"> ${error} </section>`} <section class="rounded-3xl bg-white-c p-4"> <h3 class="text-paprika-c">Type d’événement</h3> <div class="mt-7 flex gap-10"> <button type="button" id="classic-btn" class="flex flex-1 flex-col items-center justify-center rounded-3xl border-3 border-paprika-c bg-paprika-c px-4 py-4 text-white"> ${renderComponent($$result2, "Position", Carte, { "class": "h-6 w-6" })} <label class="mt-4">Sortie classique</label> <label class="text-center">Un seul bar</label> </button> <button type="button" id="crawl-btn" class="flex flex-1 flex-col items-center justify-center rounded-3xl border-3 border-yellow-c bg-white-bk px-4 py-4 text-yellow-c"> ${renderComponent($$result2, "Group", Amis, { "class": "h-6 w-6" })} <label class="mt-4">Bar Crawl</label> <label class="mt-2 text-center">Plusieurs bars</label> </button> </div> <div id="classic-bar" class="mt-6 flex flex-col gap-3"> <label class="font-bold text-bordeaux-c">Bar de la sortie</label> <div class="flex flex-col gap-3"> ${bars.map((bar) => renderTemplate`<label class="flex items-center justify-between rounded-2xl border-2 border-yellow-c bg-white-bk px-5 py-4"> <span class="font-bold text-bordeaux-c">${bar.nom}</span> <input type="radio" name="classicBar"${addAttribute(bar.id, "value")}${addAttribute(bar.id === barId, "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div> </div> <div id="crawl-bars" class="mt-6 hidden flex-col gap-3"> <label class="font-bold text-bordeaux-c">Sélection des bars</label> <div class="flex flex-col gap-3"> ${bars.map((bar) => renderTemplate`<label class="flex items-center justify-between rounded-2xl border-2 border-yellow-c bg-white-bk px-5 py-4"> <span class="font-bold text-bordeaux-c">${bar.nom}</span> <input type="checkbox" name="bar"${addAttribute(bar.id, "value")}${addAttribute(bar.id === barId, "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div> </div> </section> <section class="rounded-3xl bg-white-c p-6"> <div> <small class="font-bold">Titre de l'événement</small> <input type="text" name="titre" placeholder="Ex: Afterwork du vendredi" required class="mt-3 w-full rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> </div> <div class="mt-4"> <small class="font-bold">Description (optionnel)</small> <textarea name="description" placeholder="Décris ton événement..." class="mt-3 h-16 w-full resize-none rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"></textarea> </div> <div class="mt-4 flex gap-4"> <div class="flex-1"> <small class="font-bold">Date</small> <input type="date" name="date" required class="mt-3 w-full rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> </div> <div class="flex-1"> <small class="font-bold">Heure</small> <input type="time" name="heure" required class="mt-3 w-full rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> </div> </div> <div class="mt-6"> <small class="font-bold">Nombre de participants</small> <input type="number" name="participants" placeholder="Max 20 sans Premium" required class="mt-3 w-full rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> </div> </section> <section class="flex items-center justify-between rounded-3xl bg-linear-to-r from-paprika-c to-yellow-c px-8 py-3 text-white"> <div> <label class="text-white">Points estimés pour cet événement</label> <h2 id="points-display" class="text-white">+30</h2> </div> ${renderComponent($$result2, "Image", $$Image, { "src": Trophy, "alt": "", "class": "h-17 w-17" })} </section> <button type="submit" class="rounded-full bg-paprika-c px-6 py-5 text-center font-bold text-white">Créer l’événement</button> </form> </main> ` })} ${renderScript($$result, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/organiser-sortie.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/organiser-sortie.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/organiser-sortie.astro";
const $$url = "/sortie/organiser-sortie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$OrganiserSortie,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
