/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Spacha.ts":
/*!***********************!*\
  !*** ./src/Spacha.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Spacha = void 0;\nconst SpachaCore_1 = __webpack_require__(/*! ./SpachaCore */ \"./src/SpachaCore.ts\");\nconst define_1 = __webpack_require__(/*! ./define */ \"./src/define.ts\");\nclass Spacha extends SpachaCore_1.SpachaCore {\n    spc;\n    upperDiv;\n    baseDiv;\n    constructor(spc, options) {\n        super(options);\n        this.spc = spc;\n        this.upperDiv = document.createElement(\"div\");\n        this.baseDiv = document.createElement(\"div\");\n        this.draw();\n    }\n    draw = () => {\n        this.spc.innerHTML = '';\n        const spcContainer = document.createElement(\"div\");\n        this.upperDiv = document.createElement(\"div\");\n        this.upperDiv.id = \"spc-upper-div\";\n        this.setUpperStyle(this.upperDiv, Boolean(this.options.message));\n        this.setUpperInner(this.upperDiv);\n        if (this.options.message) {\n            this.baseDiv = document.createElement(\"div\");\n            this.baseDiv.id = \"spc-base-div\";\n            this.baseDiv.innerHTML = this.options.message;\n            this.setMessageStyle(this.baseDiv);\n        }\n        spcContainer.appendChild(this.upperDiv);\n        spcContainer.appendChild(this.baseDiv);\n        if (this.options.shaddow) {\n            spcContainer.style.boxShadow = \"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\";\n            spcContainer.style.borderRadius = `${20 * this.scale}px`;\n        }\n        this.spc.appendChild(spcContainer);\n    };\n    setUpperStyle = (baseDiv, upper) => {\n        const style = baseDiv.style;\n        const r = 20 * this.scale;\n        const pw = 30 * this.scale;\n        const ph = 20 * this.scale;\n        style.backgroundColor = this.options.themeOption?.color ?? define_1.themes.blue.color;\n        style.width = \"100%\";\n        style.height = `${150 * this.scale}px`;\n        style.display = \"inline-flex\";\n        style.boxSizing = \"border-box\";\n        style.borderRadius = upper ? `${r}px ${r}px 0px 0px` : `${r}px`;\n        style.paddingLeft = `${pw}px`;\n        style.paddingRight = `${pw}px`;\n        style.paddingTop = `${ph}px`;\n        style.paddingBottom = `${ph}px`;\n    };\n    setMessageStyle = (messageDiv) => {\n        const style = messageDiv.style;\n        const r = 20 * this.scale;\n        style.width = \"100%\";\n        style.boxSizing = \"border-box\";\n        style.backgroundColor = this.options.themeOption?.baseColor ?? define_1.themes.blue.baseColor;\n        style.font = `${30 * this.scale}px 'sans-serif'`;\n        style.padding = `${10 * this.scale}px`;\n        style.borderRadius = `0px 0px ${r}px ${r}px`;\n        style.textOverflow = \"ellipsis\";\n        style.color = this.options.themeOption?.txtColor ?? define_1.themes.blue.txtColor;\n    };\n    setUpperInner = (upperDiv) => {\n        const iconDiv = document.createElement(\"div\");\n        const profileDiv = document.createElement(\"div\");\n        iconDiv.id = \"spc-icon-div\";\n        profileDiv.id = \"spc-profile-div\";\n        iconDiv.style.width = `${110 * this.scale}px`;\n        iconDiv.style.height = `${110 * this.scale}px`;\n        profileDiv.style.paddingLeft = `${10 * this.scale}px`;\n        this.setIconInner(iconDiv);\n        this.setProfileInner(profileDiv);\n        upperDiv.appendChild(iconDiv);\n        upperDiv.appendChild(profileDiv);\n    };\n    setIconInner = (iconDiv) => {\n        const img = document.createElement(\"img\");\n        img.width = 110 * this.scale;\n        img.height = 110 * this.scale;\n        img.src = String(this.options.user?.img?.src);\n        if (!this.options.imgOption?.square) {\n            img.style.borderRadius = `${110 * this.scale / 2}px`;\n        }\n        iconDiv.appendChild(img);\n    };\n    setProfileInner = (profileDiv) => {\n        const nameP = document.createElement(\"p\");\n        const priceP = document.createElement(\"p\");\n        const txtColor = this.options.themeOption?.txtColor ?? define_1.themes.blue.txtColor;\n        nameP.style.color = txtColor;\n        priceP.style.color = txtColor;\n        nameP.style.opacity = \"0.7\";\n        nameP.style.marginTop = \"10px\";\n        nameP.style.marginBottom = \"0px\";\n        priceP.style.marginTop = \"0px\";\n        nameP.style.font = `${20 * this.scale}px 'sans-serif'`;\n        priceP.style.font = `${50 * this.scale}px 'sans-serif'`;\n        nameP.innerHTML = this.options.user?.name ?? \"YouTube User\";\n        priceP.innerHTML = this.options.customPriceString ?? this.generatePriceString(this.options.price ?? 0);\n        profileDiv.appendChild(nameP);\n        profileDiv.appendChild(priceP);\n    };\n}\nexports.Spacha = Spacha;\n\n\n//# sourceURL=webpack://spacha/./src/Spacha.ts?");

