"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["articles_list"],{

/***/ "./assets/articles_list.js":
/*!*********************************!*\
  !*** ./assets/articles_list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_array-species-creat-df6cf8","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_datatables_net-responsiv-5233a4","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-9d8eef"], () => (__webpack_exec__("./assets/articles_list.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0Q7TUFDRCxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1IsQ0FBQyxDQUFDOztFQUVGO0VBQ0F6Qyw2Q0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ21CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFlBQVc7SUFDbEQsSUFBTXNCLFNBQVMsR0FBRzFDLDZDQUFDLENBQUMsSUFBSSxDQUFDLENBQUNZLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEMsSUFBSThCLFNBQVMsRUFBRTtNQUNkQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxlQUFBUixNQUFBLENBQWVLLFNBQVMsQ0FBRTtJQUMvQztFQUNELENBQUMsQ0FBQzs7RUFFRjtFQUNBMUMsNkNBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUNtQixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMwQixDQUFDLEVBQUU7SUFDbkMsSUFBSSxDQUFDOUMsNkNBQUMsQ0FBQzhDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdkIsTUFBTSxFQUFFO01BQ3JEUCxjQUFjLENBQUNRLFdBQVcsQ0FBQyxNQUFNLENBQUM7SUFDbkM7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXJ0aWNsZXNfbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cdGltcG9ydCAnZGF0YXRhYmxlcy5uZXQnO1xyXG5cdGltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM1JztcclxuXHRpbXBvcnQgJ2RhdGF0YWJsZXMubmV0LXJlc3BvbnNpdmUtYnM1JztcclxuXHJcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHQvLyBJbml0aWFsaXNhdGlvbiBkZSBEYXRhVGFibGVzXHJcblx0XHRjb25zdCBhcnRpY2xlc1RhYmxlID0gJCgnI2FydGljbGVzLXRhYmxlJykuRGF0YVRhYmxlKHtcclxuXHRcdFx0cHJvY2Vzc2luZzogdHJ1ZSxcclxuXHRcdFx0c2VydmVyU2lkZTogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHRcdFx0YWpheDoge1xyXG5cdFx0XHRcdHVybDogJy9hcGkvYXJ0aWNsZXMnLFxyXG5cdFx0XHRcdHR5cGU6ICdQT1NUJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0eyBkYXRhOiAnaWQnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAndGl0bGUnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAnY2F0ZWdvcmllcycgfSxcclxuXHRcdFx0XHR7IGRhdGE6ICdjb21tZW50c0NvdW50JyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2xpa2VzQ291bnQnIH0sXHJcblx0XHRcdFx0eyBkYXRhOiAnY3JlYXRlZEF0JyB9LFxyXG5cdFx0XHRcdHsgZGF0YTogJ2FjdGlvbnMnLCBvcmRlcmFibGU6IGZhbHNlLCBzZWFyY2hhYmxlOiBmYWxzZSB9XHJcblx0XHRcdF0sXHJcblx0XHRcdGxhbmd1YWdlOiB7XHJcblx0XHRcdFx0dXJsOiAnLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvMS4xMy40L2kxOG4vZnItRlIuanNvbidcclxuXHRcdFx0fSxcclxuXHRcdFx0b3JkZXI6IFtbMCwgJ2Rlc2MnXV1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIFJlY2hlcmNoZSBlbiB0ZW1wcyByw6llbFxyXG5cdFx0Y29uc3QgJHNlYXJjaElucHV0ID0gJCgnI3NlYXJjaC1hcnRpY2xlJyk7XHJcblx0XHRjb25zdCAkc2VhcmNoUmVzdWx0cyA9ICQoJyNzZWFyY2gtcmVzdWx0cycpO1xyXG5cdFx0bGV0IHNlYXJjaFRpbWVvdXQ7XHJcblxyXG5cdFx0JHNlYXJjaElucHV0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb25zdCBxdWVyeSA9ICQodGhpcykudmFsKCkudHJpbSgpO1xyXG5cclxuXHRcdFx0Ly8gRWZmYWNlciBsZSB0aW1lb3V0IHByw6ljw6lkZW50XHJcblx0XHRcdGNsZWFyVGltZW91dChzZWFyY2hUaW1lb3V0KTtcclxuXHJcblx0XHRcdGlmIChxdWVyeS5sZW5ndGggPCAyKSB7XHJcblx0XHRcdFx0JHNlYXJjaFJlc3VsdHMucmVtb3ZlQ2xhc3MoJ3Nob3cnKS5odG1sKCcnKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIETDqWZpbmlyIHVuIGTDqWxhaSBhdmFudCBkJ2Vudm95ZXIgbGEgcmVxdcOqdGVcclxuXHRcdFx0c2VhcmNoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHR1cmw6ICcvYXBpL2FydGljbGVzL3NlYXJjaCcsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0XHRcdFx0ZGF0YTogeyBxOiBxdWVyeSB9LFxyXG5cdFx0XHRcdFx0ZGF0YVR5cGU6ICdqc29uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5yZXN1bHRzICYmIHJlc3BvbnNlLnJlc3VsdHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBodG1sID0gJyc7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlLnJlc3VsdHMuZm9yRWFjaChhcnRpY2xlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGh0bWwgKz0gYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQke2FydGljbGUudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdCR7YXJ0aWNsZS5jYXRlZ29yaWVzLmpvaW4oJywgJyl9XHJcblx0XHRcdFx0XHRcdFx0XHRgO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0XHQkc2VhcmNoUmVzdWx0cy5odG1sKGh0bWwpLmFkZENsYXNzKCdzaG93Jyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JHNlYXJjaFJlc3VsdHMuaHRtbCgnQXVjdW4gcsOpc3VsdGF0IHRyb3V2w6knKS5hZGRDbGFzcygnc2hvdycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sIDMwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBDbGlxdWVyIHN1ciB1biByw6lzdWx0YXQgZGUgcmVjaGVyY2hlXHJcblx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlYXJjaC1pdGVtJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGNvbnN0IGFydGljbGVJZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcclxuXHRcdFx0aWYgKGFydGljbGVJZCkge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9hcnRpY2xlLyR7YXJ0aWNsZUlkfWA7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIENhY2hlciBsZXMgcsOpc3VsdGF0cyBxdWFuZCBvbiBjbGlxdWUgYWlsbGV1cnNcclxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0aWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2VhcmNoLWNvbnRhaW5lcicpLmxlbmd0aCkge1xyXG5cdFx0XHRcdCRzZWFyY2hSZXN1bHRzLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pOyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFydGljbGVzVGFibGUiLCJEYXRhVGFibGUiLCJwcm9jZXNzaW5nIiwic2VydmVyU2lkZSIsInJlc3BvbnNpdmUiLCJhamF4IiwidXJsIiwidHlwZSIsImNvbHVtbnMiLCJkYXRhIiwib3JkZXJhYmxlIiwic2VhcmNoYWJsZSIsImxhbmd1YWdlIiwib3JkZXIiLCIkc2VhcmNoSW5wdXQiLCIkc2VhcmNoUmVzdWx0cyIsInNlYXJjaFRpbWVvdXQiLCJvbiIsInF1ZXJ5IiwidmFsIiwidHJpbSIsImNsZWFyVGltZW91dCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiaHRtbCIsInNldFRpbWVvdXQiLCJtZXRob2QiLCJxIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwiZm9yRWFjaCIsImFydGljbGUiLCJjb25jYXQiLCJ0aXRsZSIsImNhdGVnb3JpZXMiLCJqb2luIiwiYWRkQ2xhc3MiLCJhcnRpY2xlSWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlIiwidGFyZ2V0IiwiY2xvc2VzdCJdLCJzb3VyY2VSb290IjoiIn0=