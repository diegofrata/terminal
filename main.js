(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _terminal_terminal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminal/terminal.module */ "./src/terminal/terminal.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_terminal_terminal_module__WEBPACK_IMPORTED_MODULE_3__["TerminalModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/terminal/core/caret.component.ts":
/*!**********************************************!*\
  !*** ./src/terminal/core/caret.component.ts ***!
  \**********************************************/
/*! exports provided: CaretComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaretComponent", function() { return CaretComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CaretComponent = /** @class */ (function () {
    function CaretComponent() {
    }
    CaretComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-caret',
            template: '<span class="caret">█</span>',
            styles: [
                "           \n      @keyframes blinker {\n        from {opacity: 1.0;}\n        to {opacity: 0.0;}\n      }\n      .caret{\n        animation-name: blinker;\n        animation-duration: 0.6s;\n        animation-iteration-count: infinite;\n        animation-timing-function: cubic-bezier(1, 0, 0, 1);\n        animation-direction: alternate;\n      }\n    "
            ]
        })
    ], CaretComponent);
    return CaretComponent;
}());



/***/ }),

/***/ "./src/terminal/core/color.ts":
/*!************************************!*\
  !*** ./src/terminal/core/color.ts ***!
  \************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Color;
(function (Color) {
    Color[Color["Text"] = 0] = "Text";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Yellow"] = 4] = "Yellow";
    Color[Color["Blue"] = 5] = "Blue";
    Color[Color["Magenta"] = 6] = "Magenta";
    Color[Color["Cyan"] = 7] = "Cyan";
    Color[Color["White"] = 8] = "White";
    Color[Color["BrightText"] = 9] = "BrightText";
    Color[Color["BrightBlack"] = 10] = "BrightBlack";
    Color[Color["BrightRed"] = 11] = "BrightRed";
    Color[Color["BrightGreen"] = 12] = "BrightGreen";
    Color[Color["BrightYellow"] = 13] = "BrightYellow";
    Color[Color["BrightBlue"] = 14] = "BrightBlue";
    Color[Color["BrightMagenta"] = 15] = "BrightMagenta";
    Color[Color["BrightCyan"] = 16] = "BrightCyan";
    Color[Color["BrightWhite"] = 17] = "BrightWhite";
})(Color || (Color = {}));


/***/ }),

/***/ "./src/terminal/core/file-system.service.ts":
/*!**************************************************!*\
  !*** ./src/terminal/core/file-system.service.ts ***!
  \**************************************************/
/*! exports provided: FileSystemEntry, File, Directory, FileSystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystemEntry", function() { return FileSystemEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSystemService", function() { return FileSystemService; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FileSystemEntry = /** @class */ (function () {
    function FileSystemEntry(name) {
        this.name = name;
    }
    return FileSystemEntry;
}());

var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(parent, name) {
        var _this = _super.call(this, name) || this;
        _this.parent = parent;
        return _this;
    }
    return File;
}(FileSystemEntry));

var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(parent, name) {
        var _this = _super.call(this, name) || this;
        _this.parent = parent;
        _this.children = [];
        return _this;
    }
    Directory.prototype.toPath = function () {
        var dir = this;
        var path = '';
        do {
            path = dir.parent ? (path ? dir.name + "/" + path : dir.name) : "/" + path;
            dir = dir.parent;
        } while (dir !== null);
        return path;
    };
    return Directory;
}(FileSystemEntry));

var FileSystemService = /** @class */ (function () {
    function FileSystemService() {
        this.root = new Directory(null, '');
        this.currentDirectory = this.root;
    }
    FileSystemService.prototype.createDirectory = function (name, parent) {
        if (name == null)
            throw 'invalid directory name';
        var currentDirectory = parent ? parent : this.currentDirectory;
        var dir = new Directory(currentDirectory, name);
        currentDirectory.children.push(dir);
        return dir;
    };
    FileSystemService.prototype.changeDirectory = function (path) {
        var paths = path.split('/');
        var dir = path[0] == '/' ? this.root : this.currentDirectory;
        var _loop_1 = function (item) {
            if (!item) {
                return "continue";
            }
            else if (item == '..') {
                dir = dir.parent ? dir.parent : dir;
                return "continue";
            }
            else if (item == '.') {
                return "continue";
            }
            else {
                var match = dir.children.find(function (x) { return x.name === item; });
                if (match == null)
                    throw 'path not found';
                if (match instanceof Directory === false)
                    throw path + " is not a directory";
                dir = match;
            }
        };
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var item = paths_1[_i];
            _loop_1(item);
        }
        this.currentDirectory = dir;
        return dir;
    };
    return FileSystemService;
}());



/***/ }),

/***/ "./src/terminal/core/frame-content.directive.ts":
/*!******************************************************!*\
  !*** ./src/terminal/core/frame-content.directive.ts ***!
  \******************************************************/
/*! exports provided: FrameContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameContentDirective", function() { return FrameContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameContentDirective = /** @class */ (function () {
    function FrameContentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FrameContentDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[terminal-frame-content]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], FrameContentDirective);
    return FrameContentDirective;
}());



/***/ }),

/***/ "./src/terminal/core/frame.component.ts":
/*!**********************************************!*\
  !*** ./src/terminal/core/frame.component.ts ***!
  \**********************************************/
/*! exports provided: FrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameComponent", function() { return FrameComponent; });
/* harmony import */ var _line_break_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-break.component */ "./src/terminal/core/line-break.component.ts");
/* harmony import */ var _text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.component */ "./src/terminal/core/text.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.component */ "./src/terminal/core/input.component.ts");
/* harmony import */ var _frame_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame-content.directive */ "./src/terminal/core/frame-content.directive.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






function forceScroll() {
    jquery__WEBPACK_IMPORTED_MODULE_5__('html, body').scrollTop(jquery__WEBPACK_IMPORTED_MODULE_5__(document).height() - jquery__WEBPACK_IMPORTED_MODULE_5__(window).height());
}
var FrameComponent = /** @class */ (function () {
    function FrameComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.index = 0;
        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.forceScrolling = false;
        this.children = [];
    }
    FrameComponent_1 = FrameComponent;
    FrameComponent.prototype.ngAfterViewInit = function () {
        this.initialized.emit();
        this.initialized.complete();
    };
    FrameComponent.prototype.enableForceScrolling = function () {
        this.forceScrolling = true;
    };
    FrameComponent.prototype.append = function (type, callback) {
        var compRef = this.createComponent(type, this.index++);
        if (callback)
            callback(compRef);
        if (this.forceScrolling)
            forceScroll();
    };
    FrameComponent.prototype.write = function (text, color) {
        this.append(_text_component__WEBPACK_IMPORTED_MODULE_1__["TextComponent"], function (ref) {
            ref.instance.text = text;
            ref.instance.color = color;
        });
    };
    FrameComponent.prototype.writeLine = function (text, color) {
        this.write(text ? text : '', color);
        this.append(_line_break_component__WEBPACK_IMPORTED_MODULE_0__["LineBreakComponent"]);
    };
    FrameComponent.prototype.readLine = function (secret) {
        var promise;
        this.append(_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], function (ref) {
            if (secret)
                ref.instance.secret = true;
            promise = ref.instance.line.asObservable().toPromise();
        });
        return promise;
    };
    FrameComponent.prototype.readKey = function () {
        var promise;
        this.append(_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], function (ref) {
            ref.instance.mode = 'key';
            promise = ref.instance.line.asObservable().toPromise();
        });
        return promise;
    };
    FrameComponent.prototype.clear = function () {
        this.content.viewContainerRef.clear();
        this.children = [];
        this.index = 0;
    };
    FrameComponent.prototype.createFrame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var instance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized.asObservable().toPromise()];
                    case 1:
                        _a.sent();
                        this.append(FrameComponent_1, function (c) {
                            c.instance.parent = _this;
                            instance = c.instance;
                        });
                        this.children.push(instance);
                        return [2 /*return*/, instance];
                }
            });
        });
    };
    FrameComponent.prototype.createComponent = function (type, index) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
        return this.content.viewContainerRef.createComponent(componentFactory, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_frame_content_directive__WEBPACK_IMPORTED_MODULE_4__["FrameContentDirective"]),
        __metadata("design:type", _frame_content_directive__WEBPACK_IMPORTED_MODULE_4__["FrameContentDirective"])
    ], FrameComponent.prototype, "content", void 0);
    FrameComponent = FrameComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'terminal-frame',
            template: '<ng-template terminal-frame-content></ng-template>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]])
    ], FrameComponent);
    return FrameComponent;
    var FrameComponent_1;
}());



