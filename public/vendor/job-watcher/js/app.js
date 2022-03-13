(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/http */ "./resources/js/http.js");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");
/* harmony import */ var _components_svg_Logo_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/svg/Logo.vue */ "./resources/js/components/svg/Logo.vue");
/* harmony import */ var _components_svg_TotalJobs_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/svg/TotalJobs.vue */ "./resources/js/components/svg/TotalJobs.vue");
/* harmony import */ var _components_svg_ProcessedJobs_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/svg/ProcessedJobs.vue */ "./resources/js/components/svg/ProcessedJobs.vue");
/* harmony import */ var _components_svg_FailedJobs_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/svg/FailedJobs.vue */ "./resources/js/components/svg/FailedJobs.vue");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.css */ "./node_modules/@glidejs/glide/dist/css/glide.core.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.theme.css */ "./node_modules/@glidejs/glide/dist/css/glide.theme.css");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Logo: _components_svg_Logo_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    TotalJobs: _components_svg_TotalJobs_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    ProcessedJobs: _components_svg_ProcessedJobs_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    FailedJobs: _components_svg_FailedJobs_vue__WEBPACK_IMPORTED_MODULE_6__.default
  },
  data: function data() {
    return {
      total_jobs: 0,
      processed_jobs: 0,
      failed_jobs: 0,
      jobs: [],
      jobs_fetched: false,
      event_source: null,
      sse_not_supported: typeof EventSource === 'undefined',
      sse_not_supported_msg: "Server-Sent events not supported on this browser.\n        Please use the refresh button to update log."
    };
  },
  computed: {//
  },
  methods: {
    /**
     * Fetch previous job logs.
     */
    fetchJobs: function fetchJobs() {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _http__WEBPACK_IMPORTED_MODULE_1__.api.get('logs').then(function (_ref) {
                  var data = _ref.data;
                  return data;
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },

    /**
     * Update the component with previous job logs.
     */
    fetchAndUpdateJobs: function fetchAndUpdateJobs() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.fetchJobs();

              case 2:
                res = _context2.sent;
                _this.jobs = res.logs;
                _this.total_jobs = res.meta.total_jobs_count;
                _this.processed_jobs = res.meta.processed_jobs_count;
                _this.failed_jobs = res.meta.failed_jobs_count;

                if (_this.jobs_fetched === false) {
                  _this.jobs_fetched = true;
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },

    /**
     * Adds the given job data to the top of the job log.
     */
    addToJobLogs: function addToJobLogs(job) {
      var old_job = this.findJob(job.id);

      if (old_job) {
        this.deleteJob(old_job.id);
      }

      this.jobs.unshift(job);
    },

    /**
     * Find job by id.
     */
    findJob: function findJob(id) {
      return this.jobs.find(function (job) {
        return job.id == id;
      });
    },

    /**
     * Remove a job from the log.
     */
    deleteJob: function deleteJob(id) {
      var index = this.jobs.findIndex(function (job) {
        return job.id == id;
      });

      if (index < 0) {
        return false;
      }

      this.jobs.splice(index, 1);
      return true;
    },

    /**
     * listen for new jobs
     */
    startLogStream: function startLogStream() {
      var _this2 = this;

      if (this.sse_not_supported === true) {
        return console.error(this.sse_not_supported_msg);
      }

      var baseUrl = _http__WEBPACK_IMPORTED_MODULE_1__.api.defaults.baseURL;
      var source = new EventSource(baseUrl + 'logs/stream');

      source.onmessage = function (event) {
        var data = JSON.parse(event.data);
        _this2.total_jobs = data.meta.total_jobs_count;
        _this2.processed_jobs = data.meta.processed_jobs_count;
        _this2.failed_jobs = data.meta.failed_jobs_count;
        var logs = data.logs; // we want to push from the oldest
        // that's why we are reversing.

        logs.reverse();
        logs.forEach(function (job) {
          return _this2.addToJobLogs(job);
        });
      };

      this.event_source = source;
    },

    /**
     * Close the open stream
     */
    endLogStream: function endLogStream() {
      if (null == this.event_source) {
        return console.warn('No open stream.');
      }

      this.event_source.close();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var terminal;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__.default('#metrics-section', {
                // type: 'carousel',
                perView: 0,
                breakpoints: {
                  767.9: {
                    perView: 1.2
                  }
                }
              }).mount();
              terminal = _this3.$refs.terminal;
              terminal.scrollTo(0, terminal.scrollHeight);
              _context3.next = 5;
              return _this3.fetchAndUpdateJobs();

            case 5:
              // this.startLogStream();
              window.addEventListener('beforeunload', function (e) {
                _this3.endLogStream();
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/http */ "./resources/js/http.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import Spin from l;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      username: null,
      password: null,
      remember: localStorage.getItem('rememberLogin') === 'yes' ? true : false,
      field_errors: {},
      authenticating: false,
      http_status: null
    };
  },
  methods: {
    login: function login(e) {
      var _this = this;

      e.preventDefault();
      var d = {
        username: this.username,
        password: this.password,
        remember: this.remember
      };
      this.field_errors = {};
      this.authenticating = true;
      _http__WEBPACK_IMPORTED_MODULE_0__.api.post('login', d).then(function (res) {
        localStorage.setItem('authClient', JSON.stringify(res.data.client));
        localStorage.setItem('rememberLogin', _this.remember ? 'yes' : 'no');

        _this.$router.push({
          name: 'dashboard'
        });
      })["catch"](function (err) {
        if (err.response) {
          _this.http_status = err.response.status;
          if (_this.http_status === 422) _this.field_errors = err.response.data.errors;
        }
      }).then(function () {
        _this.authenticating = false;
      });
    }
  },
  mounted: function mounted() {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {//
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./resources/js/router.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");


var config = window.config;
var app = new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  router: (0,_router__WEBPACK_IMPORTED_MODULE_0__.default)({
    base: config.base_path
  })
});
app.$mount('#app');

/***/ }),

/***/ "./resources/js/http.js":
/*!******************************!*\
  !*** ./resources/js/http.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "http": () => (/* binding */ http),
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var http = (axios__WEBPACK_IMPORTED_MODULE_0___default());
var api = http.create({
  baseURL: window.config.base_path + '/api/'
});
api.interceptors.response.use(function (res) {
  return res;
}, function (error) {
  if (!error.response) {
    // request never made it to the server
    return Promise.reject(error);
  }

  var status_code = error.response.status;

  if (status_code === 401) {
    window.localStorage.removeItem('authClient');
    location.href = ''; // @todo popup login modal instead
  } else if (status_code === 422) {// handle form error
  } else if (status_code >= 400 && status_code < 500) {// client errors
  } else {// server error
    }

  return Promise.reject(error);
});


/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/http */ "./resources/js/http.js");
/* harmony import */ var _views_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/Dashboard.vue */ "./resources/js/views/Dashboard.vue");
/* harmony import */ var _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/errors/404.vue */ "./resources/js/views/errors/404.vue");
/* harmony import */ var _views_Login_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/Login.vue */ "./resources/js/views/Login.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");






