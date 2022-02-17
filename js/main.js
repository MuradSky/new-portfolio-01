/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $aboutSlider = $(".js-about__slider");
  $aboutSlider.slick({
    fade: true,
    prevArrow: $(".js-about-prev"),
    nextArrow: $(".js-about-next")
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/carousel/carousel.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/carousel/carousel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $carousel = $(".js-carousel");
  $.each($carousel, function (i) {
    $carousel.eq(i).slick({
      slidesToShow: 3,
      prevArrow: $(".js-carousel-prev").eq(i),
      nextArrow: $(".js-carousel-next").eq(i),
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }]
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/components/errorMessages.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/form/components/errorMessages.js ***!
  \*************************************************************/
/*! exports provided: errorUpload, errorRequestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorUpload", function() { return errorUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRequestCall", function() { return errorRequestCall; });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/blocks/modules/form/components/validation.js");

var errorUpload = function errorUpload(car_model, name, phone, formInput) {
  var car_modelError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(car_model);
  var nameError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(name);
  var phoneError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(phone);
  formInput.eq(0).focus();
  if (!car_modelError) formInput.eq(1).addClass('error');
  if (!nameError) formInput.eq(2).addClass('error');
  if (!phoneError) formInput.eq(3).addClass('error');
  if (!car_modelError && !nameError && !phoneError) return false;
  if (car_modelError && nameError && phoneError) return true;
};
var errorRequestCall = function errorRequestCall(name, phone, formInput) {
  var nameError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(name);
  var phoneError = Object(_validation__WEBPACK_IMPORTED_MODULE_0__["validate"])(phone);
  formInput.eq(0).focus();
  if (!nameError) formInput.eq(0).addClass('error');
  if (!phoneError) formInput.eq(1).addClass('error');
  if (!nameError && !phoneError) return false;
  if (nameError && phoneError) return true;
};

/***/ }),

/***/ "./src/blocks/modules/form/components/handlers.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/form/components/handlers.js ***!
  \********************************************************/
/*! exports provided: handlingUpload, handlingRequestCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlingUpload", function() { return handlingUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlingRequestCall", function() { return handlingRequestCall; });
/* harmony import */ var _errorMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errorMessages */ "./src/blocks/modules/form/components/errorMessages.js");
/* harmony import */ var _replaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replaces */ "./src/blocks/modules/form/components/replaces.js");


var handlingUpload = function handlingUpload(formDataEntries, formInput, files, $uploadError) {
  var _Object$fromEntries = Object.fromEntries(formDataEntries.entries()),
      car_model = _Object$fromEntries.car_model,
      name = _Object$fromEntries.name,
      phone = _Object$fromEntries.phone;

  if (!Object(_errorMessages__WEBPACK_IMPORTED_MODULE_0__["errorUpload"])(car_model, name, phone, formInput) || !(files !== null && files !== void 0 && files.length)) {
    if (!(files !== null && files !== void 0 && files.length)) $uploadError.fadeIn();
    return "error";
  }

  return {
    car_model: car_model,
    name: name,
    phone: Object(_replaces__WEBPACK_IMPORTED_MODULE_1__["phoneReplace"])(phone)
  };
};
var handlingRequestCall = function handlingRequestCall(formDataEntries, formInput) {
  var _Object$fromEntries2 = Object.fromEntries(formDataEntries.entries()),
      name = _Object$fromEntries2.name,
      phone = _Object$fromEntries2.phone;

  if (!Object(_errorMessages__WEBPACK_IMPORTED_MODULE_0__["errorRequestCall"])(name, phone, formInput)) return "error";
  return {
    name: name,
    phone: Object(_replaces__WEBPACK_IMPORTED_MODULE_1__["phoneReplace"])(phone)
  };
};

/***/ }),

/***/ "./src/blocks/modules/form/components/inputsChange.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/form/components/inputsChange.js ***!
  \************************************************************/
/*! exports provided: inputsChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputsChange", function() { return inputsChange; });
var inputsChange = function inputsChange(inputs) {
  inputs.on('input', function (e) {
    var that = e.target;
    if (that.name === "name" && that.value.length > 3) that.classList.remove('error');
    if (that.name === "car_model" && that.value.length > 3) that.classList.remove('error');
    if (that.name === "car_upload" && that.value.length > 3) that.classList.remove('error');
  });
};

/***/ }),

/***/ "./src/blocks/modules/form/components/magnificPopupTrigger.js":
/*!********************************************************************!*\
  !*** ./src/blocks/modules/form/components/magnificPopupTrigger.js ***!
  \********************************************************************/
