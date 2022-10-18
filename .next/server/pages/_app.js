"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/navbar.jsx




const Navbar = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between py-1 mx-auto bg-orange-50/90 lg:px-10 xl:px-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-5 lg:ml-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/mpi100px.png",
                                    alt: "Mixa Logo",
                                    width: 70,
                                    height: 70
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden space-x-5 text-2xl font-semibold text-stone-500 lg:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "hover:text-stone-800",
                                    children: "Beranda"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/project",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "hover:text-stone-800",
                                    children: "Proyek"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/product",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "hover:text-stone-800",
                                    children: "Produk"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "hover:text-stone-800",
                                    children: "Tentang Kami"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "block mr-5 lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setIsOpen(!isOpen),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-10 h-10",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: isOpen ? "block" : "hidden",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        className: !isOpen ? "block" : "hidden",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: ` ${!isOpen ? "flex mb-5" : "hidden"} flex-col space-y-0 text-3xl text-center font-semibold absolute h-screen w-screen bg-orange-50 z-10 lg:hidden`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "py-6 border-orange-200 border-y-2 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200",
                            children: "Beranda"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/project",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200",
                            children: "Proyek"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/product",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200",
                            children: "Produk"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "py-6 border-b-2 border-orange-200 hover:border-y hover:border-b-4 hover:border-orange-400 hover:bg-orange-200",
                            children: "Tentang Kami"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./components/footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "xl:px-20 lg:px-10 bg-orange-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-10 py-3 md:px-5 lg:mx-auto ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "my-5",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/images/mpi250px.png",
                        alt: "Mixa Logo",
                        width: 150,
                        height: 150
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col items-start justify-between my-5 tracking-wide md:mx-5 lg:mx-auto lg:flex-row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "md:w-3/5 lg:w-2/5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-3 text-3xl font-bold uppercase text-stone-800",
                                children: "PT Mixa Perkasa Indonesia"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mb-4 text-lg text-stone-700/90",
                                children: "Emerald Avenue Comercial Park Blok EA-A27 Jl. Boulevard CBD Bintaro, RT. 003 RW. 007, Perigi Pondok Aren, Kota Tangerang Selatan Banten"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-4 text-lg text-stone-700/70",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: ":"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:mpi@mixaperkasa.com",
                                                    children: "mpi@mixaperkasa.com"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: "Telp"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: ":"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:+642122210280",
                                                    children: "(021) 222 10 280"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center pt-5 mb-5 text-lg font-semibold border-t-4 border-zinc-900/50 text-stone-700/90",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " PT Mixa Perkasa Indonesia"
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/head-component.jsx


const HeadComponent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "PT Mixa Perkasa Indonesia"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "PT Mixa Perkasa Indonesia"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: "Mixa Beton, Mixa Paving, Beton, Paving"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: "PT Mixa Perkasa Indonesia"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: "PT Mixa Perkasa Indonesia"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: "https://mixaperkasa.com/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: "PT Mixa Perkasa Indonesia"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: "PT Mixa Perkasa Indonesia adalah perusahaan yang bergerak di bidang stuktur dan beton."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
            })
        ]
    });
};
/* harmony default export */ const head_component = (HeadComponent);

;// CONCATENATED MODULE: ./components/layout.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(head_component, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-0 antialiased bg-zinc-50 lg:mx-auto container-none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "z-0",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.jsx



const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61], () => (__webpack_exec__(7051)));
module.exports = __webpack_exports__;

})();