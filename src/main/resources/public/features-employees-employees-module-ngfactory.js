(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-employees-employees-module-ngfactory"],{

/***/ "./src/app/features/employees/employees.module.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/features/employees/employees.module.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: EmployeesModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModuleNgFactory", function() { return EmployeesModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employees_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees.module */ "./src/app/features/employees/employees.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component.ngfactory */ "./src/app/features/employees/list/list.component.ngfactory.js");
/* harmony import */ var _employees_form_employees_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees-form/employees-form.component.ngfactory */ "./src/app/features/employees/employees-form/employees-form.component.ngfactory.js");
/* harmony import */ var _details_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/details.component.ngfactory */ "./src/app/features/employees/details/details.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/fesm2015/observers.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _resolvers_employee_details_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_resolvers/employee-details.resolver */ "./src/app/features/employees/_resolvers/employee-details.resolver.ts");
/* harmony import */ var _core_services_employee_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/services/employee.service */ "./src/app/core/services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/fesm2015/a11y.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/fesm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/focustrap */ "./node_modules/primeng/fesm2015/primeng-focustrap.js");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/ripple */ "./node_modules/primeng/fesm2015/primeng-ripple.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./list/list.component */ "./src/app/features/employees/list/list.component.ts");
/* harmony import */ var _employees_form_employees_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./employees-form/employees-form.component */ "./src/app/features/employees/employees-form/employees-form.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./details/details.component */ "./src/app/features/employees/details/details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




































var EmployeesModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _list_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ListComponentNgFactory"], _employees_form_employees_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["EmployeesFormComponentNgFactory"], _details_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DetailsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_mask__WEBPACK_IMPORTED_MODULE_10__["config"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["_configFactory"], [ngx_mask__WEBPACK_IMPORTED_MODULE_10__["INITIAL_CONFIG"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NEW_CONFIG"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_mask__WEBPACK_IMPORTED_MODULE_10__["MaskApplierService"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["MaskApplierService"], [ngx_mask__WEBPACK_IMPORTED_MODULE_10__["config"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _resolvers_employee_details_resolver__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsResolver"], _resolvers_employee_details_resolver__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsResolver"], [_core_services_employee_service__WEBPACK_IMPORTED_MODULE_12__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_17__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_19__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_24__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_7__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_focustrap__WEBPACK_IMPORTED_MODULE_27__["FocusTrapModule"], primeng_focustrap__WEBPACK_IMPORTED_MODULE_27__["FocusTrapModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_ripple__WEBPACK_IMPORTED_MODULE_28__["RippleModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_28__["RippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_api__WEBPACK_IMPORTED_MODULE_29__["SharedModule"], primeng_api__WEBPACK_IMPORTED_MODULE_29__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, primeng_dialog__WEBPACK_IMPORTED_MODULE_30__["DialogModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_30__["DialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], _employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NEW_CONFIG"], { validation: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_mask__WEBPACK_IMPORTED_MODULE_10__["INITIAL_CONFIG"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["initialConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_13__["ROUTES"], function () { return [[{ path: "", children: [{ path: "", pathMatch: "full", redirectTo: "employees" }, { path: "employees", component: _list_list_component__WEBPACK_IMPORTED_MODULE_33__["ListComponent"] }, { path: "employees/create", component: _employees_form_employees_form_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesFormComponent"] }, { path: "employees/:id", component: _details_details_component__WEBPACK_IMPORTED_MODULE_35__["DetailsComponent"], resolve: { employee: _resolvers_employee_details_resolver__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsResolver"] } }, { path: "employees/:id/edit", component: _employees_form_employees_form_component__WEBPACK_IMPORTED_MODULE_34__["EmployeesFormComponent"], resolve: { employee: _resolvers_employee_details_resolver__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsResolver"] } }] }]]; }, [])]); });



/***/ })

}]);
//# sourceMappingURL=features-employees-employees-module-ngfactory.js.map