/*! exports provided: magnificPopupTrigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnificPopupTrigger", function() { return magnificPopupTrigger; });
var magnificPopupTrigger = function magnificPopupTrigger() {
  $.magnificPopup.close();
  $.magnificPopup.open({
    items: {
      src: '#modal-success'
    },
    type: 'inline',
    callbacks: {
      open: function open() {
        setTimeout(function () {
          return $.magnificPopup.close();
        }, 3000);
      }
    }
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/components/replaces.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/form/components/replaces.js ***!
  \********************************************************/
/*! exports provided: phoneReplace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneReplace", function() { return phoneReplace; });
var phoneReplace = function phoneReplace(string) {
  return string.replace(/[^\d\+]/g, '');
};

/***/ }),

/***/ "./src/blocks/modules/form/components/templates.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/form/components/templates.js ***!
  \*********************************************************/
/*! exports provided: plusSvg, uploadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plusSvg", function() { return plusSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
var plusSvg = "\n    <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"none\">\n        <path d=\"M9 1V9M9 17V9M9 9H1M9 9H17\" stroke=\"#A50034\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </svg>\n";
var uploadImage = function uploadImage(result) {
  return "\n    <div class=\"upload__files-item\">\n        <img src=\"".concat(result, "\"/>\n\n        <div class=\"upload__files-clear js-files-clear\">\n            <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.33333 0.833008C7.8731 0.833008 7.5 1.2061 7.5 1.66634V3.33301H3.33333C2.8731 3.33301 2.5 3.7061 2.5 4.16634C2.5 4.62658 2.8731 4.99967 3.33333 4.99967H16.6667C17.1269 4.99967 17.5 4.62658 17.5 4.16634C17.5 3.7061 17.1269 3.33301 16.6667 3.33301H12.5V1.66634C12.5 1.2061 12.1269 0.833008 11.6667 0.833008H8.33333ZM10.8333 3.33301H9.16667V2.49967H10.8333V3.33301Z\" fill=\"white\"/>\n                <path d=\"M8.33333 9.16634C8.79357 9.16634 9.16667 9.53944 9.16667 9.99967V14.9997C9.16667 15.4599 8.79357 15.833 8.33333 15.833C7.8731 15.833 7.5 15.4599 7.5 14.9997V9.99967C7.5 9.53944 7.8731 9.16634 8.33333 9.16634Z\" fill=\"white\"/>\n                <path d=\"M12.5 9.99967C12.5 9.53944 12.1269 9.16634 11.6667 9.16634C11.2064 9.16634 10.8333 9.53944 10.8333 9.99967V14.9997C10.8333 15.4599 11.2064 15.833 11.6667 15.833C12.1269 15.833 12.5 15.4599 12.5 14.9997V9.99967Z\" fill=\"white\"/>\n                <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.16667 5.83301C3.70643 5.83301 3.33333 6.2061 3.33333 6.66634V16.6663C3.33333 18.0471 4.45262 19.1663 5.83333 19.1663H14.1667C15.5474 19.1663 16.6667 18.0471 16.6667 16.6663V6.66634C16.6667 6.2061 16.2936 5.83301 15.8333 5.83301H4.16667ZM5 16.6663V7.49967H15V16.6663C15 17.1266 14.6269 17.4997 14.1667 17.4997H5.83333C5.3731 17.4997 5 17.1266 5 16.6663Z\" fill=\"white\"/>\n            </svg>\n        </div>\n    </div>\n");
};

/***/ }),

/***/ "./src/blocks/modules/form/components/validation.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/form/components/validation.js ***!
  \**********************************************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
var validate = function validate(value) {
  if (!value) return false;
  return true;
}; // export const validateEmail = (value) => {
//     const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     if(!value.match(regExp)) return false;
//     return true;
// }

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _components_inputsChange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/inputsChange */ "./src/blocks/modules/form/components/inputsChange.js");
/* harmony import */ var _components_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handlers */ "./src/blocks/modules/form/components/handlers.js");
/* harmony import */ var _components_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/templates */ "./src/blocks/modules/form/components/templates.js");
/* harmony import */ var _components_magnificPopupTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/magnificPopupTrigger */ "./src/blocks/modules/form/components/magnificPopupTrigger.js");




