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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFVLENBQUM7TUFDN0MsQ0FBQztNQUNEUCxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWWdILEdBQUcsRUFBRUMsTUFBTSxFQUFFakgsTUFBSyxFQUFFO1FBQ2pDeEMsT0FBTyxDQUFDd0MsS0FBSyxDQUFDLGNBQWMsRUFBRUEsTUFBSyxDQUFDO1FBQ3BDLElBQUlnSCxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUU7VUFDcEJwRyxLQUFLLENBQUMsc0NBQXNDLENBQUM7UUFDakQsQ0FBQyxNQUFNO1VBQ0hBLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztRQUM3QjtNQUNKLENBQUM7TUFDRFosUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUEsRUFBYTtRQUNqQjhHLE1BQU0sQ0FBQy9ILElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO01BQ2xDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUM3Q0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcnRpY2xlc19saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLyBzeW5jIFxcLmpzJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2RhdGF0YWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYm9vdHN0cmFwLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9kYXRhdGFibGVzJztcclxuaW1wb3J0ICcuL2FydGljbGUnO1xyXG5pbXBvcnQgJy4vYXJ0aWNsZXNfbGlzdCc7XHJcbmltcG9ydCAnLi9saWtlLmpzJztcclxuLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcclxuICogd2hpY2ggc2hvdWxkIGFscmVhZHkgYmUgaW4geW91ciBiYXNlLmh0bWwudHdpZy5cclxuICovXHJcblxyXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQgJ2RhdGF0YWJsZXMubmV0JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1iczUnO1xyXG5cclxuXHQvLyBJbml0aWFsaXNhdGlvbiBnbG9iYWxlXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHRcdC8vIEFjdGl2ZXIgbGVzIHRvb2x0aXBzIEJvb3RzdHJhcFxyXG5cdFx0Y29uc3QgdG9vbHRpcFRyaWdnZXJMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykpO1xyXG5cdFx0dG9vbHRpcFRyaWdnZXJMaXN0Lm1hcChmdW5jdGlvbiAodG9vbHRpcFRyaWdnZXJFbCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKHRvb2x0aXBUcmlnZ2VyRWwpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cdFx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vIFN5c3TDqG1lIGRlIGNvbW1lbnRhaXJlcyBlbiBBSkFYXHJcblx0XHRcdGNvbnN0ICRjb21tZW50Rm9ybSA9ICQoJyNjb21tZW50LWZvcm0nKTtcclxuXHRcdFx0Y29uc3QgJGNvbW1lbnRzTGlzdCA9ICQoJyNjb21tZW50cy1saXN0Jyk7XHJcblx0XHRcdGNvbnN0ICRjb21tZW50c0NvdW50ID0gJCgnI2NvbW1lbnRzLWNvdW50Jyk7XHJcblxyXG5cdFx0XHQkY29tbWVudEZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdGNvbnN0ICRzdWJtaXRCdG4gPSAkY29tbWVudEZvcm0uZmluZCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcclxuXHRcdFx0XHRjb25zdCBvcmlnaW5hbEJ0blRleHQgPSAkc3VibWl0QnRuLmh0bWwoKTtcclxuXHJcblx0XHRcdFx0Ly8gRMOpc2FjdGl2ZXIgbGUgYm91dG9uIGV0IGFmZmljaGVyIHVuIGluZGljYXRldXIgZGUgY2hhcmdlbWVudFxyXG5cdFx0XHRcdCRzdWJtaXRCdG4uaHRtbCgnRW52b2kgZW4gY291cnMuLi4nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG5cclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0dXJsOiAkY29tbWVudEZvcm0uYXR0cignYWN0aW9uJyksXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGE6ICRjb21tZW50Rm9ybS5zZXJpYWxpemUoKSxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIEFqb3V0ZXIgbGUgbm91dmVhdSBjb21tZW50YWlyZSDDoCBsYSBsaXN0ZVxyXG5cdFx0XHRcdFx0XHRcdCRjb21tZW50c0xpc3QucHJlcGVuZChyZXNwb25zZS5jb21tZW50SHRtbCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGxlIGNvbXB0ZXVyIGRlIGNvbW1lbnRhaXJlc1xyXG5cdFx0XHRcdFx0XHRcdCRjb21tZW50c0NvdW50LnRleHQocmVzcG9uc2UuY29tbWVudHNDb3VudCk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIFLDqWluaXRpYWxpc2VyIGxlIGZvcm11bGFpcmVcclxuXHRcdFx0XHRcdFx0XHQkY29tbWVudEZvcm1bMF0ucmVzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gQWZmaWNoZXIgdW4gbWVzc2FnZSBkZSBzdWNjw6hzXHJcblx0XHRcdFx0XHRcdFx0c2hvd0FsZXJ0KCdzdWNjZXNzJywgJ1ZvdHJlIGNvbW1lbnRhaXJlIGEgw6l0w6kgcHVibGnDqSBhdmVjIHN1Y2PDqHMgIScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNob3dBbGVydCgnZGFuZ2VyJywgcmVzcG9uc2UuZXJyb3IgfHwgJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbFxcJ2Vudm9pIGR1Y29tbWVudGFpcmUuJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHNob3dBbGVydCgnZGFuZ2VyJywgJ1VuZSBlcnJldXIgZXN0IHN1cnZlbnVlIGxvcnMgZGUgbFxcJ2Vudm9pIGR1IGNvbW1lbnRhaXJlLicpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gUsOpYWN0aXZlciBsZSBib3V0b25cclxuXHRcdFx0XHRcdFx0JHN1Ym1pdEJ0bi5odG1sKG9yaWdpbmFsQnRuVGV4dCkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Ly8gU3lzdMOobWUgZGUgXCJqJ2FpbWVcIiBlbiBBSkFYXHJcblx0XHRcdGNvbnN0ICRsaWtlQnV0dG9uID0gJCgnLmxpa2UtYnV0dG9uJyk7XHJcblx0XHRcdGNvbnN0IGFydGljbGVJZCA9ICRsaWtlQnV0dG9uLmRhdGEoJ2FydGljbGUtaWQnKTtcclxuXHJcblx0XHRcdCRsaWtlQnV0dG9uLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6IGAvYXJ0aWNsZS8ke2FydGljbGVJZH0vbGlrZWAsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdC8vIE1ldHRyZSDDoCBqb3VyIGwnw6l0YXQgZHUgYm91dG9uXHJcblx0XHRcdFx0XHRcdFx0JGxpa2VCdXR0b24udG9nZ2xlQ2xhc3MoJ2xpa2VkJywgcmVzcG9uc2UubGlrZWQpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBNZXR0cmUgw6Agam91ciBsZSBjb21wdGV1ciBkZSBsaWtlc1xyXG5cdFx0XHRcdFx0XHRcdCQoJyNsaWtlcy1jb3VudCcpLnRleHQocmVzcG9uc2UubGlrZXNDb3VudCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBGb25jdGlvbiBwb3VyIGFmZmljaGVyIGRlcyBhbGVydGVzXHJcblx0XHRcdGZ1bmN0aW9uIHNob3dBbGVydCh0eXBlLCBtZXNzYWdlKSB7XHJcblx0XHRcdFx0Y29uc3QgJGFsZXJ0ID0gJChgXHJcblx0XHRcdFx0XHQke21lc3NhZ2V9XHJcblxyXG5cdFx0XHRcdGApO1xyXG5cclxuXHRcdFx0XHQkKCcjYWxlcnRzLWNvbnRhaW5lcicpLmFwcGVuZCgkYWxlcnQpO1xyXG5cclxuXHRcdFx0XHQvLyBGYWlyZSBkaXNwYXJhw650cmUgbCdhbGVydGUgYXByw6hzIDUgc2Vjb25kZXNcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCRhbGVydC5hbGVydCgnY2xvc2UnKTtcclxuXHRcdFx0XHR9LCA1MDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7IiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHRpbXBvcnQgJ2RhdGF0YWJsZXMubmV0JztcclxuXHRpbXBvcnQgJ2RhdGF0YWJsZXMubmV0LWJzNSc7XHJcblx0aW1wb3J0ICdkYXRhdGFibGVzLm5ldC1yZXNwb25zaXZlLWJzNSc7XHJcblxyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gSW5pdGlhbGlzYXRpb24gZGUgRGF0YVRhYmxlc1xyXG5cdFx0Y29uc3QgYXJ0aWNsZXNUYWJsZSA9ICQoJyNhcnRpY2xlcy10YWJsZScpLkRhdGFUYWJsZSh7XHJcblx0XHRcdHByb2Nlc3Npbmc6IHRydWUsXHJcblx0XHRcdHNlcnZlclNpZGU6IHRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHRydWUsXHJcblx0XHRcdGFqYXg6IHtcclxuXHRcdFx0XHR1cmw6ICcvYXBpL2FydGljbGVzJyxcclxuXHRcdFx0XHR0eXBlOiAnUE9TVCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHsgZGF0YTogJ2lkJyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ3RpdGxlJyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2NhdGVnb3JpZXMnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAnY29tbWVudHNDb3VudCcgfSxcclxuXHRcdFx0XHR7IGRhdGE6ICdsaWtlc0NvdW50JyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2NyZWF0ZWRBdCcgfSxcclxuXHRcdFx0XHR7IGRhdGE6ICdhY3Rpb25zJywgb3JkZXJhYmxlOiBmYWxzZSwgc2VhcmNoYWJsZTogZmFsc2UgfVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRsYW5ndWFnZToge1xyXG5cdFx0XHRcdHVybDogJy8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzEuMTMuNC9pMThuL2ZyLUZSLmpzb24nXHJcblx0XHRcdH0sXHJcblx0XHRcdG9yZGVyOiBbWzAsICdkZXNjJ11dXHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBSZWNoZXJjaGUgZW4gdGVtcHMgcsOpZWxcclxuXHRcdGNvbnN0ICRzZWFyY2hJbnB1dCA9ICQoJyNzZWFyY2gtYXJ0aWNsZScpO1xyXG5cdFx0Y29uc3QgJHNlYXJjaFJlc3VsdHMgPSAkKCcjc2VhcmNoLXJlc3VsdHMnKTtcclxuXHRcdGxldCBzZWFyY2hUaW1lb3V0O1xyXG5cclxuXHRcdCRzZWFyY2hJbnB1dC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Y29uc3QgcXVlcnkgPSAkKHRoaXMpLnZhbCgpLnRyaW0oKTtcclxuXHJcblx0XHRcdC8vIEVmZmFjZXIgbGUgdGltZW91dCBwcsOpY8OpZGVudFxyXG5cdFx0XHRjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7XHJcblxyXG5cdFx0XHRpZiAocXVlcnkubGVuZ3RoIDwgMikge1xyXG5cdFx0XHRcdCRzZWFyY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdzaG93JykuaHRtbCgnJyk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBEw6lmaW5pciB1biBkw6lsYWkgYXZhbnQgZCdlbnZveWVyIGxhIHJlcXXDqnRlXHJcblx0XHRcdHNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0dXJsOiAnL2FwaS9hcnRpY2xlcy9zZWFyY2gnLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdFx0XHRcdGRhdGE6IHsgcTogcXVlcnkgfSxcclxuXHRcdFx0XHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UucmVzdWx0cyAmJiByZXNwb25zZS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaHRtbCA9ICcnO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZS5yZXN1bHRzLmZvckVhY2goYXJ0aWNsZSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRodG1sICs9IGBcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHthcnRpY2xlLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQke2FydGljbGUuY2F0ZWdvcmllcy5qb2luKCcsICcpfVxyXG5cdFx0XHRcdFx0XHRcdFx0YDtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0JHNlYXJjaFJlc3VsdHMuaHRtbChodG1sKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCRzZWFyY2hSZXN1bHRzLmh0bWwoJ0F1Y3VuIHLDqXN1bHRhdCB0cm91dsOpJykuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LCAzMDApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gQ2xpcXVlciBzdXIgdW4gcsOpc3VsdGF0IGRlIHJlY2hlcmNoZVxyXG5cdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZWFyY2gtaXRlbScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBhcnRpY2xlSWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblx0XHRcdGlmIChhcnRpY2xlSWQpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvYXJ0aWNsZS8ke2FydGljbGVJZH1gO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBDYWNoZXIgbGVzIHLDqXN1bHRhdHMgcXVhbmQgb24gY2xpcXVlIGFpbGxldXJzXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnNlYXJjaC1jb250YWluZXInKS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkc2VhcmNoUmVzdWx0cy5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTsiLCIvLyAuL2Fzc2V0cy9ib290c3RyYXAuanNcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSBcInN0aW11bHVzXCI7XHJcbmltcG9ydCB7IGRlZmluaXRpb25zRnJvbUNvbnRleHQgfSBmcm9tIFwic3RpbXVsdXMvd2VicGFjay1oZWxwZXJzXCI7XHJcblxyXG4vLyBEw6ltYXJyZSBs4oCZYXBwbGljYXRpb24gU3RpbXVsdXNcclxuY29uc3QgYXBwbGljYXRpb24gPSBBcHBsaWNhdGlvbi5zdGFydCgpO1xyXG5cclxuLy8gQ2hhcmdlIGF1dG9tYXRpcXVlbWVudCB0b3VzIGxlcyBjb250csO0bGV1cnMgU3RpbXVsdXMgZGFucyBsZSBkb3NzaWVyIC4vY29udHJvbGxlcnNcclxuY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIi4vY29udHJvbGxlcnNcIiwgdHJ1ZSwgL1xcLmpzJC8pO1xyXG5hcHBsaWNhdGlvbi5sb2FkKGRlZmluaXRpb25zRnJvbUNvbnRleHQoY29udGV4dCkpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vY3NyZl9wcm90ZWN0aW9uX2NvbnRyb2xsZXIuanNcIjogXCIuL2Fzc2V0cy9jb250cm9sbGVycy9jc3JmX3Byb3RlY3Rpb25fY29udHJvbGxlci5qc1wiLFxuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgXFxcXC5qcyRcIjsiLCJjb25zdCBuYW1lQ2hlY2sgPSAvXlstX2EtekEtWjAtOV17NCwyMn0kLztcclxuY29uc3QgdG9rZW5DaGVjayA9IC9eWy1fXFwvK2EtekEtWjAtOV17MjQsfSQvO1xyXG5cclxuLy8gR2VuZXJhdGUgYW5kIGRvdWJsZS1zdWJtaXQgYSBDU1JGIHRva2VuIGluIGEgZm9ybSBmaWVsZCBhbmQgYSBjb29raWUsIGFzIGRlZmluZWQgYnkgU3ltZm9ueSdzIFNhbWVPcmlnaW5Dc3JmVG9rZW5NYW5hZ2VyXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZ2VuZXJhdGVDc3JmVG9rZW4oZXZlbnQudGFyZ2V0KTtcclxufSwgdHJ1ZSk7XHJcblxyXG4vLyBXaGVuIEBob3R3aXJlZC90dXJibyBoYW5kbGVzIGZvcm0gc3VibWlzc2lvbnMsIHNlbmQgdGhlIENTUkYgdG9rZW4gaW4gYSBoZWFkZXIgaW4gYWRkaXRpb24gdG8gYSBjb29raWVcclxuLy8gVGhlIGBmcmFtZXdvcmsuY3NyZl9wcm90ZWN0aW9uLmNoZWNrX2hlYWRlcmAgY29uZmlnIG9wdGlvbiBuZWVkcyB0byBiZSBlbmFibGVkIGZvciB0aGUgaGVhZGVyIHRvIGJlIGNoZWNrZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86c3VibWl0LXN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBjb25zdCBoID0gZ2VuZXJhdGVDc3JmSGVhZGVycyhldmVudC5kZXRhaWwuZm9ybVN1Ym1pc3Npb24uZm9ybUVsZW1lbnQpO1xyXG4gICAgT2JqZWN0LmtleXMoaCkubWFwKGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgZXZlbnQuZGV0YWlsLmZvcm1TdWJtaXNzaW9uLmZldGNoUmVxdWVzdC5oZWFkZXJzW2tdID0gaFtrXTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFdoZW4gQGhvdHdpcmVkL3R1cmJvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9ucywgcmVtb3ZlIHRoZSBDU1JGIGNvb2tpZSBvbmNlIGEgZm9ybSBoYXMgYmVlbiBzdWJtaXR0ZWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHVyYm86c3VibWl0LWVuZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgcmVtb3ZlQ3NyZlRva2VuKGV2ZW50LmRldGFpbC5mb3JtU3VibWlzc2lvbi5mb3JtRWxlbWVudCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ3NyZlRva2VuIChmb3JtRWxlbWVudCkge1xyXG4gICAgY29uc3QgY3NyZkZpZWxkID0gZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbZGF0YS1jb250cm9sbGVyPVwiY3NyZi1wcm90ZWN0aW9uXCJdLCBpbnB1dFtuYW1lPVwiX2NzcmZfdG9rZW5cIl0nKTtcclxuXHJcbiAgICBpZiAoIWNzcmZGaWVsZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xyXG4gICAgbGV0IGNzcmZUb2tlbiA9IGNzcmZGaWVsZC52YWx1ZTtcclxuXHJcbiAgICBpZiAoIWNzcmZDb29raWUgJiYgbmFtZUNoZWNrLnRlc3QoY3NyZlRva2VuKSkge1xyXG4gICAgICAgIGNzcmZGaWVsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScsIGNzcmZDb29raWUgPSBjc3JmVG9rZW4pO1xyXG4gICAgICAgIGNzcmZGaWVsZC5kZWZhdWx0VmFsdWUgPSBjc3JmVG9rZW4gPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgKHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvKS5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMTgpKSkpO1xyXG4gICAgICAgIGNzcmZGaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3NyZkNvb2tpZSAmJiB0b2tlbkNoZWNrLnRlc3QoY3NyZlRva2VuKSkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IGNzcmZDb29raWUgKyAnXycgKyBjc3JmVG9rZW4gKyAnPScgKyBjc3JmQ29va2llICsgJzsgcGF0aD0vOyBzYW1lc2l0ZT1zdHJpY3QnO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyAnX19Ib3N0LScgKyBjb29raWUgKyAnOyBzZWN1cmUnIDogY29va2llO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDc3JmSGVhZGVycyAoZm9ybUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcclxuICAgIGNvbnN0IGNzcmZGaWVsZCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXSwgaW5wdXRbbmFtZT1cIl9jc3JmX3Rva2VuXCJdJyk7XHJcblxyXG4gICAgaWYgKCFjc3JmRmllbGQpIHtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmQ29va2llID0gY3NyZkZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1jc3JmLXByb3RlY3Rpb24tY29va2llLXZhbHVlJyk7XHJcblxyXG4gICAgaWYgKHRva2VuQ2hlY2sudGVzdChjc3JmRmllbGQudmFsdWUpICYmIG5hbWVDaGVjay50ZXN0KGNzcmZDb29raWUpKSB7XHJcbiAgICAgICAgaGVhZGVyc1tjc3JmQ29va2llXSA9IGNzcmZGaWVsZC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGVhZGVycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNzcmZUb2tlbiAoZm9ybUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGNzcmZGaWVsZCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2RhdGEtY29udHJvbGxlcj1cImNzcmYtcHJvdGVjdGlvblwiXSwgaW5wdXRbbmFtZT1cIl9jc3JmX3Rva2VuXCJdJyk7XHJcblxyXG4gICAgaWYgKCFjc3JmRmllbGQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3NyZkNvb2tpZSA9IGNzcmZGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3NyZi1wcm90ZWN0aW9uLWNvb2tpZS12YWx1ZScpO1xyXG5cclxuICAgIGlmICh0b2tlbkNoZWNrLnRlc3QoY3NyZkZpZWxkLnZhbHVlKSAmJiBuYW1lQ2hlY2sudGVzdChjc3JmQ29va2llKSkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZSA9IGNzcmZDb29raWUgKyAnXycgKyBjc3JmRmllbGQudmFsdWUgKyAnPTA7IHBhdGg9Lzsgc2FtZXNpdGU9c3RyaWN0OyBtYXgtYWdlPTAnO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonID8gJ19fSG9zdC0nICsgY29va2llICsgJzsgc2VjdXJlJyA6IGNvb2tpZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogc3RpbXVsdXNGZXRjaDogJ2xhenknICovXHJcbmV4cG9ydCBkZWZhdWx0ICdjc3JmLXByb3RlY3Rpb24tY29udHJvbGxlcic7XHJcbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldCc7XHJcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM1JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1yZXNwb25zaXZlLWJzNSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBWw6lyaWZpZXIgc2kgRGF0YVRhYmxlIGVzdCBkw6lqw6AgaW5pdGlhbGlzw6lcclxuICAgIGlmICghJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNhcnRpY2xlc1RhYmxlJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpc2F0aW9uIGRlIERhdGFUYWJsZXMuLi5cIik7XHJcbiAgICAgICAgJCgnI2FydGljbGVzVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBhamF4OiBcIi9hcGkvYXJ0aWNsZXNcIixcclxuICAgICAgICAgICAgcGFnZUxlbmd0aDogMyxcclxuICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgeyBkYXRhOiAnaWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICd0aXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ2NvbnRlbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdjcmVhdGVkQXQnIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdywgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZy8ke3Jvdy5pZH1cIiBjbGFzcz1cImJ0biBidG4tdGhlbWUgYnRuLXNtXCI+Vm9pcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2Jsb2cvJHtyb3cuaWR9L2VkaXRcIiBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tc21cIj5Nb2RpZmllcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzEuMTMuNS9pMThuL2ZyLUZSLmpzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxud2luZG93LiQgPSAkO1xyXG53aW5kb3cualF1ZXJ5ID0gJDtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcubGlrZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gJCh0aGlzKTtcclxuICAgICAgICBjb25zdCBpZCA9IGJ1dHRvbi5kYXRhKCdpZCcpO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBidXR0b24uZGF0YSgndHlwZScpO1xyXG5cclxuICAgICAgICBpZiAoIWlkIHx8ICF0eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0lEIG91IHR5cGUgbWFucXVhbnQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYC9saWtlLyR7dHlwZX0vJHtpZH1gLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSw6lwb25zZSByZcOndWU6JywgZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmZpbmQoJ3NwYW4nKS50ZXh0KGRhdGEubGlrZXNDb3VudCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgQUpBWDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1ZvdXMgZGV2ZXogw6p0cmUgY29ubmVjdMOpIHBvdXIgbGlrZXIuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJldXIgaW5jb25udWUuJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvb2x0aXBUcmlnZ2VyTGlzdCIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYXAiLCJ0b29sdGlwVHJpZ2dlckVsIiwiYm9vdHN0cmFwIiwiVG9vbHRpcCIsIiQiLCJyZWFkeSIsIiRjb21tZW50Rm9ybSIsIiRjb21tZW50c0xpc3QiLCIkY29tbWVudHNDb3VudCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiJHN1Ym1pdEJ0biIsImZpbmQiLCJvcmlnaW5hbEJ0blRleHQiLCJodG1sIiwicHJvcCIsImFqYXgiLCJ1cmwiLCJhdHRyIiwibWV0aG9kIiwiZGF0YSIsInNlcmlhbGl6ZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwicHJlcGVuZCIsImNvbW1lbnRIdG1sIiwidGV4dCIsImNvbW1lbnRzQ291bnQiLCJyZXNldCIsInNob3dBbGVydCIsImVycm9yIiwiY29tcGxldGUiLCIkbGlrZUJ1dHRvbiIsImFydGljbGVJZCIsImNvbmNhdCIsInRvZ2dsZUNsYXNzIiwibGlrZWQiLCJsaWtlc0NvdW50IiwidHlwZSIsIm1lc3NhZ2UiLCIkYWxlcnQiLCJhcHBlbmQiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJhcnRpY2xlc1RhYmxlIiwiRGF0YVRhYmxlIiwicHJvY2Vzc2luZyIsInNlcnZlclNpZGUiLCJyZXNwb25zaXZlIiwiY29sdW1ucyIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJsYW5ndWFnZSIsIm9yZGVyIiwiJHNlYXJjaElucHV0IiwiJHNlYXJjaFJlc3VsdHMiLCJzZWFyY2hUaW1lb3V0IiwicXVlcnkiLCJ2YWwiLCJ0cmltIiwiY2xlYXJUaW1lb3V0IiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJxIiwicmVzdWx0cyIsImZvckVhY2giLCJhcnRpY2xlIiwidGl0bGUiLCJjYXRlZ29yaWVzIiwiam9pbiIsImFkZENsYXNzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidGFyZ2V0IiwiY2xvc2VzdCIsIkFwcGxpY2F0aW9uIiwiZGVmaW5pdGlvbnNGcm9tQ29udGV4dCIsImFwcGxpY2F0aW9uIiwic3RhcnQiLCJjb250ZXh0IiwicmVxdWlyZSIsImxvYWQiLCJuYW1lQ2hlY2siLCJ0b2tlbkNoZWNrIiwiZXZlbnQiLCJnZW5lcmF0ZUNzcmZUb2tlbiIsImgiLCJnZW5lcmF0ZUNzcmZIZWFkZXJzIiwiZGV0YWlsIiwiZm9ybVN1Ym1pc3Npb24iLCJmb3JtRWxlbWVudCIsIk9iamVjdCIsImtleXMiLCJrIiwiZmV0Y2hSZXF1ZXN0IiwiaGVhZGVycyIsInJlbW92ZUNzcmZUb2tlbiIsImNzcmZGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3JmQ29va2llIiwiZ2V0QXR0cmlidXRlIiwiY3NyZlRva2VuIiwidmFsdWUiLCJ0ZXN0Iiwic2V0QXR0cmlidXRlIiwiZGVmYXVsdFZhbHVlIiwiYnRvYSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiY3J5cHRvIiwibXNDcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImNvb2tpZSIsInByb3RvY29sIiwiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJmbiIsImlzRGF0YVRhYmxlIiwicGFnZUxlbmd0aCIsInJlbmRlciIsInJvdyIsIm1ldGEiLCJpZCIsImpRdWVyeSIsImJ1dHRvbiIsInhociIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=