/***/ }),

/***/ "./src/terminal/core/glitch.component.ts":
/*!***********************************************!*\
  !*** ./src/terminal/core/glitch.component.ts ***!
  \***********************************************/
/*! exports provided: GlitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlitchComponent", function() { return GlitchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlitchComponent = /** @class */ (function () {
    function GlitchComponent() {
        this.text = '';
    }
    GlitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-banner',
            template: '<div class="glitch" [attr.data-text]="text">{{text}}</div> ',
            styles: [
                "\n     \n    .glitch {\n      font-size: 3.5rem;\n      position: relative;\n    }\n\n    @keyframes noise-anim {\n      0% {\n        clip: rect(65px, 9999px, 87px, 0);\n      }\n      5% {\n        clip: rect(56px, 9999px, 86px, 0);\n      }\n      10% {\n        clip: rect(82px, 9999px, 89px, 0);\n      }\n      15% {\n        clip: rect(62px, 9999px, 45px, 0);\n      }\n      20% {\n        clip: rect(53px, 9999px, 23px, 0);\n      }\n      25% {\n        clip: rect(26px, 9999px, 79px, 0);\n      }\n      30% {\n        clip: rect(69px, 9999px, 53px, 0);\n      }\n      35% {\n        clip: rect(23px, 9999px, 34px, 0);\n      }\n      40% {\n        clip: rect(95px, 9999px, 41px, 0);\n      }\n      45% {\n        clip: rect(62px, 9999px, 90px, 0);\n      }\n      50% {\n        clip: rect(33px, 9999px, 53px, 0);\n      }\n      55% {\n        clip: rect(45px, 9999px, 32px, 0);\n      }\n      60% {\n        clip: rect(78px, 9999px, 20px, 0);\n      }\n      65% {\n        clip: rect(22px, 9999px, 26px, 0);\n      }\n      70% {\n        clip: rect(64px, 9999px, 40px, 0);\n      }\n      75% {\n        clip: rect(36px, 9999px, 92px, 0);\n      }\n      80% {\n        clip: rect(87px, 9999px, 22px, 0);\n      }\n      85% {\n        clip: rect(8px, 9999px, 47px, 0);\n      }\n      90% {\n        clip: rect(29px, 9999px, 90px, 0);\n      }\n      95% {\n        clip: rect(20px, 9999px, 68px, 0);\n      }\n      100% {\n        clip: rect(92px, 9999px, 73px, 0);\n      }\n    }\n    .glitch:after {\n      content: attr(data-text);\n      position: absolute;\n      left: 2px;\n      text-shadow: -1px 0 red;\n      top: 0;\n      color: white;\n      background: black;\n      overflow: hidden;\n      clip: rect(0, 900px, 0, 0);\n      animation: noise-anim 2s infinite linear alternate-reverse;\n    }\n\n    @keyframes noise-anim-2 {\n      0% {\n        clip: rect(16px, 9999px, 91px, 0);\n      }\n      5% {\n        clip: rect(48px, 9999px, 33px, 0);\n      }\n      10% {\n        clip: rect(59px, 9999px, 41px, 0);\n      }\n      15% {\n        clip: rect(19px, 9999px, 21px, 0);\n      }\n      20% {\n        clip: rect(91px, 9999px, 44px, 0);\n      }\n      25% {\n        clip: rect(49px, 9999px, 48px, 0);\n      }\n      30% {\n        clip: rect(11px, 9999px, 68px, 0);\n      }\n      35% {\n        clip: rect(86px, 9999px, 97px, 0);\n      }\n      40% {\n        clip: rect(18px, 9999px, 6px, 0);\n      }\n      45% {\n        clip: rect(98px, 9999px, 85px, 0);\n      }\n      50% {\n        clip: rect(12px, 9999px, 36px, 0);\n      }\n      55% {\n        clip: rect(5px, 9999px, 14px, 0);\n      }\n      60% {\n        clip: rect(75px, 9999px, 23px, 0);\n      }\n      65% {\n        clip: rect(52px, 9999px, 81px, 0);\n      }\n      70% {\n        clip: rect(79px, 9999px, 93px, 0);\n      }\n      75% {\n        clip: rect(49px, 9999px, 29px, 0);\n      }\n      80% {\n        clip: rect(71px, 9999px, 8px, 0);\n      }\n      85% {\n        clip: rect(40px, 9999px, 25px, 0);\n      }\n      90% {\n        clip: rect(82px, 9999px, 77px, 0);\n      }\n      95% {\n        clip: rect(37px, 9999px, 100px, 0);\n      }\n      100% {\n        clip: rect(65px, 9999px, 29px, 0);\n      }\n    }\n    .glitch:before {\n      content: attr(data-text);\n      position: absolute;\n      left: -2px;\n      text-shadow: 1px 0 blue;\n      top: 0;\n      color: white;\n      background: black;\n      overflow: hidden;\n      clip: rect(0, 900px, 0, 0);\n      animation: noise-anim-2 3s infinite linear alternate-reverse;\n    }\n \n    "
            ]
        })
    ], GlitchComponent);
    return GlitchComponent;
}());



/***/ }),

/***/ "./src/terminal/core/img.component.ts":
/*!********************************************!*\
  !*** ./src/terminal/core/img.component.ts ***!
  \********************************************/
/*! exports provided: ImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgComponent", function() { return ImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgComponent = /** @class */ (function () {
    function ImgComponent() {
        this.src = '';
        this.style = {};
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ImgComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.img.nativeElement.onload = function () {
            _this.loaded.emit();
            _this.loaded.complete();
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('img'),
        __metadata("design:type", Object)
    ], ImgComponent.prototype, "img", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgComponent.prototype, "src", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgComponent.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ImgComponent.prototype, "loaded", void 0);
    ImgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-img',
            template: '<img #img [attr.src]="src" [ngStyle]="style">',
        })
    ], ImgComponent);
    return ImgComponent;
}());



/***/ }),

/***/ "./src/terminal/core/input.component.ts":
/*!**********************************************!*\
  !*** ./src/terminal/core/input.component.ts ***!
  \**********************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = /** @class */ (function () {
    function InputComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.editable = true;
        this.secret = false;
        this.text = '';
        this.mode = 'text';
        this.line = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.focus();
        this.handlers = [
            this.renderer.listen(document, 'touchend', function (e) { _this.focus(e); }),
            this.renderer.listen(document, 'click', function (e) { return _this.focus(e); }),
            this.renderer.listen(this.focusTarget.nativeElement, 'keydown', function (e) { return _this.checkInput(e); })
        ];
    };
    Object.defineProperty(InputComponent.prototype, "printableText", {
        get: function () {
            if (!this.secret)
                return this.text;
            return ''.padStart(this.text.length, '•');
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.focus = function (e) {
        if (this.focusTarget.nativeElement) {
            this.focusTarget.nativeElement.focus();
        }
    };
    InputComponent.prototype.checkInput = function (e) {
        if (this.mode === 'key') {
            this.complete(e, e.key);
        }
        else if (e.key === 'Enter') {
            this.complete(e, this.text);
        }
    };
    InputComponent.prototype.complete = function (e, text) {
        e.preventDefault();
        this.editable = false;
        for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
            var destroyable = _a[_i];
            destroyable();
        }
        this.handlers = null;
        this.renderer.removeChild(this.elRef.nativeElement, this.focusTarget.nativeElement);
        this.focusTarget = null;
        this.line.emit(text);
        this.line.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('focusTarget'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "focusTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputComponent.prototype, "line", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-input',
            template: "\n    <input #focusTarget class=\"input\" [(ngModel)]=\"text\" autocorrect=\"off\" autocapitalize=\"none\">\n    <span [ngClass]=\"{'input--secret': secret}\">{{printableText}}</span>\n    ",
            styles: [
                " .input {\n        position: absolute;\n        left: -9999px;       \n      }\n      .input--secret {\n        font-size: 2em;\n        line-height: 0;\n        vertical-align: middle;\n        letter-spacing: -0.15em;\n      }\n    "
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/terminal/core/line-break.component.ts":
/*!***************************************************!*\
  !*** ./src/terminal/core/line-break.component.ts ***!
  \***************************************************/
/*! exports provided: LineBreakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineBreakComponent", function() { return LineBreakComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LineBreakComponent = /** @class */ (function () {
    function LineBreakComponent() {
    }
    LineBreakComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-br',
            template: '<br>'
        })
    ], LineBreakComponent);
    return LineBreakComponent;
}());



/***/ }),

