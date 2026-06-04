import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BZCnxHda.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_CVdaBGvQ.mjs';
import { $ as $$UserAvatar } from '../../chunks/UserAvatar_yx-d2NS1.mjs';
import { F as Fleche } from '../../chunks/fleche_D52W9Oh8.mjs';
import { l as loadAstroAuth, L as getSortieById, M as updateSortieById, N as deleteSortieCompletely, O as createInvitation, u as getBars, P as getSortieParticipants, e as getUserFriends } from '../../chunks/backend_CNX6c8lU.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  function formatDate(date) {
    return new Date(date).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }
  const { id } = Astro2.params;
  const { pb, user: currentUser } = await loadAstroAuth(Astro2);
  if (!currentUser) {
    return Astro2.redirect("/connexion");
  }
  const sortie = await getSortieById(id, pb);
  if (!sortie) {
    return Astro2.redirect("/sortie");
  }
  const isOrganisateur = currentUser.id === sortie.organisateur;
  if (Astro2.request.method === "POST" && isOrganisateur) {
    const formData = await Astro2.request.formData();
    const action = formData.get("action")?.toString();
    if (action === "update") {
      const date = formData.get("date")?.toString();
      const heure = formData.get("heure")?.toString();
      const selectedBars = formData.getAll("bar").map(String).filter(Boolean);
      const data = {};
      if (date) data.date = date;
      if (heure) data.heure = heure;
      if (selectedBars.length > 0) {
        data.bar = selectedBars.length === 1 ? selectedBars[0] : selectedBars;
      }
      await updateSortieById(id, data, pb);
      return Astro2.redirect(`/sortie/${id}`);
    }
    if (action === "delete") {
      await deleteSortieCompletely(id, pb);
      return Astro2.redirect("/sortie");
    }
    if (action === "invite") {
      const selectedUsers = formData.getAll("destinataire").map(String).filter(Boolean);
      for (const destinataire of selectedUsers) {
        await createInvitation({
          expediteur: currentUser.id,
          destinataire,
          sortie: id,
          statut: "en attente"
        }, pb);
      }
      return Astro2.redirect(`/sortie/${id}`);
    }
  }
  const allBars = await getBars(pb);
  const participants = await getSortieParticipants(id, pb);
  const organiserFriends = isOrganisateur ? await getUserFriends(currentUser.id, pb).catch(() => []) : [];
  const inviteUsers = organiserFriends.map((friendship) => friendship.utilisateur1 === currentUser.id ? friendship.expand?.utilisateur2 : friendship.expand?.utilisateur1).filter(Boolean);
  const bars = Array.isArray(sortie.expand?.bar) ? sortie.expand.bar : sortie.expand?.bar ? [sortie.expand.bar] : [];
  const isBarCrawl = sortie.type === "bar crawl" || sortie.type === "barcrawl";
  const nomBars = isBarCrawl ? bars.map((bar) => bar.nom).join(", ") : bars[0]?.nom || "Bar inconnu";
  const typeFormate = isBarCrawl ? "Bar Crawl" : "Classique";
  const dateFormatee = formatDate(sortie.date);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": sortie.titre, "description": "Retrouvez tous les d\xE9tails de la sortie ici !" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"${addAttribute(sortie.organisateur, "data-organisateur")}> <a href="/sortie" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-12 rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Informations sur la sortie</h3> ${sortie.description && renderTemplate`<p class="mt-4">${sortie.description}</p>`} </section> <section class="mt-6 rounded-3xl bg-white-c p-6"> <div class="flex gap-4"> <div class="flex-1"> <small class="font-bold">Date</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${dateFormatee} </div> </div> <div class="flex-1"> <small class="font-bold">Heure</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${sortie.heure.replace(":", "h")} </div> </div> </div> <div class="mt-4"> <small class="font-bold">Participants</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${sortie.participants} </div> </div> <div class="mt-4"> <small class="font-bold">Type</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${typeFormate} </div> </div> <div class="mt-4"> <small class="font-bold">Bar(s)</small> <div class="mt-2 rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2"> ${nomBars} </div> </div> </section> <section class="mt-6 rounded-3xl bg-white-c p-6"> <h3 class="text-paprika-c">Participants</h3> <div id="participants-list" data-rendered="server" class="mt-4 flex flex-col gap-3"> ${participants.map((participant) => {
    const participantUser = participant.expand?.utilisateur;
    return renderTemplate`<div class="rounded-3xl border border-yellow-c bg-white-bk p-4"> <div class="flex items-center gap-4"> ${renderComponent($$result2, "UserAvatar", $$UserAvatar, { "user": participantUser, "pb": pb, "size": "h-16 w-16" })} <div> <p class="participant-name font-bold text-xl">${participantUser?.username || "Utilisateur"}</p> <small class="participant-role text-paprika-c"> ${participant.role === "Organisateur" ? "Organisateur" : "Participant"} </small> </div> </div> </div>`;
  })} <div id="participant-template" class="hidden rounded-3xl border border-yellow-c bg-white-bk p-4"> <div class="flex items-center gap-4"> <img class="participant-avatar h-16 w-16 rounded-full object-cover" alt="Photo de profil du participant" loading="lazy"> <div> <p class="participant-name font-bold text-xl"></p> <small class="participant-role text-paprika-c"></small> </div> </div> </div> </div> </section> <section id="organisateur-panel"${addAttribute([
    "mt-10 rounded-3xl bg-white-c p-6",
    { hidden: !isOrganisateur }
  ], "class:list")}> <h3 class="text-paprika-c">Modifier la sortie</h3> <form method="post" class="mt-4 flex flex-col gap-4"> <input type="hidden" name="action" value="update"> <input name="date" type="date"${addAttribute(sortie.date.substring(0, 10), "value")} class="rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> <input name="heure" type="time"${addAttribute(sortie.heure, "value")} class="rounded-lg border-2 border-yellow-c bg-white-bk px-3 py-2 outline-none"> ${isBarCrawl ? renderTemplate`<div id="bar-crawl-container" class="flex flex-col gap-3"> ${allBars.map((bar) => renderTemplate`<label class="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border-2
                                        border-yellow-c
                                        bg-white-bk
                                        px-5
                                        py-4
                                    "> <span class="font-bold">${bar.nom}</span> <input type="checkbox" name="bar"${addAttribute(bar.id, "value")}${addAttribute(bars.some((currentBar) => currentBar.id === bar.id), "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div>` : renderTemplate`<div class="flex flex-col gap-3"> ${allBars.map((bar) => renderTemplate`<label${addAttribute(`flex items-center justify-between rounded-2xl border-2 px-5 py-4 ${bars[0]?.id === bar.id ? "border-paprika-c bg-paprika-c text-white" : "border-yellow-c bg-white-bk text-bordeaux-c"}`, "class")}> <span>${bar.nom}</span> <input type="radio" name="bar"${addAttribute(bar.id, "value")}${addAttribute(bars[0]?.id === bar.id, "checked")} class="h-5 w-5 accent-paprika-c"> </label>`)} </div>`} <button type="submit" class="rounded-full bg-paprika-c px-6 py-4 font-bold text-white">
Enregistrer
</button> </form> <form method="post" class="mt-6 rounded-3xl border border-yellow-c p-4"> <input type="hidden" name="action" value="invite"> <h4 class="text-paprika-c">Inviter un ami</h4> <div class="mt-4 flex flex-col gap-3"> ${inviteUsers.length > 0 ? inviteUsers.map((friend) => renderTemplate`<label class="flex items-center gap-3 rounded-xl border border-yellow-c p-3"> <input type="checkbox" name="destinataire"${addAttribute(friend.id, "value")} class="h-5 w-5 accent-paprika-c"> <span>${friend.username || friend.email || "Utilisateur"}</span> </label>`) : renderTemplate`<p class="text-marron-c">Tu n'as aucun ami à inviter.</p>`} </div> <button type="submit" class="mt-4 w-full rounded-full border-2 border-yellow-c px-6 py-4 font-bold text-bordeaux-c"${addAttribute(inviteUsers.length === 0, "disabled")}>
Envoyer les invitations
</button> </form> <form method="post" class="mt-6"> <input type="hidden" name="action" value="delete"> <button type="submit" class="rounded-full border-2 border-paprika-c px-6 py-4 font-bold text-paprika-c">
Supprimer la sortie
</button> </form> </section> </main> ` })}`;
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
