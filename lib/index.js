"use strict";
// ***********************************************************************************************************************
// ArrayUtils.ts
// ***********************************************************************************************************************
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLLocation = exports.URLUtils = exports.DOMUtils = exports.NodeType = exports.DateUtils = exports.DatePeriod = exports.DateDuration = exports.StringUtils = exports.StringSearch = exports.Utils = exports.List = exports.ListEvent = exports.Key = exports.EventListener = exports.EPLEventEmitter = exports.PropertyChangeEvent = exports.EplEvent = exports.MathUtils = exports.ArrayUtils = void 0;
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    ArrayUtils.parse = function (arr, f, sameArray) {
        if (sameArray === void 0) { sameArray = false; }
        var tArray = arr;
        if (sameArray)
            tArray = [];
        for (var i = 0; i < arr.length; i++)
            tArray[i] = f(arr[i]);
        return tArray;
    };
    ArrayUtils.forEach = function (arr, f) {
        for (var i = 0; i < arr.length; i++) {
            var result = f(arr[i]);
            if (result == "break")
                break;
        }
    };
    ArrayUtils.forEachAsync = function (arr, f) {
        return __awaiter(this, void 0, void 0, function () {
            var i, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < arr.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, f(arr[i])];
                    case 2:
                        result = _a.sent();
                        if (result == "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ArrayUtils.getListOfNumbers = function (count, startAt) {
        if (startAt === void 0) { startAt = 0; }
        var arr = [];
        for (var i = 0; i <= count; i++)
            arr.push(startAt + i);
        return arr;
    };
    ArrayUtils.shuffle = function (arr) {
        var currentIndex = arr.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    };
    ArrayUtils.removeItem = function (arr, item) {
        var i = ArrayUtils.indexOf(arr, item);
        if (i != -1) {
            arr.splice(i, 1);
            return true;
        }
        return false;
    };
    ArrayUtils.removeItemAt = function (arr, index) {
        arr.splice(index, 1);
        return;
    };
    ArrayUtils.lastItem = function (arr) {
        if (arr.length > 0)
            return arr[arr.length - 1];
        else
            return null;
    };
    ArrayUtils.getItemByProperty = function (arr, propertyName, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i][propertyName] == value)
                return arr[i];
        }
        return null;
    };
    ArrayUtils.getUniqueValues = function (arr) {
        if (arr == null)
            return null;
        var arrUnique = [];
        var j;
        var found = false;
        for (var i = 0; i < arr.length; i++) {
            found = false;
            for (j = 0; j < arrUnique.length; j++) {
                if (arrUnique[j] == arr[i])
                    found = true;
            }
            if (!found)
                arrUnique.push(arr[i]);
        }
        return arrUnique;
    };
    ArrayUtils.indexOf = function (arr, value, subFieldName, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        if (arr == null || arr.length == 0)
            return -1;
        if (ignoreCase)
            value = value.toLowerCase();
        for (var i = 0; i < arr.length; i++) {
            var iValue = subFieldName ? arr[i][subFieldName] : arr[i];
            if (ignoreCase)
                try {
                    iValue = iValue.toLowerCase();
                }
                catch (err) {
                    // do nothing
                }
            if (iValue == value)
                return i;
        }
        return -1;
    };
    ArrayUtils.contains = function (arr, value, subFieldName, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        var i = ArrayUtils.indexOf(arr, value, subFieldName, ignoreCase);
        return i != -1;
    };
    ArrayUtils.collectionToArray = function (o) {
        var arr = new Array();
        for (var each in o) {
            arr.push(new Key(each, o[each]));
        }
        return arr;
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;
// ***********************************************************************************************************************
// MathUtils.ts
// ***********************************************************************************************************************
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    // [Eric Perron 2019-10-10] I tested this method and it will return within 1 or 2 ms even if the number reaches into the millions at base 62. 
    MathUtils.toBaseN = function (num, base) {
        if (base === void 0) { base = 62; }
        if (base <= 1)
            throw "Base cannot be equal or smaller than 1";
        if (Math.round(base) != base)
            throw "Base must be an integer, it cannot be a float.";
        // if the output is abcde
        //  baseLogic is
        //  (a × n⁴) + (b × n³) + (c × n²) + (d × n¹) + (e × n⁰)
        var pow = Math.floor(this.nRoot(num, base));
        // get the maximum exponent 
        var tmpNum = num;
        var str = "";
        while (pow >= 0) {
            if (tmpNum == 0) {
                str = str + "0";
            }
            else {
                var digitUnit = Math.pow(base, pow);
                var digit = 0;
                digit = Math.floor(tmpNum / digitUnit);
                tmpNum -= (digit * digitUnit);
                // update the string
                str = str + MathUtils.getBaseChar(digit);
            }
            pow -= 1;
        }
        if (str == "")
            return "0";
        return str;
    };
    MathUtils.getBaseChar = function (num) {
        if (num < 0)
            throw "The number cannot be negative!";
        if (num > 62)
            throw "base cannot exceed 62";
        // 0 to 9 are as is.  (ASCII 48 to 57)
        if (num < 10)
            return String(num);
        // 10 to 36 = a to z  (ASCII 97 to 122)
        if (num < 36)
            return String.fromCharCode(97 + num - 10);
        // 37 to 63 = A to Z  (ASCII 65 to 90)
        if (num >= 36)
            return String.fromCharCode(65 + num - 36);
    };
    MathUtils.nRoot = function (num, base) {
        return Math.log10(num) / Math.log10(base);
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;
// ***********************************************************************************************************************
// EPLEventEmitter.ts
// ***********************************************************************************************************************
var EplEvent = /** @class */ (function () {
    function EplEvent(type, targetObj, data) {
        this._type = type;
        this._target = targetObj;
        this.data = data;
    }
    Object.defineProperty(EplEvent.prototype, "target", {
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EplEvent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    EplEvent.prototype.clone = function (targetObj) {
        var newEvent = new EplEvent(this.type, targetObj);
        newEvent.data = this.data;
        return newEvent;
    };
    EplEvent.COMPLETE = "complete";
    return EplEvent;
}());
exports.EplEvent = EplEvent;
var PropertyChangeEvent = /** @class */ (function (_super) {
    __extends(PropertyChangeEvent, _super);
    function PropertyChangeEvent(type, obj) {
        var _this = _super.call(this, type, obj) || this;
        _this.propertyName = "";
        return _this;
    }
    PropertyChangeEvent.prototype.clone = function (targetObj) {
        var newEvent = new PropertyChangeEvent(this.type, targetObj);
        newEvent.data = this.data;
        newEvent.oldValue = this.oldValue;
        newEvent.newValue = this.newValue;
        newEvent.propertyName = this.propertyName;
        return newEvent;
    };
    PropertyChangeEvent.BEFORE_CHANGE = "beforePropertyChange";
    PropertyChangeEvent.CHANGE = "propertyChange";
    return PropertyChangeEvent;
}(EplEvent));
exports.PropertyChangeEvent = PropertyChangeEvent;
var EPLEventEmitter = /** @class */ (function () {
    function EPLEventEmitter() {
        // *********************************************
        // Public Methods
        // *********************************************
        // *********************************************
        // Private properties
        // *********************************************
        this._listeners = new Array();
    }
    EPLEventEmitter.prototype.mimicEvent = function (type, dispatcherObj) {
        dispatcherObj.on(type, this._mimicHandler, this);
    };
    EPLEventEmitter.prototype.mimicEventOff = function (type, dispatcherObj) {
        dispatcherObj.off(type, this._mimicHandler, this);
    };
    EPLEventEmitter.prototype.getEventListener = function (type, listener, scope) {
        var exists = false;
        for (var i = 0; i < this._listeners.length; i++) {
            var item = this._listeners[i];
            if (item.type === type && item.listener === listener && item.scope == scope)
                return item;
        }
        return null;
    };
    EPLEventEmitter.prototype.onAll = function (listenerFunc, scope) {
        var listener = new EventListener("**EPS: subscribe to all events", listenerFunc, scope);
        this._listeners.push(listener);
        return listener;
    };
    EPLEventEmitter.prototype.on = function (type, listenerFunc, scope) {
        if (listenerFunc == null) {
            console.error("The listener for [" + type + "], is not defined!");
            throw "The listener is not defined!";
        }
        if (typeof type == "string") {
            if (this.getEventListener(type, listenerFunc, scope) != null)
                return;
            var listener = new EventListener(type, listenerFunc, scope);
            this._listeners.push(listener);
            return listener;
        }
        else {
            var arr = new Array();
            for (var _i = 0, type_1 = type; _i < type_1.length; _i++) {
                var typeItem = type_1[_i];
                var listener = this.on(typeItem, listenerFunc, scope);
                arr.push(listener);
            }
            return arr;
        }
    };
    EPLEventEmitter.prototype.onOnce = function (type, listenerFunc, scope) {
        if (typeof type == "string") {
            if (this.getEventListener(type, listenerFunc, scope))
                return;
            var listener = new EventListener(type, listenerFunc, scope, true);
            this._listeners.push(listener);
            return listener;
        }
        else {
            var arr = new Array();
            for (var _i = 0, type_2 = type; _i < type_2.length; _i++) {
                var typeItem = type_2[_i];
                var listener = this.onOnce(typeItem, listenerFunc, scope);
                arr.push(listener);
            }
            return arr;
        }
    };
    EPLEventEmitter.prototype.off = function (type, listenerFunc, scope) {
        if (typeof type == "string") {
            for (var i = 0; i < this._listeners.length; i++) {
                var item = this._listeners[i];
                if (item.type === type && (item.listener === listenerFunc || listenerFunc == null) && item.scope === scope) {
                    this._listeners.splice(i, 1);
                }
            }
        }
        else
            for (var _i = 0, type_3 = type; _i < type_3.length; _i++) {
                var typeItem = type_3[_i];
                this.off(typeItem, listenerFunc, scope);
            }
    };
    EPLEventEmitter.prototype.offAll = function (scope) {
        if (scope === void 0) { scope = null; }
        // let scope:any = null;
        for (var i = this._listeners.length - 1; i >= 0; i--) {
            var item = this._listeners[i];
            if (scope == null || item.scope == scope) {
                item.type = null;
                item.scope = null;
                item.listener = null;
                try {
                    this._listeners.splice(i, 1);
                }
                catch (error) { }
            }
        }
    };
    EPLEventEmitter.prototype.emit = function (evt, data) {
        if (typeof evt == "string") {
            evt = new EplEvent(evt, this);
            evt.data = data;
        }
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i].type === evt.type || this._listeners[i].type == "*" || this._listeners[i].type == "**EPS: subscribe to all events") {
                var listener = this._listeners[i];
                if (typeof listener.listener == "string") {
                    listener.scope[listener.listener](evt);
                }
                else
                    listener.listener.call(this, evt, listener.scope);
                if (listener.once)
                    this.off(listener.type, listener.listener, listener.scope);
            }
        }
    };
    // *********************************************
    // Event Handlers
    // *********************************************
    EPLEventEmitter.prototype._mimicHandler = function (event, scope) {
        var newEvent = event.clone(scope);
        scope.emit(newEvent);
    };
    EPLEventEmitter.prototype.removeEventListener = function (eventListener) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (eventListener == this._listeners[i])
                this._listeners.splice(i, 1);
        }
    };
    return EPLEventEmitter;
}());
exports.EPLEventEmitter = EPLEventEmitter;
var EventListener = /** @class */ (function () {
    function EventListener(type, listener, scope, once) {
        if (once === void 0) { once = false; }
        this.once = false;
        this.type = type;
        this.listener = listener;
        this.scope = scope;
        this.once = once;
    }
    return EventListener;
}());
exports.EventListener = EventListener;
// ***********************************************************************************************************************
// Key.ts
// ***********************************************************************************************************************
var Key = /** @class */ (function (_super) {
    __extends(Key, _super);
    function Key(label, value) {
        if (label === void 0) { label = null; }
        var _this = _super.call(this) || this;
        _this._label = label;
        _this._value = value;
        return _this;
    }
    Object.defineProperty(Key.prototype, "label", {
        get: function () { return this._label; },
        set: function (v) {
            if (this._label == v)
                return;
            // prepare the change event
            var e = new PropertyChangeEvent(PropertyChangeEvent.CHANGE, this);
            e.newValue = v;
            e.oldValue = this._label;
            e.propertyName = "label";
            // change the bindAtt
            this._label = v;
            // dispatch the event
            this.emit(e);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Key.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            if (this._value == v)
                return;
            // prepare the change event
            var e = new PropertyChangeEvent(PropertyChangeEvent.CHANGE, this);
            e.newValue = v;
            e.oldValue = this._value;
            e.propertyName = "value";
            // change the bindAtt
            this._value = v;
            // dispatch the event
            this.emit(e);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    Key.prototype.toJSON = function () {
        return {
            label: this.label,
            value: this.value
        };
    };
    Key.prototype.fromJSON = function (o) {
        this.label = o.label;
        this.value = o.value;
    };
    return Key;
}(EPLEventEmitter));
exports.Key = Key;
// ***********************************************************************************************************************
// List.ts
// ***********************************************************************************************************************
var ListEvent = /** @class */ (function (_super) {
    __extends(ListEvent, _super);
    function ListEvent(type, targetObj) {
        var _this = _super.call(this, type, targetObj) || this;
        _this.index = -1;
        _this.oldIndex = -1;
        return _this;
    }
    ListEvent.ITEM_ADDED = "itemAdded";
    ListEvent.ITEM_REMOVED = "itemRemoved";
    ListEvent.ITEMS_ADDED = "itemsAdded";
    ListEvent.REMOVE_ALL = "removeAll";
    ListEvent.BEFORE_REMOVE_ALL = "beforeRemoveAll";
    ListEvent.MOVE = "move";
    return ListEvent;
}(EplEvent));
exports.ListEvent = ListEvent;
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    // ***************************************
    // CONSTRUCTOR
    // ***************************************
    function List(list) {
        var _this = _super.call(this) || this;
        // *************************************
        // Public Properties
        // *************************************
        _this.idFieldName = "id";
        _this.className = "List";
        // *************************************
        // Private Properties
        // *************************************
        _this._list = [];
        _this.addItems(list);
        return _this;
    }
    // *************************************
    // Static Public methods
    // *************************************
    List.isList = function (obj) {
        if (obj && obj.className == "List")
            return true;
        return false;
    };
    // *************************************
    // Public Methods
    // *************************************
    List.prototype.hasUniqueValues = function () {
        var _this = this;
        var flag = true;
        this.forEach(function (a) {
            var c = _this.find(function (b) {
                return (a == b);
            });
            if (c != -1) {
                flag = false;
                return List.BREAK;
            }
        });
        return flag;
    };
    List.prototype.getUniqueValues = function () {
        var unique = new List();
        var j;
        var found = false;
        for (var i = 0; i < this._list.length; i++) {
            found = false;
            for (j = 0; j < unique.length; j++) {
                if (unique[j] == this._list[i])
                    found = true;
            }
            if (!found)
                unique.addItem(this._list[i]);
        }
        return unique;
    };
    List.prototype.removeDuplicates = function (f) {
        var _this = this;
        if (f == null)
            f = function (a, b) { return a == b; };
        if (this.length < 2)
            return;
        this.forEach(function (item, index) {
            var findIndex = _this.find(function (item2, index2) { return (index != index2 && f(item, item2)); });
            if (findIndex != -1) {
                _this.removeItemAt(findIndex);
            }
        }, true);
        return;
    };
    List.prototype.destroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // removes all the event listeners.
                        // this method is to clear memory. When this is called, your code should not be
                        // listening to any events on this object.
                        this.offAll();
                        // destroy each of the children
                        return [4 /*yield*/, this.forEachAsync(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (item.destroy)
                                        return [2 /*return*/, Utils.toAsync(item.destroy())];
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        // destroy each of the children
                        _a.sent();
                        // removes all the children.
                        this.removeAll();
                        return [2 /*return*/];
                }
            });
        });
    };
    List.prototype.toString = function (f, seperator, ignoreNullOrEmpty) {
        if (seperator === void 0) { seperator = ","; }
        if (ignoreNullOrEmpty === void 0) { ignoreNullOrEmpty = false; }
        var result = "";
        this.forEach(function (item) {
            var itemValue = (f == null) ? item.toString() : f(item);
            if (!ignoreNullOrEmpty || !StringUtils.isNullOrEmpty(itemValue))
                result += itemValue + seperator;
        });
        result = result.substr(0, result.length - 1);
        return result;
    };
    Object.defineProperty(List.prototype, "last", {
        get: function () {
            if (this._list.length == 0)
                return null;
            return this._list[this._list.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "first", {
        get: function () {
            return this._list[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "random", {
        get: function () {
            if (this.count == 0)
                return null;
            if (this.count == 1)
                return this._list[0];
            var i = Math.round(Math.random() * this.count - 1);
            if (i == -1)
                i = 0;
            return this._list[i];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "length", {
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "count", {
        get: function () {
            return this._list.length;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.removeItemAt = function (index) {
        // remove from the list
        if (index < 0 && index > (this._list.length - 1)) {
            console.debug("EPL List: Index is out of range. index: " + index + ".");
            return;
        }
        var rslt = this._list.splice(index, 1);
        if (rslt.length == 0) {
            console.debug("EPL List: Unable to remove item at " + index + ". Nothing returned by the splice method!");
            return;
        }
        var item = rslt[0];
        var event = new ListEvent(ListEvent.ITEM_REMOVED, this);
        event.item = item;
        event.index = index;
        this.emit(event);
        return item;
    };
    List.prototype.move = function (item, index) {
        var old_index = this.indexOf(item);
        if (old_index == -1 || old_index == index || index == this.count)
            return;
        this._list.splice(index, 0, this._list.splice(old_index, 1)[0]);
        var event = new ListEvent(ListEvent.MOVE, this);
        event.item = item;
        event.index = index;
        event.oldIndex = old_index;
        this.emit(event);
    };
    List.prototype.pop = function (first) {
        if (first === void 0) { first = false; }
        var item;
        if (first) {
            item = this.first;
            this.removeItemAt(0);
        }
        else {
            item = this.last;
            this.removeItemAt(this.count - 1);
        }
        return item;
    };
    List.prototype.popRange = function (from, to) {
        if (to > this.length - 1)
            to = this.length - 1;
        if (from == 0 && to == 0) {
            var r = new List();
            r.addItem(this._list[0]);
            this._list = [];
            return r;
        }
        return new List(this._list.splice(from, to));
    };
    List.prototype.removeAll = function () {
        var event = new ListEvent(ListEvent.BEFORE_REMOVE_ALL, this);
        this.emit(event);
        this._list = [];
        var event2 = new ListEvent(ListEvent.REMOVE_ALL, this);
        this.emit(event2);
    };
    List.prototype.itemAt = function (index) {
        return this._list[index];
    };
    List.prototype.find = function (f) {
        var flag;
        var index = 0;
        for (index; index < this.length; index++) {
            flag = f(this.itemAt(index), index);
            if (flag)
                break;
        }
        if (flag)
            return index;
        else
            return -1;
    };
    List.prototype.findSortedItem = function (value, getValue) {
        var _this = this;
        if (getValue == null)
            getValue = function (item, index) {
                return String(item);
            };
        var f = function (value, from, to) {
            if (from == to) {
                var item = _this.itemAt(from);
                return (getValue(item) == value) ? item : null;
            }
            else if (to - from == 1) {
                var fromItem = _this.itemAt(from);
                if (getValue(fromItem) == value)
                    return fromItem;
                var toItem = _this.itemAt(to);
                if (getValue(toItem) == value)
                    return toItem;
                return null;
            }
            var mid = Math.floor((to - from) / 2) + from;
            var midItem = _this.itemAt(mid);
            var midItemValue = getValue(midItem);
            if (midItemValue == value)
                return midItem;
            else if (midItemValue < value)
                return f(value, mid, to);
            else
                return f(value, from, mid);
        };
        return f(value, 0, this.count - 1);
    };
    List.prototype.findItem = function (f, data) {
        var flag;
        var index = 0;
        for (index; index < this.length; index++) {
            flag = f(this.itemAt(index), data);
            if (flag)
                break;
        }
        if (!flag)
            return null;
        else
            return this.itemAt(index);
    };
    List.prototype.forEach = function (f, reverse) {
        if (reverse === void 0) { reverse = false; }
        var flag;
        if (reverse) {
            for (var index = this.length - 1; index >= 0; index--) {
                flag = f(this.itemAt(index), index);
                if (flag == List.BREAK)
                    break;
            }
        }
        else
            for (var index = 0; index < this.length; index++) {
                flag = f(this.itemAt(index), index);
                if (flag == List.BREAK)
                    break;
            }
        if (flag == List.BREAK)
            return flag;
    };
    List.prototype.forEachAsync = function (f, reverse) {
        if (reverse === void 0) { reverse = false; }
        return __awaiter(this, void 0, void 0, function () {
            var index, r, index, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reverse) return [3 /*break*/, 5];
                        index = this.length - 1;
                        _a.label = 1;
                    case 1:
                        if (!(index >= 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, f(this.itemAt(index), index)];
                    case 2:
                        r = _a.sent();
                        if (r == "break")
                            return [3 /*break*/, 4];
                        _a.label = 3;
                    case 3:
                        index--;
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        index = 0;
                        _a.label = 6;
                    case 6:
                        if (!(index < this.length)) return [3 /*break*/, 9];
                        return [4 /*yield*/, f(this.itemAt(index), index)];
                    case 7:
                        r = _a.sent();
                        if (r == "break")
                            return [3 /*break*/, 9];
                        _a.label = 8;
                    case 8:
                        index++;
                        return [3 /*break*/, 6];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    List.prototype.setItemAt = function (item, index) {
        if (index === void 0) { index = -1; }
        if (this._list[index] !== undefined) {
            var event_1 = new ListEvent(ListEvent.ITEM_REMOVED, this);
            event_1.item = item;
            event_1.index = index;
            this.emit(event_1);
        }
        // replace the content
        this._list[index] = item;
        var event2 = new ListEvent(ListEvent.ITEM_ADDED, this);
        event2.item = item;
        event2.index = index;
        this.emit(event2);
        return item;
    };
    List.prototype.addItemAt = function (item, index) {
        if (index === void 0) { index = -1; }
        // if the index is invalid, append to the end.
        if (index < 0 || index > this._list.length)
            this._list.push(item);
        else
            this._list.splice(index, 0, item);
        var event = new ListEvent(ListEvent.ITEM_ADDED, this);
        event.item = item;
        event.index = index;
        this.emit(event);
        return item;
    };
    List.prototype.addItem = function (item) {
        if (item == null)
            if (this.itemFactory)
                item = this.itemFactory();
            else
                return;
        this.addItemAt(item, -1);
        return item;
    };
    List.prototype.toArray = function () {
        var arr = [];
        this.forEach(function (item) {
            arr.push(item);
        });
        return arr;
    };
    List.prototype.sort = function (compareFn) {
        this._list.sort(compareFn);
    };
    /**
     * This will iterate through each values in the list and replace it with the returned value.
     * @param f
     */
    List.prototype.iterate = function (f) {
        for (var i = 0; i < this._list.length; i++)
            this._list[i] = f(this._list[i], i);
    };
    List.prototype.filter = function (f) {
        var newList = [];
        for (var i = 0; i < this._list.length; i++) {
            if (f(this._list[i], i)) {
                newList.push(this._list[i]);
            }
        }
        this._list = newList;
    };
    List.prototype.addItems = function (items) {
        var _this = this;
        if (items == null || items.length == 0)
            return;
        if (items["className"] == this.className) {
            var list = items;
            list.forEach(function (list) {
                _this._list.push(list);
            });
            var event_2 = new ListEvent(ListEvent.ITEMS_ADDED, this);
            event_2.items = list.toArray();
            this.emit(event_2);
        }
        else {
            var arr = items;
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var item = arr_1[_i];
                this._list.push(item);
            }
            var event_3 = new ListEvent(ListEvent.ITEMS_ADDED, this);
            event_3.items = arr;
            this.emit(event_3);
        }
    };
    List.prototype.removeItem = function (item) {
        var i = this.indexOf(item);
        if (i == -1)
            return;
        this.removeItemAt(i);
    };
    List.prototype.indexOf = function (item) {
        return this._list.indexOf(item);
    };
    List.prototype.contains = function (item) {
        return this._list.indexOf(item) != -1;
    };
    List.prototype.lastIndexOf = function (item) {
        return this._list.lastIndexOf(item);
    };
    List.prototype.getItemById = function (id, idFieldName, ignoreCase) {
        if (idFieldName === void 0) { idFieldName = null; }
        if (ignoreCase === void 0) { ignoreCase = false; }
        if (StringUtils.isNullOrEmpty(id))
            return;
        if (idFieldName)
            this.idFieldName = idFieldName;
        if (ignoreCase)
            id = id.toLowerCase();
        for (var i = 0; i < this.length; i++) {
            var item = this.itemAt(i);
            if (item != null) {
                var v = item[this.idFieldName];
                if (ignoreCase && v && typeof v == "string")
                    v = v.toLowerCase();
                if (v == id)
                    return item;
            }
        }
        return null;
    };
    List.prototype.toJSON = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        var arr = new Array();
        this.forEach(function (item) {
            arr.push(Utils.toJSON(item, recursive));
        });
        return arr;
    };
    List.prototype.fromJSON = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            // create an instance of the list item
            if (this.itemFactory != null) {
                var item = this.itemFactory();
                // push the values into the instance
                Utils.fromJSON(arr[i], item);
                // add the item into this list;
                this.addItem(item);
            }
            else {
                console.warn("WARNING: Unable to instantiate new items as the itemFactory function has not be defined in this List.");
            }
        }
    };
    Object.defineProperty(List.prototype, "list", {
        get: function () {
            return this._list;
        },
        enumerable: false,
        configurable: true
    });
    // *************************************
    // Static Public property
    // *************************************
    List.BREAK = "break";
    return List;
}(EPLEventEmitter));
exports.List = List;
// ***********************************************************************************************************************
// Utils.ts
// ***********************************************************************************************************************
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // I was anoyed with this type of line:
    //   if(a == "hello" || a == "big" || a == "bad" || a == "world")
    // so we can now replace it with
    //   if(Utils.orEquals(a, "hello", "big", "bad", "world"))
    Utils.orEquals = function (str) {
        var arr = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arr[_i - 1] = arguments[_i];
        }
        var i = arr.findIndex(function (item) { return (item == str); });
        return (i != -1);
    };
    Utils.removeNullProperties = function (o) {
        var properties = Object.getOwnPropertyNames(o);
        properties.forEach(function (propName) {
            if (o[propName] == null)
                delete o[propName];
        });
        return o;
    };
    Utils.toAsync = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var r, p_1;
            return __generator(this, function (_a) {
                r = f();
                if (r instanceof Promise) {
                    p_1 = r;
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            p_1.then(function (value) {
                                resolve(value);
                            }).catch(function (error) {
                                reject(error);
                            });
                        })];
                }
                else
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            resolve(r);
                        })];
                return [2 /*return*/];
            });
        });
    };
    Utils.copyToClipboard = function (text) {
        var previousFocus = document.activeElement;
        var tf = document.createElement("input");
        tf.type = "text";
        tf.style.position = "absolute";
        tf.style.opacity = "0";
        document.body.appendChild(tf);
        tf.value = text;
        tf.select();
        var r = document.execCommand("Copy");
        document.body.removeChild(tf);
        if (previousFocus)
            previousFocus.focus();
    };
    Utils.getClipboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var previousFocus, tf, p;
            return __generator(this, function (_a) {
                previousFocus = document.activeElement;
                tf = document.createElement("input");
                tf.type = "text";
                tf.style.position = "absolute";
                tf.style.opacity = "0";
                tf.style.top = "0px";
                document.body.appendChild(tf);
                tf.focus();
                tf.value = "yo";
                tf.setSelectionRange(0, 2);
                p = new Promise(function (resolve, reject) {
                    tf.onkeyup = function () {
                        if (previousFocus)
                            previousFocus.focus();
                        var s = tf.value;
                        document.body.removeChild(tf);
                        resolve(s);
                    };
                });
                document.execCommand("paste");
                return [2 /*return*/, p];
            });
        });
    };
    /*
    *  This function is useful to read properties in an unknown object without causing a error.
    *
    *  for instance: prop_a.child_a.child_b.hello
    *
    *  if prop_a.child_a doesn't exist, you will simply get "null" back.
    *  it won't throw an error when trying to read "child_b" from an null object.
    *
    * */
    Utils.getValue = function (obj, path, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (path instanceof Array) {
            var arr = path;
            for (var i_1 = 0; i_1 < arr.length; i_1++) {
                var iPath = arr[i_1];
                var v = this.getValue(obj, iPath, null);
                if (v != null)
                    return v;
            }
            return defaultValue;
        }
        if (obj == null || StringUtils.isNullOrEmpty(path))
            return defaultValue;
        var i = path.indexOf(".");
        var propertyName = null;
        if (i == -1)
            propertyName = path;
        else
            propertyName = path.substring(0, i);
        var value = obj[propertyName];
        if (i < path.length - 1 && i != -1 && value != null) {
            path = path.substring(i + 1, path.length);
            return Utils.getValue(value, path, defaultValue);
        }
        if (!obj.hasOwnProperty(propertyName))
            return defaultValue;
        return value;
    };
    Utils.getInheritencePath = function (obj, separator) {
        if (separator === void 0) { separator = " -> "; }
        var className = Utils.getValue(obj, "__proto__.constructor.name");
        if (StringUtils.isNullOrEmpty(className))
            return null;
        var parentClassName;
        if (obj.__proto__ && obj.__proto__.__proto__)
            parentClassName = Utils.getInheritencePath(obj.__proto__, separator);
        if (!StringUtils.isNullOrEmpty(parentClassName))
            return parentClassName + separator + className;
        else
            return className;
    };
    // this function also makes a difference for the
    // Date = "date"
    // null = "null"
    // Array = "array"
    // List  = "list"
    // Otherwise, these properties are seen as objects.
    Utils.typeof = function (obj) {
        var t = typeof obj;
        if (t == "object") {
            if (List.isList(obj))
                return "list";
            else if (obj instanceof Array)
                return "array";
            else if (obj instanceof Date)
                return "date";
            else if (obj === null)
                return "null";
            else
                return "object";
        }
        return t;
    };
    Utils.toJSON = function (obj, recursive) {
        if (recursive === void 0) { recursive = false; }
        var t = Utils.typeof(obj);
        // string, boolean, number, date
        if (t == "string" || t == "boolean" || t == "number" || t == "date")
            return obj;
        // null
        else if (t == "null")
            return null;
        // function, symbol
        if (t == "function" || t == "symbol")
            return undefined; // ignore functions and symbol
        // has a function called toJSON
        else if (obj && obj.toJSON != null)
            return obj.toJSON(recursive);
        if (t == "array" && recursive) {
            for (var i = 0; i < obj.length; i++)
                obj[i] = Utils.toJSON(obj[i], true);
            return obj;
        }
        else if (t == "object") {
            var o = {};
            for (var prop in obj) {
                // ignore private properties
                if (StringUtils.startsWith(prop, "_"))
                    continue;
                var t_1 = Utils.typeof(obj[prop]);
                if (recursive == false && (t_1 == "object" || t_1 == "array" || t_1 == "list"))
                    o[prop] = "[" + t_1 + "]";
                else {
                    var v = Utils.toJSON(obj[prop], recursive);
                    if (v !== undefined)
                        o[prop] = v;
                }
            }
            return o;
        }
        return null;
    };
    Utils.fromJSON = function (json, obj) {
        if (obj === void 0) { obj = null; }
        if (json == null)
            return;
        if (this.typeof(obj) == "date") {
            var d = new Date(json);
            obj.setTime(d.getTime());
            return obj;
        }
        if (typeof (json) == "string") {
            json = JSON.parse(json);
            if (obj)
                obj = Utils.fromJSON(json, obj);
            return obj;
        }
        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](json);
            return obj;
        }
        for (var propName in json) {
            var prop = obj[propName];
            var value = json[propName];
            var t = Utils.typeof(prop);
            // string, boolean, number, date
            if (t == "boolean") {
                if (Utils.typeof(value) == "string")
                    obj[propName] = StringUtils.toBool(value);
                else
                    obj[propName] = value;
            }
            else if (t == "string" || t == "number" || t == "date")
                obj[propName] = value;
            else if (prop && prop.fromJSON != null)
                prop.fromJSON(value);
            else if (t == "object")
                Utils.fromJSON(value, prop);
            else
                obj[propName] = value;
        }
        return obj;
    };
    Utils.mixin = function () {
        var objs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objs[_i] = arguments[_i];
        }
        var newObj = {};
        objs.forEach(function (o) {
            Object.keys(o).forEach(function (k) {
                if (typeof newObj[k] == "object")
                    newObj[k] = Utils.mixin(newObj[k], o[k]);
                else
                    newObj[k] = o[k];
            });
        });
        return newObj;
    };
    Utils.clone = function (obj) {
        var objType = this.typeof(obj);
        if (obj === null)
            return null;
        if (obj === undefined)
            return undefined;
        if (objType == "string" || objType == "boolean" || objType == "number")
            return obj;
        if (objType == "date")
            return new Date(obj.getTime());
        if (objType == "array") {
            var arrIn = obj;
            var newObj_1 = [];
            for (var each in arrIn)
                newObj_1[each] = this.clone(arrIn[each]);
            return newObj_1;
        }
        // we are assuming it is an object
        var newObj = {};
        for (var each in obj) {
            newObj[each] = this.clone(obj[each]);
        }
        return newObj;
    };
    Utils.getProperties = function (obj) {
        var props = [];
        for (var each in obj)
            props.push(each);
        return props;
    };
    return Utils;
}());
exports.Utils = Utils;
// ***********************************************************************************************************************
// StringSearch.ts
// ***********************************************************************************************************************
var StringSearch = /** @class */ (function () {
    function StringSearch(content, contentBeginsWith, contentEndsWith, caseSensitive) {
        if (contentEndsWith === void 0) { contentEndsWith = ""; }
        if (caseSensitive === void 0) { caseSensitive = false; }
        this.contentBeginsWith = "";
        this.contentEndsWith = "";
        this.caseSensitive = false;
        this.content = content;
        this.contentBeginsWith = contentBeginsWith;
        this.contentEndsWith = contentEndsWith;
        this.caseSensitive = caseSensitive;
    }
    Object.defineProperty(StringSearch.prototype, "index", {
        // **************************************
        // PUBLIC GETS AND SETS
        // **************************************
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringSearch.prototype, "indexEnd", {
        get: function () {
            return this._indexEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringSearch.prototype, "indexInnerStart", {
        get: function () {
            return this._indexInnerStart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringSearch.prototype, "indexInnerEnd", {
        get: function () {
            return this._indexInnerEnd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringSearch.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StringSearch.prototype, "innerResult", {
        get: function () {
            return this._innerResult;
        },
        enumerable: false,
        configurable: true
    });
    // **************************************
    // PRIVATE METHODS
    // **************************************
    StringSearch.prototype.searchNext = function () {
        if (this.index + 1 >= this.content.length)
            return -1;
        else
            return this.search(this.index + 1);
    };
    StringSearch.prototype.search = function (indexOffset) {
        if (indexOffset === void 0) { indexOffset = 0; }
        this._resetResults();
        // makes sure there is something in this string;
        if (this.content == null || this.content == "")
            return -1;
        var clc = this.content.toLowerCase();
        if (!this.caseSensitive)
            this._index = clc.indexOf(this.contentBeginsWith.toLowerCase(), indexOffset);
        else
            this._index = this.content.indexOf(this.contentBeginsWith, indexOffset);
        if (this._index == -1)
            return -1;
        this._indexInnerStart = this._index + this.contentBeginsWith.length;
        if (this.contentEndsWith == "") {
            this._indexInnerStart = -1;
            this._indexEnd = this._indexInnerStart;
            return this._index;
        }
        if (!this.caseSensitive)
            this._indexInnerEnd = clc.indexOf(this.contentEndsWith.toLowerCase(), this._indexInnerStart);
        else
            this._indexInnerEnd = this.content.indexOf(this.contentEndsWith, this._indexInnerStart);
        if (this._indexInnerEnd == -1) {
            this._indexInnerStart = -1;
            this._indexEnd = this._indexInnerStart;
            return this._index;
        }
        this._innerResult = this.content.substring(this._indexInnerStart, this._indexInnerEnd);
        this._indexEnd = this._indexInnerEnd + this.contentEndsWith.length;
        this._result = this.content.substring(this._index, this._indexEnd);
        return this.index;
    };
    // **************************************
    // PRIVATE METHODS
    // **************************************
    StringSearch.prototype._resetResults = function () {
        this._index = -1;
        this._indexEnd = -1;
        this._indexInnerStart = -1;
        this._indexInnerEnd = -1;
        this._result = "";
        this._innerResult = "";
    };
    return StringSearch;
}());
exports.StringSearch = StringSearch;
// ***********************************************************************************************************************
// StringUtils.ts
// ***********************************************************************************************************************
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    StringUtils.forEach = function (str, f) {
        for (var i = 0; i < str.length; i++)
            f(str.charAt(i), i);
    };
    StringUtils.toArray = function (str) {
        var arr = new Array();
        for (var i = 0; i < str.length; i++)
            arr.push(str.substr(i, 1));
        return arr;
    };
    StringUtils.clip = function (str, length, threePoints) {
        if (threePoints === void 0) { threePoints = false; }
        if (str == null)
            return;
        if (str.length > length) {
            if (threePoints)
                length -= 3;
            str = str.substring(0, length);
            if (threePoints)
                str += "...";
        }
        return str;
    };
    StringUtils.toTitleCase = function (str) {
        var flag = false;
        var out = "";
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            if (flag || i == 0)
                c = c.toUpperCase();
            else
                c = c.toLowerCase();
            out += c;
            flag = (c == " ");
        }
        return out;
    };
    StringUtils.toSentenceCase = function (str) {
        var out = "";
        var flag = true;
        for (var i = 0; i < str.length; i++) {
            var c = str[i];
            c = flag ? c.toUpperCase() : c = c.toLowerCase();
            if (c != " ")
                flag = false;
            if (c == ".")
                flag = true;
            out += c;
        }
        return out;
    };
    StringUtils.startsWith = function (str, subString, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = true; }
        if (str == null || subString == null)
            return false;
        if (caseSensitive)
            return str.indexOf(subString) == 0;
        return str.toLowerCase().indexOf(subString.toLowerCase()) == 0;
    };
    StringUtils.endsWith = function (str, subString, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = true; }
        if (str == null || subString == null)
            return false;
        var i = str.length - subString.length;
        if (i < 0)
            return false;
        if (caseSensitive)
            return str.lastIndexOf(subString) == i;
        return str.toLowerCase().lastIndexOf(subString.toLowerCase()) == i;
    };
    StringUtils.obfuscate = function (str, reverse, extendedChars) {
        /*
         this method can be useful to hide text in the javascript code that you don't want someone to
         be able to find by simply searching the source code.
    
         This method is not an encryption function in the sence that it should never be used for security
         measures. The reason for this is obvious, the key is right inline!!
        */
        if (reverse === void 0) { reverse = false; }
        if (extendedChars === void 0) { extendedChars = false; }
        var codes = [48, 98, 65, 83, 121, 46, 101, 114, 119, 88, 106, 42, 37, 58, 107, 122, 38, 70, 59, 92, 43, 50, 125, 110, 80, 67, 124, 91, 73, 77, 111, 127, 89, 34, 120, 63, 90, 82, 96, 126, 109, 112, 118, 36, 44, 97, 84, 87, 115, 102, 105, 116, 41, 32, 47, 62, 54, 99, 104, 33, 53, 79, 69, 51, 45, 117, 61, 94, 95, 85, 72, 113, 78, 40, 75, 108, 39, 52, 35, 123, 100, 68, 55, 56, 81, 74, 49, 71, 86, 93, 76, 60, 66, 57, 64, 103];
        var codeExt = [197, 148, 45, 143, 150, 168, 121, 85, 149, 116, 255, 127, 144, 92, 195, 59, 125, 252, 60, 193, 179, 134, 91, 93, 76, 219, 100, 215, 50, 202, 94, 151, 162, 48, 246, 177, 175, 126, 139, 114, 241, 63, 83, 110, 136, 49, 210, 205, 79, 42, 172, 35, 109, 70, 201, 236, 122, 111, 234, 224, 187, 181, 137, 176, 159, 212, 77, 206, 138, 105, 160, 64, 178, 170, 104, 115, 192, 117, 145, 86, 142, 166, 120, 101, 82, 38, 222, 61, 155, 199, 58, 214, 174, 130, 229, 66, 98, 68, 211, 107, 141, 54, 203, 247, 129, 132, 223, 188, 171, 228, 158, 74, 218, 189, 227, 99, 221, 239, 220, 108, 80, 51, 46, 102, 180, 52, 88, 78, 184, 208, 216, 209, 191, 89, 163, 207, 198, 36, 97, 186, 173, 250, 230, 55, 251, 34, 242, 237, 135, 217, 39, 167, 183, 200, 106, 243, 133, 226, 165, 123, 235, 62, 154, 249, 153, 118, 190, 213, 161, 71, 75, 65, 128, 124, 140, 47, 185, 119, 37, 231, 182, 238, 225, 204, 146, 72, 33, 244, 69, 248, 157, 156, 103, 112, 254, 84, 245, 95, 152, 131, 96, 81, 67, 90, 169, 44, 113, 164, 53, 73, 194, 87, 32, 196, 233, 41, 56, 240, 147, 40, 253, 232, 57, 43];
        var out = "";
        if (extendedChars)
            codes = codeExt;
        if (!reverse) {
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var char = str_1[_i];
                var code = char.charCodeAt(0) - 32;
                out += String.fromCharCode(codes[code]);
            }
            return out;
        }
        else {
            for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
                var char = str_2[_a];
                var i = codes.indexOf(char.charCodeAt(0));
                out += String.fromCharCode(i + 32);
            }
            return out;
        }
    };
    // [Eric Perron 2019-10-10] I tested this method and it will return a 1000 random string in 1 or 2 ms even if it must be a unique string.
    StringUtils.randomString = function (length, unique) {
        if (unique === void 0) { unique = false; }
        var str = "";
        for (var i = 0; i < length; i++) {
            var g = Math.round(Math.random() * 2);
            var c = void 0;
            // 48 to 57 [0 to 9]
            if (g == 0)
                c = Math.round(Math.random() * (57 - 48)) + 48;
            // 65 to 90 [A to Z]
            if (g == 1)
                c = Math.round(Math.random() * (90 - 65)) + 65;
            // 97 to 122 [a to z]
            if (g == 2)
                c = Math.round(Math.random() * (122 - 97)) + 97;
            str += String.fromCharCode(c);
        }
        if (unique) {
            this.uniqueCtr++;
            var uStr = MathUtils.toBaseN(this.uniqueCtr, 62);
            if (uStr.length >= str.length)
                str = uStr;
            else
                str = str.substr(0, str.length - uStr.length) + uStr;
        }
        return str;
    };
    /*
      variables within a string can be reset
      "hello Mr.{0} {1}" can become "hello Mr.{3} {4}".
  
      This is useful for building sql strings using predefined searches.
    */
    StringUtils.startCtrVariablesAt = function (str, startAt) {
        var ctr = startAt - 1;
        return this.parse(new StringSearch(str, "{", "}"), true, function (s) {
            var n = Number.parseInt(s.innerResult, 10);
            if (!isNaN(n)) {
                ctr++;
                return ctr;
            }
            else
                return s;
        });
    };
    StringUtils.Format = function (str, values) {
        for (var i = 0; i < values.length; i++)
            str = StringUtils.replace(str, "{" + i + "}", values[i]);
        return str;
    };
    StringUtils.splitAt = function (str, index) {
        // example: splitAt("helloWorld", 4) will return ["hello","World"];
        var arr = [];
        arr[0] = str.substring(0, index);
        arr[1] = str.substring(index + 1, str.length + 1);
        return arr;
    };
    StringUtils.indexOfMany = function (text, arr) {
        var min = -1;
        for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
            var v = arr_2[_i];
            var i = text.indexOf(v);
            if (min == -1)
                min = i;
            if (i < min && i != -1) {
                min = i;
            }
        }
        return min;
    };
    StringUtils.isPostalCode = function (str) {
        str = StringUtils.replace(str, " ", "");
        return StringUtils.validateMask(str, "A#A#A#");
    };
    StringUtils.charIsAnumber = function (char) {
        if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)
            return true;
        else
            return false;
    };
    StringUtils.charIsALetter = function (char) {
        // a to z
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
            return true;
        // A to Z
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
            return true;
        return false;
    };
    StringUtils.validateMask = function (str, mask) {
        if (str.length != mask.length)
            return false;
        // A = Letter
        // # = number
        // exeample Masks: A#A#A#, (###) ###-####
        for (var i = 0; i < mask.length; i++) {
            var cMask = mask.charAt(i).toLowerCase();
            var cStr = str.charAt(i);
            // not enough characters!
            if (cStr == null) {
                return false;
            }
            if (cMask == "a") {
                if (!StringUtils.charIsALetter(cStr))
                    return false;
            }
            else if (cMask == "#") {
                if (!StringUtils.charIsAnumber(cStr))
                    return false;
            }
            else if (cMask != cStr) {
                return false;
            }
        }
        return true;
    };
    StringUtils.applyMask = function (str, mask) {
        var output = "";
        var iStr = 0;
        for (var i = 0; i < mask.length; i++) {
            var c = mask.charAt(i).toLowerCase();
            if (c == "a" || c == "#") {
                output += str.charAt(iStr);
                iStr++;
            }
            else
                output += c;
        }
        return output;
    };
    StringUtils.toBool = function (str) {
        if (str == null)
            return false;
        if (typeof str == "boolean")
            return str;
        if (typeof str != "string")
            return false;
        str = str.toLowerCase();
        if (ArrayUtils.indexOf(['1', 'true', 't', 'on', 'yes', 'y', 'oui'], str) != -1)
            return true;
        else
            return false;
    };
    StringUtils.getValue = function (str) {
        str = str.toLowerCase();
        if (str == "false")
            return false;
        if (str == "true")
            return true;
        var num = parseFloat(str);
        if (!isNaN(num))
            return num;
        var i = parseInt(str);
        if (!isNaN(i))
            return i;
        return str;
    };
    // Removes all spaces and sets the string to lower case.
    // then sends the index of str2 in str1.
    StringUtils.simplifyIndexOf = function (str1, str2) {
        str1 = StringUtils.simplify(str1);
        str2 = StringUtils.simplify(str2);
        return str1.indexOf(str2);
    };
    // Removes all spaces and sets the string to lower case.
    // then verifies if both are the same.
    StringUtils.simplifyIsEqual = function (str1, str2) {
        return (StringUtils.simplify(str1) == StringUtils.simplify(str2));
    };
    StringUtils.isNullOrEmpty = function (str) {
        return (str == null || str.length == 0 || str == "" || str == undefined);
    };
    StringUtils.spacePadding = function (str, length, left, spaceChar) {
        if (left === void 0) { left = false; }
        if (spaceChar === void 0) { spaceChar = " "; }
        if (str.length > length)
            return str;
        var spaces = "";
        for (var i = str.length; i < length; i++)
            spaces += spaceChar;
        if (left)
            return spaces + str;
        else
            return str + spaces;
    };
    StringUtils.spaceOffset = function (str, length, left, spaceChar) {
        if (left === void 0) { left = true; }
        if (spaceChar === void 0) { spaceChar = " "; }
        var spaces = "";
        for (var i = 0; i < length; i++)
            spaces += spaceChar;
        if (left)
            return spaces + str;
        else
            return str + spaces;
    };
    // Removes all spaces and sets the string to lower case.
    StringUtils.simplify = function (str) {
        if (str == null || str == "")
            return str;
        str = StringUtils.replace(str, " ", "", false, true);
        str = str.toLowerCase();
        return str;
    };
    StringUtils.removeExtraSpaces = function (str, leadingSpaces, endingSpaces, doubleSpaces) {
        if (leadingSpaces === void 0) { leadingSpaces = true; }
        if (endingSpaces === void 0) { endingSpaces = true; }
        if (doubleSpaces === void 0) { doubleSpaces = false; }
        var i = 0;
        var flag = false;
        if (endingSpaces) {
            do {
                flag = (" \n\r\t".indexOf(str.charAt(i)) != -1);
                if (flag)
                    i++;
            } while (flag && i < str.length - 1);
            str = str.substring(i, str.length);
        }
        if (leadingSpaces) {
            i = str.length - 1;
            do {
                flag = (" \n\r\t".indexOf(str.charAt(i)) != -1);
                if (flag)
                    i--;
            } while (flag && i > 0);
            str = str.substring(0, i + 1);
        }
        if (doubleSpaces)
            str = StringUtils.replace(str, "  ", " ", false, true);
        return str;
    };
    StringUtils.replaceVariables = function (str, variables, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        for (var each in variables)
            str = StringUtils.replace(str, "{" + each + "}", variables[each], caseSensitive);
        return str;
    };
    StringUtils.removeFrenchChars = function (str) {
        var frenchCharsA = ['À', 'Â', 'Ä', 'È', 'É', 'Ê', 'Ë', 'Î', 'Ï', 'Ô', 'Œ', 'Ù', 'Û', 'Ü', 'Ÿ', 'à', 'â', 'ä', 'è', 'é', 'ê', 'ë', 'î', 'ï', 'ô', 'œ', 'ù', 'û', 'ü', 'ÿ', 'Ç', 'ç', '«', '»', '€'];
        var frenchCharsB = ['A', 'A', 'A', 'E', 'E', 'E', 'E', 'I', 'I', 'O', 'OE', 'U', 'U', 'U', 'Y', 'a', 'a', 'a', 'e', 'e', 'e', 'e', 'i', 'i', 'o', 'oe', 'u', 'u', 'u', 'y', 'C', 'c', '"', '"', 'euro'];
        frenchCharsA.forEach(function (char, index) {
            str = StringUtils.replace(str, char, frenchCharsB[index], true, true);
        });
        return str;
    };
    StringUtils.indexOf = function (str, find, position, caseSensitivte, ignoreFrenchChars) {
        if (position === void 0) { position = 0; }
        if (caseSensitivte === void 0) { caseSensitivte = false; }
        if (ignoreFrenchChars === void 0) { ignoreFrenchChars = false; }
        if (StringUtils.isNullOrEmpty(str) || StringUtils.isNullOrEmpty(find))
            return -1;
        if (!caseSensitivte) {
            str = str.toLowerCase();
            find = find.toLowerCase();
        }
        if (ignoreFrenchChars) {
            str = StringUtils.removeFrenchChars(str);
            find = StringUtils.removeFrenchChars(find);
        }
        return str.indexOf(find);
    };
    StringUtils.toOneLine = function (str, divider) {
        if (divider === void 0) { divider = "|"; }
        str = StringUtils.replace(str, "\r", "\n");
        str = StringUtils.replace(str, "\n\n", "|");
        str = StringUtils.replace(str, "\n", "|");
        str = StringUtils.trim(str);
        str = StringUtils.removeExtraSpaces(str);
        return str;
    };
    StringUtils.replace = function (str, find, replaceWith, caseSensitive, recursive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        if (recursive === void 0) { recursive = false; }
        if (Utils.typeof(find) == "array") {
            var arr = find;
            for (var i_2 = 0; i_2 < arr.length; i_2++)
                str = StringUtils.replace(str, arr[i_2], replaceWith, caseSensitive, recursive);
            return str;
        }
        if (typeof (str) != "string")
            return str;
        if (str == null || str == "")
            return str;
        if (find == replaceWith || str == null)
            return str;
        var strOut = "";
        var s = new StringSearch(str, find, "", caseSensitive);
        var i = 0;
        var i2 = 0;
        do {
            i2 = s.search(i);
            if (i2 != -1) {
                strOut += str.substring(i, i2) + replaceWith;
                i = i2 + find.length;
            }
            else {
                strOut += str.substring(i, str.length);
                i = -1;
            }
        } while (i != -1);
        if (recursive && strOut.indexOf(find) != -1) {
            strOut = StringUtils.replace(strOut, find, replaceWith, caseSensitive, recursive);
        }
        return strOut;
    };
    StringUtils.textFileToLines = function (str) {
        return StringUtils.splitWithMultipleDelimeter(str, ["\r\n", "\r", "\n"]);
    };
    StringUtils.allIndexesOf = function (str, searchString) {
        var i = 0;
        var arr = [];
        do {
            i = str.indexOf(searchString, i);
            if (i != -1) {
                arr.push(i);
                i += searchString.length;
            }
        } while (i != -1 && i < str.length - 1);
        return arr;
    };
    StringUtils.parse = function (search, innerResultOnly, f) {
        if (!search.content || search.content == "")
            return "";
        var i = 0;
        var i2 = -1;
        var strOut = "";
        do {
            i2 = search.search(i);
            if (i2 != -1) {
                if (innerResultOnly) {
                    strOut += search.content.substring(i, search.indexInnerStart) + f(search);
                    i = search.indexInnerEnd;
                }
                else {
                    strOut += search.content.substring(i, i2) + f(search);
                    i = search.indexEnd;
                }
            }
            else {
                strOut += search.content.substring(i, search.content.length);
                i = -1;
            }
        } while (i != -1);
        return strOut;
    };
    StringUtils.split = function (str, delimeter, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        var arr = [];
        var tmp_str = str;
        var tmp_delimeter = delimeter;
        if (!caseSensitive) {
            if (tmp_str)
                tmp_str = tmp_str.toLowerCase();
            if (tmp_delimeter)
                tmp_delimeter = tmp_delimeter.toLowerCase();
        }
        var i = 0;
        var i2 = tmp_str.indexOf(tmp_delimeter);
        if (i2 == -1)
            return [str];
        do {
            arr.push(str.substring(i, i2));
            i = i2 + tmp_delimeter.length;
            i2 = tmp_str.indexOf(tmp_delimeter, i2 + tmp_delimeter.length);
        } while (i2 != -1);
        arr.push(str.substring(i, tmp_str.length));
        return arr;
    };
    StringUtils.spitStrings = function (arrStr, delimeter, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        var outArr = [];
        var tmpArr;
        for (var i = 0; i < arrStr.length; i++) {
            tmpArr = StringUtils.split(arrStr[i], delimeter, caseSensitive);
            for (var j = 0; j < tmpArr.length; j++) {
                outArr.push(tmpArr[j]);
            }
        }
        return outArr;
    };
    StringUtils.splitWithMultipleDelimeter = function (str, delimeters, caseSensitive) {
        if (caseSensitive === void 0) { caseSensitive = false; }
        var arrOut = [str];
        for (var i = 0; i < delimeters.length; i++) {
            arrOut = StringUtils.spitStrings(arrOut, delimeters[i], caseSensitive);
        }
        return arrOut;
    };
    StringUtils.trim = function (input) {
        if (input == null || input.length == 0)
            return input;
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        return input.replace(rtrim, '');
    };
    StringUtils.insert = function (str, insertStr, index, before) {
        if (before === void 0) { before = true; }
        if (!before && index != str.length)
            index++;
        str = str.substr(0, index) + insertStr + str.substring(index, str.length);
        return str;
    };
    StringUtils.uniqueCtr = 0;
    return StringUtils;
}());
exports.StringUtils = StringUtils;
// ***********************************************************************************************************************
// DateDuration.ts
// ***********************************************************************************************************************
var DateDuration = /** @class */ (function () {
    function DateDuration(d1, d2) {
        this.run(d1, d2);
    }
    DateDuration.prototype.run = function (date1, date2) {
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        if (d2 < d1) {
            var tmp = d1;
            d1 = d2;
            d2 = tmp;
        }
        // ---------------------------
        // DAYS
        this.daysTotal += Math.floor((d2.getTime() - d1.getTime()) / 1000 / 60 / 60 / 24);
        if (d1.getDate() > d2.getDate())
            this.days = DateUtils.getDaysInMonth(d1) - d1.getDate() + d2.getDate();
        else
            this.days = d2.getDate() - d1.getDate();
        d1.setDate(d1.getDate() + this.days);
        // WEEKS
        this.weeksTotal = this.daysTotal / 7;
        // ---------------------------
        // MONTHS
        if (d1.getMonth() > d2.getMonth())
            this.months = 12 - d1.getMonth() + d2.getMonth();
        else
            this.months = d2.getMonth() - d1.getMonth();
        d1.setMonth(d1.getMonth() + this.months);
        this.monthsTotal = this.months;
        // --------------------------------------------------------
        // number of years
        this.years = Math.abs(d1.getFullYear() - d2.getFullYear());
        this.monthsTotal += this.years * 12;
    };
    return DateDuration;
}());
exports.DateDuration = DateDuration;
// ***********************************************************************************************************************
// DatePeriod.ts
// ***********************************************************************************************************************
var DatePeriod = /** @class */ (function () {
    function DatePeriod(from, to) {
        if (from != null)
            this._from = from;
        if (to != null)
            this._to = to;
    }
    Object.defineProperty(DatePeriod.prototype, "from", {
        // **************************************
        // PUBLIC GETS AND SETS
        // **************************************
        get: function () {
            return this._from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePeriod.prototype, "duration", {
        get: function () {
            return new DateDuration(this._from, this._to);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DatePeriod.prototype, "to", {
        get: function () {
            return this._to;
        },
        enumerable: false,
        configurable: true
    });
    // **************************************
    // PUBLIC METHODS
    // **************************************
    DatePeriod.prototype.containsDate = function (date) {
        var d1 = DateUtils.compareDates(date, this._from);
        var d2 = DateUtils.compareDates(this._to, date);
        if (d1 != -1 && d2 != -1) // within bounds
            return 0;
        if (d1 != -1) // is after this period.
            return 1;
        return -1; // is before this period.
    };
    DatePeriod.prototype.toString = function () {
        return "from " + this._from.toDateString() + " to " + this._to.toDateString();
    };
    return DatePeriod;
}());
exports.DatePeriod = DatePeriod;
// ***********************************************************************************************************************
// DateUtils.ts
// ***********************************************************************************************************************
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.timeToString = function (t) {
        var out = "";
        var s = 1000; // 60 * 1000;
        var h = 60000; // 60 * s;
        var d = 1440000; // 24 * h;
        // how many days
        var days = Math.floor(t / d);
        if (days > 0) {
            t -= days * d;
            out += days + " days, ";
        }
        // how many hours
        var hours = Math.floor(t / h);
        if (hours > 0) {
            t -= hours * h;
            out += hours + " hrs, ";
        }
        // how many seconds
        var seconds = Math.floor(t / s);
        if (seconds > 0) {
            t -= seconds * s;
            out += seconds + " seconds, ";
        }
        out += t + " ms";
        return out;
    };
    DateUtils.removeHours = function (date, count) {
        date.setTime(date.getTime() - 3600000 * count);
        return date;
    };
    DateUtils.addHours = function (date, count) {
        date.setTime(date.getTime() + 3600000 * count);
        return date;
    };
    DateUtils.addDays = function (date, count) {
        date.setTime(date.getTime() + 86400000 * count);
        return date;
    };
    DateUtils.removeDays = function (date, count) {
        date.setTime(date.getTime() - 86400000 * count);
        return date;
    };
    DateUtils.isDate = function (obj) {
        if (obj != null && obj.toDateString != null && obj.getDate != null && obj.setTime != null)
            return true;
        return false;
    };
    DateUtils.toString = function (date, includeTime, utc) {
        if (date === void 0) { date = null; }
        if (includeTime === void 0) { includeTime = false; }
        if (utc === void 0) { utc = false; }
        if (date == null)
            return null;
        var year, month, day, hours, minutes, seconds, milliseconds;
        if (utc) {
            year = date.getUTCFullYear().toString();
            month = (date.getUTCMonth() + 1).toString();
            day = date.getUTCDate().toString();
            hours = date.getUTCHours().toString();
            minutes = date.getUTCMinutes().toString();
            seconds = date.getUTCSeconds().toString();
            milliseconds = date.getUTCMinutes().toString();
        }
        else {
            year = date.getFullYear().toString();
            month = (date.getMonth() + 1).toString();
            day = date.getDate().toString();
            hours = date.getHours().toString();
            minutes = date.getMinutes().toString();
            seconds = date.getSeconds().toString();
            milliseconds = date.getMinutes().toString();
        }
        month = StringUtils.spacePadding(month, 2, true, "0");
        day = StringUtils.spacePadding(day, 2, true, "0");
        hours = StringUtils.spacePadding(hours, 2, true, "0");
        minutes = StringUtils.spacePadding(minutes, 2, true, "0");
        seconds = StringUtils.spacePadding(seconds, 2, true, "0");
        milliseconds = StringUtils.spacePadding(milliseconds, 4, true, "0");
        var str = "{0}-{1}-{2}";
        if (includeTime)
            str = "{0}-{1}-{2} {3}:{4}:{5}:{6}";
        return StringUtils.Format(str, [year, month, day, hours, minutes, seconds, milliseconds]);
    };
    DateUtils.toFormattedString = function (date, format, language) {
        /*
         sample formats:
         DD-MM-YYYY    : 01-01-2010
         DD,MM,YYYY    : 01,01,2010
         DDD DD,MMM,YYYY  : Mon 10, FEB, 2010
         DDDD DD, MMMM, YY : Monday 10, February 10
         DDDD, DDst of MMMMM, YYYY : Monday, 10th of February 2010
         */
        if (date === void 0) { date = null; }
        if (format === void 0) { format = "YY-MM-DD"; }
        if (language === void 0) { language = "en_CA"; }
        if (date == null)
            date = new Date();
        var strDate = format;
        // --------------------------------
        // hours
        if (strDate.toLowerCase().indexOf("hh") != -1) {
            var hours = date.getHours().toString();
            hours = StringUtils.spacePadding(hours, 2, true, "0");
            strDate = StringUtils.replace(strDate, "hh", hours);
        }
        // --------------------------------
        // minutes
        if (strDate.indexOf("mm") != -1) {
            var minutes = date.getMinutes().toString();
            minutes = StringUtils.spacePadding(minutes, 2, true, "0");
            strDate = StringUtils.replace(strDate, "mm", minutes, true);
        }
        // --------------------------------
        // seconds
        if (strDate.toLowerCase().indexOf("ss") != -1) {
            var seconds = date.getSeconds().toString();
            seconds = StringUtils.spacePadding(seconds, 2, true, "0");
            strDate = StringUtils.replace(strDate, "ss", seconds);
        }
        // --------------------------------
        // milliseconds
        if (strDate.toLowerCase().indexOf("ms") != -1) {
            var milliseconds = date.getMilliseconds().toString();
            milliseconds = StringUtils.spacePadding(milliseconds, 3, true, "0");
            strDate = StringUtils.replace(strDate, "ms", milliseconds);
        }
        // ------------------------------
        // Day
        var day = date.getDate().toString(10);
        var dayZeroPadding = date.getDate().toString(10);
        if (date.getDate() < 10)
            dayZeroPadding = "0" + day;
        var dayFullName = DateUtils._daysNames[date.getDay()][language][0];
        var dayShortName = DateUtils._daysNames[date.getDay()][language][1];
        strDate = StringUtils.replace(strDate, "DDDD", dayFullName);
        strDate = StringUtils.replace(strDate, "DDD", dayShortName);
        strDate = StringUtils.replace(strDate, "DD", dayZeroPadding);
        strDate = StringUtils.replace(strDate, "D", day, true);
        // ------------------------------
        // Week
        var week = Math.floor(date.getDate() / 7);
        var weekLong = DateUtils._weeksDescriptions[week][language][0];
        var weekShort = DateUtils._weeksDescriptions[week][language][1];
        strDate = StringUtils.replace(strDate, "WWWW", weekLong);
        strDate = StringUtils.replace(strDate, "WWW", weekShort);
        strDate = StringUtils.replace(strDate, "WW", week.toString(10));
        // -------------------------------
        // MONTH
        var month = "" + (date.getMonth() + 1);
        var monthZeroPadding = month;
        if (date.getMonth() < 9)
            monthZeroPadding = "0" + month;
        var monthFullName = DateUtils._monthsNames[date.getMonth()][language][0];
        var monthShortName = DateUtils._monthsNames[date.getMonth()][language][1];
        strDate = StringUtils.replace(strDate, "MMMM", monthFullName, true);
        strDate = StringUtils.replace(strDate, "mmmm", monthFullName.toLowerCase(), true);
        strDate = StringUtils.replace(strDate, "MMM", monthShortName, true);
        strDate = StringUtils.replace(strDate, "mmm", monthShortName.toLowerCase(), true);
        strDate = StringUtils.replace(strDate, "MM", monthZeroPadding, true);
        strDate = StringUtils.replace(strDate, "mm", monthZeroPadding.toLowerCase(), true);
        strDate = StringUtils.replace(strDate, "M ", month + " ", true);
        // --------------------------------
        // Year
        var year = date.getFullYear().toString().substr(2, 2);
        var fullYear = date.getFullYear().toString();
        strDate = StringUtils.replace(strDate, "YYYY", fullYear);
        strDate = StringUtils.replace(strDate, "YY", year);
        return strDate;
    };
    DateUtils.isBeforeToday = function (date) {
        var d = new Date();
        var today = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
        if (date.getTime() < today.getTime())
            return true;
        else
            return false;
    };
    // expected format: 2011-10-29 or 11-10-29 24:01:01.1111
    DateUtils.stringToDate = function (str, utc) {
        if (utc === void 0) { utc = false; }
        if (StringUtils.isNullOrEmpty(str))
            return null;
        var date;
        var strDate = str;
        var strTime;
        var arr = str.split(" ");
        if (arr[1] == null)
            arr[1] = "00:00:00:0000";
        if (arr.length == 2) {
            strDate = arr[0];
            strTime = arr[1];
        }
        // --------------------------
        // convert the date
        var arrDate = strDate.split("-");
        var year = parseInt(arrDate[0]);
        if (arrDate[0].length == 2)
            year += 2000;
        var month = 1;
        var day = 1;
        if (arrDate[1]) {
            month = parseInt(arrDate[1]);
            if (arrDate[2])
                day = parseInt(arrDate[2]);
        }
        if (StringUtils.isNullOrEmpty(strTime)) {
            return new Date(year, month - 1, day);
        }
        // --------------------------
        // convert the time
        var arrTime = strTime.split(":");
        var hours = 0;
        var minutes = 0;
        var seconds = 0;
        var milliseconds = 0;
        if (arrTime[0]) {
            hours = parseInt(arrTime[0]);
            if (arrTime[1]) {
                minutes = parseInt(arrTime[1]);
                if (arrTime[2]) {
                    seconds = parseInt(arrTime[2]);
                    if (arrTime[3])
                        milliseconds = parseInt(arrTime[3]);
                }
            }
        }
        date = new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
        if (utc) {
            // the timezone difference is in minutes from UTC
            var dif = date.getTimezoneOffset() * 60 * 1000;
            date.setTime(date.getTime() - dif);
        }
        return date;
    };
    DateUtils.isToday = function (date) {
        var today = new Date();
        var dif = DateUtils.compareDates(date, today);
        return (dif == 0);
    };
    DateUtils.stringToDateSlashDelimited = function (str) {
        if (str == null)
            return null;
        var arr = str.split("/");
        var day = parseInt(arr[1]);
        var month = 1;
        var year = 1;
        if (arr.length == 3) {
            month = parseInt(arr[0]);
            //peel off time from year field
            var yearPlus = arr[2];
            var ya = yearPlus.split(" "); //split at space
            year = parseInt(ya[0]);
        }
        else if (arr.length == 2) {
            month = parseInt(arr[1]);
        }
        var dt = new Date(year, month - 1, day);
        return dt;
    };
    DateUtils.getClosestMonth = function (date) {
        var returnDate = new Date(date);
        var tmpDate = new Date(date);
        var c1 = 0;
        var c2 = 0;
        var month = returnDate.getMonth();
        // get next month
        do {
            tmpDate.setDate(tmpDate.getDate() + 1);
            c1++;
        } while (tmpDate.getMonth() == month);
        // get last month
        do {
            tmpDate.setDate(tmpDate.getDate() - 1);
            c2++;
        } while (tmpDate.getMonth() != month);
        if (c1 > c2)
            returnDate.setDate(returnDate.getDate() + c1);
        else
            returnDate.setDate(returnDate.getDate() - c2);
        return returnDate;
    };
    DateUtils.getDayByName = function (dayName) {
        var day = -1;
        dayName = dayName.toLowerCase();
        if ("sunday".indexOf(dayName) == 0)
            day = 0;
        if ("monday".indexOf(dayName) == 0)
            day = 1;
        if ("tuesday".indexOf(dayName) == 0)
            day = 2;
        if ("wednesday".indexOf(dayName) == 0)
            day = 3;
        if ("thursday".indexOf(dayName) == 0)
            day = 4;
        if ("friday".indexOf(dayName) == 0)
            day = 5;
        if ("saturday".indexOf(dayName) == 0)
            day = 6;
        return day;
    };
    // example: getNextDay(date, "saturday");
    DateUtils.getNextDay = function (date, dayName) {
        var day = this.getDayByName(dayName);
        if (day == -1) {
            throw new Error(StringUtils.Format("Day id '{0}' could not be found!", [dayName]));
        }
        var outDate = new Date();
        outDate.setTime(date.getTime());
        var dif = day - outDate.getDay();
        if (dif == 0)
            dif = 7;
        if (dif < 0)
            dif = 7 + dif;
        outDate.setDate(date.getDate() + dif);
        return outDate;
    };
    DateUtils.getLastDay = function (date, dayName) {
        var day = this.getDayByName(dayName);
        if (day == -1) {
            throw new Error(StringUtils.Format("Day id '{0}' could not be found!", [dayName]));
        }
        var outDate = new Date();
        outDate.setTime(date.getTime());
        var dif = outDate.getDay() - day;
        if (dif == 0)
            dif = 7;
        if (dif < 0)
            dif = 7 + dif;
        outDate.setDate(date.getDate() - dif);
        return outDate;
    };
    DateUtils.getClosestYearDividableBy = function (date, m) {
        var returnDate = new Date(date);
        returnDate.setDate(1);
        returnDate.setMonth(0);
        var tmpDate = new Date(returnDate);
        var c1 = 0;
        var c2 = 0;
        // get next year dividable by m
        while (tmpDate.getFullYear() % m != 0) {
            tmpDate.setFullYear(tmpDate.getFullYear() + 1);
            c1++;
        }
        // get last year dividable by m
        while (tmpDate.getFullYear() % m != 0) {
            tmpDate.setFullYear(tmpDate.getFullYear() - 1);
            c2++;
        }
        if (c1 > c2)
            returnDate.setFullYear(returnDate.getFullYear() + c1);
        else
            returnDate.setFullYear(returnDate.getFullYear() - c2);
        return returnDate;
    };
    DateUtils.isLeapYear = function (year) {
        if (year % 400 == 0)
            return true;
        else if (year % 100 == 0)
            return false;
        else if (year % 4 == 0)
            return true;
        return false;
    };
    DateUtils.getDurationBetweenDates = function (d1, d2) {
        return new DateDuration(d1, d2);
    };
    DateUtils.getDaysInMonth = function (date) {
        if (date.getMonth() == 1 && DateUtils.isLeapYear(date.getFullYear()))
            return 29;
        else
            return DateUtils._arrMonthsDayCount[date.getMonth()];
    };
    DateUtils.periodOverlapTest = function (period1, period2) {
        /*
         -1 does not overlap
         0  period2 starts before period1 ends
         1  period1 starts and ends within the boundaries of period2
         2  period1 starts before period2 ends
         3  period2 starts and ends within the boundaries of period1
         */
        var c1 = DateUtils.compareDates(period1.from, period2.from);
        var c2 = DateUtils.compareDates(period1.from, period2.to);
        var c3 = DateUtils.compareDates(period1.to, period2.from);
        var c4 = DateUtils.compareDates(period1.to, period2.to);
        // ------------------------------------------
        // 0  period2 starts before period1 ends
        // ------------------------------------------
        if (c1 == -1 // pariod1.from is smaller then period2.from
            && c3 != -1 // pariod1.to is greater then or equal to period2.from
            && c4 == -1 // period1.to is smaller then period2.to
        )
            return 0;
        // ------------------------------------------
        // 1  period1 starts and ends within the boundaries of period2
        // ------------------------------------------
        if (c1 != -1 // pariod1.from is greater then or equal to period2.from
            && c4 != 1 // pariod1.to is smaller then or equal to period2.to
        )
            return 1;
        // ------------------------------------------
        // 2  period1 starts before period2 ends
        // ------------------------------------------
        if (c1 != -1 // pariod1.from is greater then or equal to period2.from
            && c2 != 1 // pariod1.from is smaller then or equal to period2.to
            && c4 == 1 // pariod1.to is greater then to period2.to
        )
            return 2;
        // ------------------------------------------
        // 3 period2 starts and ends within the boundaries of period1
        // ------------------------------------------
        if (c1 != 1 // pariod2.from is greater then or equal to period1.from
            && c4 != -1 // pariod2.to is smaller then or equal to period1.to
        )
            return 3;
        return -1;
    };
    DateUtils.getYesterday = function () {
        var d = new Date();
        d.setTime(d.getTime() - 86400000); // one day
        return d;
    };
    DateUtils.getTomorrow = function () {
        var d = new Date();
        d.setTime(d.getTime() + 86400000); // one day
        return d;
    };
    DateUtils.compareDates = function (dateOne, dateTwo) {
        /*
         -1 dateOne is smaller then dateTwo
         0  dateOne and dateTwo are equal
         1  dateOne is greater then dateTwo
    
         */
        var r = 0;
        if (dateOne.getFullYear() < dateTwo.getFullYear()) {
            r = -1;
        }
        else if (dateOne.getFullYear() > dateTwo.getFullYear()) {
            r = 1;
        }
        else {
            if (dateOne.getMonth() < dateTwo.getMonth()) {
                r = -1;
            }
            else if (dateOne.getMonth() > dateTwo.getMonth()) {
                r = 1;
            }
            else {
                if (dateOne.getDate() < dateTwo.getDate())
                    r = -1;
                else if (dateOne.getDate() > dateTwo.getDate())
                    r = 1;
            }
        }
        return r;
    };
    DateUtils.isDayInDateRange = function (date, startDate, endDate) {
        var ret = true;
        if (date) {
            if (startDate) {
                // before the start date
                if (DateUtils.compareDates(date, startDate) == -1)
                    return false;
                // after end date
                if (endDate && DateUtils.compareDates(date, endDate) == 1)
                    return false;
                // if it got this far, than the date is >= to the start date and <=  to the end date.
                return true;
            }
        }
        // there is an argument missing here.
        return false;
    };
    DateUtils.isTimeInDateRange = function (date, startDate, endDate) {
        var ret = true;
        if (date) {
            if (startDate) {
                if (endDate) {
                    if ((date.getTime() >= startDate.getTime()) && (date.getTime() <= endDate.getTime()))
                        ret = true;
                    else
                        ret = false;
                }
            }
        }
        return ret;
    };
    DateUtils.isSameDay = function (dateOne, dateTwo) {
        if (dateOne == dateTwo)
            return true;
        if (dateOne == null || dateTwo == null)
            return false;
        var result = DateUtils.compareDates(dateOne, dateTwo);
        if (result === 0)
            return true;
        else
            return false;
    };
    DateUtils._monthsNames = [
        {
            fr_CA: ["Janvier", "Jan"],
            en_CA: ["January", "Jan"]
        }, {
            fr_CA: ["Février", "Fév"],
            en_CA: ["February", "Feb"]
        }, {
            fr_CA: ["Mars", "Mars"],
            en_CA: ["March", "Mar"]
        }, {
            fr_CA: ["Avril", "Avr"],
            en_CA: ["April", "Apr"]
        }, {
            fr_CA: ["Mai", "Mai"],
            en_CA: ["May", "May"]
        }, {
            fr_CA: ["Juin", "Juin"],
            en_CA: ["June", "Jun"]
        }, {
            fr_CA: ["Juillet", "Juil"],
            en_CA: ["July", "Jul"]
        }, {
            fr_CA: ["Août", "Août"],
            en_CA: ["August", "Aug"]
        }, {
            fr_CA: ["Septembre", "Sept"],
            en_CA: ["September", "Sep"]
        }, {
            fr_CA: [" Octobre", "Oct"],
            en_CA: [" October", "Oct"]
        }, {
            fr_CA: [" Novembre", "Nov"],
            en_CA: [" November", "Nov"]
        }, {
            fr_CA: [" Décembre", "Déc"],
            en_CA: [" December", "Dec"]
        }
    ];
    DateUtils._weeksDescriptions = [
        {
            fr_CA: ["Première semaine", "1ère semaine"],
            en_CA: ["First week", "1st week"]
        }, {
            fr_CA: ["Deuxième semaine", "2ème semaine"],
            en_CA: ["Second week", "2nd week"]
        }, {
            fr_CA: ["Troisième semaine", "3ème semaine"],
            en_CA: ["Third week", "3rd week"]
        }, {
            fr_CA: ["Quatrième semaine", "4ème semaine"],
            en_CA: ["Forth week", "4th week"]
        }, {
            fr_CA: ["Cinquième semaine", "5ème semaine"],
            en_CA: ["Fift week", "5th week"]
        },
    ];
    DateUtils._daysNames = [
        {
            fr_CA: ["Dimanche", "Dim"],
            en_CA: ["Sunday", "Sun"]
        }, {
            fr_CA: ["Lundi", "Lun"],
            en_CA: ["Monday", "Mon"]
        }, {
            fr_CA: ["Mardi", "Mar"],
            en_CA: ["Tuesday", "Tue"]
        }, {
            fr_CA: ["Mercredi", "Mer"],
            en_CA: ["Wednesday", "Wed"]
        }, {
            fr_CA: ["Jeudi", "Jeu"],
            en_CA: ["Thursday", "Thu"]
        }, {
            fr_CA: ["Vendredi", "Ven"],
            en_CA: ["Friday", "Fri"]
        }, {
            fr_CA: ["Samedi", "Sam"],
            en_CA: ["Saturday", "Sat"]
        }
    ];
    DateUtils._arrMonthsDayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return DateUtils;
}());
exports.DateUtils = DateUtils;
// ***********************************************************************************************************************
// DomUtils.ts
// ***********************************************************************************************************************
var NodeType = /** @class */ (function () {
    function NodeType() {
    }
    NodeType.ELEMENT_NODE = 1;
    NodeType.ATTRIBUTE_NODE = 2;
    NodeType.TEXT_NODE = 3;
    NodeType.CDATA_SECTION_NODE = 4;
    NodeType.ENTITY_REFERENCE_NODE = 5;
    NodeType.ENTITY_NODE = 6;
    NodeType.PROCESSING_INSTRUCTION_NODE = 7;
    NodeType.COMMENT_NODE = 8;
    NodeType.DOCUMENT_NODE = 9;
    NodeType.DOCUMENT_TYPE_NODE = 10;
    NodeType.DOCUMENT_FRAGMENT_NODE = 11;
    NodeType.NOTATION_NODE = 12;
    return NodeType;
}());
exports.NodeType = NodeType;
var DOMUtils = /** @class */ (function () {
    function DOMUtils() {
    }
    DOMUtils.scrollToTop = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
    DOMUtils.appendHTML = function (element, html) {
        if (element == null) {
            console.debug("EPL DOMUtils: Cannot add html to null element: " + html);
            return null;
        }
        var div = document.createElement("div");
        div.innerHTML = html;
        var returnElement = div.children[0];
        for (var i = 0; i < div.children.length; i++)
            element.appendChild(div.children[i]);
        return returnElement;
    };
    DOMUtils.getChildNodes = function (node) {
        var children = [];
        for (var i = 0; i < node.childNodes.length; i++) {
            var iNode = node.childNodes[i];
            if (iNode.nodeType == NodeType.ELEMENT_NODE)
                children.push(iNode);
        }
        return children;
    };
    DOMUtils.getNodesByName = function (node, name) {
        var nodes = [];
        for (var i = 0; i < node.childNodes.length; i++) {
            var iNode = node.childNodes[i];
            if (iNode.nodeType == NodeType.ELEMENT_NODE && iNode.nodeName == name)
                nodes.push(iNode);
        }
        return nodes;
    };
    DOMUtils.firstChildNode = function (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            var iNode = node.childNodes[i];
            if (iNode.nodeType == NodeType.ELEMENT_NODE)
                return iNode;
        }
        return null;
    };
    DOMUtils.getNodeByName = function (node, name, recursive) {
        if (recursive === void 0) { recursive = false; }
        for (var i = 0; i < node.childNodes.length; i++) {
            var iNode = node.childNodes[i];
            if (iNode.nodeType == NodeType.ELEMENT_NODE)
                if (iNode.nodeName == name) {
                    return iNode;
                }
                else {
                    if (recursive && iNode.childNodes.length > 0) {
                        var rNode = DOMUtils.getNodeByName(iNode, name, recursive);
                        if (rNode != null)
                            return rNode;
                    }
                }
        }
        return null;
    };
    DOMUtils.getList = function (node, nodeName, f, list) {
        if (list == null)
            list = new List();
        else
            list.removeAll();
        // load the errors
        var listElement = DOMUtils.getNodeByName(node, nodeName);
        var childNodes = DOMUtils.getChildNodes(listElement);
        for (var i = 0; i < childNodes.length; i++) {
            var iNode = childNodes[i];
            list.addItem(f(iNode, i));
        }
        return list;
    };
    DOMUtils.getText = function (node, nodeName) {
        var resultNode = nodeName ? DOMUtils.getNodeByName(node, nodeName) : node;
        if (resultNode == null)
            return null;
        return resultNode.firstChild.nodeValue;
    };
    DOMUtils.getBool = function (node, nodeName) {
        var resultNode = nodeName ? DOMUtils.getNodeByName(node, nodeName) : node;
        if (resultNode == null)
            return null;
        return StringUtils.toBool(resultNode.firstChild.nodeValue);
    };
    DOMUtils.getInt = function (node, nodeName) {
        var resultNode = nodeName ? DOMUtils.getNodeByName(node, nodeName) : node;
        if (resultNode == null)
            return null;
        return parseInt(resultNode.firstChild.nodeValue);
    };
    DOMUtils.getFloat = function (node, nodeName) {
        var resultNode = nodeName ? DOMUtils.getNodeByName(node, nodeName) : node;
        if (resultNode == null)
            return null;
        return parseFloat(resultNode.firstChild.nodeValue);
    };
    DOMUtils.XmlStringToObj = function (XmlString) {
        var dp = new DOMParser();
        var doc = dp.parseFromString(XmlString, 'text/xml');
        var node = DOMUtils.firstChildNode(doc);
        var bodyNode = DOMUtils.getNodeByName(node, "s:Body", true);
        var obj = DOMUtils.nodeToObj(bodyNode);
        return obj;
    };
    DOMUtils.nodeToObj = function (node) {
        var obj = {};
        if (node['attributes']) {
            var att = node['attributes'];
            for (var i = 0; i < att.length; i++) {
                var attr = att.item(i);
                // ignore namespace attributes
                if (attr.name.indexOf("xmlns:") != -1)
                    continue;
                if (obj.attributes == null)
                    obj.attributes = {};
                obj.attributes[attr.name] = attr.value;
            }
        }
        var strValue = "";
        var elementNodeCount = 0;
        for (var i = 0; i < node.childNodes.length; i++) {
            var iNode = node.childNodes[i];
            if (iNode.nodeType == NodeType.ELEMENT_NODE) {
                elementNodeCount++;
                var propName = iNode.nodeName;
                if (propName.indexOf(":") != -1)
                    propName = propName.split(":")[1];
                if (obj[propName] == null) {
                    obj[propName] = DOMUtils.nodeToObj(iNode);
                }
                else if (Object.prototype.toString.call(obj[propName]) === '[object Array]') {
                    obj[propName].push(DOMUtils.nodeToObj(iNode));
                }
                else {
                    var tmp = obj[propName];
                    obj[propName] = [];
                    obj[propName].push(tmp);
                    obj[propName].push(DOMUtils.nodeToObj(iNode));
                }
            }
            else
                strValue += iNode.nodeValue;
        }
        if (elementNodeCount == 0) {
            if (obj.attributes == null)
                obj = strValue;
            else if (strValue != "")
                obj.text = strValue;
        }
        return obj;
    };
    return DOMUtils;
}());
exports.DOMUtils = DOMUtils;
// ***********************************************************************************************************************
// URLUtils.ts
// ***********************************************************************************************************************
var URLUtils = /** @class */ (function () {
    function URLUtils() {
    }
    URLUtils.addPaths = function (basePath, subFolderPath) {
        var newPath = basePath;
        if (newPath.charAt(newPath.length - 1) != "\\" && newPath.charAt(newPath.length - 1) != "/") {
            newPath += "/";
        }
        return newPath + subFolderPath;
    };
    URLUtils.objToForm = function (obj) {
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + StringUtils.replace(obj[key], "&", "&amp;");
        }
        return str;
    };
    URLUtils.objToURIParams = function (obj) {
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    };
    URLUtils.URIParamsToObj = function (path) {
        var vars = {};
        var pairs = path.split("&");
        pairs.forEach(function (pair) {
            var s = pair.split("=");
            var propertyName = decodeURIComponent(s[0]);
            if (!StringUtils.isNullOrEmpty(propertyName)) {
                var value = null;
                if (s.length > 1)
                    value = decodeURIComponent(s[1]);
                vars[propertyName] = value;
            }
        });
        return vars;
    };
    URLUtils.pathToLocation = function (path) {
        var o = new URLLocation();
        o.fullPath = path;
        // ------------------------------
        // variables
        var i = path.indexOf("?");
        if (i != -1) {
            var vars = path.substring(i + 1, path.length);
            o.vars = this.URIParamsToObj(vars);
            path = path.substr(0, i);
        }
        // ------------------------------
        // protocole
        i = path.indexOf("://");
        if (i != -1) {
            o.protocol = path.substr(0, i);
            path = path.substring(i + 3, path.length);
        }
        // ------------------------------
        // check for port
        i = path.indexOf(":");
        var i2 = path.indexOf("/");
        if (i != -1 && (i < i2 || i2 == -1)) {
            if (i2 == -1) {
                i2 = path.length;
            }
            else
                o.subPath = path.substring(i2 + 1, path.length);
            o.port = path.substring(i + 1, i2);
            path = path.substr(0, i);
        }
        // domain
        i2 = path.indexOf("/");
        if (i2 != -1) {
            path = path.substr(0, i2);
        }
        o.domains = path.split(".");
        o.tld = o.domains.pop();
        return o;
    };
    URLUtils.relativeToFullPath = function (path, defaultPath) {
        path = StringUtils.replace(path, "\\", "/");
        var a = defaultPath.indexOf("://");
        var urlProtocol = "";
        var urlDomain = "";
        if (a != -1) {
            var arrPath = defaultPath.split("://");
            urlProtocol = arrPath[0];
            urlDomain = arrPath[1];
        }
        else {
            urlProtocol = "https";
            urlDomain = defaultPath;
        }
        var i = path.indexOf("/");
        var i2 = path.indexOf("//");
        if (i2 == 0) // url starts with "//"
            return urlProtocol + ":" + path;
        if (i == 0) // url starts with "/"
            return urlProtocol + "://" + urlDomain + path;
        if (i == i2) // url has "//" before any "/"
            return path;
        var i3 = path.indexOf(".");
        if (i3 < i) // there is a "." before a "/".
            return urlProtocol + "://" + path;
        return urlProtocol + "://" + urlDomain + "/" + path;
    };
    return URLUtils;
}());
exports.URLUtils = URLUtils;
var URLLocation = /** @class */ (function () {
    function URLLocation() {
    }
    Object.defineProperty(URLLocation.prototype, "host", {
        get: function () {
            return this.domains[this.domains.length - 1] + "." + this.tld;
        },
        enumerable: false,
        configurable: true
    });
    return URLLocation;
}());
exports.URLLocation = URLLocation;