/***/ "./src/terminal/core/login.service.ts":
/*!********************************************!*\
  !*** ./src/terminal/core/login.service.ts ***!
  \********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginService = /** @class */ (function () {
    function LoginService() {
        this.users = [
            { username: 'guest', password: '', admin: false },
            { username: 'root', password: '123', admin: true }
        ];
        this.currentUser = new _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    LoginService.prototype.login = function (username, password) {
        var account = this.users.find(function (x) { return x.username === username; });
        if (!account || account.password !== password)
            throw 'invalid credentials. perhaps you should try login \'root\' and password \'123\'...';
        this.currentUser.next(account);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/terminal/core/session.component.ts":
/*!************************************************!*\
  !*** ./src/terminal/core/session.component.ts ***!
  \************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _programs_login_program__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../programs/login.program */ "./src/terminal/programs/login.program.ts");
/* harmony import */ var _programs_shell_program__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../programs/shell.program */ "./src/terminal/programs/shell.program.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SessionComponent = /** @class */ (function () {
    function SessionComponent(injector, router) {
        var _this = this;
        this.injector = injector;
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (x) { return x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (x) { return __awaiter(_this, void 0, void 0, function () {
            var login, shell, _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.params = x.snapshot.paramMap;
                        login = this.injector.get(_programs_login_program__WEBPACK_IMPORTED_MODULE_2__["LoginProgram"]);
                        shell = this.injector.get(_programs_shell_program__WEBPACK_IMPORTED_MODULE_3__["ShellProgram"]);
                        if (!this.params.keys.length) return [3 /*break*/, 5];
                        _b = (_a = login).run;
                        return [4 /*yield*/, this.terminal.createFrame()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_j.sent(), [this.params.get('user'), this.params.get('pwd')]])];
                    case 2:
                        _j.sent();
                        _d = (_c = shell).run;
                        return [4 /*yield*/, this.terminal.createFrame()];
                    case 3: return [4 /*yield*/, _d.apply(_c, [_j.sent(), [this.params.get('program')]])];
                    case 4:
                        _j.sent();
                        return [3 /*break*/, 10];
                    case 5:
                        _f = (_e = login).run;
                        return [4 /*yield*/, this.terminal.createFrame()];
                    case 6: 
                    // await boot.run(await this.terminal.createFrame(), []);
                    return [4 /*yield*/, _f.apply(_e, [_j.sent(), []])];
                    case 7:
                        // await boot.run(await this.terminal.createFrame(), []);
                        _j.sent();
                        _h = (_g = shell).run;
                        return [4 /*yield*/, this.terminal.createFrame()];
                    case 8: return [4 /*yield*/, _h.apply(_g, [_j.sent(), []])];
                    case 9:
                        _j.sent();
                        _j.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        }); });
    }
    SessionComponent.prototype.onActivate = function (e) {
        this.terminal = e;
    };
    SessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-session',
            template: '<router-outlet (activate)="onActivate($event)"></router-outlet>',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/terminal/core/terminal.component.ts":
/*!*************************************************!*\
  !*** ./src/terminal/core/terminal.component.ts ***!
  \*************************************************/
/*! exports provided: TerminalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalComponent", function() { return TerminalComponent; });
/* harmony import */ var _caret_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caret.component */ "./src/terminal/core/caret.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame.component */ "./src/terminal/core/frame.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminalComponent = /** @class */ (function (_super) {
    __extends(TerminalComponent, _super);
    function TerminalComponent(componentFactoryResolver) {
        return _super.call(this, componentFactoryResolver) || this;
    }
    TerminalComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.createComponent(_caret_component__WEBPACK_IMPORTED_MODULE_0__["CaretComponent"]);
    };
    TerminalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'terminal-terminal',
            template: '<ng-template terminal-frame-content></ng-template>'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], TerminalComponent);
    return TerminalComponent;
}(_frame_component__WEBPACK_IMPORTED_MODULE_2__["FrameComponent"]));



/***/ }),

/***/ "./src/terminal/core/text.component.ts":
/*!*********************************************!*\
  !*** ./src/terminal/core/text.component.ts ***!
  \*********************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/terminal/core/color.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TextComponent = /** @class */ (function () {
    function TextComponent() {
        this.text = "";
    }
    TextComponent.prototype.getColor = function (color) {
        var style = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(_color__WEBPACK_IMPORTED_MODULE_1__["Color"][color ? color : _color__WEBPACK_IMPORTED_MODULE_1__["Color"].Text]);
        return "color-" + style;
    };
    TextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'terminal-text',
            template: '<span [class]="getColor(color)">{{text}}</span>',
            styles: [
                "\n    span { white-space: pre-wrap; }\n    "
            ]
        })
    ], TextComponent);
    return TextComponent;
}());



/***/ }),

/***/ "./src/terminal/core/util.ts":
/*!***********************************!*\
  !*** ./src/terminal/core/util.ts ***!
  \***********************************/
/*! exports provided: sleeper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleeper", function() { return sleeper; });
function sleeper(ms) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(0); }, ms); });
}


/***/ }),

/***/ "./src/terminal/programs/clear.program.ts":
/*!************************************************!*\
  !*** ./src/terminal/programs/clear.program.ts ***!
  \************************************************/
/*! exports provided: ClearProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearProgram", function() { return ClearProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ClearProgram = /** @class */ (function (_super) {
    __extends(ClearProgram, _super);
    function ClearProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearProgram.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var frame;
            return __generator(this, function (_a) {
                frame = this.frame;
                while (frame.parent)
                    frame = frame.parent;
                frame.children.forEach(function (x) { return x.clear(); });
                return [2 /*return*/];
            });
        });
    };
    ClearProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'clear',
            description: 'Clears all output from the screen.'
        })
    ], ClearProgram);
    return ClearProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/help.program.ts":
/*!***********************************************!*\
  !*** ./src/terminal/programs/help.program.ts ***!
  \***********************************************/
/*! exports provided: HelpProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpProgram", function() { return HelpProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/color */ "./src/terminal/core/color.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HelpProgram = /** @class */ (function (_super) {
    __extends(HelpProgram, _super);
    function HelpProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelpProgram.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var keys, maxLength;
            return __generator(this, function (_a) {
                this.frame.writeLine('These are the supported commands: ');
                this.frame.writeLine();
                keys = Object.keys(_program__WEBPACK_IMPORTED_MODULE_1__["PROGRAMS"]).sort();
                maxLength = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["max"])(keys.map(function (x) { return x.length; }));
                keys.filter(function (x) { return _program__WEBPACK_IMPORTED_MODULE_1__["PROGRAMS"][x].hide != true; }).forEach(function (element) {
                    _this.frame.write("" + element, _core_color__WEBPACK_IMPORTED_MODULE_3__["Color"].BrightGreen);
                    _this.frame.writeLine(": " + _program__WEBPACK_IMPORTED_MODULE_1__["PROGRAMS"][element].description);
                });
                this.frame.writeLine();
                return [2 /*return*/];
            });
        });
    };
    HelpProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'help',
            description: 'Displays a list of all supported commands.',
            hide: true
        })
    ], HelpProgram);
    return HelpProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/hi.program.ts":