$(function () {
  var $form = $('.js-form');
  var $fileInput = $('.js-file-input');
  var $uploadMaxSizeAlert = $(".js-upload-max");
  var $uploadBtn = $(".js-upload-btn");
  var $uploadFiles = $(".js-upload-files");
  var $uploadAttached = $(".js-upload-attached");
  var $uploadError = $(".js-upload-error");
  var $body = $("body");
  var reader = new FileReader();
  $("[type='tel']").mask("+7 (999) 999-99-99", {
    completed: function completed() {
      $(this).removeClass('error');
    }
  });
  $(".js-form-select").select2({
    placeholder: "Выберите модель"
  });
  var cloneDefaultStateUploadBtn = $uploadBtn.children().clone();
  var filesArr = [];

  reader.onload = function () {
    return $uploadFiles.append($(Object(_components_templates__WEBPACK_IMPORTED_MODULE_2__["uploadImage"])(reader.result)));
  };

  $body.on("click", ".js-files-clear", function (e) {
    var $this = $(this);
    var idx = $(".js-files-clear").index($this);
    $this.parent().remove();
    $fileInput.val('');
    filesArr.splice(+idx, 1);

    if (!filesArr.length) {
      $uploadAttached.fadeOut(0);
      $uploadBtn.html(cloneDefaultStateUploadBtn).removeClass("setter").next().fadeIn();
    }
  });
  $fileInput.on('change', function (e) {
    var target = e.target;
    var files = target.files;
    var size = files[0].size;
    $uploadError.fadeOut();
    if (size > 10000000) return $uploadMaxSizeAlert.addClass("error");
    $uploadMaxSizeAlert.removeClass("error");

    if (files.length) {
      $uploadAttached.fadeIn();
      $uploadBtn.html(_components_templates__WEBPACK_IMPORTED_MODULE_2__["plusSvg"]).addClass("setter").next().fadeOut();
      reader.readAsDataURL(files[0]);
      filesArr.push(files[0]);
    }
  });
  var formValue = null;
  $form.on('submit', function (e) {
    e.preventDefault();
    var target = e.target;
    var url = target.action;
    var formInput = $(this).find('.js-form-input');
    var formBtn = $(this).find('.js-form-submit');
    var policy = $(this).find('.js-policy');
    Object(_components_inputsChange__WEBPACK_IMPORTED_MODULE_0__["inputsChange"])(formInput);
    var formDataEntries = new FormData(target);
    if (target.dataset.id === 'form-upload') formValue = Object(_components_handlers__WEBPACK_IMPORTED_MODULE_1__["handlingUpload"])(formDataEntries, formInput, filesArr, $uploadError);
    if (target.dataset.id === 'form-signup-service') formValue = Object(_components_handlers__WEBPACK_IMPORTED_MODULE_1__["handlingRequestCall"])(formDataEntries, formInput);

    if (policy.val() && !policy.is(":checked")) {
      policy.parent().addClass("error");
      policy.on("change", function (e) {
        return $(e.target).parent().removeClass("error");
      });
      return;
    }

    if (formValue === "error") return;
    formBtn.attr('disabled', true);
    formInput.addClass('disabled');
    fetch(url, {
      method: 'POST',
      body: target.dataset.id === 'form-upload' ? newFormData(formValue, filesArr) : JSON.stringify(formValue)
    }).then(function () {
      target.reset();
      formInput.blur();
      formInput.removeClass('disabled');
      formBtn.removeAttr('disabled');
      Object(_components_magnificPopupTrigger__WEBPACK_IMPORTED_MODULE_3__["magnificPopupTrigger"])();
      $(".js-files-clear").parent().remove();
      $uploadAttached.fadeOut(0);
      $uploadBtn.html(cloneDefaultStateUploadBtn).removeClass("setter").next().fadeIn();
    })["catch"](function () {
      formInput.removeClass('disabled');
      formBtn.removeAttr('disabled');
    });
  });
});