/***/ }),

/***/ "./src/SpachaCore.ts":
/*!***************************!*\
  !*** ./src/SpachaCore.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SpachaCore = void 0;\nconst define_1 = __webpack_require__(/*! ./define */ \"./src/define.ts\");\nclass SpachaCore {\n    options;\n    scale = 1.0;\n    constructor(options) {\n        this.options = options ?? {};\n        this.init();\n    }\n    init = () => {\n        const themeArray = Object.keys(define_1.themes).map(key => ({ ...define_1.themes[key], name: key }));\n        const randomTheme = themeArray[Math.floor(Math.random() * themeArray.length)];\n        console.log(themeArray);\n        console.log(randomTheme);\n        this.options.price ??= randomTheme.price;\n        this.options.scale ??= 1.0;\n        this.scale = this.options.scale;\n        //this.options.theme ??= randomTheme.name;\n        this.options.themeOption ??= define_1.themes[this.options.theme ?? randomTheme.name];\n        this.options.user ??= {\n            name: 'YouTube User'\n        };\n        this.options.user.name ??= 'YouTube User';\n        const img = new Image;\n        img.src = \"https://github.com/youtube.png\";\n        this.options.user.img ??= img;\n        this.options.shaddow ??= true;\n    };\n    themeFromPrice = (price) => {\n        if (price < 0) {\n            return define_1.themes.blue;\n        }\n        return Object.keys(define_1.themes).map(key => define_1.themes[key]).find(v => v.price <= price) ?? define_1.themes.blue;\n    };\n    generatePriceString = (price) => {\n        return \"￥\" + Number(this.options.price).toLocaleString();\n    };\n}\nexports.SpachaCore = SpachaCore;\n\n\n//# sourceURL=webpack://spacha/./src/SpachaCore.ts?");

/***/ }),

