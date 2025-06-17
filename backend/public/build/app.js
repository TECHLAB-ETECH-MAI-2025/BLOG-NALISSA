(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datatables */ "./assets/datatables.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article */ "./assets/article.js");
/* harmony import */ var _articles_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./articles_list */ "./assets/articles_list.js");
/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./like.js */ "./assets/like.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/dataTables.mjs");
/* harmony import */ var datatables_net_bs5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! datatables.net-bs5 */ "./node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs");









/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');





// Initialisation globale
document.addEventListener('DOMContentLoaded', function () {
  // Activer les tooltips Bootstrap
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

/***/ }),

/***/ "./assets/article.js":
/*!***************************!*\
  !*** ./assets/article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
  // Système de commentaires en AJAX
  var $commentForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comment-form');
  var $commentsList = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comments-list');
  var $commentsCount = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#comments-count');
  $commentForm.on('submit', function (e) {
    e.preventDefault();
    var $submitBtn = $commentForm.find('button[type="submit"]');
    var originalBtnText = $submitBtn.html();

    // Désactiver le bouton et afficher un indicateur de chargement
    $submitBtn.html('Envoi en cours...').prop('disabled', true);
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
      url: $commentForm.attr('action'),
      method: 'POST',
      data: $commentForm.serialize(),
      dataType: 'json',
      success: function success(response) {
        if (response.success) {
          // Ajouter le nouveau commentaire à la liste
          $commentsList.prepend(response.commentHtml);

          // Mettre à jour le compteur de commentaires
          $commentsCount.text(response.commentsCount);

          // Réinitialiser le formulaire
          $commentForm[0].reset();

          // Afficher un message de succès
          showAlert('success', 'Votre commentaire a été publié avec succès !');
        } else {
          showAlert('danger', response.error || 'Une erreur est survenue lors de l\'envoi ducommentaire.');
        }
      },
      error: function error() {
        showAlert('danger', 'Une erreur est survenue lors de l\'envoi du commentaire.');
      },
      complete: function complete() {
        // Réactiver le bouton
        $submitBtn.html(originalBtnText).prop('disabled', false);
      }
    });
  });

  // Système de "j'aime" en AJAX
  var $likeButton = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.like-button');
  var articleId = $likeButton.data('article-id');
  $likeButton.on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
      url: "/article/".concat(articleId, "/like"),
      method: 'POST',
      dataType: 'json',
      success: function success(response) {
        if (response.success) {
          // Mettre à jour l'état du bouton
          $likeButton.toggleClass('liked', response.liked);

          // Mettre à jour le compteur de likes
          jquery__WEBPACK_IMPORTED_MODULE_3___default()('#likes-count').text(response.likesCount);
        }
      }
    });
  });

  // Fonction pour afficher des alertes
  function showAlert(type, message) {
    var $alert = jquery__WEBPACK_IMPORTED_MODULE_3___default()("\n\t\t\t\t\t".concat(message, "\n\n\t\t\t\t"));
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('#alerts-container').append($alert);

    // Faire disparaître l'alerte après 5 secondes
    setTimeout(function () {
      $alert.alert('close');
    }, 5000);
  }
});

/***/ }),

/***/ "./assets/articles_list.js":
/*!*********************************!*\
  !*** ./assets/articles_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/dataTables.mjs");
/* harmony import */ var datatables_net_bs5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! datatables.net-bs5 */ "./node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs");
/* harmony import */ var datatables_net_responsive_bs5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! datatables.net-responsive-bs5 */ "./node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.mjs");











jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).ready(function () {
  // Initialisation de DataTables
  var articlesTable = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#articles-table').DataTable({
    processing: true,
    serverSide: true,
    responsive: true,
    ajax: {
      url: '/api/articles',
      type: 'POST'
    },
    columns: [{
      data: 'id'
    }, {
      data: 'title'
    }, {
      data: 'categories'
    }, {
      data: 'commentsCount'
    }, {
      data: 'likesCount'
    }, {
      data: 'createdAt'
    }, {
      data: 'actions',
      orderable: false,
      searchable: false
    }],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json'
    },
    order: [[0, 'desc']]
  });

  // Recherche en temps réel
  var $searchInput = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#search-article');
  var $searchResults = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#search-results');
  var searchTimeout;
  $searchInput.on('input', function () {
    var query = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).val().trim();

    // Effacer le timeout précédent
    clearTimeout(searchTimeout);
    if (query.length < 2) {
      $searchResults.removeClass('show').html('');
      return;
    }

    // Définir un délai avant d'envoyer la requête
    searchTimeout = setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default().ajax({
        url: '/api/articles/search',
        method: 'GET',
        data: {
          q: query
        },
        dataType: 'json',
        success: function success(response) {
          if (response.results && response.results.length > 0) {
            var html = '';
            response.results.forEach(function (article) {
              html += "\n\t\t\t\t\t\t\t\t\t".concat(article.title, "\n\t\t\t\t\t\t\t\t\t").concat(article.categories.join(', '), "\n\t\t\t\t\t\t\t\t");
            });
            $searchResults.html(html).addClass('show');
          } else {
            $searchResults.html('Aucun résultat trouvé').addClass('show');
          }
        }
      });
    }, 300);
  });

  // Cliquer sur un résultat de recherche
  jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).on('click', '.search-item', function () {
    var articleId = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).data('id');
    if (articleId) {
      window.location.href = "/article/".concat(articleId);
    }
  });

  // Cacher les résultats quand on clique ailleurs
  jquery__WEBPACK_IMPORTED_MODULE_7___default()(document).on('click', function (e) {
    if (!jquery__WEBPACK_IMPORTED_MODULE_7___default()(e.target).closest('.search-container').length) {
      $searchResults.removeClass('show');
    }
  });
});

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "./node_modules/stimulus/dist/stimulus.js");
/* harmony import */ var stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stimulus/webpack-helpers */ "./node_modules/stimulus/dist/webpack-helpers.js");
// ./assets/bootstrap.js




// Démarre l’application Stimulus
var application = stimulus__WEBPACK_IMPORTED_MODULE_0__.Application.start();

// Charge automatiquement tous les contrôleurs Stimulus dans le dossier ./controllers
var context = __webpack_require__("./assets/controllers sync recursive \\.js$");
application.load((0,stimulus_webpack_helpers__WEBPACK_IMPORTED_MODULE_1__.definitionsFromContext)(context));

/***/ }),

/***/ "./assets/controllers sync recursive \\.js$":
/*!****************************************!*\
  !*** ./assets/controllers/ sync \.js$ ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./csrf_protection_controller.js": "./assets/controllers/csrf_protection_controller.js",
	"./hello_controller.js": "./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive \\.js$";

/***/ }),

/***/ "./assets/controllers/csrf_protection_controller.js":
/*!**********************************************************!*\
  !*** ./assets/controllers/csrf_protection_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateCsrfHeaders: () => (/* binding */ generateCsrfHeaders),
/* harmony export */   generateCsrfToken: () => (/* binding */ generateCsrfToken),
/* harmony export */   removeCsrfToken: () => (/* binding */ removeCsrfToken)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_31__);
































var nameCheck = /^[-_a-zA-Z0-9]{4,22}$/;
var tokenCheck = /^[-_\/+a-zA-Z0-9]{24,}$/;

// Generate and double-submit a CSRF token in a form field and a cookie, as defined by Symfony's SameOriginCsrfTokenManager
document.addEventListener('submit', function (event) {
  generateCsrfToken(event.target);
}, true);

// When @hotwired/turbo handles form submissions, send the CSRF token in a header in addition to a cookie
// The `framework.csrf_protection.check_header` config option needs to be enabled for the header to be checked
document.addEventListener('turbo:submit-start', function (event) {
  var h = generateCsrfHeaders(event.detail.formSubmission.formElement);
  Object.keys(h).map(function (k) {
    event.detail.formSubmission.fetchRequest.headers[k] = h[k];
  });
});

// When @hotwired/turbo handles form submissions, remove the CSRF cookie once a form has been submitted
document.addEventListener('turbo:submit-end', function (event) {
  removeCsrfToken(event.detail.formSubmission.formElement);
});
function generateCsrfToken(formElement) {
  var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  var csrfToken = csrfField.value;
  if (!csrfCookie && nameCheck.test(csrfToken)) {
    csrfField.setAttribute('data-csrf-protection-cookie-value', csrfCookie = csrfToken);
    csrfField.defaultValue = csrfToken = btoa(String.fromCharCode.apply(null, (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(18))));
    csrfField.dispatchEvent(new Event('change', {
      bubbles: true
    }));
  }
  if (csrfCookie && tokenCheck.test(csrfToken)) {
    var cookie = csrfCookie + '_' + csrfToken + '=' + csrfCookie + '; path=/; samesite=strict';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
}
function generateCsrfHeaders(formElement) {
  var headers = {};
  var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return headers;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    headers[csrfCookie] = csrfField.value;
  }
  return headers;
}
function removeCsrfToken(formElement) {
  var csrfField = formElement.querySelector('input[data-controller="csrf-protection"], input[name="_csrf_token"]');
  if (!csrfField) {
    return;
  }
  var csrfCookie = csrfField.getAttribute('data-csrf-protection-cookie-value');
  if (tokenCheck.test(csrfField.value) && nameCheck.test(csrfCookie)) {
    var cookie = csrfCookie + '_' + csrfField.value + '=0; path=/; samesite=strict; max-age=0';
    document.cookie = window.location.protocol === 'https:' ? '__Host-' + cookie + '; secure' : cookie;
  }
}

