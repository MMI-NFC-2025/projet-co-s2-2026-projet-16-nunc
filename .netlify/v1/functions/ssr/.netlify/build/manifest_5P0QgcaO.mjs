import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_mM6q6Q3f.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/","cacheDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/node_modules/.astro/","outDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/dist/","srcDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/","publicDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/public/","buildClientDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/dist/","buildServerDir":"file:///Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/a-propos","isIndex":false,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos.astro","pathname":"/a-propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/amis/[id]","isIndex":false,"type":"page","pattern":"^\\/amis\\/([^/]+?)\\/?$","segments":[[{"content":"amis","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/amis/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/amis","isIndex":true,"type":"page","pattern":"^\\/amis\\/?$","segments":[[{"content":"amis","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/amis/index.astro","pathname":"/amis","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/boutique","isIndex":false,"type":"page","pattern":"^\\/boutique\\/?$","segments":[[{"content":"boutique","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boutique.astro","pathname":"/boutique","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/carte/[id]","isIndex":false,"type":"page","pattern":"^\\/carte\\/([^/]+?)\\/?$","segments":[[{"content":"carte","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/carte/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/carte","isIndex":true,"type":"page","pattern":"^\\/carte\\/?$","segments":[[{"content":"carte","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carte/index.astro","pathname":"/carte","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/connexion","isIndex":false,"type":"page","pattern":"^\\/connexion\\/?$","segments":[[{"content":"connexion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/connexion.astro","pathname":"/connexion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/inscription","isIndex":false,"type":"page","pattern":"^\\/inscription\\/?$","segments":[[{"content":"inscription","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inscription.astro","pathname":"/inscription","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/landing-page","isIndex":false,"type":"page","pattern":"^\\/landing-page\\/?$","segments":[[{"content":"landing-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/landing-page.astro","pathname":"/landing-page","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/mentions-legales","isIndex":false,"type":"page","pattern":"^\\/mentions-legales\\/?$","segments":[[{"content":"mentions-legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mentions-legales.astro","pathname":"/mentions-legales","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/premium/paiement","isIndex":false,"type":"page","pattern":"^\\/premium\\/paiement\\/?$","segments":[[{"content":"premium","dynamic":false,"spread":false}],[{"content":"paiement","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/premium/paiement.astro","pathname":"/premium/paiement","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/premium","isIndex":true,"type":"page","pattern":"^\\/premium\\/?$","segments":[[{"content":"premium","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/premium/index.astro","pathname":"/premium","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/profil","isIndex":false,"type":"page","pattern":"^\\/profil\\/?$","segments":[[{"content":"profil","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profil.astro","pathname":"/profil","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/retour-programme","isIndex":false,"type":"page","pattern":"^\\/retour-programme\\/?$","segments":[[{"content":"retour-programme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/retour-programme.astro","pathname":"/retour-programme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/sortie/organiser-sortie","isIndex":false,"type":"page","pattern":"^\\/sortie\\/organiser-sortie\\/?$","segments":[[{"content":"sortie","dynamic":false,"spread":false}],[{"content":"organiser-sortie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sortie/organiser-sortie.astro","pathname":"/sortie/organiser-sortie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/sortie/[id]","isIndex":false,"type":"page","pattern":"^\\/sortie\\/([^/]+?)\\/?$","segments":[[{"content":"sortie","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/sortie/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/sortie","isIndex":true,"type":"page","pattern":"^\\/sortie\\/?$","segments":[[{"content":"sortie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sortie/index.astro","pathname":"/sortie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/test-sobriete/jeu","isIndex":false,"type":"page","pattern":"^\\/test-sobriete\\/jeu\\/?$","segments":[[{"content":"test-sobriete","dynamic":false,"spread":false}],[{"content":"jeu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test-sobriete/jeu.astro","pathname":"/test-sobriete/jeu","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/test-sobriete","isIndex":true,"type":"page","pattern":"^\\/test-sobriete\\/?$","segments":[[{"content":"test-sobriete","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test-sobriete/index.astro","pathname":"/test-sobriete","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/connexion.DvofayJw.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/connexion.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/inscription.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/landing-page.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/a-propos.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/[id].astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/amis/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/boutique.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/[id].astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/carte/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/mentions-legales.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/premium/paiement.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/profil.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/retour-programme.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/[id].astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/sortie/organiser-sortie.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/index.astro",{"propagation":"none","containsHead":true}],["/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/pages/test-sobriete/jeu.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/a-propos@_@astro":"pages/a-propos.astro.mjs","\u0000@astro-page:src/pages/amis/[id]@_@astro":"pages/amis/_id_.astro.mjs","\u0000@astro-page:src/pages/amis/index@_@astro":"pages/amis.astro.mjs","\u0000@astro-page:src/pages/boutique@_@astro":"pages/boutique.astro.mjs","\u0000@astro-page:src/pages/carte/[id]@_@astro":"pages/carte/_id_.astro.mjs","\u0000@astro-page:src/pages/carte/index@_@astro":"pages/carte.astro.mjs","\u0000@astro-page:src/pages/connexion@_@astro":"pages/connexion.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/inscription@_@astro":"pages/inscription.astro.mjs","\u0000@astro-page:src/pages/landing-page@_@astro":"pages/landing-page.astro.mjs","\u0000@astro-page:src/pages/mentions-legales@_@astro":"pages/mentions-legales.astro.mjs","\u0000@astro-page:src/pages/premium/paiement@_@astro":"pages/premium/paiement.astro.mjs","\u0000@astro-page:src/pages/premium/index@_@astro":"pages/premium.astro.mjs","\u0000@astro-page:src/pages/profil@_@astro":"pages/profil.astro.mjs","\u0000@astro-page:src/pages/retour-programme@_@astro":"pages/retour-programme.astro.mjs","\u0000@astro-page:src/pages/sortie/organiser-sortie@_@astro":"pages/sortie/organiser-sortie.astro.mjs","\u0000@astro-page:src/pages/sortie/[id]@_@astro":"pages/sortie/_id_.astro.mjs","\u0000@astro-page:src/pages/sortie/index@_@astro":"pages/sortie.astro.mjs","\u0000@astro-page:src/pages/test-sobriete/jeu@_@astro":"pages/test-sobriete/jeu.astro.mjs","\u0000@astro-page:src/pages/test-sobriete/index@_@astro":"pages/test-sobriete.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_5P0QgcaO.mjs","/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/lina.BPUrPZ9g.avif","/_astro/valeurs.BigdJEwq.avif","/_astro/estelle.CmCm1IdZ.avif","/_astro/sorties-image.BlZp9HfC.avif","/_astro/voiture-image.DKhW2Uos.avif","/_astro/photo-verre.BhxugQZm.avif","/_astro/bar-image.D-9oxaP8.avif","/_astro/points-image.Bw6OWrx1.avif","/_astro/niveau-image.C-rmShk5.avif","/_astro/eye-open.D3amHBCL.svg","/_astro/profil.CyDvrHi0.svg","/_astro/courone.CaWD2V8z.svg","/_astro/fleche-droite.DZShDhoA.svg","/_astro/fleche.BKn391K1.svg","/_astro/flecheorange-droite.Doi64nAw.svg","/_astro/telephone.CXtKGWR7.svg","/_astro/mail.DtmojuP_.svg","/_astro/instagram.BIY_ug2O.svg","/_astro/flecheorange-gauche.BWFAFhaM.svg","/_astro/tiktok.DiTOmtlF.svg","/_astro/facebook.qKGH9UAl.svg","/_astro/carte.ClWNivKY.svg","/_astro/logo.C6r8WAEk.svg","/_astro/ice.BaAZsi0e.svg","/_astro/orange.Cn9JJyJn.svg","/_astro/zeste.3QFFNRqm.svg","/_astro/google-play.CVKBLNzX.svg","/_astro/app-store.CNvr8g2p.svg","/_astro/tw.Cp3zJBNe.svg","/_astro/edit.CJLDP27J.svg","/_astro/people.Bi6f4pbB.svg","/_astro/sortie.Dt-Or2n6.svg","/_astro/power.q-kovQPh.svg","/_astro/taxi.gUQ6ya2u.avif","/_astro/vtc.CTogVtlS.avif","/_astro/sam.R8VLwOm5.avif","/_astro/retour.C8NserS7.svg","/_astro/test.DxT1ccWb.svg","/_astro/sac.BSWs5tuU.svg","/_astro/argent.CZfrI6MT.svg","/_astro/temps.BhVIF8X2.svg","/_astro/reset.k0qes0W_.svg","/_astro/coupe.3Iye4qT5.avif","/_astro/filtre.CYozMlSB.svg","/_astro/etoile.n7Aj4ANP.svg","/_astro/close.BtVECR_0.svg","/_astro/tuffy-greek-400-normal.DJ8VIlVi.woff2","/_astro/tuffy-cyrillic-ext-400-normal.CLtbibT5.woff2","/_astro/tuffy-phoenician-400-normal.n1VCaRxH.woff2","/_astro/tuffy-latin-ext-400-normal.BCJ9nEW_.woff2","/_astro/tuffy-greek-ext-400-normal.q9Vk0A0L.woff2","/_astro/tuffy-latin-400-normal.DDd4rGUq.woff2","/_astro/tuffy-greek-700-normal.izrkx9Tt.woff2","/_astro/tuffy-latin-ext-700-normal.BKG-V-YY.woff2","/_astro/tuffy-latin-700-normal.wCkybNfH.woff2","/_astro/tuffy-cyrillic-700-normal.DfnEqleX.woff2","/_astro/titan-one-latin-ext-400-normal.BW7cdQ38.woff2","/_astro/tuffy-cyrillic-400-normal.CeLTAO7O.woff2","/_astro/titan-one-latin-400-normal.DwVbh4mi.woff2","/_astro/marker.DSHLExIY.svg","/_astro/tuffy-greek-400-normal.Cpm1EIBf.woff","/_astro/tuffy-cyrillic-ext-400-normal.1NPpLL3Z.woff","/_astro/home.yaIqwk7D.svg","/_astro/tuffy-latin-ext-400-normal.dB8nRdP3.woff","/_astro/tuffy-greek-ext-400-normal.UojdYpQm.woff","/_astro/tuffy-latin-400-normal.BxjIYwUQ.woff","/_astro/tuffy-greek-700-normal.DccFbLK5.woff","/_astro/tuffy-latin-ext-700-normal.BMCdwRkH.woff","/_astro/tuffy-cyrillic-700-normal.JGtIhf00.woff","/_astro/tuffy-latin-700-normal.DycPS0bP.woff","/_astro/titan-one-latin-ext-400-normal.CiNNQIOC.woff","/_astro/tuffy-cyrillic-400-normal.CMbo7iEI.woff","/_astro/titan-one-latin-400-normal.VZVzRR2h.woff","/_astro/logo-white.BJoatucs.svg","/_astro/connexion.DvofayJw.css","/apple-touch-icon.png","/favicon-96x96.png","/favicon.ico","/favicon.svg","/site.webmanifest","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"QPsVN+Q6c8ZJxjUHw3TfQSH9W6/fFPiI38XWToApffc=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