/*!*********************************************!*\
  !*** ./src/terminal/programs/hi.program.ts ***!
  \*********************************************/
/*! exports provided: HiProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiProgram", function() { return HiProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HiProgram = /** @class */ (function (_super) {
    __extends(HiProgram, _super);
    function HiProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HiProgram.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.frame.writeLine('Hi you!');
                return [2 /*return*/];
            });
        });
    };
    HiProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'hi',
            description: 'Says hi to the user.'
        })
    ], HiProgram);
    return HiProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/login.program.ts":
/*!************************************************!*\
  !*** ./src/terminal/programs/login.program.ts ***!
  \************************************************/
/*! exports provided: LoginProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginProgram", function() { return LoginProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
/* harmony import */ var _core_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/login.service */ "./src/terminal/core/login.service.ts");
/* harmony import */ var _core_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/color */ "./src/terminal/core/color.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginProgram = /** @class */ (function (_super) {
    __extends(LoginProgram, _super);
    function LoginProgram(loginService) {
        var _this = _super.call(this) || this;
        _this.loginService = loginService;
        return _this;
    }
    LoginProgram.prototype.main = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (args == null || args.length < 2) {
                            this.frame.writeLine("Welcome to frata.io. This is a terminal emulator built for no reason.");
                            this.frame.writeLine();
                            this.frame.writeLine('Before we start, please identify yourself.');
                        }
                        return [4 /*yield*/, this.loop(args)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginProgram.prototype.loop = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var username, password, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(args && args.length >= 2)) return [3 /*break*/, 1];
                        username = args[0];
                        password = args[1];
                        return [3 /*break*/, 4];
                    case 1:
                        this.frame.write('login: ');
                        return [4 /*yield*/, this.frame.readLine()];
                    case 2:
                        username = _a.sent();
                        this.frame.writeLine();
                        this.frame.write('password: ');
                        return [4 /*yield*/, this.frame.readLine(true)];
                    case 3:
                        password = _a.sent(); // TODO: mask
                        this.frame.writeLine();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 5, , 7]);
                        this.loginService.login(username, password);
                        this.frame.clear();
                        this.frame.writeLine('Welcome back. Type \'help\' to see a list of supported commands.');
                        return [3 /*break*/, 7];
                    case 5:
                        e_1 = _a.sent();
                        this.frame.writeLine(e_1, _core_color__WEBPACK_IMPORTED_MODULE_3__["Color"].Red);
                        return [4 /*yield*/, this.loop(args)];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'login',
            description: 'Allow a user to login with a username and password.',
            hide: true
        }),
        __metadata("design:paramtypes", [_core_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginProgram);
    return LoginProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/program.ts":
/*!******************************************!*\
  !*** ./src/terminal/programs/program.ts ***!
  \******************************************/
/*! exports provided: PROGRAMS, Program, makeProgramProvider, ProgramBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROGRAMS", function() { return PROGRAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProgramProvider", function() { return makeProgramProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramBase", function() { return ProgramBase; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PROGRAMS = {};
function Program(definition) {
    return function (target) {
        PROGRAMS[definition.alias] = { target: target.name, description: definition.description, hide: definition.hide };
    };
}
function makeProgramProvider(type) {
    return [type, { provide: type.name, useExisting: type }];
}
var ProgramBase = /** @class */ (function () {
    function ProgramBase() {
    }
    ProgramBase.prototype.run = function (frame, args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.frame = frame;
                        return [4 /*yield*/, this.main(args)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProgramBase;
}());



/***/ }),

/***/ "./src/terminal/programs/restart.program.ts":
/*!**************************************************!*\
  !*** ./src/terminal/programs/restart.program.ts ***!
  \**************************************************/
/*! exports provided: BootProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootProgram", function() { return BootProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
/* harmony import */ var _core_glitch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/glitch.component */ "./src/terminal/core/glitch.component.ts");
/* harmony import */ var _core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/util */ "./src/terminal/core/util.ts");
/* harmony import */ var _clear_program__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear.program */ "./src/terminal/programs/clear.program.ts");
/* harmony import */ var _login_program__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.program */ "./src/terminal/programs/login.program.ts");
/* harmony import */ var _core_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/login.service */ "./src/terminal/core/login.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var BootProgram = /** @class */ (function (_super) {
    __extends(BootProgram, _super);
    function BootProgram(loginService) {
        var _this = _super.call(this) || this;
        _this.loginService = loginService;
        _this.log = [
            "Uncompressing Linux... done, booting the kernel.",
            "Booting Linux on physical CPU 0x0",
            "Initializing cgroup subsys cpu",
            "Initializing cgroup subsys cpuacct",
            "Linux version 3.18.10+ (dc4@dc4-XPS13-9333) (gcc version 4.8.3 20140303 (prerelease) (crosstool-NG linaro-1.13.1+bzr2650 - Linaro GCC 2014.03)) #775 PREEMPT Thu Apr 2 18:10:12 BST 2015",
            "CPU: ARMv6-compatible processor [410fb767] revision 7 (ARMv7), cr=00c5387d",
            "CPU: PIPT / VIPT nonaliasing data cache, VIPT nonaliasing instruction cache",
            "Machine model: Raspberry Pi Model B",
            "cma: Reserved 8 MiB at 0x0b800000",
            "Memory policy: Data cache writeback",
            "Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 48768",
            "Kernel command line: dma.dmachans=0x7f35 bcm2708_fb.fbwidth=656 bcm2708_fb.fbheight=416 bcm2708.boardrev=0x2 bcm2708.serial=0xb51cb961 smsc95x.macaddr=B8:27:EB:1C:B9:61 bcm2708_fb.fbswap=1 sdhci-bcm2708.emmc_clock_freq=250000000 vc_mem.mem_base=0xec00000 vc_mem.mem_size=0x10000000  dwc_otg.lpm_enabe=0 console=ttyAMA0,115200 console=tty1 root=/dev/mmcblk0p2 rootfstype=ext4 elevator=deadline rootwait",
            "PID hash table entries: 1024 (order: 0, 4096 bytes)",
            "Dentry cache hash table entries: 32768 (order: 5, 131072 bytes)",
            "Inode-cache hash table entries: 16384 (order: 4, 65536 bytes)",
            "Memory: 177372K/196608K available (5885K kernel code, 348K rwdata, 1868K rodata, 340K init, 733K bss, 19236K reserved)",
            "Virtual kernel memory layout:",
            "    vector  : 0xffff0000 - 0xffff1000   (   4 kB)",
            "    fixmap  : 0xffc00000 - 0xffe00000   (2048 kB)",
            "    vmalloc : 0xcc800000 - 0xff000000   ( 808 MB)",
            "    lowmem  : 0xc0000000 - 0xcc000000   ( 192 MB)",
            "    modules : 0xbf000000 - 0xc0000000   (  16 MB)",
            "        .text : 0xc0008000 - 0xc079a78c   (7754 kB)",
            "        .init : 0xc079b000 - 0xc07f0000   ( 340 kB)",
            "        .data : 0xc07f0000 - 0xc084711c   ( 349 kB)",
            "        .bss : 0xc084711c - 0xc08fe848   ( 734 kB)",
            "SLUB: HWalign=32, Order=0-3, MinObjects=0, CPUs=1, Nodes=1",
            "Preemptible hierarchical RCU implementation.",
            "NR_IRQS:522",
            "sched_clock: 32 bits at 1000kHz, resolution 1000ns, wraps every 2147483648000ns",
            "Switching to timer-based delay loop, resolution 1000ns",
            "Console: colour dummy device 80x30",
            "console [tty1] enabled",
            "Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=10000)",
            "pid_max: default: 32768 minimum: 301",
            "Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)",
            "Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)",
            "Initializing cgroup subsys memory",
            "Initializing cgroup subsys devices",
            "Initializing cgroup subsys freezer",
            "Initializing cgroup subsys net_cls",
            "Initializing cgroup subsys blkio",
            "CPU: Testing write buffer coherency: ok",
            "ftrace: allocating 19229 entries in 57 pages",
            "Setting up static identity map for 0x553698 - 0x5536d0",
            "devtmpfs: initialized",
            "VFP support v0.3: implementor 41 architecture 1 part 20 variant b rev 5",
            "pinctrl core: initialized pinctrl subsystem",
            "NET: Registered protocol family 16",
            "DMA: preallocated 4096 KiB pool for atomic coherent allocations",
            "bcm2708.uart_clock = 3000000",
            "No ATAGs?",
            "hw-breakpoint: found 6 breakpoint and 1 watchpoint registers.",
            "hw-breakpoint: maximum watchpoint size is 4 bytes.",
            "mailbox: Broadcom VideoCore Mailbox driver",
            "bcm2708_vcio: mailbox at f200b880",
            "bcm_power: Broadcom power driver",
            "bcm_power_open() -> 0",
            "bcm_power_request(0, 8)",
            "bcm_mailbox_read -> 00000080, 0",
            "bcm_power_request -> 0",
            "Serial: AMBA PL011 UART driver",
            "dev:f1: ttyAMA0 at MMIO 0x20201000 (irq = 83, base_baud = 0) is a PL011 rev3",
            "console [ttyAMA0] enabled",
            "SCSI subsystem initialized",
            "usbcore: registered new interface driver usbfs",
            "usbcore: registered new interface driver hub",
            "usbcore: registered new device driver usb",
            "Switched to clocksource stc",
            "FS-Cache: Loaded",
            "CacheFiles: Loaded",
            "NET: Registered protocol family 2",
            "TCP established hash table entries: 2048 (order: 1, 8192 bytes)",
            "TCP bind hash table entries: 2048 (order: 1, 8192 bytes)",
            "TCP: Hash tables configured (established 2048 bind 2048)",
            "TCP: reno registered",
            "UDP hash table entries: 256 (order: 0, 4096 bytes)",
            "UDP-Lite hash table entries: 256 (order: 0, 4096 bytes)",
            "NET: Registered protocol family 1",
            "RPC: Registered named UNIX socket transport module.",
            "RPC: Registered udp transport module.",
            "RPC: Registered tcp transport module.",
            "RPC: Registered tcp NFSv4.1 backchannel transport module.",
            "bcm2708_dma: DMA manager at f2007000",
            "vc-mem: phys_addr:0x00000000 mem_base=0x0ec00000 mem_size:0x10000000(256 MiB)",
            "futex hash table entries: 256 (order: -1, 3072 bytes)",
            "audit: initializing netlink subsys (disabled)",
            "audit: type=2000 audit(1.030:1): initialized",
            "VFS: Disk quotas dquot_6.5.2",
            "Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)",
            "FS-Cache: Netfs 'nfs' registered for caching",
            "NFS: Registering the id_resolver key type",
            "Key type id_resolver registered",
            "Key type id_legacy registered",
            "msgmni has been set to 362",
            "Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)",
            "io scheduler noop registered",
            "io scheduler deadline registered (default)",
            "io scheduler cfq registered",
            "BCM2708FB: allocated DMA memory 4bc00000",
            "BCM2708FB: allocated DMA channel 0 @ f2007000",
            "Console: switching to colour frame buffer device 82x26",
            "bcm2708-dmaengine bcm2708-dmaengine: Load BCM2835 DMA engine driver",
            "uart-pl011 dev:f1: no DMA platform data",
            "vc-cma: Videocore CMA driver",
            "vc-cma: vc_cma_base      = 0x00000000",
            "vc-cma: vc_cma_size      = 0x00000000 (0 MiB)",
            "vc-cma: vc_cma_initial   = 0x00000000 (0 MiB)",
            "brd: module loaded",
            "loop: module loaded",
            "vchiq: vchiq_init_state: slot_zero = 0xcb800000, is_master = 0",
            "Loading iSCSI transport class v2.0-870.",
            "usbcore: registered new interface driver smsc95xx",
            "dwc_otg: version 3.00a 10-AUG-2012 (platform bus)",
            "Core Release: 2.80a",
            "Setting default values for core params",
            "Finished setting default values for core params",
            "Using Buffer DMA mode",
            "Periodic Transfer Interrupt Enhancement - disabled",
            "Multiprocessor Interrupt Enhancement - disabled",
            "OTG VER PARAM: 0, OTG VER FLAG: 0",
            "Dedicated Tx FIFOs mode",
            "WARN::dwc_otg_hcd_init:1047: FIQ DMA bounce buffers: virt = 0xcbc14000 dma = 0x4bc14000 len=9024",
            "FIQ FSM acceleration enabled for :",
            "Non-periodic Split Transactions",
            "Periodic Split Transactions",
            "High-Speed Isochronous Endpoints",
            "WARN::hcd_init_fiq:412: FIQ on core 0 at 0xc03fad8c",
            "WARN::hcd_init_fiq:413: FIQ ASM at 0xc03fb064 length 36",
            "WARN::hcd_init_fiq:438: MPHI regs_base at 0xcc806000",
            "dwc_otg bcm2708_usb: DWC OTG Controller",
            "dwc_otg bcm2708_usb: new USB bus registered, assigned bus number 1",
            "dwc_otg bcm2708_usb: irq 32, io mem 0x00000000",
            "Init: Port Power? op_state=1",
            "Init: Power Port (0)",
            "usb usb1: New USB device found, idVendor=1d6b, idProduct=0002",
            "usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1",
            "usb usb1: Product: DWC OTG Controller",
            "usb usb1: Manufacturer: Linux 3.18.10+ dwc_otg_hcd",
            "usb usb1: SerialNumber: bcm2708_usb",
            "hub 1-0:1.0: USB hub found",
            "hub 1-0:1.0: 1 port detected",
            "usbcore: registered new interface driver usb-storage",
            "mousedev: PS/2 mouse device common for all mice",
            "bcm2835-cpufreq: min=700000 max=700000",
            "sdhci: Secure Digital Host Controller Interface driver",
            "sdhci: Copyright(c) Pierre Ossman",
            "DMA channels allocated for the MMC driver",
            "Load BCM2835 MMC driver",
            "sdhci-pltfm: SDHCI platform and OF driver helper",
            "ledtrig-cpu: registered to indicate activity on CPUs",
            "hidraw: raw HID events driver (C) Jiri Kosina",
            "usbcore: registered new interface driver usbhid",
            "usbhid: USB HID core driver",
            "TCP: cubic registered",
            "Initializing XFRM netlink socket",
            "NET: Registered protocol family 17",
            "Key type dns_resolver registered",
            "registered taskstats version 1",
            "vc-sm: Videocore shared memory driver",
            "[vc_sm_connected_init]: start",
            "[vc_sm_connected_init]: end - returning 0",
            "Waiting for root device /dev/mmcblk0p2...",
            "Indeed it is in host mode hprt0 = 00021501",
            "mmc0: host does not support reading read-only switch, assuming write-enable",
            "mmc0: new high speed SDHC card at address b368",
            "mmcblk0: mmc0:b368 SMI   15.0 GiB",
            "    mmcblk0: p1 p2",
            "EXT4-fs (mmcblk0p2): INFO: recovery required on readonly filesystem",
            "EXT4-fs (mmcblk0p2): write access will be enabled during recovery",
            "EXT4-fs (mmcblk0p2): recovery complete",
            "EXT4-fs (mmcblk0p2): mounted filesystem with ordered data mode. Opts: (null)",
            "usb 1-1: new high-speed USB device number 2 using dwc_otg",
            "VFS: Mounted root (ext4 filesystem) readonly on device 179:2.",
            "Indeed it is in host mode hprt0 = 00001101",
            "devtmpfs: mounted",
            "Freeing unused kernel memory: 340K (c079b000 - c07f0000)",
            "usb 1-1: New USB device found, idVendor=0424, idProduct=9512",
            "usb 1-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0",
            "hub 1-1:1.0: USB hub found",
            "hub 1-1:1.0: 3 ports detected",
            "usb 1-1.1: new high-speed USB device number 3 using dwc_otg",
            "usb 1-1.1: New USB device found, idVendor=0424, idProduct=ec00",
            "usb 1-1.1: New USB device strings: Mfr=0, Product=0, SerialNumber=0",
            "smsc95xx v1.0.4",
            "smsc95xx 1-1.1:1.0 eth0: register 'smsc95xx' at usb-bcm2708_usb-1.1, smsc95xx USB 2.0 Ethernet, b8:27:eb:1c:b9:61",
            "udevd[159]: starting version 175",
            "EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)",
            "EXT4-fs (mmcblk0p2): re-mounted. Opts: (null)",
            "random: nonblocking pool is initialized",
            "Driver for 1-wire Dallas network protocol.",
            "i2c /dev entries driver",
        ];
        return _this;
    }
    BootProgram.prototype.run = function (frame, args) {
        return __awaiter(this, void 0, void 0, function () {
            var grandParent, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        grandParent = frame.parent.parent;
                        grandParent.children.forEach(function (x) { return x.clear(); });
                        _a = this;
                        return [4 /*yield*/, grandParent.children[grandParent.children.length - 1]];
                    case 1:
                        _a.frame = _b.sent();
                        return [4 /*yield*/, this.main(args)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BootProgram.prototype.main = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.frame.enableForceScrolling();
                        return [4 /*yield*/, this.simulateBoot()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BootProgram.prototype.simulateBoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, line, ms, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.frame.append(_core_glitch_component__WEBPACK_IMPORTED_MODULE_2__["GlitchComponent"], function (c) { return c.instance.text = 'frataOS'; });
                        return [4 /*yield*/, Object(_core_util__WEBPACK_IMPORTED_MODULE_3__["sleeper"])(1000)];
                    case 1:
                        _d.sent();
                        this.frame.clear();
                        _i = 0, _a = this.log;
                        _d.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        line = _a[_i];
                        this.frame.write(line);
                        ms = Math.pow(Math.random(), 2) * 500;
                        return [4 /*yield*/, Object(_core_util__WEBPACK_IMPORTED_MODULE_3__["sleeper"])(ms)];
                    case 3:
                        _d.sent();
                        this.frame.writeLine();
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [4 /*yield*/, (new _clear_program__WEBPACK_IMPORTED_MODULE_4__["ClearProgram"]().run(this.frame, []))];
                    case 6:
                        _d.sent();
                        this.frame.clear();
                        _c = (_b = new _login_program__WEBPACK_IMPORTED_MODULE_5__["LoginProgram"](this.loginService)).run;
                        return [4 /*yield*/, this.frame.createFrame()];
                    case 7: return [4 /*yield*/, (_c.apply(_b, [_d.sent(), []]))];
                    case 8:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BootProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'restart',
            description: 'Restarts the system.'
        }),
        __metadata("design:paramtypes", [_core_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], BootProgram);
    return BootProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/shell.program.ts":
/*!************************************************!*\
  !*** ./src/terminal/programs/shell.program.ts ***!
  \************************************************/
/*! exports provided: ShellProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellProgram", function() { return ShellProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program */ "./src/terminal/programs/program.ts");
/* harmony import */ var _core_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/login.service */ "./src/terminal/core/login.service.ts");
/* harmony import */ var _core_file_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/file-system.service */ "./src/terminal/core/file-system.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ShellProgram = /** @class */ (function (_super) {
    __extends(ShellProgram, _super);
    function ShellProgram(loginService, fs, injector) {
        var _this = _super.call(this) || this;
        _this.loginService = loginService;
        _this.fs = fs;
        _this.injector = injector;
        _this.host = 'terminal';
        return _this;
    }
    ShellProgram.prototype.main = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        subscription = this.loginService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
                        if (!(args && args.length)) return [3 /*break*/, 2];
                        this.printDir();
                        this.frame.write(args[0]);
                        this.frame.writeLine();
                        return [4 /*yield*/, this.tryRun(args[0])];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, this.prompt()];
                    case 3:
                        if (!_a.sent()) return [3 /*break*/, 4];
                        ;
                        return [3 /*break*/, 2];
                    case 4:
                        subscription.unsubscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShellProgram.prototype.prompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var line;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.printDir();
                        return [4 /*yield*/, this.frame.readLine()];
                    case 1:
                        line = _a.sent();
                        this.frame.writeLine('');
                        return [4 /*yield*/, this.tryRun(line)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    ShellProgram.prototype.printDir = function () {
        this.frame.write(this.host + ":" + this.fs.currentDirectory.toPath() + " " + this.currentUser.username + "$ ");
    };
    ShellProgram.prototype.tryRun = function (line) {
        return __awaiter(this, void 0, void 0, function () {
            var command, programDefinition, program, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        command = this.parse(line);
                        if (command.name === 'exit') {
                            this.frame.writeLine('Bye.');
                            return [2 /*return*/, false];
                        }
                        programDefinition = _program__WEBPACK_IMPORTED_MODULE_1__["PROGRAMS"][command.name];
                        if (!programDefinition) return [3 /*break*/, 3];
                        program = this.injector.get(programDefinition.target);
                        _b = (_a = program).run;
                        return [4 /*yield*/, this.frame.createFrame()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent(), command.args])];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (command.name) {
                            this.frame.writeLine(command.name + ": command not found");
                        }
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShellProgram.prototype.parse = function (line) {
        var tokens = line.split(' ');
        return { name: tokens[0], args: tokens.slice(1) };
    };
    ShellProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'shell',
            description: 'Starts a new shell that can take commands.',
            hide: true
        }),
        __metadata("design:paramtypes", [_core_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _core_file_system_service__WEBPACK_IMPORTED_MODULE_3__["FileSystemService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ShellProgram);
    return ShellProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/tic-tac-toe/tic-tac-toe.engine.ts":
/*!*****************************************************************!*\
  !*** ./src/terminal/programs/tic-tac-toe/tic-tac-toe.engine.ts ***!
  \*****************************************************************/
/*! exports provided: isSelection, TicTacToeEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelection", function() { return isSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeEngine", function() { return TicTacToeEngine; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function isSelection(x) {
    return x === 'x' || x === 'o';
}
var TicTacToeEngine = /** @class */ (function () {
    function TicTacToeEngine(selection, spaces) {
        this.selection = selection;
        this.freeSpaces = spaces * spaces;
        this.turn = 'x';
        this.cursor = { col: 0, row: 0 };
        this.grid = [];
        for (var y = 0; y < spaces; y++) {
            this.grid.push([]);
            for (var x = 0; x < spaces; x++) {
                this.grid[y].push(null);
            }
        }
    }
    Object.defineProperty(TicTacToeEngine.prototype, "isPlayerTurn", {
        get: function () {
            return this.turn === this.selection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicTacToeEngine.prototype, "hasPlayerWon", {
        get: function () {
            return this.winner === this.selection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicTacToeEngine.prototype, "completed", {
        get: function () {
            return this.freeSpaces === 0 || this.winner != null;
        },
        enumerable: true,
        configurable: true
    });
    TicTacToeEngine.prototype.play = function () {
        if (this.completed)
            return;
        this.freeSpaces -= 1;
        this.grid[this.cursor.row][this.cursor.col] = this.turn;
        this.turn = this.turn === 'x' ? 'o' : 'x';
        this.winner = this.findWinner();
        if (!this.completed) {
            this.moveRight();
        }
    };
    TicTacToeEngine.prototype.selectCols = function (row) {
        var col;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    col = 0;
                    _a.label = 1;
                case 1:
                    if (!(col < this.grid.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, { row: row, col: col }];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    col++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    TicTacToeEngine.prototype.selectRows = function (col) {
        var row;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    row = 0;
                    _a.label = 1;
                case 1:
                    if (!(row < this.grid.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, { row: row, col: col }];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    row++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    TicTacToeEngine.prototype.selectDownwardDiagonal = function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = 0;
                    _a.label = 1;
                case 1:
                    if (!(x < this.grid.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, { row: x, col: x }];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    x++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    TicTacToeEngine.prototype.selectUpwardDiagonal = function () {
        var x;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = 0;
                    _a.label = 1;
                case 1:
                    if (!(x < this.grid.length)) return [3 /*break*/, 4];
                    return [4 /*yield*/, { row: this.grid.length - 1 - x, col: x }];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    x++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    TicTacToeEngine.prototype.findWinnerInSequence = function (iterable) {
        var _this = this;
        var selections = Array.from(iterable).map(function (x) { return _this.grid[x.row][x.col]; });
        var count = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["countBy"])(selections, function (x) { return x; });
        if (count.x && count.x === this.grid.length)
            return 'x';
        if (count.o && count.o === this.grid.length)
            return 'o';
        return null;
    };
    TicTacToeEngine.prototype.findWinner = function () {
        for (var row = 0; row < this.grid.length; row++) {
            var winner_1 = this.findWinnerInSequence(this.selectCols(row));
            if (isSelection(winner_1))
                return winner_1;
        }
        for (var col = 0; col < this.grid.length; col++) {
            var winner_2 = this.findWinnerInSequence(this.selectRows(col));
            if (isSelection(winner_2))
                return winner_2;
        }
        var winner = this.findWinnerInSequence(this.selectUpwardDiagonal());
        if (isSelection(winner))
            return winner;
        winner = this.findWinnerInSequence(this.selectDownwardDiagonal());
        if (isSelection(winner))
            return winner;
        return null;
    };
    TicTacToeEngine.prototype.moveLeft = function () {
        var _this = this;
        this.moveUntilFree(function (c) {
            c.col -= 1;
            if (c.col < 0) {
                c.col = _this.grid[0].length - 1;
                c.row -= 1;
                if (c.row < 0)
                    c.row = _this.grid.length - 1;
            }
        });
    };
    TicTacToeEngine.prototype.moveRight = function () {
        var _this = this;
        this.moveUntilFree(function (c) {
            c.col += 1;
            if (c.col >= _this.grid[0].length) {
                c.col = 0;
                c.row += 1;
                if (c.row >= _this.grid.length)
                    c.row = 0;
            }
        });
    };
    TicTacToeEngine.prototype.moveUp = function () {
        var _this = this;
        this.moveUntilFree(function (c) {
            c.row -= 1;
            if (c.row < 0) {
                c.row = _this.grid.length - 1;
                c.col -= 1;
                if (c.col < 0)
                    c.col = _this.grid[0].length - 1;
            }
        });
    };
    TicTacToeEngine.prototype.moveDown = function () {
        var _this = this;
        this.moveUntilFree(function (c) {
            c.row += 1;
            if (c.row >= _this.grid.length) {
                c.row = 0;
                c.col += 1;
                if (c.col >= _this.grid[0].length)
                    c.col = 0;
            }
        });
    };
    TicTacToeEngine.prototype.moveRandomly = function () {
        if (this.completed)
            return;
        var row, col;
        do {
            row = Math.floor(Math.random() * this.grid.length);
            col = Math.floor(Math.random() * this.grid.length);
        } while (!this.moveTo({ row: row, col: col }) && !this.completed);
    };
    TicTacToeEngine.prototype.moveTo = function (cursor) {
        if (this.completed)
            return false;
        if (this.isFree(cursor)) {
            this.cursor = cursor;
            return true;
        }
        return false;
    };
    TicTacToeEngine.prototype.moveUntilFree = function (fn) {
        if (this.completed)
            return;
        do {
            fn(this.cursor);
        } while (!this.isFree(this.cursor));
    };
    TicTacToeEngine.prototype.isFree = function (cursor) {
        return this.grid[cursor.row][cursor.col] === null;
    };
    return TicTacToeEngine;
}());



/***/ }),

/***/ "./src/terminal/programs/tic-tac-toe/tic-tac-toe.program.ts":
/*!******************************************************************!*\
  !*** ./src/terminal/programs/tic-tac-toe/tic-tac-toe.program.ts ***!
  \******************************************************************/
/*! exports provided: TicTacToeProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicTacToeProgram", function() { return TicTacToeProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../program */ "./src/terminal/programs/program.ts");
/* harmony import */ var _core_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/color */ "./src/terminal/core/color.ts");
/* harmony import */ var _core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util */ "./src/terminal/core/util.ts");
/* harmony import */ var _tic_tac_toe_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tic-tac-toe.engine */ "./src/terminal/programs/tic-tac-toe/tic-tac-toe.engine.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TicTacToeProgram = /** @class */ (function (_super) {
    __extends(TicTacToeProgram, _super);
    function TicTacToeProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicTacToeProgram.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selection, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.frame.writeLine('Welcome to Tic-tac-toe v1.0!');
                        return [4 /*yield*/, this.decideSelection()];
                    case 1:
                        selection = _b.sent();
                        console.log(selection);
                        this.game = new _tic_tac_toe_engine__WEBPACK_IMPORTED_MODULE_4__["TicTacToeEngine"](selection, 3);
                        _a = this;
                        return [4 /*yield*/, this.frame.createFrame()];
                    case 2:
                        _a.gameFrame = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (!!this.game.completed) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.play()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 5:
                        this.gameFrame.write('Result: ');
                        if (this.game.winner == null) {
                            this.gameFrame.writeLine('Tie.');
                        }
                        else if (this.game.hasPlayerWon) {
                            this.gameFrame.writeLine('You win!', _core_color__WEBPACK_IMPORTED_MODULE_2__["Color"].BrightGreen);
                        }
                        else {
                            this.gameFrame.writeLine('Computer wins!', _core_color__WEBPACK_IMPORTED_MODULE_2__["Color"].Cyan);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TicTacToeProgram.prototype.decideSelection = function () {
        return __awaiter(this, void 0, void 0, function () {
            var selection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.frame.write('Please select (X) or (O): ');
                        return [4 /*yield*/, this.frame.readLine()];
                    case 1:
                        selection = (_a.sent()).toLocaleLowerCase();
                        this.frame.writeLine();
                        if (Object(_tic_tac_toe_engine__WEBPACK_IMPORTED_MODULE_4__["isSelection"])(selection))
                            return [2 /*return*/, selection];
                        this.frame.writeLine('Invalid selection.', _core_color__WEBPACK_IMPORTED_MODULE_2__["Color"].Red);
                        return [4 /*yield*/, this.decideSelection()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TicTacToeProgram.prototype.play = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.game.isPlayerTurn) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.playHuman()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.playMachine()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.game.play();
                        this.render();
                        return [2 /*return*/];
                }
            });
        });
    };
    TicTacToeProgram.prototype.playHuman = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var renderHuman, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        renderHuman = function () {
                            _this.render();
                            _this.gameFrame.write('(↑ = W, ← = A, ↓ = S, → = D)', _core_color__WEBPACK_IMPORTED_MODULE_2__["Color"].Magenta);
                            _this.gameFrame.write(' Make your move: ');
                        };
                        renderHuman();
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        return [4 /*yield*/, this.gameFrame.readKey()];
                    case 2:
                        key = _a.sent();
                        switch (key) {
                            case 'ArrowLeft':
                            case 'a':
                            case 'A':
                            case 'l':
                            case 'L':
                                this.game.moveLeft();
                                break;
                            case 'ArrowRight':
                            case 'd':
                            case 'D':
                            case 'r':
                            case 'R':
                                this.game.moveRight();
                                break;
                            case 'ArrowUp':
                            case 'w':
                            case 'W':
                            case 'u':
                            case 'U':
                                this.game.moveUp();
                                break;
                            case 'ArrowDown':
                            case 'd':
                            case 'D':
                            case 's':
                            case 'S':
                                this.game.moveDown();
                                break;
                            case 'Enter':
                                return [2 /*return*/];
                            default:
                                return [3 /*break*/, 1];
                        }
                        renderHuman();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TicTacToeProgram.prototype.playMachine = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.render();
                        this.gameFrame.write('Computer is thinking...', _core_color__WEBPACK_IMPORTED_MODULE_2__["Color"].Yellow);
                        this.game.moveRandomly();
                        return [4 /*yield*/, Object(_core_util__WEBPACK_IMPORTED_MODULE_3__["sleeper"])(500)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TicTacToeProgram.prototype.render = function () {
        var _this = this;
        this.gameFrame.clear();
        var _loop_1 = function (y) {
            var row = this_1.game.grid[y];
            if (y > 0)
                this_1.gameFrame.writeLine(row.map(function () { return '---'; }).join('|'));
            this_1.gameFrame.writeLine(row.map(function (a, x) {
                if (_this.game.cursor.row === y && _this.game.cursor.col === x && _this.game.isPlayerTurn && !_this.game.completed) {
                    return "[" + _this.game.turn.toUpperCase() + "]";
                }
                else
                    return " " + (a ? a.toUpperCase() : ' ') + " ";
            }).join('|'));
        };
        var this_1 = this;
        for (var y = 0; y < this.game.grid.length; y++) {
            _loop_1(y);
        }
    };
    TicTacToeProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'tic-tac-toe',
            description: 'Tic-tac-toe is a paper-and-pencil game for two players, X and O.'
        })
    ], TicTacToeProgram);
    return TicTacToeProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/programs/whoami/whoami.program.ts":
/*!********************************************************!*\
  !*** ./src/terminal/programs/whoami/whoami.program.ts ***!
  \********************************************************/
/*! exports provided: WhoAmIProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoAmIProgram", function() { return WhoAmIProgram; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../program */ "./src/terminal/programs/program.ts");
/* harmony import */ var src_terminal_core_img_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/terminal/core/img.component */ "./src/terminal/core/img.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var WhoAmIProgram = /** @class */ (function (_super) {
    __extends(WhoAmIProgram, _super);
    function WhoAmIProgram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhoAmIProgram.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loadingFrame;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.frame.createFrame()];
                    case 1:
                        loadingFrame = _a.sent();
                        loadingFrame.writeLine('Loading... Please wait.');
                        return [4 /*yield*/, new Promise(function (r) {
                                _this.frame.append(src_terminal_core_img_component__WEBPACK_IMPORTED_MODULE_2__["ImgComponent"], function (ref) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                ref.instance.src = './assets/whoami.svg';
                                                ref.instance.style = {
                                                    'width': '100%',
                                                    'max-width': '100%',
                                                    'max-height': 'calc(100vh - 48px)',
                                                };
                                                return [4 /*yield*/, ref.instance.loaded.toPromise()];
                                            case 1:
                                                _a.sent();
                                                loadingFrame.clear();
                                                r();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            })];
                    case 2:
                        _a.sent();
                        this.frame.writeLine();
                        return [2 /*return*/];
                }
            });
        });
    };
    WhoAmIProgram = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_program__WEBPACK_IMPORTED_MODULE_1__["Program"])({
            alias: 'whoami',
            description: 'Mirror mirror on the wall...'
        })
    ], WhoAmIProgram);
    return WhoAmIProgram;
}(_program__WEBPACK_IMPORTED_MODULE_1__["ProgramBase"]));