/***/ "./src/SpachaImage.ts":
/*!****************************!*\
  !*** ./src/SpachaImage.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.SpachaImage = void 0;\nconst SpachaCore_1 = __webpack_require__(/*! ./SpachaCore */ \"./src/SpachaCore.ts\");\nconst define_1 = __webpack_require__(/*! ./define */ \"./src/define.ts\");\nclass SpachaImage extends SpachaCore_1.SpachaCore {\n    ctx;\n    constructor(ctx, options) {\n        super(options);\n        this.ctx = ctx;\n        this.job();\n    }\n    job = () => {\n        const canvas = this.ctx.canvas;\n        this.options.width ??= canvas.clientWidth;\n        if (this.options.width !== canvas.clientWidth) {\n            canvas.width = this.options.width;\n        }\n        if (!this.options.height) {\n            this.options.heightAutoFix ??= true;\n        }\n        this.options.height ??= canvas.clientHeight;\n        if (this.options.height !== canvas.height) {\n            canvas.height = this.options.height;\n        }\n        this.draw();\n    };\n    draw = () => {\n        const canvas = this.ctx.canvas;\n        if (this.options.message) {\n            let ty;\n            if (this.options.heightAutoFix) {\n                const y = 150 * this.scale;\n                const offset = 10 * this.scale;\n                ty = this.printString(this.options.message ?? 'error', 0, 0, 32 * this.scale, ((this.options.width ?? 600) - 10), false);\n                this.options.height = y + ty + offset * 2;\n                canvas.height = this.options.height;\n            }\n            this.drawRounedSq(true);\n            this.drawRoundedSqCm();\n        }\n        else {\n            this.drawRounedSq(false);\n        }\n    };\n    drawRounedSq = (cm) => {\n        const ctx = this.ctx;\n        const x = 0, y = 0;\n        const w = (this.options.width ?? 600);\n        const h = (cm ? 150 * this.scale : ((this.options.height) ?? 150));\n        const r = 20 * this.scale;\n        const color = this.options.themeOption?.color ?? define_1.themes.blue.baseColor;\n        console.log(h);\n        ctx.beginPath();\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = color;\n        ctx.fillStyle = color;\n        ctx.moveTo(x, y + (r / 2));\n        if (cm) {\n            ctx.lineTo(x, y + h);\n            ctx.lineTo(x + w, y + h);\n        }\n        else {\n            ctx.arc(x + r, y + h - r, r, Math.PI, Math.PI * 0.5, true);\n            ctx.arc(x + w - r, y + h - r, r, Math.PI * 0.5, 0, true);\n        }\n        ctx.arc(x + w - r, y + r, r, 0, Math.PI * 1.5, true);\n        ctx.arc(x + r, y + r, r, Math.PI * 1.5, Math.PI, true);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n        this.iconDraw();\n        this.profileDraw();\n    };\n    drawRoundedSqCm = () => {\n        const ctx = this.ctx;\n        const x = 0, y = 150 * this.scale;\n        const w = (this.options.width ?? 600);\n        const h = (this.options.height ?? 150);\n        const r = 20 * this.scale;\n        ctx.lineWidth = 1;\n        ctx.strokeStyle = this.options.themeOption?.color ?? define_1.themes.blue.color;\n        ctx.fillStyle = this.options.themeOption?.baseColor ?? define_1.themes.blue.baseColor;\n        ctx.beginPath();\n        ctx.moveTo(x, y);\n        ctx.arc(x + r, h - r, r, Math.PI, Math.PI * 0.5, true);\n        ctx.arc(x + w - r, h - r, r, Math.PI * 0.5, 0, true);\n        ctx.lineTo(x + w, y);\n        ctx.closePath();\n        ctx.stroke();\n        ctx.fill();\n        this.printString(this.options.message ?? 'error', x + (20 * this.scale), y + (32 * this.scale), 32 * this.scale, (this.options.width ?? 600) - 10, true);\n    };\n    printString = (text, x, y, lineHeight, fitWidth, draw) => {\n        const ctx = this.ctx;\n        ctx.font = `${30 * this.scale}px 'sans-serif'`;\n        ctx.fillStyle = this.options.themeOption?.txtColor ?? 'white';\n        fitWidth = fitWidth || 0;\n        if (fitWidth <= 0) {\n            if (draw) {\n                ctx.fillText(text, x, y);\n            }\n            return y + lineHeight;\n        }\n        for (let idx = 1; idx <= text.length; idx++) {\n            let str = text.substring(0, idx);\n            if (ctx.measureText(str).width > fitWidth) {\n                if (draw) {\n                    console.log(str, y);\n                    ctx.fillText(text.substring(0, idx - 1), x, y);\n                }\n                const r = this.printString(text.substring(idx - 1), x, y + lineHeight, lineHeight, fitWidth, draw);\n                console.log(r);\n                return r;\n            }\n        }\n        if (draw) {\n            console.log(text, y);\n            ctx.fillText(text, x, y);\n        }\n        console.log(y + lineHeight);\n        return y + lineHeight;\n    };\n    iconDraw = () => {\n        const ctx = this.ctx;\n        const img = this.options.user?.img;\n        if (!img) {\n            throw new Error(\"Img not set\");\n        }\n        const w = 110 * this.scale;\n        ctx.save();\n        const x = 30 * this.scale;\n        const y = 20 * this.scale;\n        ctx.beginPath();\n        ctx.arc(x + w / 2, y + w / 2, w / 2, 0, Math.PI * 2);\n        ctx.closePath();\n        ctx.clip();\n        ctx.drawImage(img, x, y, w, w);\n        ctx.restore();\n    };\n    profileDraw = () => {\n        const ctx = this.ctx;\n        ctx.fillStyle = this.options.themeOption?.txtColor ?? 'white';\n        ctx.font = `${20 * this.scale}px 'sans-serif'`;\n        ctx.globalAlpha = 0.7;\n        console.log(this.options.user?.name);\n        ctx.fillText(this.options.user?.name ?? 'error', 150 * this.scale, 45 * this.scale);\n        ctx.globalAlpha = 1;\n        ctx.font = `${50 * this.scale}px 'sans-serif'`;\n        ctx.fillText(this.options.customPriceString ?? this.generatePriceString(this.options.price ?? 0), 150 * this.scale, 95 * this.scale);\n    };\n}\nexports.SpachaImage = SpachaImage;\n\n\n//# sourceURL=webpack://spacha/./src/SpachaImage.ts?");