vue__WEBPACK_IMPORTED_MODULE_4__.default.use(vue_router__WEBPACK_IMPORTED_MODULE_5__.default);
var routes = [{
  path: '',
  name: 'dashboard',
  component: _views_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__.default
}, // {
//   path: '/jobs',
//   name: 'jobs',
//   component: Jobs,
// },
{
  path: '/login',
  name: 'login',
  component: _views_Login_vue__WEBPACK_IMPORTED_MODULE_3__.default
}, {
  path: '*',
  name: '404',
  component: _views_errors_404_vue__WEBPACK_IMPORTED_MODULE_2__.default
}];

var authenticated = function authenticated() {
  return window.localStorage.getItem('authClient') !== null;
};
/**
 * Register the authentication guard.
 *
 * @param {VueRouter} router
 */


var registerAuthGuard = function registerAuthGuard(router) {
  router.beforeEach(function (to, from, next) {
    if (to.name !== 'login' && !authenticated()) next({
      name: 'login'
    });else next();
  }); // redirect to login for 401 responses.

  _http__WEBPACK_IMPORTED_MODULE_0__.http.interceptors.response.use(function (res) {
    return res;
  }, function (error) {
    // console.log(error)
    if (error.status === 401) {
      window.localStorage.removeItem('authClient');
      router.push({
        name: 'login'
      });
    }
  });
};