/***/ }),

/***/ "./src/terminal/terminal.module.ts":
/*!*****************************************!*\
  !*** ./src/terminal/terminal.module.ts ***!
  \*****************************************/
/*! exports provided: TerminalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_terminal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/terminal.component */ "./src/terminal/core/terminal.component.ts");
/* harmony import */ var _core_line_break_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/line-break.component */ "./src/terminal/core/line-break.component.ts");
/* harmony import */ var _core_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/text.component */ "./src/terminal/core/text.component.ts");
/* harmony import */ var _core_caret_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/caret.component */ "./src/terminal/core/caret.component.ts");
/* harmony import */ var _core_session_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/session.component */ "./src/terminal/core/session.component.ts");
/* harmony import */ var _programs_shell_program__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./programs/shell.program */ "./src/terminal/programs/shell.program.ts");
/* harmony import */ var _core_frame_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/frame.component */ "./src/terminal/core/frame.component.ts");
/* harmony import */ var _core_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/input.component */ "./src/terminal/core/input.component.ts");
/* harmony import */ var _programs_hi_program__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./programs/hi.program */ "./src/terminal/programs/hi.program.ts");
/* harmony import */ var _programs_program__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./programs/program */ "./src/terminal/programs/program.ts");
/* harmony import */ var _core_frame_content_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/frame-content.directive */ "./src/terminal/core/frame-content.directive.ts");
/* harmony import */ var _programs_login_program__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programs/login.program */ "./src/terminal/programs/login.program.ts");
/* harmony import */ var _core_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/login.service */ "./src/terminal/core/login.service.ts");
/* harmony import */ var _core_file_system_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/file-system.service */ "./src/terminal/core/file-system.service.ts");
/* harmony import */ var _programs_clear_program__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./programs/clear.program */ "./src/terminal/programs/clear.program.ts");
/* harmony import */ var _programs_restart_program__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./programs/restart.program */ "./src/terminal/programs/restart.program.ts");
/* harmony import */ var _core_glitch_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/glitch.component */ "./src/terminal/core/glitch.component.ts");
/* harmony import */ var _programs_help_program__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./programs/help.program */ "./src/terminal/programs/help.program.ts");
/* harmony import */ var _programs_tic_tac_toe_tic_tac_toe_program__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./programs/tic-tac-toe/tic-tac-toe.program */ "./src/terminal/programs/tic-tac-toe/tic-tac-toe.program.ts");
/* harmony import */ var _programs_whoami_whoami_program__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./programs/whoami/whoami.program */ "./src/terminal/programs/whoami/whoami.program.ts");
/* harmony import */ var _core_img_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/img.component */ "./src/terminal/core/img.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var programs = Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_restart_program__WEBPACK_IMPORTED_MODULE_19__["BootProgram"]).concat(Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_clear_program__WEBPACK_IMPORTED_MODULE_18__["ClearProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_hi_program__WEBPACK_IMPORTED_MODULE_12__["HiProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_login_program__WEBPACK_IMPORTED_MODULE_15__["LoginProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_shell_program__WEBPACK_IMPORTED_MODULE_9__["ShellProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_help_program__WEBPACK_IMPORTED_MODULE_21__["HelpProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_tic_tac_toe_tic_tac_toe_program__WEBPACK_IMPORTED_MODULE_22__["TicTacToeProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_whoami_whoami_program__WEBPACK_IMPORTED_MODULE_23__["WhoAmIProgram"]), Object(_programs_program__WEBPACK_IMPORTED_MODULE_13__["makeProgramProvider"])(_programs_restart_program__WEBPACK_IMPORTED_MODULE_19__["BootProgram"]));
var entryComponents = [
    _core_caret_component__WEBPACK_IMPORTED_MODULE_7__["CaretComponent"],
    _core_text_component__WEBPACK_IMPORTED_MODULE_6__["TextComponent"],
    _core_line_break_component__WEBPACK_IMPORTED_MODULE_5__["LineBreakComponent"],
    _core_frame_component__WEBPACK_IMPORTED_MODULE_10__["FrameComponent"],
    _core_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"],
    _core_glitch_component__WEBPACK_IMPORTED_MODULE_20__["GlitchComponent"],
    _core_img_component__WEBPACK_IMPORTED_MODULE_24__["ImgComponent"]
];
var TerminalModule = /** @class */ (function () {
    function TerminalModule() {
    }
    TerminalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _core_session_component__WEBPACK_IMPORTED_MODULE_8__["SessionComponent"],
                _core_terminal_component__WEBPACK_IMPORTED_MODULE_4__["TerminalComponent"],
                _core_frame_content_directive__WEBPACK_IMPORTED_MODULE_14__["FrameContentDirective"]
            ].concat(entryComponents),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'run/:user/:pwd/:program', component: _core_terminal_component__WEBPACK_IMPORTED_MODULE_4__["TerminalComponent"], pathMatch: 'full' },
                    { path: '**', component: _core_terminal_component__WEBPACK_IMPORTED_MODULE_4__["TerminalComponent"], pathMatch: 'full' },
                ])
            ],
            providers: programs.concat([_core_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"], _core_file_system_service__WEBPACK_IMPORTED_MODULE_17__["FileSystemService"]]),
            bootstrap: [_core_session_component__WEBPACK_IMPORTED_MODULE_8__["SessionComponent"]],
            entryComponents: entryComponents
        })
    ], TerminalModule);
    return TerminalModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/diego/Dev/frata/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map