function newFormData(formValue, filesArr) {
  var formDataEntries = new FormData();
  Object.keys(formValue).forEach(function (item) {
    return formDataEntries.append(item, formValue[item]);
  });
  filesArr.forEach(function (item, i) {
    return formDataEntries.append("file", filesArr[i]);
  });
  return formDataEntries;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $headerBtn = $('.js-header-burger');
  var $headerMenu = $('.js-header__menu');
  var $body = $("body");

  var removeClass = function removeClass() {
    $headerBtn.removeClass('active');
    $headerMenu.removeClass('active');
    $body.removeClass("hidden");
  };

  var toggleClasses = function toggleClasses() {
    $headerBtn.eq(0).toggleClass('active');
    $headerMenu.toggleClass('active');
    $body.toggleClass("hidden");
  };

  $headerBtn.on('click', toggleClasses);
  $headerMenu.children().on('click', removeClass);
  $(window).on('click', function (e) {
    if (!$headerMenu.is(e.target) && $headerMenu.has(e.target).length === 0 && !$headerBtn.is(e.target) && $headerBtn.has(e.target).length === 0) removeClass();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/balloonModalTemplate.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/map/balloonModalTemplate.js ***!
  \********************************************************/
/*! exports provided: balloonModalTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balloonModalTemplate", function() { return balloonModalTemplate; });
var phoneReplace = function phoneReplace(string) {
  return string.replace(/[^\d\+]/g, '');
};

var balloonModalTemplate = function balloonModalTemplate(data, idx) {
  return ["<address class=\"map__address\">\n        <span class=\"map__address-close js-address-close\" data-idx=\"".concat(idx, "\">\n            <img src=\"./img/svg/close.svg\" />\n        </span>\n        <span class=\"map__address-img\">\n            <img src=\"").concat(data.icon, "\"/>\n        </span>\n        <span class=\"map__address-text\">").concat(data.name, "</span>\n        <a href=\"tel:").concat(phoneReplace(data.phone), "\" class=\"map__address-phone\">").concat(data.phone, "</a>\n        <span class=\"map__address-time\">").concat(data.time, "</span>\n        <span class=\"map__address-text\">").concat(data.address, "</span>\n        <a href=\"").concat(data.route, "\" target=\"_blank\" class=\"map__address-route\">\n            <img src=\"./img/svg/microPin.svg\"/>\n            \u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442\n        </a>\n    </address>")].join("");
};

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _balloonModalTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./balloonModalTemplate */ "./src/blocks/modules/map/balloonModalTemplate.js");
/* harmony import */ var _placemarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placemarker */ "./src/blocks/modules/map/placemarker.js");


$(function () {
  var $mapSelect = $('.js-map-select');
  ymaps.ready(init);
  var newMap;
  var place;
  var placMarkers = [];

  var removeActive = function removeActive() {
    return $mapSelect.removeClass("active");
  };

  $('body').on("click", ".js-address-close", function () {
    var idx = $(this).attr("data-idx");
    removeActive();
    placMarkers[+idx].balloon.close();
  });

  function init() {
    newMap = new ymaps.Map("ymaps", {
      center: [54.985609786258614, 73.25038570996264],
      zoom: 12,
      controls: []
    });
    _placemarker__WEBPACK_IMPORTED_MODULE_1__["pointer"].forEach(function (item, i) {
      place = new ymaps.Placemark(item.coor, {
        hintContent: item.hintContent,
        balloonContentBody: Object(_balloonModalTemplate__WEBPACK_IMPORTED_MODULE_0__["balloonModalTemplate"])(item, i)
      }, {
        iconLayout: 'default#image',
        iconImageHref: item.pin,
        iconImageSize: [60, 76]
      });
      newMap.geoObjects.add(place);
      placMarkers.push(place);
      place.events.add('click', function (event) {
        var hint = event.get('target').properties._data.hintContent;

        removeActive();
        $mapSelect.each(function (i) {
          var content = $(this).attr('data-content');
          if (hint === content) $(this).addClass('active');
        });
      });
    });
    $mapSelect.on('click', function () {
      removeActive();
      $(this).addClass("active");
      var idx = $(this).attr('data-idx');
      placMarkers[+idx].balloon.open();
    });
    var width = $(window).width();
    if (width < 770) newMap.behaviors.disable('drag');
  }

  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/map/placemarker.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/map/placemarker.js ***!
  \***********************************************/
/*! exports provided: pointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return pointer; });
var pointer = [{
  hintContent: "Kia",
  icon: "./img/svg/kia.svg",
  name: "Kia КЛЮЧАВТО Омск",
  phone: "+7 (3812) 991719",
  time: "ежедневно с 8:00 до 20:00",
  address: "Омск, бул. Архитекторов, 20/1",
  coor: [54.97557406871744, 73.28438425793134],
  pin: "./img/content/pin2.png",
  route: "https://yandex.com.tr/harita/org/kia_keyauto_official_dealer_of_kia/224120126367/?ll=73.338939%2C54.961555&mode=search&sll=28.780466%2C41.017851&sspn=0.180588%2C0.075800&text=Kia%20%D0%9A%D0%9B%D0%AE%D0%A7%D0%90%D0%92%D0%A2%D0%9E%20%D0%9E%D0%BC%D1%81%D0%BA&z=12"
}, {
  hintContent: "Nissan",
  icon: "./img/svg/nissan.svg",
  name: "Nissan КЛЮЧАВТО Омск",
  phone: "+7 (3812) 992657",
  address: "Омск, Волгоградская улица, 63",
  time: "ежедневно с 8:00 до 20:00",
  coor: [54.9887323673069, 73.23473825566462],
  pin: "./img/content/pin1.png",
  route: "https://yandex.com.tr/harita/org/nissan_keyauto/4301515606/?ll=73.338939%2C54.961555&mode=search&sll=28.780466%2C41.017851&sspn=0.180588%2C0.075800&text=Kia%20%D0%9A%D0%9B%D0%AE%D0%A7%D0%90%D0%92%D0%A2%D0%9E%20%D0%9E%D0%BC%D1%81%D0%BA&z=12"
}];

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-popup-link').magnificPopup({
    type: 'inline',
    midClick: true
  });
  $(".js-popup-close").on("click", function () {
    $.magnificPopup.close();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/painting-cost/painting-cost.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/painting-cost/painting-cost.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $paintinDetail = $(".js-paintin-detail");
  var $paintinDot = $(".js-paintin-dot");
  var $paintinCost = $(".js-painting-cost");

  var removeActiveDetail = function removeActiveDetail() {
    return $paintinDetail.removeClass("active");
  };

  var removeOpacityDot = function removeOpacityDot() {
    return $paintinDot.removeClass("opacity");
  };

  var iterator = function iterator(element, detail, method, className) {
    if (method === "removeClass") element.addClass(className);
    element.each(function () {
      var data = $(this).attr("data-detail");
      if (detail === data) $(this)[method](className);
    });
  };

  var fixedDetail = function fixedDetail(element, target) {
    target.toggleClass("fixed");
    var detail = target.attr("data-detail");
    iterator(element, detail, "toggleClass", "fixed");
  };

  $paintinDetail.on("click", function () {
    fixedDetail($paintinDot, $(this));
  });
  $paintinDot.on("click", function () {
    fixedDetail($paintinDetail, $(this));
  });
  $paintinDetail.hover(function () {
    var $this = $(this);
    var detail = $this.attr("data-detail");
    removeActiveDetail();
    $this.addClass("active");
    iterator($paintinDot, detail, "removeClass", "opacity");
  });
  $paintinDot.hover(function () {
    var $this = $(this);
    $paintinDot.addClass("opacity");
    $this.removeClass("opacity");
    var detail = $this.attr("data-detail");
    removeActiveDetail();
    iterator($paintinDetail, detail, "addClass", "active");
  });
  $(window).hover(function (e) {
    if (!$paintinCost.is(e.target) && $paintinCost.has(e.target).length === 0) {
      removeActiveDetail();
      removeOpacityDot();
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/service/service.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/service/service.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $serviceBtn = $(".js-service__btn");
  var $serviceItem = $(".js-service__item");
  var plus = "<use xlink:href=\"./img/sprites/sprite.svg#plus\"></use>";
  var minus = " <use xlink:href=\"./img/sprites/sprite.svg#minus\"></use>";

  var resetState = function resetState() {
    $serviceItem.removeClass("show");
    $serviceBtn.removeClass("active").find("svg").html(plus);
  };

  $serviceBtn.on("click", function () {
    var $this = $(this);
    var idx = $serviceBtn.index($this);
    resetState();
    $this.toggleClass("active").find("svg").html(minus);
    $serviceItem.eq(idx).toggleClass("show");
  });
  $serviceItem.on("click", function () {
    if (!$(this).hasClass('show')) resetState();
  });
  $(window).on("click", function (e) {
    if (!$serviceItem.is(e.target) && $serviceItem.has(e.target).length === 0) resetState();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $(document).on('click', '.js-anchor', function (event) {
    event.preventDefault();

    if ($(this).hasClass('navigation__nav-link')) {
      $('.navigation__nav-link').removeClass('active');
      $(this).addClass('active');
    }

    $('html, body').stop(true, true).delay(200).animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/service/service */ "./src/blocks/modules/service/service.js");
/* harmony import */ var _modules_service_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_service_service__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_painting_cost_painting_cost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/painting-cost/painting-cost */ "./src/blocks/modules/painting-cost/painting-cost.js");
/* harmony import */ var _modules_painting_cost_painting_cost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_painting_cost_painting_cost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/carousel/carousel */ "./src/blocks/modules/carousel/carousel.js");
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_8__);
 // import "%modules%/footer/footer";










/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map