/***/ }),

/***/ "./src/define.ts":
/*!***********************!*\
  !*** ./src/define.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRandomInt = exports.themes = void 0;\nexports.themes = {\n    blue: {\n        color: '#134a9e',\n        baseColor: '#113f85',\n        txtColor: 'white',\n        price: 0\n    },\n    lightblue: {\n        color: '#00b8d4',\n        baseColor: '#00e5ff',\n        txtColor: 'black',\n        price: 200\n    },\n    green: {\n        color: '#00bfa5',\n        baseColor: '#1de9b6',\n        txtColor: 'black',\n        price: 500\n    },\n    yellow: {\n        color: '#ffb300',\n        baseColor: '#ffca28',\n        txtColor: 'black',\n        price: 1000\n    },\n    orange: {\n        color: '#e65100',\n        baseColor: '#f57c00',\n        txtColor: 'black',\n        price: 2000\n    },\n    pink: {\n        color: '#c2185b',\n        baseColor: '#e91e63',\n        txtColor: 'white',\n        price: 5000\n    },\n    red: {\n        color: '#d00000',\n        baseColor: '#e62117',\n        txtColor: 'white',\n        price: 10000\n    }\n};\nconst getRandomInt = (min, max) => {\n    min = Math.ceil(min);\n    max = Math.floor(max);\n    return Math.floor(Math.random() * (max - min) + min);\n};\nexports.getRandomInt = getRandomInt;\n\n\n//# sourceURL=webpack://spacha/./src/define.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.testfunc = exports.SpachaImage = exports.Spacha = void 0;\nconst Spacha_1 = __webpack_require__(/*! ./Spacha */ \"./src/Spacha.ts\");\nObject.defineProperty(exports, \"Spacha\", ({ enumerable: true, get: function () { return Spacha_1.Spacha; } }));\nconst SpachaImage_1 = __webpack_require__(/*! ./SpachaImage */ \"./src/SpachaImage.ts\");\nObject.defineProperty(exports, \"SpachaImage\", ({ enumerable: true, get: function () { return SpachaImage_1.SpachaImage; } }));\nconst testfunc = () => {\n    console.log(\"hi\");\n    return \"test\";\n};\nexports.testfunc = testfunc;\nconsole.log(\"script loaded\");\n\n\n//# sourceURL=webpack://spacha/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = window;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;