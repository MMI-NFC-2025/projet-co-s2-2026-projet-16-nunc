import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DwAQ0Pkb.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BZCnxHda.mjs';
import { F as Fleche } from '../chunks/fleche_D52W9Oh8.mjs';
import { L as Logo } from '../chunks/logo_DuaI_3pM.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CVdaBGvQ.mjs';
export { renderers } from '../renderers.mjs';

const Valeurs = new Proxy({"src":"/_astro/valeurs.BigdJEwq.avif","width":1444,"height":1116,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/assets/img/valeurs.avif";
							}
							
							return target[name];
						}
					});

const Lina = new Proxy({"src":"/_astro/lina.BPUrPZ9g.avif","width":852,"height":852,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/assets/img/lina.avif";
							}
							
							return target[name];
						}
					});

const Estelle = new Proxy({"src":"/_astro/estelle.CmCm1IdZ.avif","width":856,"height":856,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/assets/img/estelle.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$APropos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$APropos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 propos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-5 py-10 pb-32"> <a href="/" class="inline-flex items-center gap-3 rounded-full bg-orange-c/70 px-6 py-3 text-white"> ${renderComponent($$result2, "Image", $$Image, { "src": Fleche, "alt": "", "class": "h-4 w-4" })}
Retour
</a> <section class="mt-9 flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Logo, "alt": "Logo Nunc", "class": "h-auto w-72" })} </section> <section class="mt-15 rounded-2xl bg-linear-to-tl from-yellow-c/50 via-yellow-c/50 to-paprika-c/50 px-6 py-8"> <h2 class="text-center text-bordeaux-c">Notre Mission</h2> <p class="mt-8 leading-loose">
NÜNC révolutionne vos sorties nocturnes en vous offrant une
                plateforme complète pour découvrir, organiser et profiter de
                vos soirées entre amis. De la recherche de bars à la
                planification de votre retour en toute sécurité, nous sommes là
                pour rendre chaque moment inoubliable.
</p> </section> <section class="mt-15"> <h2 class="text-center text-paprika-c">Notre Histoire</h2> <section class="mt-12"> <div class="rounded-2xl bg-white px-8 py-10 shadow-lg"> <div> <p class="text-2xl font-bold text-paprika-c">2025 – L'idée</p> <p class="mt-6 leading-loose">
Dans le cadre de notre formation en MMI, nous avons
                            imaginé NÜNC, une application pour faciliter
                            l'organisation de sorties entre amis et découvrir de
                            nouveaux bars. Le concept et les premières
                            fonctionnalités ont été définis lors de la phase de
                            conception.
</p> </div> <div class="mt-14"> <p class="text-2xl font-bold text-paprika-c">2025 – La conception</p> <p class="mt-6 leading-loose">
Nous avons réalisé la landing page du site
                            promotionnel (mobile et desktop), ainsi que le guide
                            de style : palette de couleurs, typographies,
                            icônes et composants d'interface responsive.
</p> </div> <div class="mt-14"> <p class="text-2xl font-bold text-paprika-c">2026 – Aujourd'hui</p> <p class="mt-6 leading-loose">
Nous avons conçu les maquettes de l'application, en
                            nous concentrant sur l'expérience utilisateur.
                            L'application inclut l'organisation de sorties, une
                            carte interactive et des fonctionnalités de
                            sécurité. Le projet est présenté lors de la
                            soutenance.
</p> </div> </div> </section> </section> <section class="mt-15"> <h2 class="text-center text-paprika-c">Nos Valeurs</h2> <div class="mt-10 overflow-hidden rounded-3xl bg-white-c"> ${renderComponent($$result2, "Image", $$Image, { "src": Valeurs, "alt": "Valeurs de N\xDCNC", "loading": "lazy", "class": "h-auto w-full" })} </div> <small class="mt-15 block text-center"> <strong>Chez NÜNC</strong>, nous croyons que les meilleures
                soirées se vivent ensemble. Notre application repose sur des
                valeurs de convivialité, sécurité et innovation, afin d'offrir
                une expérience simple et agréable. Nous voulons faciliter
                l'organisation de sorties, encourager la découverte et permettre
                à chacun de profiter du moment en toute confiance.
</small> </section> <section class="mt-15"> <h2 class="text-center text-paprika-c">Notre Équipe</h2> <div class="mt-12 flex flex-col gap-16"> <article class="rounded-3xl border border-mocha-c bg-white-c px-6 py-10 text-center"> <div class="flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Lina, "alt": "Portrait de Lina Ben Mabrouk", "loading": "lazy", "class": "h-64 w-64 rounded-full object-cover" })} </div> <h3 class="mt-10 text-bordeaux-c">Lina Ben Mabrouk</h3> <small class="mt-2 block">
Lina s'est principalement occupée de la communication du
                        projet et du développement de l'application, en veillant
                        à rendre l'expérience claire, efficace et agréable pour
                        les utilisateurs.
</small> </article> <article class="rounded-3xl border border-mocha-c bg-white-c px-6 py-10 text-center"> <div class="flex justify-center"> ${renderComponent($$result2, "Image", $$Image, { "src": Estelle, "alt": "Portrait d'Estelle Coulon", "loading": "lazy", "class": "h-64 w-64 rounded-full object-cover" })} </div> <h3 class="mt-10 text-bordeaux-c">Estelle Coulon</h3> <small class="mt-2 block">
Estelle s'est également occupée de la communication du
                        projet, avec un rôle central dans le design et la
                        direction créative. Elle a imaginé l'identité visuelle
                        de NÜNC, notamment le nom, le logo et l'univers
                        graphique de l'application.
</small> </article> </div> </section> <section class="mt-15"> <div class="rounded-3xl bg-white px-6 py-10 shadow-lg"> <h3 class="text-paprika-c">Crédits & Remerciements</h3> <div class="mt-12"> <h4>Projet Académique</h4> <small class="mt-3 block">
Cette application a été développée dans le cadre d'un
                        projet académique en MMI, avec pour objectif de concevoir
                        une plateforme facilitant l'organisation de sorties
                        nocturnes entre amis. Le projet met l'accent sur une
                        approche mobile-first et sur une expérience utilisateur
                        simple et intuitive.
</small> </div> <div class="mt-6"> <h4>Technologies Utilisées</h4> <div class="mt-3 flex flex-col gap-2"> <small><strong>Figma</strong> pour la conception des maquettes et du design</small> <small><strong>Visual Studio Code</strong> comme environnement de développement</small> <small><strong>Astro</strong> pour la structure et le développement du site</small> <small><strong>Tailwind CSS</strong> pour le design et la mise en page responsive</small> </div> </div> <div class="mt-6"> <h4>Mentions Spéciales</h4> <small class="mt-3 block">
Un grand merci à tous les établissements partenaires,
                        aux utilisateurs bêta-testeurs et à l'équipe pédagogique
                        pour leur soutien et leurs précieux retours tout au long
                        du développement de ce projet.
</small> </div> </div> </section> </main> ` })}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/a-propos.astro", void 0);

const $$file = "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/a-propos.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$APropos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