/* stimulusFetch: 'lazy' */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('csrf-protection-controller');

/***/ }),

/***/ "./assets/controllers/hello_controller.js":
/*!************************************************!*\
  !*** ./assets/controllers/hello_controller.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_16__.Controller);


/***/ }),

/***/ "./assets/datatables.js":
/*!******************************!*\
  !*** ./assets/datatables.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/dataTables.mjs");
/* harmony import */ var datatables_net_bs5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! datatables.net-bs5 */ "./node_modules/datatables.net-bs5/js/dataTables.bootstrap5.mjs");
/* harmony import */ var datatables_net_responsive_bs5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net-responsive-bs5 */ "./node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.mjs");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");






jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // Vérifier si DataTable est déjà initialisé
  if (!jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.DataTable.isDataTable('#articlesTable')) {
    console.log("Initialisation de DataTables...");
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#articlesTable').DataTable({
      ajax: "/api/articles",
      pageLength: 3,
      columns: [{
        data: 'id'
      }, {
        data: 'title'
      }, {
        data: 'content'
      }, {
        data: 'createdAt'
      }, {
        data: null,
        orderable: false,
        searchable: false,
        render: function render(data, type, row, meta) {
          return "\n                            <div class=\"d-flex gap-1\">\n                                <a href=\"/blog/".concat(row.id, "\" class=\"btn btn-theme btn-sm\">Voir</a>\n                                <a href=\"/blog/").concat(row.id, "/edit\" class=\"btn btn-warning btn-sm\">Modifier</a>\n                            </div>\n                        ");
        }
      }],
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.13.5/i18n/fr-FR.json'
      },
      responsive: true
    });
  }
});

/***/ }),

