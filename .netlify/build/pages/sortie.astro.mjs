import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, b as createAstro } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BZCnxHda.mjs';
import { C as Calendrier, a as Carte } from '../chunks/Menu_BsNEgW-R.mjs';
import { A as Amis } from '../chunks/people_Dj-cI_yv.mjs';
import { $ as $$UserAvatar } from '../chunks/UserAvatar_yx-d2NS1.mjs';
import 'clsx';
import { l as loadAstroAuth, J as addParticipantSortie, Q as acceptInvitation, R as refuseInvitation, S as getUserSorties, T as getUserInvitations } from '../chunks/backend_CNX6c8lU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$SortieCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SortieCard;
  const {
    avatar = "",
    user = null,
    pb = null,
    organisateur = "Utilisateur",
    titre = "",
    date = "",
    bar = "",
    participants = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-3xl border border-mocha-c bg-white-c pr-4 pl-2 py-5"> <div class="flex gap-5"> ${user ? renderTemplate`${renderComponent($$result, "UserAvatar", $$UserAvatar, { "user": user, "pb": pb, "size": "h-19 w-19" })}` : renderTemplate`<img class="h-19 w-19 shrink-0 rounded-full object-cover"${addAttribute(avatar, "src")}${addAttribute(`Photo de profil de ${organisateur}`, "alt")} loading="lazy">`} <div class="flex-1"> <h4 class="text-bordeaux-c font-titan">${titre}</h4> <small class="mt-2 font-bold"> <span class="text-lg text-paprika-c">${organisateur}</span>
a créé(e) cet évènement
</small> <div class="mt-2 flex flex-col"> <small class="flex items-center gap-2"> ${renderComponent($$result, "Calendrier", Calendrier, { "class": "h-4 w-4" })} <span>${date}</span> </small> <small class="flex items-center gap-2"> ${renderComponent($$result, "Carte", Carte, { "class": "h-4 w-4" })} <span>${bar}</span> </small> <small class="flex items-center gap-2"> ${renderComponent($$result, "People", Amis, { "class": "h-4 w-4" })} <span>${participants}</span> </small> </div> </div> </div> </article>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/SortieCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$InvitationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InvitationCard;
  const {
    id,
    sortieId,
    title = "Sortie",
    expediteur = "Utilisateur"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="rounded-3xl border border-mocha-c bg-white-c p-5"> <h4 class="text-bordeaux-c font-titan">${title}</h4> <small>
Invitation de
<span class="text-paprika-c">${expediteur}</span> </small> <div class="mt-4 flex gap-3"> <form method="post" class="flex-1"> <input type="hidden" name="action" value="accept"> <input type="hidden" name="invitationId"${addAttribute(id, "value")}> <input type="hidden" name="sortieId"${addAttribute(sortieId, "value")}> <button class="w-full rounded-full bg-paprika-c py-3 text-white">
Accepter
</button> </form> <form method="post" class="flex-1"> <input type="hidden" name="action" value="refuse"> <input type="hidden" name="invitationId"${addAttribute(id, "value")}> <button class="w-full rounded-full border-2 border-paprika-c py-3 text-paprika-c">
Refuser
</button> </form> </div> </article>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/InvitationCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { pb, user } = await loadAstroAuth(Astro2);
  if (!user) {
    return Astro2.redirect("/connexion");
  }
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    const invitationId = formData.get("invitationId")?.toString();
    const sortieId = formData.get("sortieId")?.toString();
    if (action === "accept" && invitationId && sortieId) {
      await addParticipantSortie(sortieId, user.id, "Participant", "Accept\xE9", pb);
      await acceptInvitation(invitationId, pb);
      return Astro2.redirect("/sortie?tab=invitations");
    }
    if (action === "refuse" && invitationId) {
      await refuseInvitation(invitationId, pb);
      return Astro2.redirect("/sortie?tab=invitations");
    }
  }
  const activeTab = Astro2.url.searchParams.get("tab") || "events";
  const participations = await getUserSorties(user.id, pb).catch(() => []);
  const invitations = await getUserInvitations(user.id, pb).catch(() => []);
  const maintenant = /* @__PURE__ */ new Date();
  function getDateSortie(sortie) {
    if (!sortie?.date || !sortie?.heure) return /* @__PURE__ */ new Date(0);
    return /* @__PURE__ */ new Date(`${sortie.date.substring(0, 10)}T${sortie.heure}`);
  }
  function formatDateSortie(sortie) {
    const dateFormatee = new Date(sortie.date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    return `${dateFormatee} \xE0 ${sortie.heure.replace(":", "h")}`;
  }
  function getBarLabel(sortie) {
    const bars = sortie.expand?.bar;
    if (sortie.type === "barcrawl" || sortie.type === "bar crawl") {
      return "Bar Crawl";
    }
    return bars?.[0]?.nom || bars?.nom || "Bar";
  }
  function getOrganisateur(sortie) {
    const organisateur = sortie.expand?.organisateur;
    return Array.isArray(organisateur) ? organisateur[0] : organisateur;
  }
  function tabClass(tab) {
    return activeTab === tab ? "tab-btn flex h-13 flex-1 items-center justify-center rounded-2xl bg-paprika-c px-3 text-center text-base leading-tight text-white-bk" : "tab-btn flex h-13 flex-1 items-center justify-center rounded-2xl px-3 text-center text-base leading-tight";
  }
  const sortiesTriees = participations.filter((participation) => participation.expand?.sortie).sort((a, b) => getDateSortie(a.expand.sortie) - getDateSortie(b.expand.sortie));
  const sortiesActives = sortiesTriees.filter((participation) => getDateSortie(participation.expand.sortie) >= maintenant);
  const sortiesPassees = sortiesTriees.filter((participation) => getDateSortie(participation.expand.sortie) < maintenant);
  const sortiesAffichees = activeTab === "history" ? sortiesPassees : sortiesActives;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mes sorties", "description": "Organise, participe et gagne des points !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <div class="flex rounded-2xl bg-white-c p-1"> <a href="/sortie?tab=events" id="tab-events"${addAttribute(tabClass("events"), "class")}>
Mes évènements
</a> <a href="/sortie?tab=invitations" id="tab-invitations"${addAttribute(tabClass("invitations"), "class")}>
Invitations
</a> <a href="/sortie?tab=history" id="tab-history"${addAttribute(tabClass("history"), "class")}>
Historique
</a> </div> <section class="mt-8"> ${activeTab === "invitations" ? renderTemplate`<div id="invitations-container" class="flex flex-col gap-8"> ${invitations.length > 0 ? invitations.map((invitation) => renderTemplate`${renderComponent($$result2, "InvitationCard", $$InvitationCard, { "id": invitation.id, "sortieId": invitation.sortie, "title": invitation.expand?.sortie?.titre || "Sortie", "expediteur": invitation.expand?.expediteur?.username || invitation.expand?.expediteur?.email || "Utilisateur" })}`) : renderTemplate`<p class="rounded-3xl bg-white-c p-5 text-marron-c">Aucune invitation en attente.</p>`} </div>` : renderTemplate`<div id="sorties-container" class="flex flex-col gap-8"> ${sortiesAffichees.length > 0 ? sortiesAffichees.map((participation) => {
    const sortie = participation.expand.sortie;
    const organisateur = getOrganisateur(sortie);
    return renderTemplate`<a${addAttribute(`/sortie/${sortie.id}`, "href")}> ${renderComponent($$result2, "SortieCard", $$SortieCard, { "user": organisateur, "pb": pb, "organisateur": organisateur?.username || "Utilisateur", "titre": sortie.titre || "", "date": formatDateSortie(sortie), "bar": getBarLabel(sortie), "participants": `${sortie.participants || 0} participants` })} </a>`;
  }) : renderTemplate`<p class="rounded-3xl bg-white-c p-5 text-marron-c"> ${activeTab === "history" ? "Aucune sortie pass\xE9e." : "Aucune sortie pr\xE9vue."} </p>`} </div>`} </section> </main> ` })}`;
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
