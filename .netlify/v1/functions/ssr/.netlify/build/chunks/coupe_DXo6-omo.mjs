const Trophy = new Proxy({"src":"/_astro/coupe.3Iye4qT5.avif","width":209,"height":238,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/assets/img/coupe.avif";
							}
							
							return target[name];
						}
					});

export { Trophy as T };