/***/ "./assets/like.js":
/*!************************!*\
  !*** ./assets/like.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




window.$ = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
document.addEventListener('DOMContentLoaded', function () {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()('.like-btn').on('click', function (e) {
    e.preventDefault();
    var button = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this);
    var id = button.data('id');
    var type = button.data('type');
    if (!id || !type) {
      console.error('ID ou type manquant');
      return;
    }
    button.prop('disabled', true);
    jquery__WEBPACK_IMPORTED_MODULE_3___default().ajax({
      url: "/like/".concat(type, "/").concat(id),
      type: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      success: function success(data) {
        console.log('Réponse reçue:', data);
        button.find('span').text(data.likesCount);
      },
      error: function error(xhr, status, _error) {
        console.error('Erreur AJAX:', _error);
        if (xhr.status === 401) {
          alert('Vous devez être connecté pour liker.');
        } else {
          alert('Erreur inconnue.');
        }
      },
      complete: function complete() {
        button.prop('disabled', false);
      }
    });
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_array-species-creat-df6cf8","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_datatables_net-responsiv-5233a4","vendors-node_modules_datatables_net-bs5_css_dataTables_bootstrap5_min_css-node_modules_datata-10a5c4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-9d8eef","vendors-node_modules_hotwired_stimulus_dist_stimulus_js-node_modules_bootstrap_dist_js_bootst-265d23","assets_styles_app_scss"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFVLENBQUM7TUFDN0MsQ0FBQztNQUNEUCxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWWdILEdBQUcsRUFBRUMsTUFBTSxFQUFFakgsTUFBSyxFQUFFO1FBQ2pDeEMsT0FBTyxDQUFDd0MsS0FBSyxDQUFDLGNBQWMsRUFBRUEsTUFBSyxDQUFDO1FBQ3BDLElBQUlnSCxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUU7VUFDcEJwRyxLQUFLLENBQUMsc0NBQXNDLENBQUM7UUFDakQsQ0FBQyxNQUFNO1VBQ0hBLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztRQUM3QjtNQUNKLENBQUM7TUFDRFosUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUEsRUFBYTtRQUNqQjhHLE1BQU0sQ0FBQy9ILElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2xDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM3Q0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcnRpY2xlc19saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2RhdGF0YWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL2RhdGF0YWJsZXMnO1xyXG5pbXBvcnQgJy4vYXJ0aWNsZSc7XHJcbmltcG9ydCAnLi9hcnRpY2xlc19saXN0JztcclxuaW1wb3J0ICcuL2xpa2UuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSB3aWxsIGJlIGluY2x1ZGVkIG9udG8gdGhlIHBhZ2UgdmlhIHRoZSBpbXBvcnRtYXAoKSBUd2lnIGZ1bmN0aW9uLFxyXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxyXG4gKi9cclxuXHJcbmNvbnNvbGUubG9nKCdUaGlzIGxvZyBjb21lcyBmcm9tIGFzc2V0cy9hcHAuanMgLSB3ZWxjb21lIHRvIEFzc2V0TWFwcGVyISDwn46JJyk7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQnO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNSc7XHJcblxyXG5cdC8vIEluaXRpYWxpc2F0aW9uIGdsb2JhbGVcclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cdFx0Ly8gQWN0aXZlciBsZXMgdG9vbHRpcHMgQm9vdHN0cmFwXHJcblx0XHRjb25zdCB0b29sdGlwVHJpZ2dlckxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJzLXRvZ2dsZT1cInRvb2x0aXBcIl0nKSk7XHJcblx0XHR0b29sdGlwVHJpZ2dlckxpc3QubWFwKGZ1bmN0aW9uICh0b29sdGlwVHJpZ2dlckVsKSB7XHJcblx0XHRcdHJldHVybiBuZXcgYm9vdHN0cmFwLlRvb2x0aXAodG9vbHRpcFRyaWdnZXJFbCk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly8gU3lzdMOobWUgZGUgY29tbWVudGFpcmVzIGVuIEFKQVhcclxuXHRcdFx0Y29uc3QgJGNvbW1lbnRGb3JtID0gJCgnI2NvbW1lbnQtZm9ybScpO1xyXG5cdFx0XHRjb25zdCAkY29tbWVudHNMaXN0ID0gJCgnI2NvbW1lbnRzLWxpc3QnKTtcclxuXHRcdFx0Y29uc3QgJGNvbW1lbnRzQ291bnQgPSAkKCcjY29tbWVudHMtY291bnQnKTtcclxuXHJcblx0XHRcdCRjb21tZW50Rm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgJHN1Ym1pdEJ0biA9ICRjb21tZW50Rm9ybS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xyXG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsQnRuVGV4dCA9ICRzdWJtaXRCdG4uaHRtbCgpO1xyXG5cclxuXHRcdFx0XHQvLyBEw6lzYWN0aXZlciBsZSBib3V0b24gZXQgYWZmaWNoZXIgdW4gaW5kaWNhdGV1ciBkZSBjaGFyZ2VtZW50XHJcblx0XHRcdFx0JHN1Ym1pdEJ0bi5odG1sKCdFbnZvaSBlbiBjb3Vycy4uLicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6ICRjb21tZW50Rm9ybS5hdHRyKCdhY3Rpb24nKSxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YTogJGNvbW1lbnRGb3JtLnNlcmlhbGl6ZSgpLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gQWpvdXRlciBsZSBub3V2ZWF1IGNvbW1lbnRhaXJlIMOgIGxhIGxpc3RlXHJcblx0XHRcdFx0XHRcdFx0JGNvbW1lbnRzTGlzdC5wcmVwZW5kKHJlc3BvbnNlLmNvbW1lbnRIdG1sKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gTWV0dHJlIMOgIGpvdXIgbGUgY29tcHRldXIgZGUgY29tbWVudGFpcmVzXHJcblx0XHRcdFx0XHRcdFx0JGNvbW1lbnRzQ291bnQudGV4dChyZXNwb25zZS5jb21tZW50c0NvdW50KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gUsOpaW5pdGlhbGlzZXIgbGUgZm9ybXVsYWlyZVxyXG5cdFx0XHRcdFx0XHRcdCRjb21tZW50Rm9ybVswXS5yZXNldCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBBZmZpY2hlciB1biBtZXNzYWdlIGRlIHN1Y2PDqHNcclxuXHRcdFx0XHRcdFx0XHRzaG93QWxlcnQoJ3N1Y2Nlc3MnLCAnVm90cmUgY29tbWVudGFpcmUgYSDDqXTDqSBwdWJsacOpIGF2ZWMgc3VjY8OocyAhJyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2hvd0FsZXJ0KCdkYW5nZXInLCByZXNwb25zZS5lcnJvciB8fCAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsXFwnZW52b2kgZHVjb21tZW50YWlyZS4nKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0c2hvd0FsZXJ0KCdkYW5nZXInLCAnVW5lIGVycmV1ciBlc3Qgc3VydmVudWUgbG9ycyBkZSBsXFwnZW52b2kgZHUgY29tbWVudGFpcmUuJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQvLyBSw6lhY3RpdmVyIGxlIGJvdXRvblxyXG5cdFx0XHRcdFx0XHQkc3VibWl0QnRuLmh0bWwob3JpZ2luYWxCdG5UZXh0KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBTeXN0w6htZSBkZSBcImonYWltZVwiIGVuIEFKQVhcclxuXHRcdFx0Y29uc3QgJGxpa2VCdXR0b24gPSAkKCcubGlrZS1idXR0b24nKTtcclxuXHRcdFx0Y29uc3QgYXJ0aWNsZUlkID0gJGxpa2VCdXR0b24uZGF0YSgnYXJ0aWNsZS1pZCcpO1xyXG5cclxuXHRcdFx0JGxpa2VCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybDogYC9hcnRpY2xlLyR7YXJ0aWNsZUlkfS9saWtlYCxcclxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gTWV0dHJlIMOgIGpvdXIgbCfDqXRhdCBkdSBib3V0b25cclxuXHRcdFx0XHRcdFx0XHQkbGlrZUJ1dHRvbi50b2dnbGVDbGFzcygnbGlrZWQnLCByZXNwb25zZS5saWtlZCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbXB0ZXVyIGRlIGxpa2VzXHJcblx0XHRcdFx0XHRcdFx0JCgnI2xpa2VzLWNvdW50JykudGV4dChyZXNwb25zZS5saWtlc0NvdW50KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgZGVzIGFsZXJ0ZXNcclxuXHRcdFx0ZnVuY3Rpb24gc2hvd0FsZXJ0KHR5cGUsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRjb25zdCAkYWxlcnQgPSAkKGBcclxuXHRcdFx0XHRcdCR7bWVzc2FnZX1cclxuXHJcblx0XHRcdFx0YCk7XHJcblxyXG5cdFx0XHRcdCQoJyNhbGVydHMtY29udGFpbmVyJykuYXBwZW5kKCRhbGVydCk7XHJcblxyXG5cdFx0XHRcdC8vIEZhaXJlIGRpc3BhcmHDrnRyZSBsJ2FsZXJ0ZSBhcHLDqHMgNSBzZWNvbmRlc1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0JGFsZXJ0LmFsZXJ0KCdjbG9zZScpO1xyXG5cdFx0XHRcdH0sIDUwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cdGltcG9ydCAnZGF0YXRhYmxlcy5uZXQnO1xyXG5cdGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM1JztcclxuXHRpbXBvcnQgJ2RhdGF0YWJsZXMubmV0LXJlc3BvbnNpdmUtYnM1JztcclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBJbml0aWFsaXNhdGlvbiBkZSBEYXRhVGFibGVzXHJcblx0XHRjb25zdCBhcnRpY2xlc1RhYmxlID0gJCgnI2FydGljbGVzLXRhYmxlJykuRGF0YVRhYmxlKHtcclxuXHRcdFx0cHJvY2Vzc2luZzogdHJ1ZSxcclxuXHRcdFx0c2VydmVyU2lkZTogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0YWpheDoge1xyXG5cdFx0XHRcdHVybDogJy9hcGkvYXJ0aWNsZXMnLFxyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0eyBkYXRhOiAnaWQnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAndGl0bGUnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAnY2F0ZWdvcmllcycgfSxcclxuXHRcdFx0XHR7IGRhdGE6ICdjb21tZW50c0NvdW50JyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2xpa2VzQ291bnQnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAnY3JlYXRlZEF0JyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2FjdGlvbnMnLCBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZSB9XHJcblx0XHRcdF0sXHJcblx0XHRcdGxhbmd1YWdlOiB7XHJcblx0XHRcdFx0dXJsOiAnLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvMS4xMy40L2kxOG4vZnItRlIuanNvbidcclxuXHRcdFx0fSxcclxuXHRcdFx0b3JkZXI6IFtbMCwgJ2Rlc2MnXV1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFJlY2hlcmNoZSBlbiB0ZW1wcyByw6llbFxyXG5cdFx0Y29uc3QgJHNlYXJjaElucHV0ID0gJCgnI3NlYXJjaC1hcnRpY2xlJyk7XHJcblx0XHRjb25zdCAkc2VhcmNoUmVzdWx0cyA9ICQoJyNzZWFyY2gtcmVzdWx0cycpO1xyXG5cdFx0bGV0IHNlYXJjaFRpbWVvdXQ7XHJcblxyXG5cdFx0JHNlYXJjaElucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBxdWVyeSA9ICQodGhpcykudmFsKCkudHJpbSgpO1xyXG5cclxuXHRcdFx0Ly8gRWZmYWNlciBsZSB0aW1lb3V0IHByw6ljw6lkZW50XHJcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KTtcclxuXHJcblx0XHRcdGlmIChxdWVyeS5sZW5ndGggPCAyKSB7XHJcblx0XHRcdFx0JHNlYXJjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5odG1sKCcnKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIETDqWZpbmlyIHVuIGTDqWxhaSBhdmFudCBkJ2Vudm95ZXIgbGEgcmVxdcOqdGVcclxuXHRcdFx0c2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6ICcvYXBpL2FydGljbGVzL3NlYXJjaCcsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdFx0ZGF0YTogeyBxOiBxdWVyeSB9LFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5yZXN1bHRzICYmIHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBodG1sID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnJlc3VsdHMuZm9yRWFjaChhcnRpY2xlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQke2FydGljbGUudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCR7YXJ0aWNsZS5jYXRlZ29yaWVzLmpvaW4oJywgJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRgO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkc2VhcmNoUmVzdWx0cy5odG1sKGh0bWwpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JHNlYXJjaFJlc3VsdHMuaHRtbCgnQXVjdW4gcsOpc3VsdGF0IHRyb3V2w6knKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDMwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBDbGlxdWVyIHN1ciB1biByw6lzdWx0YXQgZGUgcmVjaGVyY2hlXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlYXJjaC1pdGVtJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0IGFydGljbGVJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuXHRcdFx0aWYgKGFydGljbGVJZCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlLyR7YXJ0aWNsZUlkfWA7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIENhY2hlciBsZXMgcsOpc3VsdGF0cyBxdWFuZCBvbiBjbGlxdWUgYWlsbGV1cnNcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2VhcmNoLWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG5cdFx0XHRcdCRzZWFyY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pOyIsIi8vIC4vYXNzZXRzL2Jvb3RzdHJhcC5qc1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tIFwic3RpbXVsdXNcIjtcclxuaW1wb3J0IHsgZGVmaW5pdGlvbnNGcm9tQ29udGV4dCB9IGZyb20gXCJzdGltdWx1cy93ZWJwYWNrLWhlbHBlcnNcIjtcclxuXHJcbi8vIETDqW1hcnJlIGzigJlhcHBsaWNhdGlvbiBTdGltdWx1c1xyXG5jb25zdCBhcHBsaWNhdGlvbiA9IEFwcGxpY2F0aW9uLnN0YXJ0KCk7XHJcblxyXG4vLyBDaGFyZ2UgYXV0b21hdGlxdWVtZW50IHRvdXMgbGVzIGNvbnRyw7RsZXVycyBTdGltdWx1cyBkYW5zIGxlIGRvc3NpZXIgLi9jb250cm9sbGVyc1xyXG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwiLi9jb250cm9sbGVyc1wiLCB0cnVlLCAvXFwuanMkLyk7XHJcbmFwcGxpY2F0aW9uLmxvYWQoZGVmaW5pdGlvbnNGcm9tQ29udGV4dChjb250ZXh0KSk7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzL2NzcmZfcHJvdGVjdGlvbl9jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsImNvbnN0IG5hbWVDaGVjayA9IC9eWy1fYS16QS1aMC05XXs0LDIyfSQvO1xyXG5jb25zdCB0b2tlbkNoZWNrID0gL15bLV9cXC8rYS16QS1aMC05XXsyNCx9JC87XHJcblxyXG4vLyBHZW5lcmF0ZSBhbmQgZG91YmxlLXN1Ym1pdCBhIENTUkYgdG9rZW4gaW4gYSBmb3JtIGZpZWxkIGFuZCBhIGNvb2tpZSwgYXMgZGVmaW5lZCBieSBTeW1mb255J3MgU2FtZU9yaWdpbkNzcmZUb2tlbk1hbmFnZXJcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBnZW5lcmF0ZUNzcmZUb2tlbihldmVudC50YXJnZXQpO1xyXG59LCB0cnVlKTtcclxuXHJcbi8vIFdoZW4gQGhvdHdpcmVkL3R1cmJvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucywgc2VuZCB0aGUgQ1NSRiB0b2tlbiBpbiBhIGhlYWRlciBpbiBhZGRpdGlvbiB0byBhIGNvb2tpZVxyXG4vLyBUaGUgYGZyYW1ld29yay5jc3JmX3Byb3RlY3Rpb24uY2hlY2tfaGVhZGVyYCBjb25maWcgb3B0aW9uIG5lZWRzIHRvIGJlIGVuYWJsZWQgZm9yIHRoZSBoZWFkZXIgdG8gYmUgY2hlY2tlZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpzdWJtaXQtc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGNvbnN0IGggPSBnZW5lcmF0ZUNzcmZIZWFkZXJzKGV2ZW50LmRldGFpbC5mb3JtU3VibWlzc2lvbi5mb3JtRWxlbWVudCk7XHJcbiAgICBPYmplY3Qua2V5cyhoKS5tYXAoZnVuY3Rpb24gKGspIHtcclxuICAgICAgICBldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZmV0Y2hSZXF1ZXN0LmhlYWRlcnNba10gPSBoW2tdO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gV2hlbiBAaG90d2lyZWQvdHVyYm8gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb25zLCByZW1vdmUgdGhlIENTUkYgY29va2llIG9uY2UgYSBmb3JtIGhhcyBiZWVuIHN1Ym1pdHRlZFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJibzpzdWJtaXQtZW5kJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICByZW1vdmVDc3JmVG9rZW4oZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZvcm1FbGVtZW50KTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDc3JmVG9rZW4gKGZvcm1FbGVtZW50KSB7XHJcbiAgICBjb25zdCBjc3JmRmllbGQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtkYXRhLWNvbnRyb2xsZXI9XCJjc3JmLXByb3RlY3Rpb25cIl0sIGlucHV0W25hbWU9XCJfY3NyZl90b2tlblwiXScpO1xyXG5cclxuICAgIGlmICghY3NyZkZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XHJcbiAgICBsZXQgY3NyZlRva2VuID0gY3NyZkZpZWxkLnZhbHVlO1xyXG5cclxuICAgIGlmICghY3NyZkNvb2tpZSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XHJcbiAgICAgICAgY3NyZkZpZWxkLnNldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJywgY3NyZkNvb2tpZSA9IGNzcmZUb2tlbik7XHJcbiAgICAgICAgY3NyZkZpZWxkLmRlZmF1bHRWYWx1ZSA9IGNzcmZUb2tlbiA9IGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCAod2luZG93LmNyeXB0byB8fCB3aW5kb3cubXNDcnlwdG8pLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxOCkpKSk7XHJcbiAgICAgICAgY3NyZkZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjc3JmQ29va2llICYmIHRva2VuQ2hlY2sudGVzdChjc3JmVG9rZW4pKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llID0gY3NyZkNvb2tpZSArICdfJyArIGNzcmZUb2tlbiArICc9JyArIGNzcmZDb29raWUgKyAnOyBwYXRoPS87IHNhbWVzaXRlPXN0cmljdCc7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyA/ICdfX0hvc3QtJyArIGNvb2tpZSArICc7IHNlY3VyZScgOiBjb29raWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNzcmZIZWFkZXJzIChmb3JtRWxlbWVudCkge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xyXG4gICAgY29uc3QgY3NyZkZpZWxkID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcclxuXHJcbiAgICBpZiAoIWNzcmZGaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmZDb29raWUgPSBjc3JmRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWNzcmYtcHJvdGVjdGlvbi1jb29raWUtdmFsdWUnKTtcclxuXHJcbiAgICBpZiAodG9rZW5DaGVjay50ZXN0KGNzcmZGaWVsZC52YWx1ZSkgJiYgbmFtZUNoZWNrLnRlc3QoY3NyZkNvb2tpZSkpIHtcclxuICAgICAgICBoZWFkZXJzW2NzcmZDb29raWVdID0gY3NyZkZpZWxkLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ3NyZlRva2VuIChmb3JtRWxlbWVudCkge1xyXG4gICAgY29uc3QgY3NyZkZpZWxkID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcclxuXHJcbiAgICBpZiAoIWNzcmZGaWVsZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XHJcblxyXG4gICAgaWYgKHRva2VuQ2hlY2sudGVzdChjc3JmRmllbGQudmFsdWUpICYmIG5hbWVDaGVjay50ZXN0KGNzcmZDb29raWUpKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llID0gY3NyZkNvb2tpZSArICdfJyArIGNzcmZGaWVsZC52YWx1ZSArICc9MDsgcGF0aD0vOyBzYW1lc2l0ZT1zdHJpY3Q7IG1heC1hZ2U9MCc7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnX19Ib3N0LScgKyBjb29raWUgKyAnOyBzZWN1cmUnIDogY29va2llO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBzdGltdWx1c0ZldGNoOiAnbGF6eScgKi9cclxuZXhwb3J0IGRlZmF1bHQgJ2NzcmYtcHJvdGVjdGlvbi1jb250cm9sbGVyJztcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczUnO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0LXJlc3BvbnNpdmUtYnM1JztcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFbDqXJpZmllciBzaSBEYXRhVGFibGUgZXN0IGTDqWrDoCBpbml0aWFsaXPDqVxyXG4gICAgaWYgKCEkLmZuLkRhdGFUYWJsZS5pc0RhdGFUYWJsZSgnI2FydGljbGVzVGFibGUnKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdGlhbGlzYXRpb24gZGUgRGF0YVRhYmxlcy4uLlwiKTtcclxuICAgICAgICAkKCcjYXJ0aWNsZXNUYWJsZScpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIGFqYXg6IFwiL2FwaS9hcnRpY2xlc1wiLFxyXG4gICAgICAgICAgICBwYWdlTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdpZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ3RpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBkYXRhOiAnY29udGVudCcgfSxcclxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ2NyZWF0ZWRBdCcgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoZGF0YSwgdHlwZSwgcm93LCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGdhcC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9ibG9nLyR7cm93LmlkfVwiIGNsYXNzPVwiYnRuIGJ0bi10aGVtZSBidG4tc21cIj5Wb2lyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZy8ke3Jvdy5pZH0vZWRpdFwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbVwiPk1vZGlmaWVyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBsYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvMS4xMy41L2kxOG4vZnItRlIuanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG53aW5kb3cuJCA9ICQ7XHJcbndpbmRvdy5qUXVlcnkgPSAkO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5saWtlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b24gPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gYnV0dG9uLmRhdGEoJ2lkJyk7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGJ1dHRvbi5kYXRhKCd0eXBlJyk7XHJcblxyXG4gICAgICAgIGlmICghaWQgfHwgIXR5cGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSUQgb3UgdHlwZSBtYW5xdWFudCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgL2xpa2UvJHt0eXBlfS8ke2lkfWAsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1LDqXBvbnNlIHJlw6d1ZTonLCBkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uZmluZCgnc3BhbicpLnRleHQoZGF0YS5saWtlc0NvdW50KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBBSkFYOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVm91cyBkZXZleiDDqnRyZSBjb25uZWN0w6kgcG91ciBsaWtlci4nKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0VycmV1ciBpbmNvbm51ZS4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidG9vbHRpcFRyaWdnZXJMaXN0Iiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsInRvb2x0aXBUcmlnZ2VyRWwiLCJib290c3RyYXAiLCJUb29sdGlwIiwiJCIsInJlYWR5IiwiJGNvbW1lbnRGb3JtIiwiJGNvbW1lbnRzTGlzdCIsIiRjb21tZW50c0NvdW50Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkc3VibWl0QnRuIiwiZmluZCIsIm9yaWdpbmFsQnRuVGV4dCIsImh0bWwiLCJwcm9wIiwiYWpheCIsInVybCIsImF0dHIiLCJtZXRob2QiLCJkYXRhIiwic2VyaWFsaXplIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJwcmVwZW5kIiwiY29tbWVudEh0bWwiLCJ0ZXh0IiwiY29tbWVudHNDb3VudCIsInJlc2V0Iiwic2hvd0FsZXJ0IiwiZXJyb3IiLCJjb21wbGV0ZSIsIiRsaWtlQnV0dG9uIiwiYXJ0aWNsZUlkIiwiY29uY2F0IiwidG9nZ2xlQ2xhc3MiLCJsaWtlZCIsImxpa2VzQ291bnQiLCJ0eXBlIiwibWVzc2FnZSIsIiRhbGVydCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJhbGVydCIsImFydGljbGVzVGFibGUiLCJEYXRhVGFibGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsInJlc3BvbnNpdmUiLCJjb2x1bW5zIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImxhbmd1YWdlIiwib3JkZXIiLCIkc2VhcmNoSW5wdXQiLCIkc2VhcmNoUmVzdWx0cyIsInNlYXJjaFRpbWVvdXQiLCJxdWVyeSIsInZhbCIsInRyaW0iLCJjbGVhclRpbWVvdXQiLCJsZW5ndGgiLCJyZW1vdmVDbGFzcyIsInEiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImFydGljbGUiLCJ0aXRsZSIsImNhdGVnb3JpZXMiLCJqb2luIiwiYWRkQ2xhc3MiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiQXBwbGljYXRpb24iLCJkZWZpbml0aW9uc0Zyb21Db250ZXh0IiwiYXBwbGljYXRpb24iLCJzdGFydCIsImNvbnRleHQiLCJyZXF1aXJlIiwibG9hZCIsIm5hbWVDaGVjayIsInRva2VuQ2hlY2siLCJldmVudCIsImdlbmVyYXRlQ3NyZlRva2VuIiwiaCIsImdlbmVyYXRlQ3NyZkhlYWRlcnMiLCJkZXRhaWwiLCJmb3JtU3VibWlzc2lvbiIsImZvcm1FbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImsiLCJmZXRjaFJlcXVlc3QiLCJoZWFkZXJzIiwicmVtb3ZlQ3NyZlRva2VuIiwiY3NyZkZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNzcmZDb29raWUiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmVG9rZW4iLCJ2YWx1ZSIsInRlc3QiLCJzZXRBdHRyaWJ1dGUiLCJkZWZhdWx0VmFsdWUiLCJidG9hIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJjcnlwdG8iLCJtc0NyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY29va2llIiwicHJvdG9jb2wiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsImZuIiwiaXNEYXRhVGFibGUiLCJwYWdlTGVuZ3RoIiwicmVuZGVyIiwicm93IiwibWV0YSIsImlkIiwialF1ZXJ5IiwiYnV0dG9uIiwieGhyIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==