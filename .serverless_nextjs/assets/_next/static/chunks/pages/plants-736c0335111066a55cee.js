_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"0M4M":function(a,n,t){"use strict";t.r(n);var e=t("nKUr"),c=(t("q1tI"),t("LXf5")),i=t("VX74"),l=t("kOll"),s=t("NbSc"),r=t("F/f1"),d=t.n(r);n.default=Object(c.a)({ssr:!0})((function(){var a=Object(i.useQuery)(l.a),n=a.loading,t=a.error,c=a.data;return n?Object(e.jsx)("p",{children:"Loading..."}):t?Object(e.jsx)("p",{children:t.message}):Object(e.jsx)("section",{className:d.a.plants,children:c.plantCatalog.map((function(a){return Object(e.jsx)(s.a,{plant:a},a.id)}))})}))},"0xoL":function(a,n,t){a.exports={plantCard:"PlantCard_plantCard__dARNv",front:"PlantCard_front__2rgGU",back:"PlantCard_back__zd-oF",italic:"PlantCard_italic__3smVo",plantImage:"PlantCard_plantImage__ZjciE",plantName:"PlantCard_plantName__2HGY3"}},"F/f1":function(a,n,t){a.exports={plants:"plants_plants__3KBGu"}},NbSc:function(a,n,t){"use strict";var e=t("nKUr"),c=(t("q1tI"),t("0xoL")),i=t.n(c);n.a=function(a){var n=a.plant;return Object(e.jsxs)("article",{className:i.a.plantCard,children:[Object(e.jsxs)("div",{className:i.a.front,children:[Object(e.jsx)("div",{className:i.a.plantImage,style:{backgroundImage:"url(".concat(n.imageUrl,")")},role:"img","aria-label":"".concat(n.scientificName," in the wild"),children:" "}),Object(e.jsx)("h3",{className:i.a.plantName,children:n.commonName})]}),Object(e.jsxs)("div",{className:i.a.back,children:[Object(e.jsx)("h5",{children:"Scientific Name:"}),Object(e.jsx)("h6",{className:i.a.italic,children:n.scientificName}),Object(e.jsx)("h5",{children:"Family Name:"}),Object(e.jsx)("h6",{children:n.familyCommonName}),Object(e.jsx)("h6",{className:i.a.italic,children:n.familyScientificName})]})]})}},jF0A:function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plants",function(){return t("0M4M")}])}},[["jF0A",2,1,0,3,4]]]);