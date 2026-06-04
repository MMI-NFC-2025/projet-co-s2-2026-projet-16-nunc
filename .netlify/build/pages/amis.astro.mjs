import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DAS6Hu3c.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
import { $ as $$UserAvatar } from '../chunks/UserAvatar_DFp_IEK5.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { l as loadAstroAuth, d as acceptFriendRequest, r as refuseFriendRequest, s as sendFriendRequest, e as getUserFriends, f as getFriendRequests, h as getPendingFriends, i as searchUsers, j as getFriendship } from '../chunks/backend_DoxzlLrY.mjs';
export { renderers } from '../renderers.mjs';

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
    const friendshipId = formData.get("friendshipId")?.toString();
    const friendId = formData.get("friendId")?.toString();
    if (action === "accept" && friendshipId) {
      await acceptFriendRequest(friendshipId, pb);
      return Astro2.redirect("/amis?tab=requests");
    }
    if (action === "refuse" && friendshipId) {
      await refuseFriendRequest(friendshipId, pb);
      return Astro2.redirect("/amis?tab=requests");
    }
    if (action === "add" && friendId) {
      await sendFriendRequest(user.id, friendId, pb);
      return Astro2.redirect("/amis?tab=pending");
    }
  }
  const activeTab = Astro2.url.searchParams.get("tab") || "friends";
  const search = Astro2.url.searchParams.get("q")?.trim() || "";
  const [friends, requests, pending] = await Promise.all([
    getUserFriends(user.id, pb).catch(() => []),
    getFriendRequests(user.id, pb).catch(() => []),
    getPendingFriends(user.id, pb).catch(() => [])
  ]);
  const searchResults = search.length >= 1 ? await searchUsers(search, user.id, pb).then(async (users) => {
    const usersWithFriendship = await Promise.all(
      users.map(async (person) => ({
        person,
        friendship: await getFriendship(user.id, person.id, pb)
      }))
    );
    return usersWithFriendship.filter(({ friendship }) => !friendship).map(({ person }) => person);
  }).catch(() => []) : [];
  function tabClass(tab) {
    return activeTab === tab && search.length < 1 ? "friend-tab rounded-full bg-paprika-c px-4 py-3 text-white" : "friend-tab rounded-full bg-white-c px-4 py-3 text-marron-c";
  }
  const currentFriends = friends.map((friendship) => friendship.utilisateur1 === user.id ? friendship.expand?.utilisateur2 : friendship.expand?.utilisateur1).filter(Boolean);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Listes de tes amis" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-8 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <form id="search-form" method="get"> <input id="search-user" name="q" type="text"${addAttribute(search, "value")} placeholder="Rechercher un utilisateur" class="mt-8 w-full rounded-2xl border-2 border-mocha-c bg-white-bk p-4 outline-none"> <button class="sr-only" type="submit">Rechercher</button> </form> <div class="mt-6 flex gap-3"> <a href="/amis?tab=friends" id="tab-friends"${addAttribute(tabClass("friends"), "class")}>
Mes amis
</a> <a href="/amis?tab=requests" id="tab-requests"${addAttribute(tabClass("requests"), "class")}>
Demandes
</a> <a href="/amis?tab=pending" id="tab-pending"${addAttribute(tabClass("pending"), "class")}>
En attente
</a> </div> <div id="friends-list" class="mt-8 flex flex-col gap-4"> ${search.length >= 1 ? searchResults.length > 0 ? searchResults.map((person) => renderTemplate`<article class="flex w-full items-center gap-4 rounded-2xl border-2 border-mocha-c bg-white-c p-4"> <a${addAttribute(`/amis/${person.id}`, "href")} class="flex flex-1 items-center gap-4"> ${renderComponent($$result2, "UserAvatar", $$UserAvatar, { "user": person, "pb": pb, "size": "h-16 w-16" })} <div> <h4 class="font-bold text-bordeaux-c">${person.username}</h4> <small class="text-marron-c">Utilisateur</small> </div> </a> <form method="post"> <input type="hidden" name="action" value="add"> <input type="hidden" name="friendId"${addAttribute(person.id, "value")}> <button class="rounded-full bg-paprika-c px-5 py-2 text-sm text-white">Ajouter</button> </form> </article>`) : renderTemplate`<p class="rounded-2xl bg-white-c p-5 text-marron-c">Aucun utilisateur trouvé.</p>` : activeTab === "requests" ? requests.length > 0 ? requests.map((request) => {
    const sender = request.expand?.utilisateur1;
    return renderTemplate`<article class="flex w-full items-center gap-4 rounded-2xl border-2 border-mocha-c bg-white-c p-4"> <a${addAttribute(`/amis/${sender?.id}`, "href")} class="flex flex-1 items-center gap-4"> ${renderComponent($$result2, "UserAvatar", $$UserAvatar, { "user": sender, "pb": pb, "size": "h-16 w-16" })} <div> <h4 class="font-bold text-bordeaux-c">${sender?.username || "Utilisateur"}</h4> <small class="text-marron-c">Demande reçue</small> </div> </a> <div class="flex flex-col gap-2"> <form method="post"> <input type="hidden" name="action" value="accept"> <input type="hidden" name="friendshipId"${addAttribute(request.id, "value")}> <button class="rounded-full bg-paprika-c px-5 py-2 text-sm text-white">Accepter</button> </form> <form method="post"> <input type="hidden" name="action" value="refuse"> <input type="hidden" name="friendshipId"${addAttribute(request.id, "value")}> <button class="rounded-full border-2 border-mocha-c px-5 py-2 text-sm text-mocha-c">Refuser</button> </form> </div> </article>`;
  }) : renderTemplate`<p class="rounded-2xl bg-white-c p-5 text-marron-c">Aucune demande reçue.</p>` : activeTab === "pending" ? pending.length > 0 ? pending.map((request) => {
    const receiver = request.expand?.utilisateur2;
    return renderTemplate`<article class="flex w-full items-center gap-4 rounded-2xl border-2 border-mocha-c bg-white-c p-4"> <a${addAttribute(`/amis/${receiver?.id}`, "href")} class="flex flex-1 items-center gap-4"> ${renderComponent($$result2, "UserAvatar", $$UserAvatar, { "user": receiver, "pb": pb, "size": "h-16 w-16" })} <div> <h4 class="font-bold text-bordeaux-c">${receiver?.username || "Utilisateur"}</h4> <small class="text-marron-c">Demande envoyée</small> </div> </a> <span class="rounded-full bg-white-bk px-5 py-2 text-sm text-marron-c">En attente</span> </article>`;
  }) : renderTemplate`<p class="rounded-2xl bg-white-c p-5 text-marron-c">Aucune demande en attente.</p>` : currentFriends.length > 0 ? currentFriends.map((friend) => renderTemplate`<article class="flex w-full items-center gap-4 rounded-2xl border-2 border-mocha-c bg-white-c p-4"> <a${addAttribute(`/amis/${friend.id}`, "href")} class="flex flex-1 items-center gap-4"> ${renderComponent($$result2, "UserAvatar", $$UserAvatar, { "user": friend, "pb": pb, "size": "h-16 w-16" })} <div> <h4 class="font-bold text-bordeaux-c">${friend.username}</h4> <small class="text-marron-c">Ami(e)</small> </div> </a> <span class="rounded-full bg-paprika-c px-5 py-2 text-sm text-white">Ami</span> </article>`) : renderTemplate`<p class="rounded-2xl bg-white-c p-5 text-marron-c">Tu n'as pas encore d'ami(e).</p>`} </div> </main> ` })} ${renderScript($$result, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro";
const $$url = "/amis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
