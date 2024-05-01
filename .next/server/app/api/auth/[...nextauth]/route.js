"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var D_Work_CEDT_Software_Dev_Project_Software_Dev_cedt_se_project_because_of_you_i_cry_Frontend_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\Work\\\\มหาลัย\\\\CEDT\\\\Software Dev\\\\Project-Software-Dev\\\\cedt-se-project-because-of-you-i-cry\\\\Frontend\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_Work_CEDT_Software_Dev_Project_Software_Dev_cedt_se_project_because_of_you_i_cry_Frontend_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDV29yayU1QyVFMCVCOCVBMSVFMCVCOCVBQiVFMCVCOCVCMiVFMCVCOCVBNSVFMCVCOCVCMSVFMCVCOCVBMiU1Q0NFRFQlNUNTb2Z0d2FyZSUyMERldiU1Q1Byb2plY3QtU29mdHdhcmUtRGV2JTVDY2VkdC1zZS1wcm9qZWN0LWJlY2F1c2Utb2YteW91LWktY3J5JTVDRnJvbnRlbmQlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUQlM0ElNUNXb3JrJTVDJUUwJUI4JUExJUUwJUI4JUFCJUUwJUI4JUIyJUUwJUI4JUE1JUUwJUI4JUIxJUUwJUI4JUEyJTVDQ0VEVCU1Q1NvZnR3YXJlJTIwRGV2JTVDUHJvamVjdC1Tb2Z0d2FyZS1EZXYlNUNjZWR0LXNlLXByb2plY3QtYmVjYXVzZS1vZi15b3UtaS1jcnklNUNGcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNzRDtBQUN2QztBQUNzSDtBQUNyTDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWNjaW5lLWJvb2stYXBwLz83ZjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxXb3JrXFxcXOC4oeC4q+C4suC4peC4seC4olxcXFxDRURUXFxcXFNvZnR3YXJlIERldlxcXFxQcm9qZWN0LVNvZnR3YXJlLURldlxcXFxjZWR0LXNlLXByb2plY3QtYmVjYXVzZS1vZi15b3UtaS1jcnlcXFxcRnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkQ6XFxcXFdvcmtcXFxc4Lih4Lir4Liy4Lil4Lix4LiiXFxcXENFRFRcXFxcU29mdHdhcmUgRGV2XFxcXFByb2plY3QtU29mdHdhcmUtRGV2XFxcXGNlZHQtc2UtcHJvamVjdC1iZWNhdXNlLW9mLXlvdS1pLWNyeVxcXFxGcm9udGVuZFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCI7XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _libs_userLogIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/libs/userLogIn */ \"(rsc)/./src/libs/userLogIn.tsx\");\n\n\n\nconst authOptions = {\n    providers: [\n        //authenfivation provider\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            // The name to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, username, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"Email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                if (!credentials) return null;\n                const user = await (0,_libs_userLogIn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(credentials.email, credentials.password);\n                if (user) {\n                    // Any object returned will be saved in `user` property of the JWT\n                    return user;\n                } else {\n                    // If you return null then an error will be displayed advising the user to check their details.\n                    return null;\n                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/api/auth/login\",\n        signOut: \"/api/auth/logout\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            return {\n                ...token,\n                ...user\n            };\n        },\n        async session ({ session, token, user }) {\n            session.user = token;\n            return session;\n        }\n    }\n};\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNDO0FBRTRCO0FBQ3pCO0FBRWxDLE1BQU1HLGNBQTJCO0lBQ3RDQyxXQUFXO1FBQ1QseUJBQXlCO1FBQ3pCSCwyRUFBbUJBLENBQUM7WUFDbEIsbUVBQW1FO1lBQ25FSSxNQUFNO1lBQ04sZ0VBQWdFO1lBQ2hFLGdHQUFnRztZQUNoRyxtREFBbUQ7WUFDbkQseUVBQXlFO1lBQ3pFQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO29CQUFRQyxhQUFhO2dCQUFRO2dCQUM1REMsVUFBVTtvQkFBRUgsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1HLFdBQVVOLFdBQVcsRUFBRU8sR0FBRztnQkFDOUIsSUFBSSxDQUFDUCxhQUFhLE9BQU87Z0JBQ3pCLE1BQU1RLE9BQU8sTUFBTVosMkRBQVNBLENBQUNJLFlBQVlDLEtBQUssRUFBRUQsWUFBWUssUUFBUTtnQkFFcEUsSUFBSUcsTUFBTTtvQkFDUixrRUFBa0U7b0JBQ2xFLE9BQU9BO2dCQUNULE9BQU87b0JBQ0wsK0ZBQStGO29CQUMvRixPQUFPO2dCQUVQLDJJQUEySTtnQkFDN0k7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsU0FBUztRQUFFQyxVQUFVO0lBQU07SUFDM0JDLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxTQUFTO0lBQ1g7SUFDQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFUixJQUFJLEVBQUU7WUFDdkIsT0FBTztnQkFBRSxHQUFHUSxLQUFLO2dCQUFFLEdBQUdSLElBQUk7WUFBQztRQUM3QjtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFTyxLQUFLLEVBQUVSLElBQUksRUFBRTtZQUNwQ0MsUUFBUUQsSUFBSSxHQUFHUTtZQUNmLE9BQU9QO1FBQ1Q7SUFDRjtBQUNGLEVBQUU7QUFFRixNQUFNUSxVQUFVdkIsMERBQVFBLENBQUNHO0FBQ2tCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFjY2luZS1ib29rLWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcclxuaW1wb3J0IHsgQXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCB1c2VyTG9naW4gZnJvbSBcIkAvbGlicy91c2VyTG9nSW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICAvL2F1dGhlbmZpdmF0aW9uIHByb3ZpZGVyXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgLy8gVGhlIG5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuIFwiU2lnbiBpbiB3aXRoLi4uXCIpXHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgLy8gYGNyZWRlbnRpYWxzYCBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxyXG4gICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggZmllbGRzIHNob3VsZCBiZSBzdWJtaXR0ZWQsIGJ5IGFkZGluZyBrZXlzIHRvIHRoZSBgY3JlZGVudGlhbHNgIG9iamVjdC5cclxuICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJuYW1lLCBwYXNzd29yZCwgMkZBIHRva2VuLCBldGMuXHJcbiAgICAgIC8vIFlvdSBjYW4gcGFzcyBhbnkgSFRNTCBhdHRyaWJ1dGUgdG8gdGhlIDxpbnB1dD4gdGFnIHRocm91Z2ggdGhlIG9iamVjdC5cclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRW1haWxcIiB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHMpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB1c2VyTG9naW4oY3JlZGVudGlhbHMuZW1haWwsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgIC8vIEFueSBvYmplY3QgcmV0dXJuZWQgd2lsbCBiZSBzYXZlZCBpbiBgdXNlcmAgcHJvcGVydHkgb2YgdGhlIEpXVFxyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIElmIHlvdSByZXR1cm4gbnVsbCB0aGVuIGFuIGVycm9yIHdpbGwgYmUgZGlzcGxheWVkIGFkdmlzaW5nIHRoZSB1c2VyIHRvIGNoZWNrIHRoZWlyIGRldGFpbHMuXHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciB0aHVzIHRoZSB1c2VyIHdpbGwgYmUgc2VudCB0byB0aGUgZXJyb3IgcGFnZSB3aXRoIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgcXVlcnkgcGFyYW1ldGVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiBcImp3dFwiIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXBpL2F1dGgvbG9naW5cIixcclxuICAgIHNpZ25PdXQ6IFwiL2FwaS9hdXRoL2xvZ291dFwiLFxyXG4gIH0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIHJldHVybiB7IC4uLnRva2VuLCAuLi51c2VyIH07XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4gYXMgYW55O1xyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInVzZXJMb2dpbiIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwidXNlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/libs/userLogIn.tsx":
/*!********************************!*\
  !*** ./src/libs/userLogIn.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userLogIn)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-action-proxy */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"ad679bf6ebfea97781a85a2a01c34aa43b402f65\":\"default\"} */ \nasync function userLogIn(userEmail, userPassword) {\n    const BACKEND_URL = \"http://localhost:1234\";\n    const response = await fetch(`${BACKEND_URL}/api-informations/users/login`, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            email: userEmail,\n            password: userPassword\n        })\n    });\n    if (!response.ok) {\n    //throw new Error(\"Failed to Log-In\");\n    }\n    return await response.json();\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_1__.ensureServerEntryExports)([\n    userLogIn\n]);\n(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__.createActionProxy)(\"ad679bf6ebfea97781a85a2a01c34aa43b402f65\", null, userLogIn);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy91c2VyTG9nSW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZSxlQUFlQSxVQUM1QkMsU0FBaUIsRUFDakJDLFlBQW9CO0lBRXBCLE1BQU1DLGNBQWNDLHVCQUF1QjtJQUMzQyxNQUFNRSxXQUFXLE1BQU1DLE1BQ3JCLENBQUMsRUFBRUosWUFBWSw2QkFBNkIsQ0FBQyxFQUM3QztRQUNFSyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ25CQyxPQUFPWjtZQUNQYSxVQUFVWjtRQUNaO0lBQ0Y7SUFHRixJQUFJLENBQUNJLFNBQVNTLEVBQUUsRUFBRTtJQUNoQixzQ0FBc0M7SUFDeEM7SUFFQSxPQUFPLE1BQU1ULFNBQVNVLElBQUk7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWNjaW5lLWJvb2stYXBwLy4vc3JjL2xpYnMvdXNlckxvZ0luLnRzeD9mM2UzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXNlckxvZ0luKFxyXG4gIHVzZXJFbWFpbDogc3RyaW5nLFxyXG4gIHVzZXJQYXNzd29yZDogc3RyaW5nXHJcbikge1xyXG4gIGNvbnN0IEJBQ0tFTkRfVVJMID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkxcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7QkFDS0VORF9VUkx9L2FwaS1pbmZvcm1hdGlvbnMvdXNlcnMvbG9naW5gLFxyXG4gICAge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBlbWFpbDogdXNlckVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyUGFzc3dvcmQsXHJcbiAgICAgIH0pLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgIC8vdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIExvZy1JblwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZXJMb2dJbiIsInVzZXJFbWFpbCIsInVzZXJQYXNzd29yZCIsIkJBQ0tFTkRfVVJMIiwicHJvY2VzcyIsImVudiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInBhc3N3b3JkIiwib2siLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/userLogIn.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CWork%5C%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%5CCEDT%5CSoftware%20Dev%5CProject-Software-Dev%5Ccedt-se-project-because-of-you-i-cry%5CFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();