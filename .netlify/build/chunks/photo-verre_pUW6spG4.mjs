const Photo = new Proxy({"src":"/_astro/photo-verre.BhxugQZm.avif","width":1452,"height":2058,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/assets/img/photo-verre.avif";
							}
							
							return target[name];
						}
					});

export { Photo as P };