var registerGuestGuard = function registerGuestGuard(router) {
  router.beforeEach(function (to, from, next) {
    if (to.name == 'login' && authenticated()) next({
      name: 'dashboard'
    });else next();
  });
};

var router = function router(_ref) {
  var base = _ref.base;
  var r = new vue_router__WEBPACK_IMPORTED_MODULE_5__.default({
    base: base,
    mode: 'history',
    routes: routes
  });
  registerAuthGuard(r);
  registerGuestGuard(r);
  return r;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-15[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-15[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/svg/FailedJobs.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/svg/FailedJobs.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FailedJobs.vue?vue&type=template&id=feb7522e& */ "./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__.render,
  _FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/svg/FailedJobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/svg/Logo.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/svg/Logo.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=256cb0e1& */ "./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__.render,
  _Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/svg/Logo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/svg/ProcessedJobs.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/svg/ProcessedJobs.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProcessedJobs.vue?vue&type=template&id=12ccf0fe& */ "./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/svg/ProcessedJobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/svg/TotalJobs.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/svg/TotalJobs.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalJobs.vue?vue&type=template&id=a7296818& */ "./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__.render,
  _TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/svg/TotalJobs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=sass& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Login.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=12f5395a& */ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Login.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/errors/404.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/errors/404.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=template&id=3a5c70d3& */ "./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&");
/* harmony import */ var _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.vue?vue&type=script&lang=js& */ "./resources/js/views/errors/404.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__.render,
  _404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/errors/404.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/errors/404.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/errors/404.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./404.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_15_0_rules_0_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_15_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-15[0].rules[0].use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=sass& */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-15[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-15[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=sass&");


/***/ }),

/***/ "./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FailedJobs_vue_vue_type_template_id_feb7522e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FailedJobs.vue?vue&type=template&id=feb7522e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e&");


/***/ }),

/***/ "./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_256cb0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logo.vue?vue&type=template&id=256cb0e1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1&");


/***/ }),

/***/ "./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProcessedJobs_vue_vue_type_template_id_12ccf0fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProcessedJobs.vue?vue&type=template&id=12ccf0fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe&");


/***/ }),

/***/ "./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalJobs_vue_vue_type_template_id_a7296818___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TotalJobs.vue?vue&type=template&id=a7296818& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818&");


/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");


/***/ }),

/***/ "./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_12f5395a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=12f5395a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&");


/***/ }),

