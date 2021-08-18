// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Store {
  #token;
  #userProfile;
  #userPosts;

  constructor() {
    this.#token = '';
    this.#userProfile = null;
  }

  set userProfile(profile) {
    this.#userProfile = profile;
  }

  get userProfile() {
    return this.#userProfile;
  }

  set userPosts(posts) {
    this.#userPosts = posts;
  }

  get userPosts() {
    return this.#userPosts;
  }

  set token(token) {
    this.#token = token;
  }

  get token() {
    return this.#token;
  }

}

exports.default = Store;
},{}],"src/page/login.template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const template = `
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <div class="w-full xl:w-3/4 lg:w-11/12 shadow-xl flex">
        <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
          style="background-image: url('https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3369&q=80')"></div>
        <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
          <h1 class="pt-4 text-4xl text-center mb-20">{{title}}</h1>
          <form id="login-form" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div id="login-fields">            
            </div>
            
            {{#if loginFail}}
            <p class="text-xs italic text-red-500 mb-5">아이디 또는 비밀번호를 확인할 수 없습니다.</p>
            {{/if}}
            
            <div class="mb-4">
              <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
              <label class="text-sm" for="checkbox_id">로그인 정보 기억</label>
            </div>
            <div class="mb-6 text-center">
              <button
                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit">로그인</button>
            </div>
            
            <div class="text-center">
              <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/#/signup">회원 가입</a>
            </div>
            <div class="text-center">
              <a class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                href="/#/lost-password">비밀번호를 잊으셨나요?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
`;

var _default = Handlebars.compile(template);

exports.default = _default;
},{}],"src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nextTick = void 0;

const nextTick = fn => setTimeout(fn, 16);

exports.nextTick = nextTick;
},{}],"src/constant.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimumLengthLimit = exports.CantStartNumber = exports.CantContainWhitespace = exports.RequireRule = void 0;
const RequireRule = {
  rule: /.+/,
  match: true,
  message: '필수 입력 항목입니다.'
};
exports.RequireRule = RequireRule;
const CantContainWhitespace = {
  rule: /\s/,
  match: false,
  message: '공백을 포함할 수 없습니다.'
};
exports.CantContainWhitespace = CantContainWhitespace;
const CantStartNumber = {
  rule: /^\d/,
  match: false,
  message: '숫자로 시작하는 아이디는 사용할 수 없습니다.'
};
exports.CantStartNumber = CantStartNumber;

const MinimumLengthLimit = limit => ({
  rule: new RegExp(`(.){${limit}}`),
  match: true,
  message: `최소한 ${limit}글자 이상 이어야 합니다.`
});

exports.MinimumLengthLimit = MinimumLengthLimit;
},{}],"src/views/text-field.template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const template = `
<div class="mb-4">
  <label class="block mb-2 text-sm font-bold text-gray-700" for="{{id}}">
    {{label}}
  </label>
  <input
    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
    id="{{id}}"
    name="{{id}}"
    type="{{type}}"
    placeholder="{{placeholder}}"
    {{#if require}}required{{/if}} 
  />
</div>
`;

var _default = Handlebars.compile(template);

exports.default = _default;
},{}],"src/views/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DefaultProps = {
  id: '',
  text: '',
  label: 'label',
  type: 'text',
  placeholder: '',
  require: false
};

class CoreField {
  template;
  container;
  data;
  validateRules = [];

  constructor(template, container, data) {
    this.template = template;
    this.container = container;
    this.data = { ...DefaultProps,
      ...data
    };
  }

  validate = () => {
    const target = this.data.text ? this.data.text.trim() : '';
    const invalidateRules = this.validateRules.filter(validateRule => validateRule.rule.test(target) !== validateRule.match);
    return invalidateRules.length > 0 ? invalidateRules[0] : null;
  };
  addValidateRule = rule => {
    this.validateRules.push(rule);
  };

  get name() {
    return this.data.id;
  }

  get value() {
    return this.data.text || '';
  }

  render = (append = false) => {
    const container = document.querySelector(this.container);

    if (append) {
      const divFragment = document.createElement('div');
      divFragment.innerHTML = this.template(this.buildData());
      container.appendChild(divFragment.children[0]);
    } else {
      container.innerHTML = this.template(this.buildData());
    }
  };
}

exports.default = CoreField;
},{}],"src/views/text-field.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _constant = require("../constant");

var _textField = _interopRequireDefault(require("./text-field.template"));

var _core = _interopRequireDefault(require("./core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TextField extends _core.default {
  #updated = false;

  constructor(container, data) {
    super(_textField.default, container, data);

    if (this.data.require) {
      this.addValidateRule(_constant.RequireRule);
    }

    (0, _utils.nextTick)(this.#attachEventHandler);
  }

  #buildData = () => {
    const isInvalid = this.validate();

    if (this.#updated) {
      return { ...this.data,
        updated: this.#updated,
        valid: !isInvalid,
        validateMessage: !!isInvalid ? isInvalid.message : ''
      };
    } else {
      return { ...this.data,
        updated: this.#updated,
        valid: true,
        validateMessage: ''
      };
    }
  };
  #onChange = e => {
    const {
      value,
      id
    } = e.target;

    if (id === this.data.id) {
      this.#updated = true;
      this.data.text = value;
    }
  };
  #attachEventHandler = () => {
    document.querySelector(this.container).addEventListener('change', this.#onChange);
  };

  get isValid() {
    return !this.validate();
  }

  render = (append = false) => {
    const container = document.querySelector(this.container);

    if (append) {
      const divFragment = document.createElement('div');
      divFragment.innerHTML = this.template(this.#buildData());
      container.appendChild(divFragment.children[0]);
    } else {
      container.innerHTML = this.template(this.#buildData());
    }
  };
}

exports.default = TextField;
},{"../utils":"src/utils/index.js","../constant":"src/constant.js","./text-field.template":"src/views/text-field.template.js","./core":"src/views/core.js"}],"node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

},{"./helpers/bind":"node_modules/axios/lib/helpers/bind.js"}],"node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"node_modules/axios/lib/core/enhanceError.js"}],"node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"node_modules/axios/lib/core/createError.js"}],"node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"node_modules/axios/lib/helpers/combineURLs.js"}],"node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var cookies = require('./../helpers/cookies');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"node_modules/axios/lib/utils.js","./../core/settle":"node_modules/axios/lib/core/settle.js","./../helpers/cookies":"node_modules/axios/lib/helpers/cookies.js","./../helpers/buildURL":"node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"node_modules/axios/lib/core/createError.js"}],"../../../../../../../opt/homebrew/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"node_modules/axios/lib/adapters/xhr.js","./adapters/http":"node_modules/axios/lib/adapters/xhr.js","process":"../../../../../../../opt/homebrew/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"node_modules/axios/lib/utils.js","./transformData":"node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"node_modules/axios/lib/cancel/isCancel.js","../defaults":"node_modules/axios/lib/defaults.js"}],"node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};

},{"../utils":"node_modules/axios/lib/utils.js"}],"node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"node_modules/axios/lib/utils.js","../helpers/buildURL":"node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"node_modules/axios/lib/core/mergeConfig.js"}],"node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"node_modules/axios/lib/cancel/Cancel.js"}],"node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};

},{}],"node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

// Expose isAxiosError
axios.isAxiosError = require('./helpers/isAxiosError');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"node_modules/axios/lib/utils.js","./helpers/bind":"node_modules/axios/lib/helpers/bind.js","./core/Axios":"node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"node_modules/axios/lib/core/mergeConfig.js","./defaults":"node_modules/axios/lib/defaults.js","./cancel/Cancel":"node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError":"node_modules/axios/lib/helpers/isAxiosError.js"}],"node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"node_modules/axios/lib/axios.js"}],"src/page/login.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _login = _interopRequireDefault(require("./login.template"));

var _textField = _interopRequireDefault(require("../views/text-field"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Login {
  #template = _login.default;
  #data;
  #container;
  #loginFail = false;
  #fields = [];

  constructor(container, data) {
    this.#container = document.querySelector(container);
    this.#data = data;
    this.#initialize();
  }

  #initialize = () => {
    const idField = new _textField.default('#login-fields', {
      id: 'userid',
      label: '아이디',
      type: 'text',
      placeholder: '아이디를 입력해주세요',
      require: true
    });
    const passwordField = new _textField.default('#login-fields', {
      id: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '**********',
      require: true
    });
    this.#fields.push(idField);
    this.#fields.push(passwordField);
  };
  #onSubmit = e => {
    e.preventDefault();
    const loginData = this.#fields.map(field => ({
      [field.name]: field.value
    })).reduce((a, b) => ({ ...a,
      ...b
    }), {});

    _axios.default.post('/api/authentication', loginData).then(result => {
      return result.data.result;
    }).then(({
      id,
      token
    }) => {
      const options = {
        headers: {
          token
        }
      };
      this.#data.store.token = token;
      return _axios.default.all([_axios.default.get(`/api/user/${id}`, options), _axios.default.get(`/api/user/${id}/posts`, options)]);
    }).then(([profile, posts]) => {
      this.#data.store.userProfile = profile.data.result;
      this.#data.store.userPosts = posts.data.results;
      location.href = '/#/profile';
    }).catch(error => {
      this.#loginFail = true;
      this.render();
    });
  };
  render = () => {
    this.#container.innerHTML = this.#template({ ...this.#data,
      loginFail: this.#loginFail
    });
    this.#fields.forEach(field => {
      field.render(true);
    });
    this.#container.addEventListener('submit', this.#onSubmit);
  };
}

exports.default = Login;
},{"./login.template":"src/page/login.template.js","../views/text-field":"src/views/text-field.js","axios":"node_modules/axios/index.js"}],"src/page/profile.template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const template = `
<div class="container mx-auto my-60">
    <div>
        <div class="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div class="flex justify-center">
                <img src="{{userProfile.picture.large}}" alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white">
            </div>
            
            <div class="mt-16">
                <h1 class="font-bold text-center text-3xl text-gray-900">
                    {{userProfile.name.first}} {{userProfile.name.last}}
                </h1>
                <p class="text-center text-sm text-gray-400 font-medium">Full Stack Developer at Pantazi Software</p>
                <div class="my-5">
                    <a href="#" class="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600">Connect with <span class="font-bold">{{userProfile.email}}</span></a>
                </div>
                <div class="flex justify-evenly my-5">
                    <a href="#" class="bg font-bold text-sm text-blue-800 w-full text-center py-3 hover:bg-blue-800 hover:text-white hover:shadow-lg">Facebook</a>
                    <a href="#" class="bg font-bold text-sm text-blue-400 w-full text-center py-3 hover:bg-blue-400 hover:text-white hover:shadow-lg">Twitter</a>
                    <a href="#" class="bg font-bold text-sm text-yellow-600 w-full text-center py-3 hover:bg-yellow-600 hover:text-white hover:shadow-lg">Instagram</a>
                    <a href="#" class="bg font-bold text-sm text-gray-600 w-full text-center py-3 hover:bg-gray-600 hover:text-white hover:shadow-lg">Email</a>
                </div>

                <div class="w-full">
                    <h3 class="font-bold text-gray-600 text-left px-4">Recent Posts</h3>
                    <div class="mt-5 w-full">
                        {{#each posts}}
                        <a href="#" class="w-full border-t-2 border-gray-100 font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150">
                            <img src="https://pantazisoft.com/img/avatar-2.jpeg" alt="" class="rounded-full h-6 shadow-md inline-block mr-2">
                                {{title}}
                                <span class="text-gray-400 text-sm">24 min ago</span>
                        </a>
                        {{/each}}                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
`;

var _default = Handlebars.compile(template);

exports.default = _default;
},{}],"src/page/profile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _profile = _interopRequireDefault(require("./profile.template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Profile {
  #template = _profile.default;
  #data;
  #container;

  constructor(container, data) {
    this.#container = document.querySelector(container);
    this.#data = data;
    this.#initialize();
  }

  #initialize = () => {
    if (!this.#data.store.userProfile) {
      location.href = '/';
    }
  };
  render = () => {
    this.#container.innerHTML = this.#template({
      userProfile: this.#data.store.userProfile,
      posts: this.#data.store.userPosts
    });
  };
}

exports.default = Profile;
},{"./profile.template":"src/page/profile.template.js"}],"src/page/page-not-found.template.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const template = `
<div class="h-screen w-screen bg-gray-100 flex items-center">
	<div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div class="max-w-md">
      		<div class="text-5xl font-dark font-bold">404</div>
            <p
              class="text-2xl md:text-3xl font-light leading-normal"
            >죄송합니다. 요청하신 페이지를 찾을 수 없네요.</p>
          <p class="mb-8">알고계신 링크가 변경되었을 수 있습니다. 홈페이지로 돌아가셔서 변경된 링크를 확인해주세요.</p>
          
          <a href="/" class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</a>
    </div>
      <div class="max-w-lg">
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2395 1800" width="400"><defs><style>.cls-1{fill:#d6b49a;}.cls-1,.cls-10,.cls-11,.cls-13,.cls-14,.cls-15,.cls-17,.cls-2,.cls-4,.cls-5,.cls-6{stroke:#000;}.cls-1,.cls-11,.cls-13,.cls-14,.cls-16,.cls-8{stroke-linecap:round;stroke-linejoin:round;}.cls-1,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-17,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-width:3px;}.cls-2{fill:#020202;}.cls-10,.cls-12,.cls-15,.cls-17,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-9{stroke-miterlimit:10;}.cls-3{fill:#818181;}.cls-12,.cls-16,.cls-3,.cls-7,.cls-8,.cls-9{stroke:#191818;}.cls-4{fill:#dcdbda;}.cls-5{fill:#4ea7f1;}.cls-14,.cls-6{fill:#f8f3ed;}.cls-16,.cls-7{fill:#333;}.cls-13,.cls-8{fill:none;}.cls-9{fill:#f8f59c;}.cls-10,.cls-11{fill:#f3d2c9;}.cls-15{fill:#8bb174;}.cls-17{fill:#da4e22;}</style></defs><title>Artboard 1 copy</title><path class="cls-1" d="M1073.3,1016.93c-43.75-72.44-119.63-96.48-144.56-103.2h0a121.1,121.1,0,0,1-6-58.67c5.65-38.81,14.87-101.89,15.77-106.5L750,821.89,558.27,886.31c3.64,3,51.12,45.51,80.31,71.69a121.07,121.07,0,0,1,33,48.89h0c-14.84,21.13-57.72,88.19-44.92,171.84,12.09,79,67.16,129,103.83,162.39a396.42,396.42,0,0,0,88,60.44,121.54,121.54,0,0,0,98.43,19.6c5.76-1.34,16.84-4.18,27.22-7.38,4.58-1.42,10.4-3.23,17.06-5.57v0l1.1-.41,1.1-.39h0c6.61-2.47,12.24-4.8,16.67-6.65,10-4.19,20.35-9.11,25.63-11.77a121.54,121.54,0,0,0,63-78.09,396.28,396.28,0,0,0,28.85-102.77C1104.37,1159.06,1114.61,1085.35,1073.3,1016.93Z"/><ellipse class="cls-2" cx="748.2" cy="816.89" rx="202.22" ry="30.98" transform="translate(-233.49 303.67) rotate(-19.91)"/><path class="cls-3" d="M959,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-6.95-1-15.39-1H959"/><path class="cls-3" d="M1749,1447l-.09,82.82c0,6.19,6.66,11.22,14.88,11.23h.3c8.22,0,14.9-5,14.9-11.2l.09-81.9c0-.53-7-1-15.39-1H1749"/><path class="cls-4" d="M1825.5,1426.5H755.25a10.75,10.75,0,0,0-10.75,10.75h0A10.75,10.75,0,0,0,755.25,1448H1815a10.75,10.75,0,0,0,10.74-11l-.24-10.5"/><path class="cls-5" d="M701.74,867.5S663.12,1015,669.56,1076.79c3.84,36.88,2.64,98,1,141.4a52.4,52.4,0,0,1-104.76-1.3c-.27-22-2.78-38.74-.5-51.2,13.67-74.81-7.27-76,5.08-144.26q3.17-11.08,6.56-22.29c11.82-39,24.77-75.25,38.5-110.61,14.74-1.39,31.2-5.77,48.93-9.73C678,875.76,690.47,871.22,701.74,867.5Z"/><path class="cls-5" d="M719.77,1182.37c-8.92,0-15.45-12.93-18-18-17.59-34.83,9-95.59,19.32-117.16,9.86,22.2,34.32,82.46,16.74,117.16C735.17,1169.52,728.66,1182.37,719.77,1182.37Z"/><path class="cls-6" d="M1915.78,1027c-110.75-95.83-248-74.53-267.79-71.13-190.52,30.41-344.62,100-368.21,188.29a549.59,549.59,0,0,0-11.7,55.33c-47.15-8-126.29-11.92-172.38,38.22l-.23.26c-13.09,14.32-3.91,37.46,15.39,39.47,11.56,1.2,25.45,2.36,41.11,3.12,32.51,1.58,102.09,52,145.66,85.51A156.16,156.16,0,0,0,1404.34,1419l.66,0c12.09,8.11,44,27.11,88.17,26.43a153,153,0,0,0,66.95-16.73l160.38-2.2c74.24,21.55,133.85,19.3,170.18,14.75,52.21-6.53,71.81-19.57,80.58-26.78,30.3-25,41.33-63.94,49.13-102.93C2036.41,1231.43,2010.61,1109.06,1915.78,1027Z"/><path class="cls-6" d="M1267,1198c-9.38-27.55-23.66-79.78-24.88-129.15a393.76,393.76,0,0,1,12.55-108.79,334.61,334.61,0,0,1-32.62-173.74,17.07,17.07,0,0,1,26-13l132.1,82.11a320.21,320.21,0,0,1,150.63-4.18l119.81-98a13.73,13.73,0,0,1,22.29,8.61,456.39,456.39,0,0,1-16.57,202.39,188.88,188.88,0,0,1,7.14,87.26"/><path class="cls-5" d="M583.29,1375.5H583s-8.5-.11-16.44-7.73c-6.25-6-.85-32.43,18-63.08,16.1,31.14,20.08,57.13,14.16,63.08C591.12,1375.46,583.29,1375.5,583.29,1375.5Z"/><path class="cls-7" d="M2024.5,1260.5c14.81,6.82,38.24,20.41,54,46,36.42,59.15,9.28,145.76-41.37,191.33-36.76,33.08-79.09,38.28-112.39,42.57-19.52,2.51-110,13.78-172.14-42.57-12.57-11.4-42-38.11-37.66-71.13,2.25-17,13.79-39.69,33.47-46,37.71-12.14,60.28,50.17,131.09,57.83,10.2,1.1,53.88,4.58,88-23,5.59-4.52,14.81-13,26-32C2005,1364,2024.43,1323.52,2024.5,1260.5Z"/><path class="cls-8" d="M1560.5,1428.5s69-32,85-94"/><path class="cls-7" d="M1530.83,851.27l119.81-98a13.73,13.73,0,0,1,22.29,8.61c3.24,22.58,4.13,45.46,4.35,81S1665,911,1656.5,964.5a284.8,284.8,0,0,0-125.67-113.23Z"/><path class="cls-8" d="M1408.5,1420.5c-1.77-1.54-8.83-8-9-17.67-.11-7.92,4.52-13.56,6-15.33,12.18-14.84,33.82-8.35,59-15,11.91-3.15,28.36-10.22,46-28"/><ellipse class="cls-7" cx="1452.5" cy="998.5" rx="153" ry="117"/><circle class="cls-9" cx="1355" cy="991" r="31.5"/><path class="cls-10" d="M1672.5,762.5s-70,95-77,117c-5.24,16.45,18.62,8.3,31,3.14a2.87,2.87,0,0,1,3.69,3.88l-8.3,17.53a6.35,6.35,0,0,0,7.75,8.74l9.91-3.3a2.87,2.87,0,0,1,3.56,3.83l-3.59,17.18,17,34a457.51,457.51,0,0,0,16-202Z"/><path class="cls-7" d="M1379.5,855.5c-43.86-27.19-89.35-56.1-133.21-83.29-9.07-5.62-23.66,1.62-23.79,12.29-.27,22.81-4,48.1,3,83,3.77,18.84,5.45,28.58,9.26,41.5a315.06,315.06,0,0,0,19.74,50.5,199,199,0,0,1,18-29c5.75-7.71,26.56-34.42,64-56A221.93,221.93,0,0,1,1379.5,855.5Z"/><path class="cls-11" d="M1222.5,782.5s75.38,65.94,84.71,83.21c.55,1,2.89,5.62,1.16,7.71-3.3,4-17.41-6.08-23.87-.92a6.77,6.77,0,0,0-1.62,1.92,8,8,0,0,0,.75,8.68c2.16,2.87,5,7.47,4.73,11.84a6.33,6.33,0,0,1-1.15,3.63c-1.93,2.36-5.52,2.38-6.51,2.38-6.55,0-10.09-6.31-10.25-6.6a4.65,4.65,0,0,0-6,.13,3.51,3.51,0,0,0-.94,2,8.85,8.85,0,0,0,.82,5.06c2.17,4.39-.37,18.55-1.85,24.93a93.65,93.65,0,0,1-11,27c-9-19.66-21.15-51-27-89a326.82,326.82,0,0,1-3.49-62.74C1221.37,793.9,1222,787.3,1222.5,782.5Z"/><circle class="cls-12" cx="1355" cy="991" r="22.5"/><circle class="cls-9" cx="1557" cy="991" r="31.5"/><circle class="cls-12" cx="1557" cy="991" r="22.5"/><path class="cls-10" d="M1445.26,997.13l10.24,1.37,9.39-1.34a2.14,2.14,0,0,1,2.11,3.27l-9.09,14.28a3,3,0,0,1-4.94.08l-9.77-14.33A2.15,2.15,0,0,1,1445.26,997.13Z"/><path class="cls-13" d="M1454.74,1016.08s2.76,17.42-17.24,15.42"/><path class="cls-13" d="M1455.63,1017.08s-2.76,17.42,17.24,15.42"/><path class="cls-14" d="M1664.5,1001.5,1735,980"/><path class="cls-14" d="M1667,1017l66.5,10.5"/><path class="cls-14" d="M1244,1017l-60.5,13.5"/><path class="cls-14" d="M1246.5,1000.5,1180,990"/><path class="cls-15" d="M497.79,404c44.57,20.37,95.3,66.11,155.71,124.48,92.79,89.66,150.8,234.43,169,289-5.77,2.68-30.23-42.68-36-40-19.27-52.74-57.27-138.85-139-223-66.8-68.78-125-119.67-172-142Z"/><path class="cls-15" d="M745.55,850.16c-74.68-63-179.26-139.49-214.14-152.89-89.78-34.5-169.48-49.55-221.09-50.06q8.32-8.54,16.67-17.06c49-.22,119.61,13.39,199,41,31.84,11.09,153.72,90.48,241,170.65Z"/><path class="cls-15" d="M823.54,819.3c-17.76-23.9-59.56-97.14-83.92-120.77a597.13,597.13,0,0,0-166.5-113.78l-22.31,8.44A635.18,635.18,0,0,1,733.58,724.52c17.7,18.29,54.44,85.77,68.42,104Z"/><path class="cls-7" d="M1479.5,1367.5l34,76a192.85,192.85,0,0,1-51-1s-29.19-3.39-48.59-18c-13.48-10.12-14.12-17.25-14.29-19.38-.78-9.74,5.64-16.63,8.13-19l.75-.68c9-7.86,25-8.93,26-9C1444.74,1375.81,1458.89,1373.16,1479.5,1367.5Z"/><path class="cls-16" d="M1173.28,1285.23l30.22-89.73a156.61,156.61,0,0,0-60,11,149.83,149.83,0,0,0-38,23c-1,.85-15,12.88-15.5,24.47,0,.63,0,1.22,0,1.26.23,9.77,7.33,16,10.06,18l.82.6c8.37,5.92,18.58,5.26,33.63,5.63,8.49.21,12.73.32,18,1A113.17,113.17,0,0,1,1173.28,1285.23Z"/><path class="cls-17" d="M292.3,344.49l-28.05-15.3a40.34,40.34,0,0,1-20.8-39.64l2.35-22.21a61.8,61.8,0,0,1,26.57-44.52h0a29.52,29.52,0,0,1,29.48-2.22,82.16,82.16,0,0,0,8.28,3.32,234.66,234.66,0,0,1,86.78,54.37l-43.47,78.83Z"/><path class="cls-17" d="M318.73,318l-.69.05a40.94,40.94,0,0,0-37,32l-2.68,12.12a53.57,53.57,0,0,0,33.25,61.63L394.1,455.2,406.8,365l-57-38.69A48.91,48.91,0,0,0,318.73,318Z"/><path class="cls-17" d="M465,262.82l-32.13-42.59A53.66,53.66,0,0,0,379,200l-10.53,2.21A31.57,31.57,0,0,0,348.89,251l27,38.3,84.61,30.61Z"/><circle class="cls-9" cx="395.47" cy="335.18" r="65.13"/><path class="cls-17" d="M410.35,262.8l-3.18,24.43c-1.27,9.71,1.05,18.92,6.5,25.82l43.66,55.28,25.6,66.79a188.3,188.3,0,0,0,13.53-28.27s9.66-27.18,8.55-57.61c-2-56.48-41.85-101.41-48.51-108.74a21.18,21.18,0,0,0-11-7c-8.32-2-15.23,2.41-18.82,4.69C414.7,245.8,411.24,258.85,410.35,262.8Z"/><path class="cls-17" d="M393,455.33,343.6,432.5a42.53,42.53,0,0,1-21-55.8l10.27-23.18a56,56,0,0,1,70.16-30l59.18,21.35A54.61,54.61,0,0,1,497.69,404h0a72.53,72.53,0,0,1-17.51,34.08c-22.74,24.35-55.11,23-60.87,22.72A83.93,83.93,0,0,1,393,455.33Z"/><path class="cls-17" d="M220.48,538.45l-4.1-14.15a39.86,39.86,0,0,1,20.26-46.64h0a44.74,44.74,0,0,1,46.87,4c12.59,4.22,69.55,24.82,98.81,84.49a161.75,161.75,0,0,1,16.25,66.83A8.26,8.26,0,0,1,386,640.17Z"/><path class="cls-17" d="M173.88,677.25,191,690a87.06,87.06,0,0,0,16.42,9.6,175.79,175.79,0,0,0,21.43,7.83c15.81,4.64,54.81,16.06,98.18.1,33.26-12.24,53.93-35,64.71-49.86a7,7,0,0,0-4.9-11.16L198.54,625.16a32.86,32.86,0,0,0-33,17.77A27.41,27.41,0,0,0,173.88,677.25Z"/><path class="cls-17" d="M160.14,576h0a63.93,63.93,0,0,0,32.92,42l57.42,29.55c3.85,1.51,9.48,3.61,16.37,5.82a265.52,265.52,0,0,0,45,10.4c27.27,3.24,57.36-5.36,74.44-11.41a13.29,13.29,0,0,0,8.07-17c-10.22-28.29-25.28-44.58-33.77-52.46-15.68-14.55-34.71-24.26-49.92-32a314.15,314.15,0,0,0-29.59-13.23l-48.9-13.51A63.9,63.9,0,0,0,184.09,530l-4.91,2.74A39.23,39.23,0,0,0,160.14,576Z"/><path class="cls-17" d="M525.79,497.88a10.12,10.12,0,0,0-10.16,11.81c4,23.68,14.18,75.92,28.34,89.12,18.47,17.22,48.15,116.37,130.7,95.46,56.68-14.36,39.26-73.52,22.76-109.22a117,117,0,0,0-41.89-48.75A228.19,228.19,0,0,0,597,509,260,260,0,0,0,525.79,497.88Z"/><path class="cls-15" d="M857.63,805C860.5,803.5,830.5,512.5,746.5,400.5s-104-130-104-130-2,85,34,145,78,160,90,182,56,223,56,223Z"/></svg>
    </div>
    
  </div>
</div>
`;

var _default = Handlebars.compile(template);

exports.default = _default;
},{}],"src/page/page-not-found.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pageNotFound = _interopRequireDefault(require("./page-not-found.template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PageNotFound {
  #template = _pageNotFound.default;
  #container;

  constructor(container) {
    this.#container = document.querySelector(container);
  }

  render = () => {
    this.#container.innerHTML = this.#template();
  };
}

exports.default = PageNotFound;
},{"./page-not-found.template":"src/page/page-not-found.template.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _store = _interopRequireDefault(require("./store"));

var _login = _interopRequireDefault(require("./page/login"));

var _profile = _interopRequireDefault(require("./page/profile"));

var _pageNotFound = _interopRequireDefault(require("./page/page-not-found"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const store = new _store.default();

function router() {
  const path = location.hash;

  switch (path) {
    case '':
    case '#/login':
      const login = new _login.default('#root', {
        store,
        title: 'JS & TS Essential'
      });
      login.render();
      break;

    case '#/profile':
      const profile = new _profile.default('#root', {
        store
      });
      profile.render();
      break;

    default:
      const pageNotFound = new _pageNotFound.default('#root');
      pageNotFound.render();
      break;
  }
}

window.addEventListener('hashchange', router);
document.addEventListener('DOMContentLoaded', router);
},{"./store":"src/store.js","./page/login":"src/page/login.js","./page/profile":"src/page/profile.js","./page/page-not-found":"src/page/page-not-found.js"}],"../../../../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61872" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map