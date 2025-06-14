"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["datatables"],{

/***/ "./assets/datatables.js":
/*!******************************!*\
  !*** ./assets/datatables.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js-node_modules_core-js_internals_array-species-creat-df6cf8","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_datatables_net-responsiv-5233a4","vendors-node_modules_datatables_net-bs5_css_dataTables_bootstrap5_min_css-node_modules_datata-10a5c4","assets_styles_app_scss"], () => (__webpack_exec__("./assets/datatables.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0M7QUFDSTtBQUNXO0FBQ1o7QUFFM0JBLDZDQUFDLENBQUMsWUFBWTtFQUNWO0VBQ0EsSUFBSSxDQUFDQSxnREFBSSxDQUFDRSxTQUFTLENBQUNDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQztJQUM5Q0wsNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDRSxTQUFTLENBQUM7TUFDMUJJLElBQUksRUFBRSxlQUFlO01BQ3JCQyxVQUFVLEVBQUUsQ0FBQztNQUNiQyxPQUFPLEVBQUUsQ0FDTDtRQUFFQyxJQUFJLEVBQUU7TUFBSyxDQUFDLEVBQ2Q7UUFBRUEsSUFBSSxFQUFFO01BQVEsQ0FBQyxFQUNqQjtRQUFFQSxJQUFJLEVBQUU7TUFBVSxDQUFDLEVBQ25CO1FBQUVBLElBQUksRUFBRTtNQUFZLENBQUMsRUFDckI7UUFDSUEsSUFBSSxFQUFFLElBQUk7UUFDVkMsU0FBUyxFQUFFLEtBQUs7UUFDaEJDLFVBQVUsRUFBRSxLQUFLO1FBQ2pCQyxNQUFNLEVBQUUsU0FBUkEsTUFBTUEsQ0FBWUgsSUFBSSxFQUFFSSxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFO1VBQ3JDLHNIQUFBQyxNQUFBLENBRXlCRixHQUFHLENBQUNHLEVBQUUsa0dBQUFELE1BQUEsQ0FDTkYsR0FBRyxDQUFDRyxFQUFFO1FBR25DO01BQ0osQ0FBQyxDQUNKO01BQ0RDLFFBQVEsRUFBRTtRQUNOQyxHQUFHLEVBQUU7TUFDVCxDQUFDO01BQ0RDLFVBQVUsRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDTjtBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN0Q0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvZGF0YXRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldCc7XHJcbmltcG9ydCAnZGF0YXRhYmxlcy5uZXQtYnM1JztcclxuaW1wb3J0ICdkYXRhdGFibGVzLm5ldC1yZXNwb25zaXZlLWJzNSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBWw6lyaWZpZXIgc2kgRGF0YVRhYmxlIGVzdCBkw6lqw6AgaW5pdGlhbGlzw6lcclxuICAgIGlmICghJC5mbi5EYXRhVGFibGUuaXNEYXRhVGFibGUoJyNhcnRpY2xlc1RhYmxlJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpc2F0aW9uIGRlIERhdGFUYWJsZXMuLi5cIik7XHJcbiAgICAgICAgJCgnI2FydGljbGVzVGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBhamF4OiBcIi9hcGkvYXJ0aWNsZXNcIixcclxuICAgICAgICAgICAgcGFnZUxlbmd0aDogMyxcclxuICAgICAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICAgICAgeyBkYXRhOiAnaWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICd0aXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgZGF0YTogJ2NvbnRlbnQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRhdGE6ICdjcmVhdGVkQXQnIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKGRhdGEsIHR5cGUsIHJvdywgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYmxvZy8ke3Jvdy5pZH1cIiBjbGFzcz1cImJ0biBidG4tdGhlbWUgYnRuLXNtXCI+Vm9pcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2Jsb2cvJHtyb3cuaWR9L2VkaXRcIiBjbGFzcz1cImJ0biBidG4td2FybmluZyBidG4tc21cIj5Nb2RpZmllcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgbGFuZ3VhZ2U6IHtcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vY2RuLmRhdGF0YWJsZXMubmV0L3BsdWctaW5zLzEuMTMuNS9pMThuL2ZyLUZSLmpzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsImZuIiwiRGF0YVRhYmxlIiwiaXNEYXRhVGFibGUiLCJjb25zb2xlIiwibG9nIiwiYWpheCIsInBhZ2VMZW5ndGgiLCJjb2x1bW5zIiwiZGF0YSIsIm9yZGVyYWJsZSIsInNlYXJjaGFibGUiLCJyZW5kZXIiLCJ0eXBlIiwicm93IiwibWV0YSIsImNvbmNhdCIsImlkIiwibGFuZ3VhZ2UiLCJ1cmwiLCJyZXNwb25zaXZlIl0sInNvdXJjZVJvb3QiOiIifQ==