/***/ "./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_template_id_3a5c70d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./404.vue?vue&type=template&id=3a5c70d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/FailedJobs.vue?vue&type=template&id=feb7522e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("circle", {
        attrs: {
          opacity: "0.35",
          cx: "37.5",
          cy: "37.5",
          r: "37.5",
          fill: "#E70808"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M54 19H22C19.8 19 18.02 20.8 18.02 23L18 59L26 51H54C56.2 51 58 49.2 58 47V23C58 20.8 56.2 19 54 19ZM40 43H36V39H40V43ZM40 35H36V27H40V35Z",
          fill: "#D10A0A"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/Logo.vue?vue&type=template&id=256cb0e1& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "300",
        height: "43",
        viewBox: "0 0 300 43",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("path", {
        attrs: {
          d:
            "M65.62 34.36C63.004 34.36 60.832 33.712 59.104 32.416C57.376 31.12 56.464 29.224 56.368 26.728C56.368 26.512 56.44 26.332 56.584 26.188C56.728 26.02 56.92 25.936 57.16 25.936H59.104C59.608 25.936 59.92 26.212 60.04 26.764C60.184 28.3 60.772 29.44 61.804 30.184C62.836 30.928 64.132 31.3 65.692 31.3C67.492 31.3 68.872 30.712 69.832 29.536C70.816 28.336 71.308 26.728 71.308 24.712V11.932H58.528C58.288 11.932 58.084 11.86 57.916 11.716C57.772 11.548 57.7 11.344 57.7 11.104V9.628C57.7 9.388 57.772 9.196 57.916 9.052C58.084 8.884 58.288 8.8 58.528 8.8H74.044C74.308 8.8 74.512 8.884 74.656 9.052C74.824 9.196 74.908 9.4 74.908 9.664V24.784C74.908 27.712 74.08 30.04 72.424 31.768C70.792 33.496 68.524 34.36 65.62 34.36ZM90.0204 34.36C86.8764 34.36 84.4404 33.544 82.7124 31.912C81.0084 30.256 80.1084 27.772 80.0124 24.46C79.9884 23.74 79.9764 22.72 79.9764 21.4C79.9764 20.08 79.9884 19.072 80.0124 18.376C80.1084 15.136 81.0444 12.676 82.8204 10.996C84.5964 9.292 86.9964 8.44 90.0204 8.44C93.0204 8.44 95.4084 9.292 97.1844 10.996C98.9604 12.676 99.8964 15.136 99.9924 18.376C100.04 19.768 100.064 20.776 100.064 21.4C100.064 22 100.04 23.02 99.9924 24.46C99.8964 27.772 98.9844 30.256 97.2564 31.912C95.5524 33.544 93.1404 34.36 90.0204 34.36ZM90.0204 31.3C91.9164 31.3 93.4284 30.724 94.5564 29.572C95.6844 28.42 96.2964 26.656 96.3924 24.28C96.4404 22.84 96.4644 21.88 96.4644 21.4C96.4644 20.872 96.4404 19.912 96.3924 18.52C96.2964 16.144 95.6724 14.38 94.5204 13.228C93.3924 12.076 91.8924 11.5 90.0204 11.5C88.1244 11.5 86.6004 12.076 85.4484 13.228C84.3204 14.38 83.7084 16.144 83.6124 18.52C83.5884 19.216 83.5764 20.176 83.5764 21.4C83.5764 22.6 83.5884 23.56 83.6124 24.28C83.7084 26.656 84.3204 28.42 85.4484 29.572C86.6004 30.724 88.1244 31.3 90.0204 31.3ZM106.14 34C105.9 34 105.696 33.928 105.528 33.784C105.384 33.616 105.312 33.412 105.312 33.172V9.664C105.312 9.4 105.384 9.196 105.528 9.052C105.696 8.884 105.9 8.8 106.14 8.8H116.004C118.572 8.8 120.504 9.412 121.8 10.636C123.096 11.86 123.744 13.468 123.744 15.46C123.744 16.804 123.432 17.92 122.808 18.808C122.208 19.696 121.488 20.344 120.648 20.752C121.656 21.256 122.508 22.036 123.204 23.092C123.9 24.148 124.248 25.36 124.248 26.728C124.248 28.072 123.936 29.296 123.312 30.4C122.712 31.504 121.812 32.38 120.612 33.028C119.412 33.676 117.972 34 116.292 34H106.14ZM115.464 19.456C116.976 19.456 118.128 19.108 118.92 18.412C119.736 17.716 120.144 16.744 120.144 15.496C120.144 14.272 119.748 13.336 118.956 12.688C118.164 12.04 117 11.716 115.464 11.716H108.84V19.456H115.464ZM115.824 31.084C117.336 31.084 118.512 30.676 119.352 29.86C120.216 29.044 120.648 28 120.648 26.728C120.648 25.408 120.216 24.352 119.352 23.56C118.512 22.744 117.336 22.336 115.824 22.336H108.84V31.084H115.824ZM141.868 34C141.244 34 140.872 33.676 140.752 33.028L136.108 9.916C136.084 9.796 136.072 9.664 136.072 9.52C136.072 9.328 136.144 9.16 136.288 9.016C136.432 8.872 136.6 8.8 136.792 8.8H138.664C139.168 8.8 139.456 9.004 139.528 9.412L143.2 27.988L147.088 15.244C147.304 14.668 147.688 14.38 148.24 14.38H149.572C149.884 14.38 150.124 14.464 150.292 14.632C150.484 14.8 150.616 15.004 150.688 15.244L154.612 27.988L158.248 9.412C158.32 9.004 158.62 8.8 159.148 8.8H161.02C161.212 8.8 161.38 8.872 161.524 9.016C161.668 9.16 161.74 9.328 161.74 9.52L161.704 9.916L157.06 33.028C156.916 33.676 156.544 34 155.944 34H154.54C153.916 34 153.52 33.7 153.352 33.1L148.888 19.384L144.46 33.1C144.268 33.7 143.872 34 143.272 34H141.868ZM163.772 34C163.58 34 163.412 33.928 163.268 33.784C163.124 33.64 163.052 33.472 163.052 33.28C163.052 33.088 163.064 32.956 163.088 32.884L172.016 9.592C172.208 9.064 172.592 8.8 173.168 8.8H175.616C176.192 8.8 176.576 9.064 176.768 9.592L185.66 32.884L185.732 33.28C185.732 33.472 185.66 33.64 185.516 33.784C185.372 33.928 185.204 34 185.012 34H183.176C182.912 34 182.708 33.94 182.564 33.82C182.42 33.676 182.324 33.532 182.276 33.388L180.296 28.276H168.488L166.508 33.388C166.46 33.532 166.352 33.676 166.184 33.82C166.04 33.94 165.848 34 165.608 34H163.772ZM179.252 25.18L174.392 12.4L169.532 25.18H179.252ZM193.245 34C193.005 34 192.801 33.928 192.633 33.784C192.489 33.616 192.417 33.412 192.417 33.172V12.004H185.505C185.265 12.004 185.061 11.932 184.893 11.788C184.749 11.62 184.677 11.416 184.677 11.176V9.664C184.677 9.424 184.749 9.22 184.893 9.052C185.061 8.884 185.265 8.8 185.505 8.8H202.857C203.121 8.8 203.325 8.884 203.469 9.052C203.637 9.196 203.721 9.4 203.721 9.664V11.176C203.721 11.416 203.637 11.62 203.469 11.788C203.301 11.932 203.097 12.004 202.857 12.004H195.981V33.172C195.981 33.412 195.897 33.616 195.729 33.784C195.561 33.928 195.357 34 195.117 34H193.245ZM216.302 34.36C213.086 34.36 210.638 33.496 208.958 31.768C207.302 30.04 206.414 27.652 206.294 24.604C206.27 23.956 206.258 22.9 206.258 21.436C206.258 19.948 206.27 18.868 206.294 18.196C206.414 15.172 207.314 12.796 208.994 11.068C210.674 9.316 213.11 8.44 216.302 8.44C218.438 8.44 220.25 8.824 221.738 9.592C223.226 10.336 224.354 11.32 225.122 12.544C225.89 13.768 226.31 15.076 226.382 16.468V16.54C226.382 16.732 226.298 16.9 226.13 17.044C225.986 17.164 225.818 17.224 225.626 17.224H223.646C223.166 17.224 222.866 16.948 222.746 16.396C222.338 14.596 221.606 13.336 220.55 12.616C219.494 11.872 218.078 11.5 216.302 11.5C212.174 11.5 210.038 13.792 209.894 18.376C209.87 19.024 209.858 20.02 209.858 21.364C209.858 22.708 209.87 23.728 209.894 24.424C210.038 29.008 212.174 31.3 216.302 31.3C218.078 31.3 219.494 30.94 220.55 30.22C221.63 29.476 222.362 28.204 222.746 26.404C222.818 26.092 222.926 25.876 223.07 25.756C223.214 25.636 223.406 25.576 223.646 25.576H225.626C225.842 25.576 226.022 25.648 226.166 25.792C226.334 25.912 226.406 26.08 226.382 26.296C226.31 27.712 225.89 29.032 225.122 30.256C224.354 31.48 223.226 32.476 221.738 33.244C220.25 33.988 218.438 34.36 216.302 34.36ZM232.034 34C231.794 34 231.59 33.928 231.422 33.784C231.278 33.616 231.206 33.412 231.206 33.172V9.664C231.206 9.4 231.278 9.196 231.422 9.052C231.59 8.884 231.794 8.8 232.034 8.8H233.87C234.134 8.8 234.338 8.884 234.482 9.052C234.65 9.196 234.734 9.4 234.734 9.664V19.6H247.118V9.664C247.118 9.4 247.19 9.196 247.334 9.052C247.502 8.884 247.706 8.8 247.946 8.8H249.782C250.046 8.8 250.25 8.884 250.394 9.052C250.562 9.196 250.646 9.4 250.646 9.664V33.172C250.646 33.412 250.562 33.616 250.394 33.784C250.226 33.928 250.022 34 249.782 34H247.946C247.706 34 247.502 33.928 247.334 33.784C247.19 33.616 247.118 33.412 247.118 33.172V22.84H234.734V33.172C234.734 33.412 234.65 33.616 234.482 33.784C234.314 33.928 234.11 34 233.87 34H232.034ZM257.733 34C257.493 34 257.289 33.928 257.121 33.784C256.977 33.616 256.905 33.412 256.905 33.172V9.664C256.905 9.4 256.977 9.196 257.121 9.052C257.289 8.884 257.493 8.8 257.733 8.8H272.601C272.841 8.8 273.033 8.884 273.177 9.052C273.345 9.196 273.429 9.4 273.429 9.664V11.032C273.429 11.272 273.357 11.476 273.213 11.644C273.069 11.788 272.865 11.86 272.601 11.86H260.361V19.744H271.809C272.049 19.744 272.241 19.828 272.385 19.996C272.553 20.14 272.637 20.344 272.637 20.608V21.94C272.637 22.18 272.553 22.384 272.385 22.552C272.241 22.696 272.049 22.768 271.809 22.768H260.361V30.94H272.889C273.153 30.94 273.357 31.012 273.501 31.156C273.645 31.3 273.717 31.504 273.717 31.768V33.172C273.717 33.412 273.633 33.616 273.465 33.784C273.321 33.928 273.129 34 272.889 34H257.733ZM279.565 34C279.325 34 279.121 33.928 278.953 33.784C278.809 33.616 278.737 33.412 278.737 33.172V9.664C278.737 9.4 278.809 9.196 278.953 9.052C279.121 8.884 279.325 8.8 279.565 8.8H288.349C291.109 8.8 293.269 9.448 294.829 10.744C296.389 12.04 297.169 13.912 297.169 16.36C297.169 18.184 296.713 19.684 295.801 20.86C294.913 22.036 293.653 22.852 292.021 23.308L297.565 32.884C297.637 33.028 297.673 33.16 297.673 33.28C297.673 33.472 297.589 33.64 297.421 33.784C297.277 33.928 297.109 34 296.917 34H295.189C294.829 34 294.541 33.916 294.325 33.748C294.133 33.58 293.953 33.34 293.785 33.028L288.565 23.884H282.265V33.172C282.265 33.412 282.181 33.616 282.013 33.784C281.845 33.928 281.641 34 281.401 34H279.565ZM288.205 20.824C291.781 20.824 293.569 19.324 293.569 16.324C293.569 13.324 291.781 11.824 288.205 11.824H282.265V20.824H288.205Z",
          fill: "#010C13"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M35 5.25H7C5.075 5.25 3.5 6.825 3.5 8.75V28C3.5 29.925 5.075 31.5 7 31.5H12.25C11.2875 32.4625 10.5 33.0225 10.5 34.2825C10.5 35.6475 11.6025 36.75 12.9675 36.75H29.015C30.38 36.75 31.4825 35.6475 31.4825 34.2825C31.4825 33.0225 30.7125 32.48 29.7325 31.5H34.9825C36.9075 31.5 38.4825 29.925 38.4825 28V8.75C38.5 6.825 36.925 5.25 35 5.25ZM35 28H7V8.75H35V28Z",
          fill: "#0580C6"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/ProcessedJobs.vue?vue&type=template&id=12ccf0fe& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("circle", {
        attrs: {
          opacity: "0.35",
          cx: "37.5",
          cy: "37.5",
          r: "37.5",
          fill: "#28BF25"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M56 19H20V55H56V19ZM34 47L24 37L26.82 34.18L34 41.34L49.18 26.16L52 29L34 47Z",
          fill: "#28BF25"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/svg/TotalJobs.vue?vue&type=template&id=a7296818& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "75",
        height: "75",
        viewBox: "0 0 75 75",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }
    },
    [
      _c("circle", {
        attrs: {
          opacity: "0.35",
          cx: "37.5",
          cy: "37.5",
          r: "37.5",
          fill: "#0580C6"
        }
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d:
            "M17 52.98L32 37.96L40 45.96L54.18 30.02L57 32.84L40 51.96L32 43.96L20 55.98L17 52.98ZM20 43.98L32 31.96L40 39.96L57 20.84L54.18 18.02L40 33.96L32 25.96L17 40.98L20 43.98Z",
          fill: "#0580C6"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-full min-h-screen pb-4",
      staticStyle: { background: "#f5f5f5" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "px-4 md:px-12 py-4 bg-white w-full flex items-center filter drop-shadow-md"
        },
        [_c("Logo")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "px-4 md:px-10 w-full lg:px-20 xl:px-24 mx-auto" },
        [
          _c(
            "section",
            { staticClass: "glide mt-10", attrs: { id: "metrics-section" } },
            [
              _c(
                "div",
                {
                  staticClass: "glide__track",
                  attrs: { "data-glide-el": "track" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "glide__slides py-2 px-1 lg:flex justify-between"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "glide__slide metrics-data filter drop-shadow-md"
                        },
                        [
                          _c("total-jobs"),
                          _vm._v(" "),
                          _c("div", { staticClass: "metrics-data__text" }, [
                            _c(
                              "span",
                              { staticClass: "block text-3xl font-bold" },
                              [_vm._v(_vm._s(_vm.total_jobs))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "text-xl font-normal",
                                staticStyle: { color: "#383B3E" }
                              },
                              [_vm._v("Total jobs")]
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "glide__slide metrics-data filter drop-shadow-md"
                        },
                        [
                          _c("processed-jobs"),
                          _vm._v(" "),
                          _c("div", { staticClass: "metrics-data__text" }, [
                            _c(
                              "span",
                              { staticClass: "block text-3xl font-bold" },
                              [_vm._v(_vm._s(_vm.processed_jobs))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "block text-xl font-normal truncate",
                                staticStyle: { color: "#383B3E" }
                              },
                              [_vm._v("Processed jobs")]
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "glide__slide metrics-data filter drop-shadow-md"
                        },
                        [
                          _c("failed-jobs"),
                          _vm._v(" "),
                          _c("div", { staticClass: "metrics-data__text" }, [
                            _c(
                              "span",
                              { staticClass: "block text-3xl font-bold" },
                              [_vm._v(_vm._s(_vm.failed_jobs))]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "text-xl font-normal",
                                staticStyle: { color: "#383B3E" }
                              },
                              [_vm._v("Failed jobs")]
                            )
                          ])
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("section", { staticClass: "mt-10" }, [
            _c("h1", { staticClass: "text-xl font-bold uppercase" }, [
              _vm._v("Log Terminal")
            ]),
            _vm._v(" "),
            _c("div", { ref: "terminal", staticClass: "terminal" }, [
              _c(
                "ul",
                {
                  staticClass: "job-list",
                  attrs: { "aria-live": "assertive" }
                },
                _vm._l(_vm.jobs, function(job) {
                  return _c(
                    "li",
                    {
                      key: job.id,
                      staticClass: "job",
                      attrs: { "data-status": job.status }
                    },
                    [
                      _c("span", { staticClass: "job__id" }, [
                        _vm._v("#" + _vm._s(job.uuid) + ":")
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "job__name" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(job.name) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "job__time" }, [
                        _vm._v(_vm._s(job.updated_at))
                      ])
                    ]
                  )
                }),
                0
              )
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Login.vue?vue&type=template&id=12f5395a& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-gray-100 py-12 px-8 min-h-screen flex justify-center items-center"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "w-full max-w-[350px] bg-white shadow-md rounded-sm py-8 px-4"
        },
        [
          _c("img", {
            attrs: {
              src: "/vendor/job-watcher/imgs/job-watcher.svg",
              alt: "job-watcher logo"
            }
          }),
          _vm._v(" "),
          _c(
            "h1",
            {
              staticClass:
                "text-primary text-2xl text-center mt-2 uppercase font-bold"
            },
            [
              _c("router-link", { attrs: { to: "login" } }, [
                _vm._v("Authentication")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("form", { staticClass: "mt-8", on: { submit: _vm.login } }, [
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block text-xs uppercase mb-1 text-gray-700 font-semibold",
                  attrs: { for: "username" }
                },
                [_vm._v("Username")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.username,
                    expression: "username"
                  }
                ],
                staticClass:
                  "rounded w-full form-input focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50",
                attrs: {
                  id: "username",
                  type: "text",
                  name: "username",
                  placeholder: "root"
                },
                domProps: { value: _vm.username },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.username = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  staticClass: "text-red-600",
                  attrs: { "aria-live": "assertive" }
                },
                [
                  _vm.field_errors.username
                    ? _c("span", [_vm._v(_vm._s(_vm.field_errors.username[0]))])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "label",
                {
                  staticClass:
                    "block text-xs uppercase mb-1 text-gray-700 font-semibold",
                  attrs: { for: "password" }
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass:
                  "rounded w-full form-input focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50",
                attrs: {
                  id: "password",
                  type: "password",
                  name: "password",
                  placeholder: "password"
                },
                domProps: { value: _vm.password },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "small",
                {
                  staticClass: "text-red-600",
                  attrs: { "aria-live": "assertive" }
                },
                [
                  _vm.field_errors.password
                    ? _c("span", [_vm._v(_vm._s(_vm.field_errors.password[0]))])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-3" }, [
              _c(
                "small",
                {
                  staticClass: "text-red-600",
                  attrs: { "aria-live": "assertive" }
                },
                [
                  _vm.field_errors.credentials
                    ? _c("span", [
                        _vm._v(_vm._s(_vm.field_errors.credentials[0]))
                      ])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-2 inline-flex items-center" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.remember,
                    expression: "remember"
                  }
                ],
                staticClass:
                  "rounded form-checkbox text-primary focus:ring-4 focus:ring-primary focus:ring-opacity-50",
                attrs: { id: "remember", type: "checkbox", name: "remember" },
                domProps: {
                  checked: Array.isArray(_vm.remember)
                    ? _vm._i(_vm.remember, null) > -1
                    : _vm.remember
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.remember,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.remember = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.remember = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.remember = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("label", { staticClass: "ml-3", attrs: { for: "remember" } }, [
                _vm._v("Remember me")
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "mt-3 w-full bg-primary rounded px-3 h-[40px] text-center\n          font-semibold focus:outline-none focus:ring-4\n          focus:ring-primary focus:ring-opacity-50",
                attrs: { type: "submit", "aria-live": "polite" }
              },
              [
                !_vm.authenticating
                  ? _c("span", { staticClass: "text-white uppercase" }, [
                      _vm._v("Login")
                    ])
                  : _c(
                      "div",
                      { staticClass: "flex items-center justify-center" },
                      [
                        _c("img", {
                          attrs: {
                            "aria-hidden": "true",
                            src: "/vendor/job-watcher/imgs/spin-1.5s-28px.svg",
                            alt: "loading icon"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "sr-only" }, [
                          _vm._v("Loading")
                        ])
                      ]
                    )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/errors/404.vue?vue&type=template&id=3a5c70d3& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n  404\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);