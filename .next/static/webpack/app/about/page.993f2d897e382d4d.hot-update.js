"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./src/app/about/page.js":
/*!*******************************!*\
  !*** ./src/app/about/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.module.css */ \"(app-pages-browser)/./src/app/about/about.module.css\");\n/* harmony import */ var _about_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Import specific styles\nfunction About() {\n    _s();\n    const lines = [\n        \"Hi, I’m Samin Yeasar \",\n        \">> Education: CS Grad from KUET \",\n        \">> Experiences: Jr. SWE @ CodeMarshal IT Systemss\",\n        \">> skills : \",\n        \" *languages: C++, JS, Python \",\n        \" *frontend: React Native, Next JS \",\n        \" *backend: Node JS, Express \",\n        \" *database: PostgreSQL \",\n        \" *tools: git \"\n    ];\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentLine, setCurrentLine] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentCharIndex, setCurrentCharIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (currentLine < lines.length) {\n            if (currentCharIndex < lines[currentLine].length) {\n                const timeoutId = setTimeout(()=>{\n                    setDisplayedText((prev)=>{\n                        const updatedText = [\n                            ...prev\n                        ];\n                        updatedText[currentLine] = (updatedText[currentLine] || \"\") + lines[currentLine][currentCharIndex];\n                        return updatedText;\n                    });\n                    setCurrentCharIndex(currentCharIndex + 1);\n                }, 100); // Typing speed (adjust the delay)\n                return ()=>clearTimeout(timeoutId); // Cleanup the timeout\n            } else {\n                // Move to the next line\n                const nextLineTimeout = setTimeout(()=>{\n                    setCurrentLine(currentLine + 1);\n                    setCurrentCharIndex(0);\n                }, 500); // Delay between lines\n                return ()=>clearTimeout(nextLineTimeout);\n            }\n        }\n    }, [\n        currentCharIndex,\n        currentLine,\n        lines\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().terminal),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().typingWrapper),\n                        children: displayedText.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: line\n                            }, index, false, {\n                                fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_about_module_css__WEBPACK_IMPORTED_MODULE_2___default().cursor)\n                    }, void 0, false, {\n                        fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yeasar/my-portfolio-website/src/app/about/page.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(About, \"PGegnaqFiFq0lGdad/lRPgoNP78=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWJvdXQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QztBQUNKLENBQUMseUJBQXlCO0FBRW5ELFNBQVNHOztJQUN0QixNQUFNQyxRQUFRO1FBQ1o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFFRCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLGtCQUFrQkMsb0JBQW9CLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpERCxnREFBU0EsQ0FBQztRQUNSLElBQUlPLGNBQWNILE1BQU1PLE1BQU0sRUFBRTtZQUM5QixJQUFJRixtQkFBbUJMLEtBQUssQ0FBQ0csWUFBWSxDQUFDSSxNQUFNLEVBQUU7Z0JBQ2hELE1BQU1DLFlBQVlDLFdBQVc7b0JBQzNCUCxpQkFBaUIsQ0FBQ1E7d0JBQ2hCLE1BQU1DLGNBQWM7K0JBQUlEO3lCQUFLO3dCQUM3QkMsV0FBVyxDQUFDUixZQUFZLEdBQ3RCLENBQUNRLFdBQVcsQ0FBQ1IsWUFBWSxJQUFJLEVBQUMsSUFDOUJILEtBQUssQ0FBQ0csWUFBWSxDQUFDRSxpQkFBaUI7d0JBQ3RDLE9BQU9NO29CQUNUO29CQUNBTCxvQkFBb0JELG1CQUFtQjtnQkFDekMsR0FBRyxNQUFNLGtDQUFrQztnQkFFM0MsT0FBTyxJQUFNTyxhQUFhSixZQUFZLHNCQUFzQjtZQUM5RCxPQUFPO2dCQUNMLHdCQUF3QjtnQkFDeEIsTUFBTUssa0JBQWtCSixXQUFXO29CQUNqQ0wsZUFBZUQsY0FBYztvQkFDN0JHLG9CQUFvQjtnQkFDdEIsR0FBRyxNQUFNLHNCQUFzQjtnQkFDL0IsT0FBTyxJQUFNTSxhQUFhQztZQUM1QjtRQUNGO0lBQ0YsR0FBRztRQUFDUjtRQUFrQkY7UUFBYUg7S0FBTTtJQUV6QyxxQkFDRSw4REFBQ2M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDRDtnQkFBSUUsV0FBV2xCLG1FQUFlOztrQ0FDN0IsOERBQUNnQjt3QkFBSUUsV0FBV2xCLHdFQUFvQjtrQ0FDakNHLGNBQWNrQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3hCLDhEQUFDQzswQ0FBZUY7K0JBQVJDOzs7Ozs7Ozs7O2tDQUdaLDhEQUFDUDt3QkFBSUUsV0FBV2xCLGlFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckM7R0F4RHdCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Fib3V0L3BhZ2UuanM/NGNhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWJvdXQubW9kdWxlLmNzc1wiOyAvLyBJbXBvcnQgc3BlY2lmaWMgc3R5bGVzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICBjb25zdCBsaW5lcyA9IFtcbiAgICBcIkhpLCBJ4oCZbSBTYW1pbiBZZWFzYXIgXCIsXG4gICAgXCI+PiBFZHVjYXRpb246IENTIEdyYWQgZnJvbSBLVUVUIFwiLFxuICAgIFwiPj4gRXhwZXJpZW5jZXM6IEpyLiBTV0UgQCBDb2RlTWFyc2hhbCBJVCBTeXN0ZW1zc1wiLFxuICAgIFwiPj4gc2tpbGxzIDogXCIsXG4gICAgXCIgKmxhbmd1YWdlczogQysrLCBKUywgUHl0aG9uIFwiLFxuICAgIFwiICpmcm9udGVuZDogUmVhY3QgTmF0aXZlLCBOZXh0IEpTIFwiLFxuICAgIFwiICpiYWNrZW5kOiBOb2RlIEpTLCBFeHByZXNzIFwiLFxuICAgIFwiICpkYXRhYmFzZTogUG9zdGdyZVNRTCBcIixcbiAgICBcIiAqdG9vbHM6IGdpdCBcIixcbiAgXTtcblxuICBjb25zdCBbZGlzcGxheWVkVGV4dCwgc2V0RGlzcGxheWVkVGV4dF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50TGluZSwgc2V0Q3VycmVudExpbmVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50Q2hhckluZGV4LCBzZXRDdXJyZW50Q2hhckluZGV4XSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRMaW5lIDwgbGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAoY3VycmVudENoYXJJbmRleCA8IGxpbmVzW2N1cnJlbnRMaW5lXS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheWVkVGV4dCgocHJldikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFRleHQgPSBbLi4ucHJldl07XG4gICAgICAgICAgICB1cGRhdGVkVGV4dFtjdXJyZW50TGluZV0gPVxuICAgICAgICAgICAgICAodXBkYXRlZFRleHRbY3VycmVudExpbmVdIHx8IFwiXCIpICtcbiAgICAgICAgICAgICAgbGluZXNbY3VycmVudExpbmVdW2N1cnJlbnRDaGFySW5kZXhdO1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRUZXh0O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldEN1cnJlbnRDaGFySW5kZXgoY3VycmVudENoYXJJbmRleCArIDEpO1xuICAgICAgICB9LCAxMDApOyAvLyBUeXBpbmcgc3BlZWQgKGFkanVzdCB0aGUgZGVsYXkpXG5cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpOyAvLyBDbGVhbnVwIHRoZSB0aW1lb3V0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNb3ZlIHRvIHRoZSBuZXh0IGxpbmVcbiAgICAgICAgY29uc3QgbmV4dExpbmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudExpbmUoY3VycmVudExpbmUgKyAxKTtcbiAgICAgICAgICBzZXRDdXJyZW50Q2hhckluZGV4KDApO1xuICAgICAgICB9LCA1MDApOyAvLyBEZWxheSBiZXR3ZWVuIGxpbmVzXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQobmV4dExpbmVUaW1lb3V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50Q2hhckluZGV4LCBjdXJyZW50TGluZSwgbGluZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QWJvdXQgTWU8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXJtaW5hbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwaW5nV3JhcHBlcn0+XG4gICAgICAgICAge2Rpc3BsYXllZFRleHQubWFwKChsaW5lLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpbmRleH0+e2xpbmV9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJzb3J9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBYm91dCIsImxpbmVzIiwiZGlzcGxheWVkVGV4dCIsInNldERpc3BsYXllZFRleHQiLCJjdXJyZW50TGluZSIsInNldEN1cnJlbnRMaW5lIiwiY3VycmVudENoYXJJbmRleCIsInNldEN1cnJlbnRDaGFySW5kZXgiLCJsZW5ndGgiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwicHJldiIsInVwZGF0ZWRUZXh0IiwiY2xlYXJUaW1lb3V0IiwibmV4dExpbmVUaW1lb3V0IiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ0ZXJtaW5hbCIsInR5cGluZ1dyYXBwZXIiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJwIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/about/page.js\n"));

/***/ })

});