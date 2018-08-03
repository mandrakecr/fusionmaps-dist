(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory()}})(function(){(window["webpackJsonpFusionCharts"]=window["webpackJsonpFusionCharts"]||[]).push([[11],{709:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;exports.OverlapperColumn2D=undefined;var _overlappedcolumn2d=__webpack_require__(710);var _overlappedcolumn2d2=_interopRequireDefault(_overlappedcolumn2d);var _index=__webpack_require__(248);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}exports.OverlapperColumn2D=_overlappedcolumn2d2["default"];exports["default"]={name:"overlappedcolumn2d",type:"package",requiresFusionCharts:true,extension:function extension(FusionCharts){FusionCharts.addDep(_index2["default"]);FusionCharts.addDep(_overlappedcolumn2d2["default"])}}},710:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _mscartesian=__webpack_require__(354);var _mscartesian2=_interopRequireDefault(_mscartesian);var _column=__webpack_require__(331);var _column2=_interopRequireDefault(_column);var _column3=__webpack_require__(708);var _column4=_interopRequireDefault(_column3);var _multiseriesDataset=__webpack_require__(356);var _multiseriesDataset2=_interopRequireDefault(_multiseriesDataset);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defaults(obj,defaults){var keys=Object.getOwnPropertyNames(defaults);for(var i=0;i<keys.length;i++){var key=keys[i];var value=Object.getOwnPropertyDescriptor(defaults,key);if(value&&value.configurable&&obj[key]===undefined){Object.defineProperty(obj,key,value)}}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):_defaults(subClass,superClass)}var OverlappedColumn2D=function(_MSCartesian){_inherits(OverlappedColumn2D,_MSCartesian);function OverlappedColumn2D(){_classCallCheck(this,OverlappedColumn2D);var _this=_possibleConstructorReturn(this,_MSCartesian.call(this));_this.eiMethods={};_this.registerFactory("dataset",_multiseriesDataset2["default"],["vCanvas"]);return _this}OverlappedColumn2D.prototype.getName=function getName(){return"OverlappedColumn2D"};OverlappedColumn2D.getName=function getName(){return"OverlappedColumn2D"};OverlappedColumn2D.prototype.__setDefaultConfig=function __setDefaultConfig(){_MSCartesian.prototype.__setDefaultConfig.call(this);this.config.friendlyName="Multi-series Overlapped Column Chart";this.config.defaultDatasetType="column";this.config.enablemousetracking=true};OverlappedColumn2D.prototype.getDSdef=function getDSdef(){return _column2["default"]};OverlappedColumn2D.prototype.getDSGroupdef=function getDSGroupdef(){return _column4["default"]};return OverlappedColumn2D}(_mscartesian2["default"]);exports["default"]=OverlappedColumn2D}}])});
//# sourceMappingURL=http://localhost:3052/3.13.0/map/eval/fusioncharts.overlappedcolumn2d.js.map