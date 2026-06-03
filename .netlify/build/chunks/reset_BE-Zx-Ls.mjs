import { c as createComponent, a as renderTemplate, e as defineScriptVars, m as maybeRenderHead, r as renderComponent, b as createAstro, d as addAttribute } from './astro/server_mM6q6Q3f.mjs';
import 'piccolore';
import 'clsx';
import { c as createSvgComponent } from './runtime_BTGkwREA.mjs';
import { e as getBars, h as getImageUrl } from './backend_CmHEyYCM.mjs';
import { $ as $$Image } from './_astro_assets_CdkVV2cw.mjs';

const Marker = createSvgComponent({"meta":{"src":"/_astro/marker.DSHLExIY.svg","width":28,"height":28,"format":"svg"},"attributes":{"width":"28","height":"28","viewBox":"0 0 28 28","fill":"none"},"children":"\n<path d=\"M23.3333 11.6667C23.3333 17.4918 16.8712 23.5585 14.7012 25.4322C14.499 25.5842 14.2529 25.6664 14 25.6664C13.7471 25.6664 13.501 25.5842 13.2988 25.4322C11.1288 23.5585 4.66667 17.4918 4.66667 11.6667C4.66667 9.19132 5.65 6.81735 7.40034 5.06701C9.15068 3.31667 11.5246 2.33334 14 2.33334C16.4754 2.33334 18.8493 3.31667 20.5997 5.06701C22.35 6.81735 23.3333 9.19132 23.3333 11.6667Z\" stroke=\"#793008\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M14.0004 15.1675C15.9337 15.1675 17.5009 13.6003 17.5009 11.6671C17.5009 9.73385 15.9337 8.16666 14.0004 8.16666C12.0672 8.16666 10.5 9.73385 10.5 11.6671C10.5 13.6003 12.0672 15.1675 14.0004 15.1675Z\" stroke=\"#793008\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Map = createComponent(async ($$result, $$props, $$slots) => {
  const bars = await getBars();
  const markerUrl = Marker.src;
  return renderTemplate(_a || (_a = __template(['<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">', '<div id="map" class="h-89 w-full"></div> <script>(function(){', "\n    const script = document.createElement('script');\n    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';\n    script.onload = () => {\n        const map = L.map('map').setView([47.50957, 6.79823], 13);\n        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n            attribution: '&copy; OpenStreetMap contributors',\n        }).addTo(map);\n        const customIcon = L.icon({\n            iconUrl: markerUrl,\n            iconSize: [42, 42],\n            iconAnchor: [21, 42],\n        });\n        bars.forEach((bar) => {\n            L.marker([bar.position.lat, bar.position.lon], { icon: customIcon }).addTo(map);\n        });\n    };\n    document.head.appendChild(script);\n})();<\/script>"])), maybeRenderHead(), defineScriptVars({ bars, markerUrl }));
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/Map.astro", void 0);

const Etoile = createSvgComponent({"meta":{"src":"/_astro/etoile.n7Aj4ANP.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"16","height":"16","viewBox":"0 0 16 16","fill":"none"},"children":"\n<g clip-path=\"url(#clip0_588_912)\">\n<path d=\"M7.68334 1.52997C7.71255 1.47094 7.75769 1.42126 7.81364 1.38652C7.86959 1.35178 7.93414 1.33337 8 1.33337C8.06587 1.33337 8.13042 1.35178 8.18637 1.38652C8.24232 1.42126 8.28746 1.47094 8.31667 1.52997L9.85667 4.6493C9.95812 4.85461 10.1079 5.03224 10.2931 5.16694C10.4783 5.30164 10.6934 5.38938 10.92 5.42264L14.364 5.92664C14.4293 5.93609 14.4906 5.96362 14.541 6.0061C14.5914 6.04859 14.629 6.10434 14.6494 6.16704C14.6697 6.22975 14.6722 6.29691 14.6564 6.36093C14.6406 6.42495 14.6072 6.48327 14.56 6.5293L12.0693 8.95464C11.9051 9.1147 11.7822 9.31229 11.7112 9.53039C11.6403 9.74849 11.6234 9.98056 11.662 10.2066L12.25 13.6333C12.2615 13.6985 12.2545 13.7657 12.2297 13.8271C12.2049 13.8885 12.1633 13.9417 12.1097 13.9806C12.0561 14.0196 11.9927 14.0426 11.9266 14.0472C11.8605 14.0518 11.7945 14.0378 11.736 14.0066L8.65734 12.388C8.45448 12.2815 8.22879 12.2258 7.99967 12.2258C7.77055 12.2258 7.54486 12.2815 7.342 12.388L4.264 14.0066C4.20556 14.0376 4.1396 14.0515 4.07364 14.0468C4.00767 14.0421 3.94435 14.019 3.89087 13.9801C3.83739 13.9412 3.79589 13.8881 3.77111 13.8268C3.74632 13.7655 3.73924 13.6984 3.75067 13.6333L4.338 10.2073C4.3768 9.98112 4.35999 9.7489 4.28903 9.53067C4.21807 9.31243 4.09508 9.11474 3.93067 8.95464L1.44 6.52997C1.3924 6.48399 1.35867 6.42557 1.34265 6.36135C1.32663 6.29714 1.32896 6.22971 1.34939 6.16676C1.36982 6.10381 1.40752 6.04786 1.45819 6.00529C1.50886 5.96272 1.57047 5.93524 1.636 5.92597L5.07934 5.42264C5.30618 5.38964 5.5216 5.30201 5.70706 5.16729C5.89252 5.03258 6.04247 4.85482 6.144 4.6493L7.68334 1.52997Z\" fill=\"#E99F22\" stroke=\"#E99F22\" stroke-width=\"1.1654\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</g>\n<defs>\n<clipPath id=\"clip0_588_912\">\n<rect width=\"16\" height=\"16\" fill=\"white\" />\n</clipPath>\n</defs>\n"});

const $$Astro$1 = createAstro();
const $$PbImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PbImage;
  const { record, imageField } = Astro2.props;
  const imageURL = await getImageUrl(record, imageField);
  return renderTemplate`${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": record.nom || "Image", "inferSize": false, "width": 400, "height": 300, "class": "h-full w-full object-cover" })}`}`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/PbImage.astro", void 0);

const $$Astro = createAstro();
const $$BarCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BarCard;
  const {
    nom,
    categorie,
    distance,
    note,
    record
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/carte/${record.id}`, "href")}> <article class="bar-card flex items-center justify-between rounded-3xl border border-paprika-c bg-white-c p-3"> <div class="flex items-center gap-5"> <div class="h-16 w-16 shrink-0 overflow-hidden rounded-lg"> ${renderComponent($$result, "PbImage", $$PbImage, { "record": record, "imageField": "image" })} </div> <div> <p class="font-bold"> ${nom} </p> <label class="mt-2 text-mocha-c"> ${categorie} • ${distance} km
</label> </div> </div> <div class="flex items-center gap-1"> ${renderComponent($$result, "Image", $$Image, { "src": Etoile, "alt": "", "class": "h-4 w-4 shrink-0" })} <label class="font-bold"> ${note} </label> </div> </article> </a>`;
}, "/Users/Lina/Documents/GitHub/projet-co-s2-2026-projet-16-nunc/src/components/BarCard.astro", void 0);

const Filtre = createSvgComponent({"meta":{"src":"/_astro/filtre.CYozMlSB.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"},"children":"\n<path d=\"M9.99879 19.9976C9.9987 20.1834 10.0504 20.3655 10.1481 20.5236C10.2457 20.6817 10.3855 20.8094 10.5517 20.8924L12.5515 21.8923C12.704 21.9685 12.8734 22.0045 13.0437 21.9968C13.2139 21.989 13.3794 21.9379 13.5244 21.8483C13.6694 21.7586 13.789 21.6334 13.8719 21.4844C13.9549 21.3355 13.9984 21.1679 13.9983 20.9974V13.9983C13.9985 13.5027 14.1827 13.0249 14.5152 12.6575L21.7374 4.66943C21.8668 4.52601 21.9519 4.34815 21.9824 4.15738C22.0129 3.9666 21.9875 3.77107 21.9092 3.59444C21.831 3.4178 21.7032 3.26762 21.5414 3.16207C21.3796 3.05651 21.1906 3.00009 20.9974 2.99963H2.99964C2.80627 2.9997 2.61707 3.05584 2.45496 3.16125C2.29284 3.26666 2.16477 3.41681 2.08626 3.59352C2.00774 3.77024 1.98215 3.96592 2.01258 4.15688C2.04302 4.34784 2.12817 4.52588 2.25773 4.66943L9.48185 12.6575C9.81434 13.0249 9.99856 13.5027 9.99879 13.9983V19.9976Z\" stroke=\"#E99F22\" stroke-width=\"1.99976\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Reset = createSvgComponent({"meta":{"src":"/_astro/reset.k0qes0W_.svg","width":24,"height":24,"format":"svg"},"attributes":{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none"},"children":"\n<path d=\"M21 12C21.0002 14.3662 20.0686 16.6372 18.4069 18.3216C16.7451 20.006 14.4869 20.9682 12.1209 21H12C9.70149 21.0057 7.48903 20.1261 5.82189 18.5438C5.7503 18.476 5.69274 18.3949 5.65251 18.3049C5.61229 18.215 5.59017 18.118 5.58743 18.0195C5.58468 17.921 5.60137 17.8229 5.63653 17.7309C5.67169 17.6388 5.72464 17.5546 5.79236 17.483C5.86007 17.4114 5.94122 17.3538 6.03117 17.3136C6.12113 17.2734 6.21813 17.2513 6.31663 17.2485C6.41513 17.2458 6.51321 17.2625 6.60527 17.2976C6.69732 17.3328 6.78155 17.3857 6.85314 17.4534C7.92545 18.4647 9.27197 19.1376 10.7245 19.3881C12.177 19.6385 13.6711 19.4554 15.0202 18.8617C16.3692 18.2679 17.5134 17.2898 18.3098 16.0495C19.1062 14.8092 19.5195 13.3618 19.4981 11.888C19.4766 10.4142 19.0214 8.97943 18.1893 7.76285C17.3571 6.54628 16.1849 5.60187 14.8192 5.04761C13.4534 4.49334 11.9546 4.3538 10.51 4.6464C9.06538 4.939 7.73901 5.65078 6.69658 6.69282C6.68892 6.70111 6.68078 6.70893 6.6722 6.71626L5.68408 7.62095L7.27782 9.2147C7.38428 9.31917 7.45718 9.453 7.48719 9.59911C7.5172 9.74521 7.50297 9.89694 7.44631 10.0349C7.38965 10.1729 7.29314 10.2908 7.16911 10.3737C7.04508 10.4565 6.89917 10.5005 6.75001 10.5H2.25001C2.0511 10.5 1.86033 10.421 1.71968 10.2803C1.57903 10.1397 1.50001 9.94892 1.50001 9.75001V5.25001C1.49915 5.10127 1.54253 4.95563 1.62465 4.83161C1.70677 4.70759 1.82391 4.61078 1.96118 4.5535C2.09845 4.49622 2.24966 4.48105 2.39557 4.50992C2.54149 4.53879 2.67552 4.6104 2.78064 4.71564L4.62283 6.56251L5.64845 5.62501C6.90843 4.36992 8.51201 3.51626 10.2568 3.17179C12.0015 2.82732 13.8092 3.00748 15.4516 3.68953C17.0941 4.37158 18.4976 5.52495 19.4851 7.00402C20.4726 8.4831 20.9997 10.2216 21 12Z\" fill=\"#A07541\" />\n"});

export { $$Map as $, Etoile as E, Filtre as F, Reset as R, $$BarCard as a, $$PbImage as b };
