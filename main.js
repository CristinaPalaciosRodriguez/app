(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+/Dj":
/*!******************************************************!*\
  !*** ./src/app/experiencia/experiencia.component.ts ***!
  \******************************************************/
/*! exports provided: ExperienciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienciaComponent", function() { return ExperienciaComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function ExperienciaComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function ExperienciaComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.languageTexts.obligatorio);
} }
function ExperienciaComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.languageTexts.obligatorio);
} }
function ExperienciaComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.languageTexts.obligatorio);
} }
function ExperienciaComponent_mat_chip_39_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaComponent_mat_chip_39_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function ExperienciaComponent_mat_chip_39_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const logro_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.remove(logro_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaComponent_mat_chip_39_mat_icon_2_Template, 2, 0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logro_r28 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectable", ctx_r7.selectable)("removable", ctx_r7.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", logro_r28.nombreLogro, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.removable);
} }
function ExperienciaComponent_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.languageTexts.obligatorio);
} }
function ExperienciaComponent_mat_chip_46_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaComponent_mat_chip_46_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function ExperienciaComponent_mat_chip_46_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const funcion_r32 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.removeFunciones(funcion_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaComponent_mat_chip_46_mat_icon_2_Template, 2, 0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const funcion_r32 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectable", ctx_r10.selectableFun)("removable", ctx_r10.removableFun);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", funcion_r32.nombreFuncion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.removableFun);
} }
function ExperienciaComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.languageTexts.obligatorio);
} }
function ExperienciaComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r12.languageTexts.empresa, " ");
} }
function ExperienciaComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r36.empresa, " ");
} }
function ExperienciaComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r14.languageTexts.puesto, " ");
} }
function ExperienciaComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r37.puesto, " ");
} }
function ExperienciaComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.languageTexts.fechaInicio, " ");
} }
function ExperienciaComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r38.fechaIni, "dd-MM-yyyy"), " ");
} }
function ExperienciaComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r18.languageTexts.fechaFin, " ");
} }
function ExperienciaComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, element_r39.fechaFin, "dd-MM-yyyy"), " ");
} }
function ExperienciaComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.languageTexts.logroet, " ");
} }
function ExperienciaComponent_td_67_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actividad_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](actividad_r42);
} }
function ExperienciaComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaComponent_td_67_li_2_Template, 2, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", element_r40.actividades);
} }
function ExperienciaComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r22.languageTexts.funcionet, " ");
} }
function ExperienciaComponent_td_70_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const funcion_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funcion_r45);
} }
function ExperienciaComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ExperienciaComponent_td_70_li_2_Template, 2, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", element_r43.funciones);
} }
function ExperienciaComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r24.languageTexts.eliminar, " ");
} }
function ExperienciaComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExperienciaComponent_td_73_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const element_r46 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.eliminarElemento(element_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ExperienciaComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 55);
} }
function ExperienciaComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 56);
} }
class ExperienciaComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.puesto = '';
        this.empresa = '';
        this.fechaInicio = null;
        this.fechaFin = null;
        this.actividades = [];
        this.funciones = [];
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['empresa', 'puesto', 'fechaIni', 'fechaFin', 'actividades', 'funciones', 'eliminar'];
        // Para la parte de funcion campo logros y funciones
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.visibleFun = true;
        this.selectableFun = true;
        this.removableFun = true;
        this.addOnBlurFun = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.logros = [];
        this.funcionesArray = [];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        console.log('displayedColumns:', this.displayedColumns);
        console.log('dataSource.data:', this.dataSource.data);
    }
    guardarExperiencia() {
        if (this.puesto && this.empresa && this.fechaInicio && this.fechaFin && this.actividades.length !== 0 && this.funciones.length !== 0) {
            const nuevaExperiencia = {
                puesto: this.puesto,
                empresa: this.empresa,
                fechaIni: this.fechaInicio,
                fechaFin: this.fechaFin,
                actividades: this.actividades,
                funciones: this.funciones
            };
            console.log('Nuevo elemento a agregar:', nuevaExperiencia);
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            console.log('dataSource.data después de agregar:', this.dataSource.data);
            this.dataFormularioService.guardarExperiencias(this.dataSource.data);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    setFechaActual() {
        this.fechaFin = this.fechaActual;
    }
    resetFormulario() {
        this.puesto = '';
        this.empresa = '';
        this.fechaInicio = null;
        this.fechaFin = null;
        this.actividades = [];
        this.funciones = [];
        this.logros = [];
        this.funcionesArray = [];
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarExperiencias(this.dataSource.data);
    }
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.logros.push({ nombreLogro: value.trim() });
            this.actividades.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(logro) {
        const index = this.logros.indexOf(logro);
        if (index >= 0) {
            this.logros.splice(index, 1);
            this.actividades.splice(index, 1);
        }
    }
    addFunciones(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.funcionesArray.push({ nombreFuncion: value.trim() });
            this.funciones.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    removeFunciones(funcion) {
        const index = this.funcionesArray.indexOf(funcion);
        if (index >= 0) {
            this.funcionesArray.splice(index, 1);
            this.funciones.splice(index, 1);
        }
    }
}
ExperienciaComponent.ɵfac = function ExperienciaComponent_Factory(t) { return new (t || ExperienciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
ExperienciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExperienciaComponent, selectors: [["app-experiencia"]], decls: 76, vars: 36, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "empresa", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "name", "puesto", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "name", "fechaIni", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerInicio", ""], ["matInput", "", "name", "fechaFin", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["pickerFin", ""], [2, "padding-right", "5px"], ["mat-button", "", "matSuffix", "", 3, "click"], ["required", ""], ["chipList", ""], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], ["required", "", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["chipList2", ""], [3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputAddOnBlur", "matChipInputTokenEnd"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "empresa"], ["mat-header-cell", "", "style", "width: 150px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 150px;", 4, "matCellDef"], ["matColumnDef", "puesto"], ["mat-header-cell", "", "style", "width: 100px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 100px;", 4, "matCellDef"], ["matColumnDef", "fechaIni"], ["matColumnDef", "fechaFin"], ["matColumnDef", "actividades"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "funciones"], ["matColumnDef", "eliminar"], ["mat-header-cell", "", "style", "width: 40px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 40px;", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["mat-header-cell", "", 2, "width", "150px"], ["mat-cell", "", 2, "width", "150px"], ["mat-header-cell", "", 2, "width", "100px"], ["mat-cell", "", 2, "width", "100px"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", "", 2, "width", "40px"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ExperienciaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "EXPERIENCIA LABORAL / WORK EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_9_listener($event) { return ctx.empresa = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExperienciaComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_15_listener($event) { return ctx.puesto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ExperienciaComponent_mat_error_16_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_19_listener($event) { return ctx.fechaInicio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ExperienciaComponent_mat_error_23_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ExperienciaComponent_Template_input_ngModelChange_26_listener($event) { return ctx.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ExperienciaComponent_mat_error_30_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExperienciaComponent_Template_button_click_33_listener() { return ctx.setFechaActual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-chip-list", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ExperienciaComponent_mat_chip_39_Template, 3, 4, "mat-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matChipInputTokenEnd", function ExperienciaComponent_Template_input_matChipInputTokenEnd_40_listener($event) { return ctx.add($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ExperienciaComponent_mat_error_41_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-chip-list", 16, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, ExperienciaComponent_mat_chip_46_Template, 3, 4, "mat-chip", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matChipInputTokenEnd", function ExperienciaComponent_Template_input_matChipInputTokenEnd_47_listener($event) { return ctx.addFunciones($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ExperienciaComponent_mat_error_48_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExperienciaComponent_Template_button_click_49_listener() { return ctx.guardarExperiencia(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ExperienciaComponent_th_54_Template, 2, 1, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ExperienciaComponent_td_55_Template, 2, 1, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](56, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ExperienciaComponent_th_57_Template, 2, 1, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ExperienciaComponent_td_58_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](59, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ExperienciaComponent_th_60_Template, 2, 1, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ExperienciaComponent_td_61_Template, 3, 4, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](62, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ExperienciaComponent_th_63_Template, 2, 1, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ExperienciaComponent_td_64_Template, 3, 4, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](65, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ExperienciaComponent_th_66_Template, 2, 1, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, ExperienciaComponent_td_67_Template, 3, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](68, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ExperienciaComponent_th_69_Template, 2, 1, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, ExperienciaComponent_td_70_Template, 3, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](71, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, ExperienciaComponent_th_72_Template, 2, 1, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, ExperienciaComponent_td_73_Template, 4, 0, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, ExperienciaComponent_tr_74_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, ExperienciaComponent_tr_75_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.puesto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.fechaInicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r4)("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.fechaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.logros);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.logros);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matChipInputFor", _r6)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlur);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.logros.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.funcionesArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.funciones);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matChipInputFor", _r9)("matChipInputSeparatorKeyCodes", ctx.separatorKeysCodes)("matChipInputAddOnBlur", ctx.addOnBlurFun);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.funciones.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarExp);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipRemove"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGVyaWVuY2lhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBLDZCQUFBOztBQUNBO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6ImV4cGVyaWVuY2lhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "+kO/":
/*!******************************************************!*\
  !*** ./src/app/comentarios/comentarios.component.ts ***!
  \******************************************************/
/*! exports provided: ComentariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosComponent", function() { return ComentariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class ComentariosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.comentario = '';
        this.disenoHoja = 'Diseño de una columna';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
    }
    enviarDatos() {
        console.log(this.disenoHoja);
        this.dataFormularioService.guardarDatos(this.comentario, this.disenoHoja);
    }
    todosArreglosLlenos() {
        return this.dataFormularioService.tieneEstudios &&
            this.dataFormularioService.tieneConocimientos &&
            this.dataFormularioService.tieneExperiencias &&
            this.dataFormularioService.tieneIdiomas &&
            this.dataFormularioService.tienePersonal;
    }
}
ComentariosComponent.ɵfac = function ComentariosComponent_Factory(t) { return new (t || ComentariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_1__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
ComentariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComentariosComponent, selectors: [["app-comentarios"]], decls: 20, vars: 9, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario", 3, "ngSubmit"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "comentario", 1, "mi-textarea", 3, "placeholder", "ngModel", "ngModelChange"], [1, "lip"], [2, "margin-right", "10px"], ["name", "disenoHoja", 3, "placeholder", "ngModel", "ngModelChange"], ["value", "Dise\u00F1o de una columna"], ["value", "Dise\u00F1o de dos columnas"], ["mat-raised-button", "", "type", "submit", 1, "btazul", 3, "disabled"]], template: function ComentariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "NOTAS O COMENTARIOS / NOTES OR COMMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ComentariosComponent_Template_form_ngSubmit_3_listener() { return ctx.enviarDatos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.comentario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComentariosComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.disenoHoja = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.comentarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.comentarios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comentario);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.estilos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.disenoHoja);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.estilo1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.estilo2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.todosArreglosLlenos());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.generarDoc);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["@charset \"UTF-8\";\n.formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(100%);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.mi-textarea[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.imprimir[_ngcontent-%COMP%] {\n  display: none;\n  \n}\n.lip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  \n}\n\n.btazul[_ngcontent-%COMP%] {\n  background-color: #33CEFF;\n  \n  color: black;\n  \n}\n@media print {\n  .imprimir[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    font-size: 12px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbWVudGFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFFSjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQ0U7RUFDRSxXQUFBO0VBQWEsdURBQUE7QUFHakI7QUFBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFHSjtBQUFFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUdKO0FBQUU7RUFDRSxXQUFBO0FBR0o7QUFBRTtFQUNFLHdDQUFBO0FBR0o7QUFBRTtFQUNFLGFBQUE7QUFHSjtBQUFFO0VBQ0UsYUFBQTtFQUFlLGlEQUFBO0FBSW5CO0FBREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFBcUIscUVBQUE7QUFLekI7QUFIRSw2QkFBQTtBQUNGO0VBQ0UseUJBQUE7RUFBNEIsNkJBQUE7RUFDNUIsWUFBQTtFQUFlLHNDQUFBO0FBUWpCO0FBSkU7RUFDRTtJQUNFLGNBQUE7RUFPSjs7RUFMRSwwQ0FBQTtFQUNBO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsK0JBQUE7RUFRSjtBQUNGIiwiZmlsZSI6ImNvbWVudGFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgLyogQWp1c3RhciBlbCBmb3JtdWxhcmlvIHBhcmEgcXVlIG9jdXBlIHRvZG8gZWwgYW5jaG8gKi9cbn1cblxuLmZpbGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbHVtbmEge1xuICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FtcG8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5taS10ZXh0YXJlYSB7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5pbXByaW1pciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIE9jdWx0YSBlbCBlbGVtZW50byBlbiBsYSB2aXN0YSBkZWwgbmF2ZWdhZG9yICovXG59XG5cbi5saXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBBbGluZWFyIHZlcnRpY2FsbWVudGUgbG9zIGVsZW1lbnRvcyBlbiBlbCBjZW50cm8gc2kgZXMgbmVjZXNhcmlvICovXG59XG5cbi8qIHN0eWxlcy5jc3MgbyBzdHlsZXMuc2NzcyAqL1xuLmJ0YXp1bCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkY7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xuICBjb2xvcjogYmxhY2s7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZWwgdGV4dG8gYSBuZWdybyAqL1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAuaW1wcmltaXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLyogRXN0aWxvcyBlc3BlY8OtZmljb3MgcGFyYSBsYSBpbXByZXNpw7NuICovXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogT3Ryb3MgZXN0aWxvcyBkZSBpbXByZXNpw7NuICovXG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\proyectotesis\app\src\main.ts */"zUnb");


/***/ }),

/***/ "3Hxo":
/*!*********************************!*\
  !*** ./src/assets/js/print2.js ***!
  \*********************************/
/*! exports provided: printDiv2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDiv2", function() { return printDiv2; });
function printDiv2(nombre, apellido, nacionalidad, edad, ciudad, pais, estudios, conocimientos, experiencias, cursos, idiomas, languageTexts) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
        .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
        '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    //Datos Personales
    a.document.write('<div style="margin-top: 20px;">');
    a.document.write(`<div style="font-weight: bold; font-family: \'Mediator Serif Narrow Bold\'; font-size: 40px;"><label>${apellido} ${nombre}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.edad}: ${edad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.nacionalidad}: ${nacionalidad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.ciudad}: ${ciudad}</label></div>`);
    a.document.write(`<div style="font-family: \'TilpSerif EF Bold Italic\'; font-size: 16px;"><label>${languageTexts.pais}: ${pais}</label></div>`);
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
        '<div style="display: flex; align-items: flex-start; width:100%;">'
    );

    // =========== 2 COLUMNAS ============
    a.document.write('<div style="display: flex; flex: 1;">');

    // =========== Columna 1 ============
    a.document.write('<div style="flex: 1; margin-right: 20px;">');

    // =========== 1. EXPERIENCIA LABORAL ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.experiencialab + '</label>'
    );
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
        return cadena.charAt(0).toUpperCase() + cadena.slice(1);
      }
    // Aquí debes añadir el código para mostrar la experiencia laboral
    experiencias.forEach(experiencia => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: #444;"><strong>${experiencia.puesto}</strong> - <strong>${experiencia.empresa}</strong></p>`);
    
        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
    const fechaInicio = new Date(experiencia.fechaIni);
    const fechaFin = new Date(experiencia.fechaFin);

    // Obtener el mes y el año actual
    const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
    const añoActual = new Date().getFullYear();

    // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

    a.document.write(`<p style="font-family: 'Tara SC Light', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${tiempoFormateado}</p>`);
    
        a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: #666;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        experiencia.actividades.forEach(function(actividad) {
            a.document.write(`<li>${actividad}</li>`); // Mostrar cada actividad como un elemento de lista
        });
        a.document.write('</ul></div>'); // Fin de la lista
    
        a.document.write('<div style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 10px; color: #666;"><ul style="list-style-type: disc; padding-left: 20px;">'); // Inicio de la lista
        experiencia.funciones.forEach(function(funcion) {
            a.document.write(`<li>${funcion}</li>`); // Mostrar cada función como un elemento de lista
        });
        a.document.write('</ul></div>'); // Fin de la lista
    
        a.document.write("</div>"); // Cerrar el div de la experiencia laboral
    });
    a.document.write("</div>");

    // =========== 2. ESTUDIOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");
    
    estudios.forEach(estudio => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: #444;"><strong>${estudio.universidad}</strong></strong></p>`);
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${estudio.carrera}</p>`);

        // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(estudio.fechaIni);
        const fechaFin = new Date(estudio.generacion);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
    const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
    const añoInicio = fechaInicio.getFullYear();
    let mesFin, añoFin;

    // Verificar si la fecha fin es igual al mes y año actuales
    if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
        mesFin = languageTexts.actualidad;
        añoFin = "";
    } else {
        mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
        añoFin = fechaFin.getFullYear();
    }

    // Construir la cadena de tiempo formateada
    const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${tiempoFormateado}</p>`);

        a.document.write("</div>"); // Cerrar el div del conocimiento
    });
    a.document.write("</div>");

    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
    // =========== 3. CURSOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; color: #3D5FEA !important;  margin-top: 2%; ">' + languageTexts.otrosEstudios + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los cursos
    cursos.forEach(curso => {
        a.document.write('<div style="margin-top: 15px;">');
        a.document.write(`<p style="font-family: \'Mediator Serif Narrow Bold\', sans-serif; font-size: 18px; margin-bottom: 5px; color: #444;"><strong>${curso.nombre}</strong></strong></p>`);
         // =========== Tiempo ============
        // Convertir las fechas a objetos de fecha JavaScript
        const fechaInicio = new Date(curso.fechaIni);
        const fechaFin = new Date(curso.fechaFin);

        // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

        // Construir la cadena de tiempo formateada
        const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;
        
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${curso.organizacion}</p>`);
        
        a.document.write(`<p style="font-family: \'Tara SC Light\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${tiempoFormateado}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${curso.entidad} - ${curso.tiempoEstudio}</p>`);
        a.document.write(`<p style="font-family: \'Tanseek Traditional Medium\', sans-serif; font-size: 16px; margin-bottom: 5px; color: #666;">${curso.descripcion}</p>`);

        a.document.write("</div>");
    });

    a.document.write("</div>");
}

    a.document.write("</div>");

    // =========== Columna 2 ============
    a.document.write('<div style="flex: 1;">');

    // =========== 4. CONOCIMIENTOS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; color: #3D5FEA !important; font-size: 20px; margin-top: 2%; ">' + languageTexts.conocimientotec + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los conocimientos
    conocimientos.forEach(conocimiento => {
        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 2px; color: #444;">${conocimiento.conocimiento}</p>`);
        a.document.write("</div>");
    });
    a.document.write("</div>");

    // =========== 5. IDIOMAS ============
    a.document.write(
        '<div style="display: flex; flex-direction: column; color: #3D5FEA !important; margin-top: 20px;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
        '<label style="font-weight: bold; font-family: \'Tara SC Bold\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.idiomas + '</label>'
    );
    a.document.write("</div>");
    // Aquí debes añadir el código para mostrar los idiomas
    idiomas.forEach(idioma => {
        a.document.write('<div style="margin-top: 1px;">');
        a.document.write(`<p style="font-family: \'TilpSerif EF Bold Italic\', sans-serif; font-size: 16px; margin-bottom: 2px; color: #444;">${idioma.idioma}</p>`);
        a.document.write("</div>");
    });
    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");

    a.document.write("</div>");
    a.document.write("</body></html>");

    a.document.close();
    setTimeout(function() {
        a.print();
    }, 1000);
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C3ZT":
/*!**********************************************************!*\
  !*** ./src/app/conocimientos/conocimientos.component.ts ***!
  \**********************************************************/
/*! exports provided: ConocimientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConocimientosComponent", function() { return ConocimientosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");










function ConocimientosComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ConocimientosComponent_th_8_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function ConocimientosComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientosComponent_td_9_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ConocimientosComponent_td_9_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const row_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.toggleSelection(row_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.isSelected(row_r10))("aria-label", ctx_r1.checkboxLabel(row_r10));
} }
function ConocimientosComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.languageTexts.conocimiento, " ");
} }
function ConocimientosComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r14.conocimiento, " ");
} }
function ConocimientosComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.eliminar, " ");
} }
function ConocimientosComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientosComponent_td_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const element_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.eliminarElemento(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConocimientosComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 15);
} }
function ConocimientosComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 16);
} }
class ConocimientosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.conocimientosPLCs = [
            { conocimiento: 'SIEMENS (PLC)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (PLC)', position: 2 },
            { conocimiento: 'SCHNEIDER (PLC)', position: 3 },
            { conocimiento: 'MITSUBISHI (PLC)', position: 4 },
            { conocimiento: 'OMRON (PLC)', position: 5 },
            { conocimiento: 'ABB (PLC)', position: 6 },
        ];
        this.conocimientosHMIs = [
            { conocimiento: 'SIEMENS (HMI)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (HMI)', position: 2 },
            { conocimiento: 'SCHNEIDER (HMI)', position: 3 },
        ];
        this.conocimientosDrivesServos = [
            { conocimiento: 'SIEMENS (Drive/Servo)', position: 1 },
            { conocimiento: 'ALLEN BRADLEY (Drive/Servo)', position: 2 },
            { conocimiento: 'SCHNEIDER (Drive/Servo)', position: 3 },
            { conocimiento: 'YASKAWA (Drive/Servo)', position: 4 },
            { conocimiento: 'LENZE (Drive/Servo)', position: 5 },
            { conocimiento: 'ABB (Drive/Servo)', position: 6 },
        ];
        this.conocimientosSoftware = [
            { conocimiento: 'TIA Portal', position: 1 },
            { conocimiento: 'STEP 7', position: 2 },
            { conocimiento: 'WINCC', position: 3 },
            { conocimiento: 'PCS7', position: 4 },
            { conocimiento: 'StartDrive', position: 5 },
            { conocimiento: 'Starter', position: 6 },
            { conocimiento: 'Studio5000', position: 7 },
            { conocimiento: 'RSLogix', position: 8 },
            { conocimiento: 'Factory Talk View ME/SE', position: 9 },
            { conocimiento: 'Component WorkBench', position: 10 },
            { conocimiento: 'PlantPAx', position: 11 },
            { conocimiento: 'DriveTools', position: 12 },
            { conocimiento: 'RSNetworx', position: 13 },
            { conocimiento: 'EcoStruxure Control Expert', position: 14 },
            { conocimiento: 'Unity Pro', position: 15 },
            { conocimiento: 'Vijeo Designer', position: 16 },
            { conocimiento: 'SoMove', position: 17 },
        ];
        this.conocimientosLenguaje = [
            { conocimiento: 'Ladder', position: 1 },
            { conocimiento: 'FBD', position: 2 },
            { conocimiento: 'ST', position: 3 },
            { conocimiento: 'IL', position: 4 },
            { conocimiento: 'SFC', position: 5 },
            { conocimiento: 'GRAFCET', position: 6 },
        ];
        this.conocimientosNetwork = [
            { conocimiento: 'Profinet', position: 1 },
            { conocimiento: 'Profibus DP', position: 2 },
            { conocimiento: 'Ethernet IP', position: 3 },
            { conocimiento: 'ControlNet', position: 4 },
            { conocimiento: 'DeviceNet', position: 5 },
            { conocimiento: 'EtherCat', position: 6 },
        ];
        this.conocimiento = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'conocimiento', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        this.updateDataSource();
    }
    ngOnChanges(changes) {
        if (changes['categoryTitle']) {
            this.updateDataSource();
        }
    }
    updateDataSource() {
        switch (this.categoryTitle) {
            case 'PLCs':
                this.dataSource.data = this.conocimientosPLCs;
                break;
            case 'HMIs':
                this.dataSource.data = this.conocimientosHMIs;
                break;
            case 'DRIVEs / SERVOs':
                this.dataSource.data = this.conocimientosDrivesServos;
                break;
            case 'Software':
                this.dataSource.data = this.conocimientosSoftware;
                break;
            case 'Lenguaje de programación':
                this.dataSource.data = this.conocimientosLenguaje;
                break;
            case 'Language of programming':
                this.dataSource.data = this.conocimientosLenguaje;
                break;
            case 'Network':
                this.dataSource.data = this.conocimientosNetwork;
                break;
            default:
                this.dataSource.data = [];
                break;
        }
    }
    guardarConocimiento() {
        if (this.conocimiento) {
            const nuevaExperiencia = {
                conocimiento: this.conocimiento,
                position: (this.dataSource.data.length + 1)
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.conocimiento = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento);
        this.dataFormularioService.eliminarConocimientos([elemento]);
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            const deselectedElements = [...this.selection.selected];
            this.selection.clear();
            this.dataFormularioService.eliminarConocimientos(deselectedElements);
        }
        else {
            this.dataSource.data.forEach(row => this.selection.select(row));
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
        }
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    toggleSelection(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.dataFormularioService.guardarConocimientos([row]);
        }
        else {
            this.dataFormularioService.eliminarConocimientos([row]);
        }
    }
}
ConocimientosComponent.ɵfac = function ConocimientosComponent_Factory(t) { return new (t || ConocimientosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
ConocimientosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConocimientosComponent, selectors: [["app-conocimientos"]], inputs: { categoryTitle: "categoryTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 4, consts: [[1, "conocimientos-container"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "conocimiento"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ConocimientosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](7, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ConocimientosComponent_th_8_Template, 2, 3, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ConocimientosComponent_td_9_Template, 2, 2, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ConocimientosComponent_th_11_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ConocimientosComponent_td_12_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ConocimientosComponent_th_14_Template, 2, 1, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ConocimientosComponent_td_15_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ConocimientosComponent_tr_16_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ConocimientosComponent_tr_17_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.categoryTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n  \n}\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  \n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: white;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  \n}\n.conocimientos-container[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  \n}\n.ng-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbm9jaW1pZW50b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUFGO0FBR0E7RUFDRSxvQ0FBQTtFQUFzQyw2QkFBQTtFQUN0Qyx1QkFBQTtFQUF5QixzQ0FBQTtBQUUzQjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUFxQiw4QkFBQTtBQUd2QjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBR0Y7QUFBQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtBQUdGO0FBQUE7RUFDRSxtQkFBQTtFQUFxQix3Q0FBQTtBQUl2QjtBQURBO0VBQ0UsdUJBQUE7RUFBeUIsNERBQUE7QUFLM0I7QUFGQTtFQUNFLGFBQUE7RUFBZSx3REFBQTtBQU1qQjtBQUhBO0VBQ0Usa0JBQUE7RUFBb0IsNENBQUE7QUFPdEI7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQU9GIiwiZmlsZSI6ImNvbm9jaW1pZW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQ0VGRiAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBSZWR1Y2UgZWwgbWFyZ2VuIGluZmVyaW9yICovXHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlsYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW1uYSB7XHJcbiAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY2FtcG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogUmVkdWNlIGVsIGVzcGFjaW8gZW50cmUgbG9zIHBhbmVsZXMgKi9cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgLyogT3BjaW9uYWw6IENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyBkZWwgaGVhZGVyIGRlbCBwYW5lbCAqL1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMHB4OyAvKiBPcGNpb25hbDogQWp1c3RhIGVsIHBhZGRpbmcgZGVsIGNvbnRlbmlkbyBkZWwgcGFuZWwgKi9cclxufVxyXG5cclxuLmNvbm9jaW1pZW50b3MtY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7IC8qIFJlZHVjZSBlbCBlc3BhY2lvIGVudHJlIGxvcyBjb21wb25lbnRlcyAqL1xyXG59XHJcblxyXG4ubmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Co0O":
/*!************************************************!*\
  !*** ./src/app/estudios/estudios.component.ts ***!
  \************************************************/
/*! exports provided: EstudiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstudiosComponent", function() { return EstudiosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function EstudiosComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function EstudiosComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.languageTexts.obligatorio);
} }
function EstudiosComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.languageTexts.obligatorio);
} }
function EstudiosComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.languageTexts.obligatorio);
} }
function EstudiosComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.languageTexts.universidad, " ");
} }
function EstudiosComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.universidad, " ");
} }
function EstudiosComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.languageTexts.carrera, " ");
} }
function EstudiosComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.carrera, " ");
} }
function EstudiosComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.languageTexts.fechaInicio, " ");
} }
function EstudiosComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r20.fechaIni, "dd-MM-yyyy"), " ");
} }
function EstudiosComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r12.languageTexts.fechaFin, " ");
} }
function EstudiosComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r21.generacion, "dd-MM-yyyy"), " ");
} }
function EstudiosComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.languageTexts.eliminar, " ");
} }
function EstudiosComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EstudiosComponent_td_53_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const element_r22 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.eliminarElemento(element_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EstudiosComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 31);
} }
function EstudiosComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 32);
} }
class EstudiosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.universidad = '';
        this.carrera = '';
        this.generacion = null;
        this.fechaIni = null;
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['universidad', 'carrera', 'fechaIni', 'generacion', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
    }
    guardarEstudio() {
        if (this.universidad && this.carrera && this.generacion && this.fechaIni) {
            const nuevaExperiencia = {
                universidad: this.universidad,
                carrera: this.carrera,
                generacion: this.generacion,
                fechaIni: this.fechaIni
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarEstudios(this.dataSource.data);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.universidad = '';
        this.carrera = '';
        this.generacion = null;
        this.fechaIni = null;
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarEstudios(this.dataSource.data);
    }
    setFechaActual() {
        this.generacion = this.fechaActual;
    }
}
EstudiosComponent.ɵfac = function EstudiosComponent_Factory(t) { return new (t || EstudiosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_2__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
EstudiosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EstudiosComponent, selectors: [["app-estudios"]], decls: 56, vars: 24, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "universidad", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "name", "carrera", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "name", "fechaIni", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerIn", ""], ["matInput", "", "name", "generacion", "required", "", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["pickerInicio", ""], [2, "padding-right", "5px"], ["mat-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "universidad"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "carrera"], ["matColumnDef", "fechaIni"], ["matColumnDef", "generacion"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function EstudiosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "UNIVERSIDAD / UNIVERSITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_9_listener($event) { return ctx.universidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EstudiosComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_15_listener($event) { return ctx.carrera = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, EstudiosComponent_mat_error_16_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_19_listener($event) { return ctx.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EstudiosComponent_mat_error_23_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EstudiosComponent_Template_input_ngModelChange_26_listener($event) { return ctx.generacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, EstudiosComponent_mat_error_30_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EstudiosComponent_Template_button_click_33_listener() { return ctx.setFechaActual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EstudiosComponent_Template_button_click_35_listener() { return ctx.guardarEstudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](39, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, EstudiosComponent_th_40_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, EstudiosComponent_td_41_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](42, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, EstudiosComponent_th_43_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, EstudiosComponent_td_44_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](45, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, EstudiosComponent_th_46_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, EstudiosComponent_td_47_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](48, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, EstudiosComponent_th_49_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, EstudiosComponent_td_50_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](51, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, EstudiosComponent_th_52_Template, 2, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, EstudiosComponent_td_53_Template, 4, 0, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, EstudiosComponent_tr_54_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, EstudiosComponent_tr_55_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.universidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.carrera);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r4)("ngModel", ctx.generacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.generacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.fechaActual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.guardarEstu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVzdHVkaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBLDZCQUFBOztBQUNBO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUVKOztBQUNFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUVKIiwiZmlsZSI6ImVzdHVkaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "DNzp":
/*!********************************************************************!*\
  !*** ./src/app/conocimiento-total/conocimiento-total.component.ts ***!
  \********************************************************************/
/*! exports provided: ConocimientoTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConocimientoTotalComponent", function() { return ConocimientoTotalComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../conocimientos/conocimientos.component */ "C3ZT");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function ConocimientoTotalComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function ConocimientoTotalComponent_app_conocimientos_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-conocimientos", 19);
} if (rf & 2) {
    const category_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("categoryTitle", category_r10.title);
} }
function ConocimientoTotalComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ConocimientoTotalComponent_th_20_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.masterToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("aria-label", ctx_r2.checkboxLabel());
} }
function ConocimientoTotalComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_td_21_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ConocimientoTotalComponent_td_21_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const row_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.toggleSelection(row_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r13))("aria-label", ctx_r3.checkboxLabel(row_r13));
} }
function ConocimientoTotalComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.languageTexts.conocimiento, " ");
} }
function ConocimientoTotalComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.conocimiento, " ");
} }
function ConocimientoTotalComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.languageTexts.eliminar, " ");
} }
function ConocimientoTotalComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_td_27_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const element_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.eliminarElemento(element_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ConocimientoTotalComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 25);
} }
function ConocimientoTotalComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 26);
} }
class ConocimientoTotalComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.categories = [];
        this.conocimiento = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'conocimiento', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
            this.updateCategories();
        });
    }
    ngOnInit() {
        console.log('displayedColumns:', this.displayedColumns);
        console.log('dataSource.data:', this.dataSource.data);
    }
    guardarConocimiento() {
        if (this.conocimiento) {
            const nuevaExperiencia = {
                conocimiento: this.conocimiento,
                position: (this.dataSource.data.length + 1)
            };
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.conocimiento = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento);
        this.dataFormularioService.eliminarConocimientos([elemento]);
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        if (this.isAllSelected()) {
            const deselectedElements = [...this.selection.selected];
            this.selection.clear();
            this.dataFormularioService.eliminarConocimientos(deselectedElements);
        }
        else {
            this.dataSource.data.forEach(row => this.selection.select(row));
            this.dataFormularioService.guardarConocimientos(this.selection.selected);
        }
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    toggleSelection(row) {
        this.selection.toggle(row);
        if (this.selection.isSelected(row)) {
            this.dataFormularioService.guardarConocimientos([row]);
        }
        else {
            this.dataFormularioService.eliminarConocimientos([row]);
        }
    }
    updateCategories() {
        this.categories = [
            { title: 'PLCs' },
            { title: 'HMIs' },
            { title: 'DRIVEs / SERVOs' },
            { title: 'Software' },
            { title: this.languageTexts.lenguajeProgramacion },
            { title: 'Network' }
        ];
        this.dataSource.data = [
            { conocimiento: 'Safety', position: 1 },
            { conocimiento: 'Sensores', position: 2 },
            { conocimiento: 'Válvulas', position: 3 },
            { conocimiento: 'Encoders', position: 4 },
            { conocimiento: this.languageTexts.conocimiento5, position: 5 },
            { conocimiento: this.languageTexts.conocimiento6, position: 6 },
            { conocimiento: this.languageTexts.conocimiento7, position: 7 },
        ];
    }
}
ConocimientoTotalComponent.ɵfac = function ConocimientoTotalComponent_Factory(t) { return new (t || ConocimientoTotalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
ConocimientoTotalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConocimientoTotalComponent, selectors: [["app-conocimiento-total"]], decls: 30, vars: 10, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formularios"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "conocimiento", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [3, "categoryTitle", 4, "ngFor", "ngForOf"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "conocimiento"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "categoryTitle"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ConocimientoTotalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "CONOCIMIENTO TECNICO / TECHNICIAL KNOWHOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ConocimientoTotalComponent_Template_input_ngModelChange_12_listener($event) { return ctx.conocimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ConocimientoTotalComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConocimientoTotalComponent_Template_button_click_14_listener() { return ctx.guardarConocimiento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ConocimientoTotalComponent_app_conocimientos_16_Template, 1, 1, "app-conocimientos", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ConocimientoTotalComponent_th_20_Template, 2, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ConocimientoTotalComponent_td_21_Template, 2, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ConocimientoTotalComponent_th_23_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ConocimientoTotalComponent_td_24_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ConocimientoTotalComponent_th_26_Template, 2, 1, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ConocimientoTotalComponent_td_27_Template, 4, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ConocimientoTotalComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ConocimientoTotalComponent_tr_29_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.indicaConocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.conocimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarCono);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_10__["ConocimientosComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.formularios[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbm9jaW1pZW50by10b3RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUUsNkJBQUE7O0FBQ0E7RUFDRSxvQ0FBQTtFQUFzQyw2QkFBQTtFQUN0Qyx1QkFBQTtFQUF5QixzQ0FBQTtBQUM3Qjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FBQU47O0FBR0k7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxXQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQU4iLCJmaWxlIjoiY29ub2NpbWllbnRvLXRvdGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtdWxhcmlvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG5cclxuICBcclxuLmZvcm11bGFyaW9zIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiAgXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkYgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvICovXHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWxhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2x1bW5hIHtcclxuICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYW1wbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "Dvxi":
/*!********************************!*\
  !*** ./src/assets/js/print.js ***!
  \********************************/
/*! exports provided: printDiv2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printDiv2", function() { return printDiv2; });
function printDiv2(nombre, apellido, nacionalidad,edad, ciudad, pais, estudios, conocimientos, experiencias,cursos, idiomas, languageTexts,comentarios, skills) {

    var a = window.open("", "", "height=1000, width=1000");
    a.document.write("<html><body>");

    //Encabezado
    a.document
      .write(`<div style="display: block; align-items: center; width:1000;"> <div style="display: flex;
          margin: 15px 5px;">`);
    a.document.write(
        '<img style="width: 120;" src="./assets/images/logo.png" alt="logo">'
    );
    a.document.write(
      '<h3 style="flex: 1; text-align: right; font-family: \'Franklin Gothic Medium Cond\'; font-size: 18px; color: #31DCFE !important; margin-right: 100px;">Curriculum Vitae</h3>'
    );
    a.document.write("</div>");
    a.document.write("</div>");


    // CV
    a.document.write('<div style="margin-bottom:2%; text-align: left; margin-top:3%;">');
    a.document.write(
      '<label style="font-size: 25px; font-family: \'Franklin Gothic Medium Cond\';">Curriculum Vitae</label>'
    );
    a.document.write("</div>");

    //SEPARAMIENTO DEL PDF
    a.document.write(
      '<div style="display: inline-block; align-items: center; width:100%;">'
    );
  
  
    // =========== 1. DATOS PERSONALES ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; ">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+ languageTexts.datospersonales +'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");
  
    // =========== Apellido y Nombre ============
    a.document.write('<div style="display: flex; margin-top: 15px;">');
    a.document.write('<div style="font-weight: bold; flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.apellidonombre + ': ' + apellido + ' ' + nombre + '</label></div>');
    a.document.write("</div>");

    // =========== Nacionalidad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>'  + languageTexts.nacionalidad+  ': ' + nacionalidad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.residenciaactual + ': ' + ciudad + '</label></div>');
    a.document.write("</div>");

    // =========== Edad ============
    a.document.write('<div style="display: flex; margin-top: 10px;">');
    a.document.write('<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.edad + ': ' + edad + '</label></div>');
    a.document.write("</div>");

    // =========== ESTUDIOS CURSADOS ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">' + languageTexts.estudioscursados + '</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    // Supongamos que estudios es un arreglo de objetos con la estructura { nombreUniversidad, carrera, generacion }
    // Iteramos sobre cada objeto en el arreglo
    estudios.forEach(estudio => {
      // =========== Universidad ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write(`<div style="font-weight: bold; flex:5; font-family: \'Arial\'; font-size: 18px;"><label>${estudio.universidad}</label></div>`);
      a.document.write("</div>");

      // =========== Carrera ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.carrera}: <strong>${estudio.carrera}</strong></label></div>`);
      a.document.write("</div>");

      
      // =========== Fecha inicio ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.fechaInicio}: <strong>${estudio.fechaIni.getFullYear()}</strong></label></div>`);
      a.document.write("</div>");

      // =========== Generacion ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      
      
      const fechaHoy = new Date();

      // Validación para reemplazar el año con "Actualmente" si la fecha coincide con la fecha de hoy
      if (estudio.generacion.getDate() === fechaHoy.getDate() &&
          estudio.generacion.getMonth() === fechaHoy.getMonth() &&
          estudio.generacion.getFullYear() === fechaHoy.getFullYear()) {
            a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${languageTexts.actualidad}</strong></label></div>`);
      } else {
        a.document.write(`<div style="flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.generacion}: <strong>${estudio.generacion.getFullYear()}</strong></label></div>`);
      }

      a.document.write("</div>");
    });


    // =========== CONOCIMIENTOS ============
  
    
    // Si hay tanto conocimientos como skills, mostramos dos columnas
    if (conocimientos.length > 0 && skills.length > 0) {
        a.document.write('<div style="display: flex; width: 100%;">');
    

    // Columna de conocimientos
    a.document.write('<div style="flex: 1; margin-right: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.conocimientotec + '</label>');
    a.document.write('</div>');

    const numConocimientos = conocimientos.length;

    for (let j = 0; j < numConocimientos; j++) {
        const conocimiento = conocimientos[j];
        // =========== Conocimiento ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');

    // Columna de habilidades
    a.document.write('<div style="flex: 1; margin-left: 20px;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%; border-bottom: 1px solid black;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.skillEt + '</label>');
    a.document.write('</div>');

    const numSkills = skills.length;

    for (let j = 0; j < numSkills; j++) {
        const skill = skills[j];
        // =========== Skill ============
        a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
        a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
        a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${skill.skill}</label></div>`);
        a.document.write('</div>');
    }

    a.document.write('</div>');
    a.document.write('</div>');
    } else {
      a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
      a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
      a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%;">' + languageTexts.conocimientotec + '</label>');
      a.document.write('</div>'); // Cerramos la última columna
      a.document.write("</div>");
        // Si no hay skills, mostramos solo la columna de conocimientos como está actualmente
        a.document.write('<div style="display: flex;">');
    
        const numConocimientos = conocimientos.length;
        const numColumnas = Math.ceil(numConocimientos / 8); // Calcula el número de columnas necesarias
    
        for (let i = 0; i < numColumnas; i++) {
            // Abre una nueva columna
            a.document.write('<div style="flex: 1; margin-right: 20px;">');
    
            // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
            for (let j = i * 8; j < Math.min((i + 1) * 8, numConocimientos); j++) {
                const conocimiento = conocimientos[j];
                // =========== Conocimiento ============
                a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
                a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
                a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${conocimiento.conocimiento}</label></div>`);
                a.document.write('</div>');
            }
    
            // Si la columna no tiene 8 conocimientos, añade espacios en blanco
            const numConocimientosEnColumna = Math.min(numConocimientos - i * 8, 8);
            for (let k = numConocimientosEnColumna; k < 8; k++) {
                a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
            }
    
            // Cierra la columna actual
            a.document.write('</div>');
        }
    
        a.document.write('</div>'); // Cierra el contenedor de la única columna
    }
    

    // =========== EXPERIENCIA LAB ============
    a.document.write(
      '<div style="display: flex; border-bottom: 1px solid black;">'
    );
    a.document.write('<div style="display: flex; margin-top:3%;">');
    a.document.write(
      '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.experiencialab+'</label>'
    );
    a.document.write("</div>");
    a.document.write("</div>");

    function capitalizarPrimeraLetra(cadena) {
      return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    }

    // Iteramos sobre cada objeto en el arreglo
    experiencias.forEach(experiencia => {
      // =========== Puesto ============
      a.document.write('<div style="display: flex; margin-top: 15px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.puesto+': <strong>'+experiencia.puesto+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Empresa ============
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.empresa+': <strong>'+experiencia.empresa+'</strong></label></div>');
      a.document.write("</div>");

      // =========== Tiempo ============
      // Convertir las fechas a objetos de fecha JavaScri
      
      const fechaInicio = new Date(experiencia.fechaIni);
      const fechaFin = new Date(experiencia.fechaFin);

      // Obtener el mes y el año actual
      const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
      const añoActual = new Date().getFullYear();

      // Extraer el mes y el año de cada fecha
      const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
      const añoInicio = fechaInicio.getFullYear();
      let mesFin, añoFin;

      // Verificar si la fecha fin es igual al mes y año actuales
      if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
          mesFin = languageTexts.actualidad;
          añoFin = "";
      } else {
          mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
          añoFin = fechaFin.getFullYear();
      }

      // Construir la cadena de tiempo formateada
      const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

      // Escribir en el documento
      a.document.write('<div style="display: flex; margin-top: 10px;">');
      a.document.write('<div style="flex:1; font-family: \'Arial\'; font-size: 18px;"><label>'+languageTexts.fecha+': <strong>'+tiempoFormateado+'</strong></label></div>');
      a.document.write("</div>");


      // =========== Logros ============
      a.document.write('<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px; margin-bottom: 5px; margin-top: 10px;"><label>'+languageTexts.logroet+':</label></div>');
      a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-bottom: 10px;">');
      a.document.write('<ul>'); // Inicio de la lista
      experiencia.actividades.forEach(function(actividad) {
        a.document.write(`<li>${actividad}</li>`); // Mostrar cada actividad como un elemento de lista
      });
      a.document.write('</ul>'); // Fin de la lista
      a.document.write("</div>");


       // =========== Funciones ============
       a.document.write('<div style="font-weight: bold; font-family: \'Arial\'; font-size: 18px; margin-bottom: 5px; margin-top: 10px;"><label>'+languageTexts.funcionet+':</label></div>');
       a.document.write('<div style="font-family: \'Arial\'; font-size: 18px; margin-bottom: 10px;">');
       a.document.write('<ul>'); // Inicio de la lista
       experiencia.funciones.forEach(function(funcion) {
         a.document.write(`<li>${funcion}</li>`); 
       });
       a.document.write('</ul>'); // Fin de la lista
       a.document.write("</div>");
      
      a.document.write("</div>");
    });


    // Verificar si hay cursos antes de escribir el contenido
    if (cursos.length > 0) {
      // =========== CURSOS ============
      a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
      );
      a.document.write('<div style="display: flex; margin-top:3%;">');
      a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.otrosEstudios+'</label>'
      );
      a.document.write("</div>");
      a.document.write("</div>");

      // Iteramos sobre cada objeto en el arreglo
      cursos.forEach(curso => {
          // =========== nombre ============
          a.document.write('<div style="display: flex; margin-top: 15px;">');
          a.document.write(`<div style="font-weight: bold; flex:6; font-family: \'Arial\'; font-size: 18px;"><label>${curso.nombre}</label></div>`);
          a.document.write("</div>");

          // =========== Tiempo ============
          // Convertir las fechas a objetos de fecha JavaScri
          
          const fechaInicio = new Date(curso.fechaIni);
          const fechaFin = new Date(curso.fechaFin);

          // Obtener el mes y el año actual
        const mesActual = capitalizarPrimeraLetra(new Date().toLocaleString('default', { month: 'long' }));
        const añoActual = new Date().getFullYear();

        // Extraer el mes y el año de cada fecha
        const mesInicio = capitalizarPrimeraLetra(fechaInicio.toLocaleString('default', { month: 'long' }));
        const añoInicio = fechaInicio.getFullYear();
        let mesFin, añoFin;

        // Verificar si la fecha fin es igual al mes y año actuales
        if (fechaFin.getMonth() === new Date().getMonth() && fechaFin.getFullYear() === añoActual) {
            mesFin = languageTexts.actualidad;
            añoFin = "";
        } else {
            mesFin = capitalizarPrimeraLetra(fechaFin.toLocaleString('default', { month: 'long' }));
            añoFin = fechaFin.getFullYear();
        }

          // Construir la cadena de tiempo formateada
          const tiempoFormateado = `${mesInicio} ${añoInicio} - ${mesFin} ${añoFin}`;

          // =========== organizacion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="font-weight: bold; flex:2; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.organizacion}: ${curso.organizacion}</label></div>`);
          a.document.write(`<div style="font-weight: bold; flex:8; font-family: \'Arial\'; font-size: 18px;"><label>${tiempoFormateado}</label></div>`);
          a.document.write("</div>");

          // =========== descripcion ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.descripcion}: ${curso.descripcion}</label></div>`);
          a.document.write("</div>");

          // =========== Entidad ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.entidad}: ${curso.entidad}</label></div>`);
          a.document.write("</div>");

                // =========== Horas ============
          a.document.write('<div style="display: flex; margin-top: 10px;">');
          a.document.write(`<div style="flex:10; font-family: \'Arial\'; font-size: 18px;"><label>${languageTexts.tiempodeEst}: ${curso.tiempoEstudio}</label></div>`);
          a.document.write("</div>");

          a.document.write("</div>");
      });
    }

    // =========== IDIOMAS ============
    a.document.write('<div style="display: flex; border-bottom: 1px solid black;">');
    a.document.write('<div style="display: flex; flex-direction: column; margin-top:3%;">');
    a.document.write('<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.idiomas+'</label>');
    a.document.write('</div>'); // Cerramos la última columna
    a.document.write("</div>");

    a.document.write('<div style="display: flex;">');

    const numIdiomas = idiomas.length;
    const numColumnasI = Math.ceil(numIdiomas / 8); // Calcula el número de columnas necesarias

    for (let i = 0; i < numColumnasI; i++) {
          // Abre una nueva columna
          a.document.write('<div style="flex: 1; margin-right: 20px;">');

          // Itera sobre los 8 conocimientos para esta columna o menos si no hay suficientes
          for (let j = i * 8; j < Math.min((i + 1) * 8, numIdiomas); j++) {
              const idioma = idiomas[j];
              // =========== Conocimiento ============
              a.document.write('<div style="display: flex; align-items: center; margin-top: 10px;">');
              a.document.write('<div style="font-family: Arial; font-size: 18px; margin-right: 10px;"><label>•</label></div>');
              a.document.write(`<div style="font-family: Arial; font-size: 18px;"><label>${idioma.idioma}</label></div>`);
              a.document.write('</div>');
          }
          
          // Si la columna no tiene 8 conocimientos, añade espacios en blanco
          const numIdiomasEnColumna = Math.min(numIdiomas - i * 8, 8);
          for (let k = numIdiomasEnColumna; k < 8; k++) {
              a.document.write('<div style="height: 22px;"></div>'); // Espacio en blanco para completar 8 elementos
          }
          
          // Cierra la columna actual
          a.document.write('</div>');
      }

      a.document.write('</div>');

      if (comentarios != "") {
        // =========== 9. COMENTARIOS ============
        a.document.write(
          '<div style="display: flex; border-bottom: 1px solid black;">'
        );
        a.document.write('<div style="display: flex; margin-top:3%;">');
        a.document.write(
          '<label style="font-weight: bold; font-family: \'Franklin Gothic Medium Cond\'; font-size: 20px; margin-top: 2%; ">'+languageTexts.comentariotTitulo+'</label>'
        );
        a.document.write("</div>");
        a.document.write("</div>");
      
        // =========== Nota ============
        a.document.write('<div style="display: flex; margin-top: 15px;">');
        a.document.write('<div style=" flex:10; font-family: \'Arial\'; font-size: 18px;"><label>' + languageTexts.comentarios + ': ' + comentarios + '</label></div>');
        a.document.write("</div>");
      }
   
    a.document.write("</body></html>");

    
    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }
  

/***/ }),

/***/ "EQYB":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../personal/personal.component */ "m2WJ");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/skills.component */ "fGbd");
/* harmony import */ var _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../conocimiento-total/conocimiento-total.component */ "DNzp");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../estudios/estudios.component */ "Co0O");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../experiencia/experiencia.component */ "+/Dj");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cursos/cursos.component */ "wxiI");
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../idiomas/idiomas.component */ "OPXo");
/* harmony import */ var _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comentarios/comentarios.component */ "+kO/");









class FormularioComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormularioComponent.ɵfac = function FormularioComponent_Factory(t) { return new (t || FormularioComponent)(); };
FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioComponent, selectors: [["app-formulario"]], decls: 16, vars: 0, consts: [[1, "formulario-container"]], template: function FormularioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-conocimiento-total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-estudios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-experiencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-idiomas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-comentarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_personal_personal_component__WEBPACK_IMPORTED_MODULE_1__["PersonalComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__["SkillsComponent"], _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_3__["ConocimientoTotalComponent"], _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_4__["EstudiosComponent"], _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_5__["ExperienciaComponent"], _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_6__["CursosComponent"], _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_7__["IdiomasComponent"], _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_8__["ComentariosComponent"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  \n  padding: 20px;\n  \n  margin-bottom: 20px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUF3QixvQkFBQTtFQUN4QixhQUFBO0VBQWUsOENBQUE7RUFDZixtQkFBQTtFQUFxQix3Q0FBQTtBQUl6QiIsImZpbGUiOiJmb3JtdWxhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIEFncmVnYSB1biBib3JkZSAqL1xyXG4gICAgcGFkZGluZzogMjBweDsgLyogQWdyZWdhIHVuIGVzcGFjaW8gYWxyZWRlZG9yIGRlbCBjb250ZW5pZG8gKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEFncmVnYSBlc3BhY2lvIGVuIGxhIHBhcnRlIGluZmVyaW9yICovXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "OPXo":
/*!**********************************************!*\
  !*** ./src/app/idiomas/idiomas.component.ts ***!
  \**********************************************/
/*! exports provided: IdiomasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdiomasComponent", function() { return IdiomasComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function IdiomasComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function IdiomasComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.languageTexts.idioma, " ");
} }
function IdiomasComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r7.idioma, " ");
} }
function IdiomasComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.languageTexts.eliminar, " ");
} }
function IdiomasComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdiomasComponent_td_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const element_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.eliminarElemento(element_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function IdiomasComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
} }
function IdiomasComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
class IdiomasComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.idioma = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['idioma', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        console.log('displayedColumns:', this.displayedColumns);
        console.log('dataSource.data:', this.dataSource.data);
    }
    guardarIdioma() {
        if (this.idioma) {
            const nuevaExperiencia = {
                idioma: this.idioma
            };
            console.log('Nuevo elemento a agregar:', nuevaExperiencia);
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            console.log('dataSource.data después de agregar:', this.dataSource.data);
            this.dataFormularioService.guardarIdioma(this.dataSource.data);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.idioma = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarIdioma(this.dataSource.data);
    }
}
IdiomasComponent.ɵfac = function IdiomasComponent_Factory(t) { return new (t || IdiomasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_2__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
IdiomasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IdiomasComponent, selectors: [["app-idiomas"]], decls: 23, vars: 8, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "idioma", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "idioma"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function IdiomasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "IDIOMAS / LANGUAGES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function IdiomasComponent_Template_input_ngModelChange_9_listener($event) { return ctx.idioma = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, IdiomasComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IdiomasComponent_Template_button_click_11_listener() { return ctx.guardarIdioma(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, IdiomasComponent_th_16_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, IdiomasComponent_td_17_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IdiomasComponent_th_19_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, IdiomasComponent_td_20_Template, 4, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, IdiomasComponent_tr_21_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, IdiomasComponent_tr_22_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.selectidioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.idioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.guardarIdioma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGlkaW9tYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdFO0VBQ0UsNEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFLDZCQUFBOztBQUNGO0VBQ0Usb0NBQUE7RUFBc0MsNkJBQUE7RUFDdEMsdUJBQUE7RUFBeUIsc0NBQUE7QUFFM0I7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoiaWRpb21hcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybXVsYXJpby1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2x1bW5hIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhbXBvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzQ0VGRiAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGUgZm9uZG8gKi9cclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbn1cclxuXHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./personal/personal.component */ "m2WJ");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./experiencia/experiencia.component */ "+/Dj");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./estudios/estudios.component */ "Co0O");
/* harmony import */ var _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./conocimientos/conocimientos.component */ "C3ZT");
/* harmony import */ var _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cursos/cursos.component */ "wxiI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./idiomas/idiomas.component */ "OPXo");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./comentarios/comentarios.component */ "+kO/");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./skills/skills.component */ "fGbd");
/* harmony import */ var _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./conocimiento-total/conocimiento-total.component */ "DNzp");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ "fXoL");

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
        _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_11__["FormularioComponent"],
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__["PersonalComponent"],
        _experiencia_experiencia_component__WEBPACK_IMPORTED_MODULE_15__["ExperienciaComponent"],
        _estudios_estudios_component__WEBPACK_IMPORTED_MODULE_20__["EstudiosComponent"],
        _conocimientos_conocimientos_component__WEBPACK_IMPORTED_MODULE_21__["ConocimientosComponent"],
        _cursos_cursos_component__WEBPACK_IMPORTED_MODULE_22__["CursosComponent"],
        _idiomas_idiomas_component__WEBPACK_IMPORTED_MODULE_25__["IdiomasComponent"],
        _comentarios_comentarios_component__WEBPACK_IMPORTED_MODULE_27__["ComentariosComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_29__["SkillsComponent"],
        _conocimiento_total_conocimiento_total_component__WEBPACK_IMPORTED_MODULE_30__["ConocimientoTotalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"]] }); })();


/***/ }),

/***/ "fGbd":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function SkillsComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function SkillsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SkillsComponent_th_19_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r9.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function SkillsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_td_20_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function SkillsComponent_td_20_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const row_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return $event ? ctx_r13.selection.toggle(row_r11) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r2.selection.isSelected(row_r11))("aria-label", ctx_r2.checkboxLabel(row_r11));
} }
function SkillsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.languageTexts.skill, " ");
} }
function SkillsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.skill, " ");
} }
function SkillsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.languageTexts.eliminar, " ");
} }
function SkillsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_td_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const element_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.eliminarElemento(element_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SkillsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
function SkillsComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
} }
class SkillsComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([
        // Agrega más elementos si es necesario
        ]);
        this.skill = '';
        this.selectedLanguage = 'es';
        this.displayedColumns = ['select', 'skill', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        console.log('displayedColumns:', this.displayedColumns);
        console.log('dataSource.data:', this.dataSource.data);
    }
    guardarSkill() {
        if (this.skill) {
            const nuevaExperiencia = {
                skill: this.skill,
                position: (this.dataSource.data.length + 1)
            };
            console.log('Nuevo elemento a agregar:', nuevaExperiencia);
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.selection.select(nuevaExperiencia);
            //this.dataFormularioService.guardarConocimientos(this.dataSource.data);
            this.dataFormularioService.guardarSkills(this.selection.selected);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.skill = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.selection.deselect(elemento); // Deselecciona el elemento eliminado
        this.dataFormularioService.guardarSkills(this.dataSource.data);
    }
    // Para select en tabla
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        this.dataFormularioService.guardarSkills(this.selection.selected);
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        this.dataFormularioService.guardarSkills(this.selection.selected);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        console.log("this.selection", this.selection.selected);
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_3__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 29, vars: 9, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "skill", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "skill"], ["matColumnDef", "eliminar"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "HABILIDADES BLANDAS / SOFT SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SkillsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.skill = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SkillsComponent_mat_error_13_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_Template_button_click_14_listener() { return ctx.guardarSkill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SkillsComponent_th_19_Template, 2, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SkillsComponent_td_20_Template, 2, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SkillsComponent_th_22_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SkillsComponent_td_23_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SkillsComponent_th_25_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SkillsComponent_td_26_Template, 4, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SkillsComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SkillsComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.indicaSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.skill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.guardarSkill);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBSjs7QUFHRSw2QkFBQTs7QUFDQTtFQUNFLG9DQUFBO0VBQXNDLDZCQUFBO0VBQ3RDLHVCQUFBO0VBQXlCLHNDQUFBO0FBRTdCOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFDTjs7QUFFSTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFFSTtFQUNFLFdBQUE7QUFDTjs7QUFFSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDTiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM0NFRkYgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvICovXHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDsgLyogQ2FtYmlhIGVsIGNvbG9yIGRlbCB0ZXh0byBhIG5lZ3JvICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5maWxhIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb2x1bW5hIHtcclxuICAgICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYW1wbyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function NavigationComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavigationComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NavigationComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", language_r5.viewValue, " ");
} }
const _c0 = function () { return ["/formulario"]; };
class NavigationComponent {
    constructor(breakpointObserver, languageService) {
        this.breakpointObserver = breakpointObserver;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.languages = [
            { value: 'en', viewValue: 'English' },
            { value: 'es', viewValue: 'Español' }
            // Agrega más idiomas si es necesario
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
        this.selectedLanguage = 'es'; // Establece el idioma predeterminado
        this.updateLanguageTexts();
    }
    updateLanguageTexts() {
        this.languageService.updateLanguageTexts(this.selectedLanguage);
        this.languageTexts = this.languageService.languageTextsArray;
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 25, vars: 18, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", 3, "routerLink"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["src", "./assets/images/logoT2.jpg", "alt", "Logo Tesis", 2, "max-width", "100px", "height", "auto", "margin-right", "10px"], [1, "spacer"], [1, "small-select"], [1, "custom-select", 3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], [3, "value"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-toolbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NavigationComponent_button_13_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function NavigationComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.selectedLanguage = $event; })("selectionChange", function NavigationComponent_Template_mat_select_selectionChange_22_listener() { return ctx.updateLanguageTexts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, NavigationComponent_mat_option_23_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 11, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 9, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.formulario);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 15, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.languageTexts.selectLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["@charset \"UTF-8\";\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #33CEFF;\n  \n}\n.mat-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: black;\n  \n}\n  .mat-select-value {\n  color: black !important;\n}\n  .mat-form-field-label {\n  color: black !important;\n}\n.custom-select[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: black !important;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n  \n}\n.small-select[_ngcontent-%COMP%] {\n  width: 150px;\n  \n  font-size: 12px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsWUFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0FBRUY7QUFDQTtFQUNFLG1CQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsU0FBQTtBQUc3QjtBQURBO0VBQ0UsWUFBQTtFQUFjLDBCQUFBO0FBS2hCO0FBSEE7RUFDRSx1QkFBQTtBQU1GO0FBSEE7RUFDRSx1QkFBQTtBQU1GO0FBSkE7RUFDRSx1QkFBQTtBQU9GO0FBSkE7RUFDRSxPQUFBO0VBQVMscUVBQUE7QUFRWDtBQUxBO0VBQ0UsWUFBQTtFQUFjLHdDQUFBO0VBQ2QsZUFBQTtFQUFpQixtREFBQTtBQVVuQiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGO1xuICAvKiBSb2pvICovXG59XG5cbi5tYXQtdG9vbGJhciBzcGFuIHtcbiAgY29sb3I6IGJsYWNrO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gbmVncm8gKi9cbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1zZWxlY3QgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG4gIC8qIEVzdG8gY3JlYSB1biBlc3BhY2lvIGZsZXhpYmxlIGVudHJlIFwiQ1ZcIiB5IGVsIHNlbGVjdG9yIGRlIGlkaW9tYSAqL1xufVxuXG4uc21hbGwtc2VsZWN0IHtcbiAgd2lkdGg6IDE1MHB4O1xuICAvKiBhanVzdGEgZWwgYW5jaG8gc2Vnw7puIHNlYSBuZWNlc2FyaW8gKi9cbiAgZm9udC1zaXplOiAxMnB4O1xuICAvKiBhanVzdGEgZWwgdGFtYcOxbyBkZSBmdWVudGUgc2Vnw7puIHNlYSBuZWNlc2FyaW8gKi9cbn0iXX0= */"] });


/***/ }),

/***/ "kLsA":
/*!********************************************!*\
  !*** ./src/app/data-formulario.service.ts ***!
  \********************************************/
/*! exports provided: DataFormularioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFormularioService", function() { return DataFormularioService; });
/* harmony import */ var _assets_js_print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/print.js */ "Dvxi");
/* harmony import */ var _assets_js_print2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/print2.js */ "3Hxo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.service */ "y91y");
// @ts-ignore

// @ts-ignore



class DataFormularioService {
    constructor(languageService) {
        this.languageService = languageService;
        this.datosKey = 'datosFormulario';
        this.nombre = '';
        this.comentarios = '';
        this.apellidos = '';
        this.nacionalidad = '';
        this.edad = 18;
        this.ciudad = '';
        this.pais = '';
        this.estudios = [];
        this.conocimientos = [];
        this.skills = [];
        this.experiencias = [];
        this.cursos = [];
        this.idiomas = [];
        // Variables para indicar si los arreglos tienen elementos
        this.tieneEstudios = false;
        this.tieneConocimientos = false;
        this.tieneExperiencias = false;
        this.tieneCursos = false;
        this.tieneIdiomas = false;
        this.tienePersonal = false;
        this.tieneSkills = false;
        this.selectedLanguage = 'es';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
        const datosGuardados = localStorage.getItem(this.datosKey);
        if (datosGuardados) {
            const datos = JSON.parse(datosGuardados);
            // Asignar los datos recuperados a las propiedades del servicio
            this.nombre = datos.nombre;
            this.apellidos = datos.apellidos;
            this.nacionalidad = datos.nacionalidad;
            this.edad = datos.edad;
            this.ciudad = datos.ciudad;
            this.pais = datos.pais;
            this.estudios = datos.estudios;
            this.conocimientos = datos.conocimientos;
            this.experiencias = datos.experiencias;
            this.cursos = datos.cursos;
            this.idiomas = datos.idiomas;
            this.tieneEstudios = datos.tieneEstudios;
            this.tieneConocimientos = datos.tieneConocimientos;
            this.tieneExperiencias = datos.tieneExperiencias;
            this.tieneCursos = datos.tieneCursos;
            this.tieneIdiomas = datos.tieneIdiomas;
            this.tienePersonal = datos.tienePersonal;
        }
    }
    guardarDatos(comentarios, estilo) {
        this.comentarios = comentarios;
        this.actualizarEstadoArreglos();
        if (estilo === "Diseño de una columna") {
            _assets_js_print_js__WEBPACK_IMPORTED_MODULE_0__["printDiv2"](this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos, this.experiencias, this.cursos, this.idiomas, this.languageTexts, this.comentarios, this.skills);
        }
        else {
            _assets_js_print2_js__WEBPACK_IMPORTED_MODULE_1__["printDiv2"](this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais, this.estudios, this.conocimientos, this.experiencias, this.cursos, this.idiomas, this.languageTexts);
        }
    }
    guardarPersonal(nombre, apellidos, nacionalidad, edad, ciudad, pais) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacionalidad = nacionalidad;
        this.edad = edad;
        this.ciudad = ciudad;
        this.pais = pais;
        this.actualizarEstadoArreglos();
    }
    guardarEstudios(estudios) {
        this.estudios = estudios;
        this.actualizarEstadoArreglos();
    }
    guardarConocimientos(conocimientos) {
        // Recorrer el arreglo recibido
        conocimientos.forEach((conocimiento) => {
            // Comprobar si el conocimiento no está ya en this.conocimientos
            if (!this.conocimientos.some((elem) => elem.conocimiento === conocimiento.conocimiento)) {
                // Si no está, agregarlo a this.conocimientos
                this.conocimientos.push(conocimiento);
            }
        });
        // Actualizar el estado de los arreglos
        this.actualizarEstadoArreglos();
    }
    eliminarConocimientos(conocimientos) {
        this.conocimientos = this.conocimientos.filter(conocimiento => !conocimientos.some(elem => elem.conocimiento === conocimiento.conocimiento));
        // Actualizar el estado de los arreglos
        this.actualizarEstadoArreglos();
    }
    guardarSkills(skill) {
        this.skills = skill;
        this.actualizarEstadoArreglos();
    }
    guardarIdioma(idiomas) {
        this.idiomas = idiomas;
        this.actualizarEstadoArreglos();
    }
    guardarExperiencias(experiencias) {
        this.experiencias = experiencias;
        this.actualizarEstadoArreglos();
    }
    guardarCursos(cursos) {
        this.cursos = cursos;
        this.actualizarEstadoArreglos();
    }
    actualizarEstadoArreglos() {
        this.tieneEstudios = this.estudios.length > 0;
        this.tieneConocimientos = this.conocimientos.length > 0;
        this.tieneExperiencias = this.experiencias.length > 0;
        this.tieneCursos = this.cursos.length > 0;
        this.tieneIdiomas = this.idiomas.length > 0;
        this.tieneSkills = this.skills.length > 0;
        if (this.nombre != "" && this.apellidos != "" && this.nacionalidad != "" && this.ciudad != "" && this.pais != "") {
            this.tienePersonal = true;
        }
        else {
            this.tienePersonal = false;
        }
    }
}
DataFormularioService.ɵfac = function DataFormularioService_Factory(t) { return new (t || DataFormularioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
DataFormularioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DataFormularioService, factory: DataFormularioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m2WJ":
/*!************************************************!*\
  !*** ./src/app/personal/personal.component.ts ***!
  \************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function PersonalComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.languageTexts.obligatorio);
} }
function PersonalComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.languageTexts.obligatorio);
} }
class PersonalComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.selectedLanguage = 'es';
        this.nombre = '';
        this.apellidos = '';
        this.nacionalidad = '';
        this.edad = 0;
        this.ciudad = '';
        this.pais = '';
        this.plantillaHTML = '';
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    handleBlurEvent() {
        console.log("LLEGA AQUI");
        this.ngOnDestroy();
        this.dataFormularioService.guardarPersonal(this.nombre, this.apellidos, this.nacionalidad, this.edad, this.ciudad, this.pais);
    }
    ngOnDestroy() {
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_1__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 43, vars: 24, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario", 3, "focusout"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "required", "", "name", "nombre", 3, "placeholder", "ngModel", "ngModelChange", "input"], [4, "ngIf"], ["matInput", "", "required", "", "name", "apellidos", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "required", "", "name", "nacionalidad", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "type", "number", "min", "18", "required", "", "name", "edad", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "required", "", "name", "ciudad", 3, "placeholder", "ngModel", "ngModelChange", "input"], ["matInput", "", "required", "", "name", "pais", 3, "placeholder", "ngModel", "ngModelChange", "input"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DATOS PERSONALES / PERSONAL DATA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function PersonalComponent_Template_form_focusout_3_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_9_listener($event) { return ctx.nombre = $event; })("input", function PersonalComponent_Template_input_input_9_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PersonalComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_15_listener($event) { return ctx.apellidos = $event; })("input", function PersonalComponent_Template_input_input_15_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PersonalComponent_mat_error_16_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_22_listener($event) { return ctx.nacionalidad = $event; })("input", function PersonalComponent_Template_input_input_22_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PersonalComponent_mat_error_23_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_28_listener($event) { return ctx.edad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PersonalComponent_mat_error_29_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_35_listener($event) { return ctx.ciudad = $event; })("input", function PersonalComponent_Template_input_input_35_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PersonalComponent_mat_error_36_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PersonalComponent_Template_input_ngModelChange_41_listener($event) { return ctx.pais = $event; })("input", function PersonalComponent_Template_input_input_41_listener() { return ctx.handleBlurEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, PersonalComponent_mat_error_42_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nacionalidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ciudad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.languageTexts.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pais);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pais);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: ["@charset \"UTF-8\";\n.formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.formulario[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.imprimir[_ngcontent-%COMP%] {\n  display: none;\n  \n}\n@media print {\n  .imprimir[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  body[_ngcontent-%COMP%] {\n    font-family: Arial, sans-serif;\n    font-size: 12px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFFRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSxXQUFBO0VBQWEsdURBQUE7QUFHZjtBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUdGO0FBQUE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7QUFHRjtBQUFBO0VBQ0Usd0NBQUE7QUFHRjtBQUFBO0VBQ0UsYUFBQTtFQUFlLGlEQUFBO0FBSWpCO0FBQUE7RUFDRTtJQUNFLGNBQUE7RUFHRjs7RUFEQSwwQ0FBQTtFQUNBO0lBQ0UsOEJBQUE7SUFDQSxlQUFBO0lBQ0EsK0JBQUE7RUFJRjtBQUNGIiwiZmlsZSI6InBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm11bGFyaW8ge1xuICB3aWR0aDogMTAwJTtcbiAgLyogQWp1c3RhciBlbCBmb3JtdWxhcmlvIHBhcmEgcXVlIG9jdXBlIHRvZG8gZWwgYW5jaG8gKi9cbn1cblxuLmZpbGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbHVtbmEge1xuICBmbGV4LWJhc2lzOiBjYWxjKDUwJSAtIDEwcHgpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2FtcG8ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbXByaW1pciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIE9jdWx0YSBlbCBlbGVtZW50byBlbiBsYSB2aXN0YSBkZWwgbmF2ZWdhZG9yICovXG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5pbXByaW1pciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAvKiBFc3RpbG9zIGVzcGVjw61maWNvcyBwYXJhIGxhIGltcHJlc2nDs24gKi9cbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAvKiBPdHJvcyBlc3RpbG9zIGRlIGltcHJlc2nDs24gKi9cbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulario/formulario.component */ "EQYB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__["FormularioComponent"] },
    { path: 'formulario', component: _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_1__["FormularioComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wxiI":
/*!********************************************!*\
  !*** ./src/app/cursos/cursos.component.ts ***!
  \********************************************/
/*! exports provided: CursosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosComponent", function() { return CursosComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_formulario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-formulario.service */ "kLsA");
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language.service */ "y91y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");














function CursosComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.languageTexts.obligatorio);
} }
function CursosComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.languageTexts.obligatorio);
} }
function CursosComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.languageTexts.obligatorio);
} }
function CursosComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.languageTexts.obligatorio);
} }
function CursosComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.languageTexts.obligatorio);
} }
function CursosComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.languageTexts.nombre, " ");
} }
function CursosComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r25.nombre, " ");
} }
function CursosComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.languageTexts.organizacion, " ");
} }
function CursosComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r26.organizacion, " ");
} }
function CursosComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r11.languageTexts.fechaInicio, " ");
} }
function CursosComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r27.fechaIni, "dd-MM-yyyy"), " ");
} }
function CursosComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.languageTexts.fechaFin, " ");
} }
function CursosComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r28.fechaFin, "dd-MM-yyyy"), " ");
} }
function CursosComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.languageTexts.descripcion, " ");
} }
function CursosComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r29.descripcion, " ");
} }
function CursosComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.languageTexts.entidadet, " ");
} }
function CursosComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r30.entidad, " ");
} }
function CursosComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r19.languageTexts.tiempodeEst, " ");
} }
function CursosComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r31.tiempoEstudio, " ");
} }
function CursosComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r21.languageTexts.eliminar, " ");
} }
function CursosComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CursosComponent_td_80_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const element_r32 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.eliminarElemento(element_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CursosComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
} }
function CursosComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 50);
} }
class CursosComponent {
    constructor(dataFormularioService, languageService) {
        this.dataFormularioService = dataFormularioService;
        this.languageService = languageService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"]([]);
        this.nombre = '';
        this.organizacion = '';
        this.fechaIni = null;
        this.fechaFin = null;
        this.descripcion = '';
        this.entidad = '';
        this.tiempoEstudio = '';
        this.tiempoEspecifica = '';
        this.tiempoNum = 1;
        this.selectedLanguage = 'es';
        this.fechaActual = new Date();
        this.displayedColumns = ['nombre', 'organizacion', 'fechaIni', 'fechaFin', 'descripcion', 'entidad', 'tiempoEstudio', 'eliminar'];
        this.selectedLanguage = this.languageService.language; // Establece el idioma predeterminado
        this.languageSubscription = this.languageService.languageTexts$.subscribe(languageTexts => {
            this.languageTexts = languageTexts;
        });
    }
    ngOnInit() {
        console.log('displayedColumns:', this.displayedColumns);
        console.log('dataSource.data:', this.dataSource.data);
    }
    guardarCurso() {
        if (this.nombre && this.organizacion && this.fechaIni && this.fechaFin && this.descripcion && this.entidad && this.tiempoEspecifica && this.tiempoNum) {
            const nuevaExperiencia = {
                nombre: this.nombre,
                organizacion: this.organizacion,
                fechaIni: this.fechaIni,
                fechaFin: this.fechaFin,
                descripcion: this.descripcion,
                entidad: this.entidad,
                tiempoEstudio: this.tiempoNum + ' ' + this.tiempoEspecifica,
            };
            console.log('Nuevo elemento a agregar:', nuevaExperiencia);
            this.dataSource.data.push(nuevaExperiencia);
            this.dataSource.data = [...this.dataSource.data];
            this.dataFormularioService.guardarCursos(this.dataSource.data);
            this.resetFormulario();
        }
        else {
            alert('Por favor completa todos los campos.');
        }
    }
    resetFormulario() {
        this.nombre = '';
        this.organizacion = '';
        this.fechaIni = null;
        this.fechaFin = null;
        this.descripcion = '';
        this.tiempoEstudio = '';
        this.entidad = '';
    }
    eliminarElemento(elemento) {
        this.dataSource.data = this.dataSource.data.filter(item => item !== elemento);
        this.dataFormularioService.guardarCursos(this.dataSource.data);
    }
}
CursosComponent.ɵfac = function CursosComponent_Factory(t) { return new (t || CursosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_formulario_service__WEBPACK_IMPORTED_MODULE_2__["DataFormularioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"])); };
CursosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CursosComponent, selectors: [["app-cursos"]], decls: 83, vars: 37, consts: [[1, "formulario-container"], [1, "titulo"], [1, "formulario"], [1, "fila"], [1, "columna"], [1, "campo"], ["matInput", "", "name", "nombre", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [4, "ngIf"], ["matInput", "", "name", "organizacion", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "name", "fechaIni", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["pickerInicio", ""], ["matInput", "", "name", "fechaFin", 3, "matDatepicker", "placeholder", "ngModel", "ngModelChange"], ["pickerFin", ""], ["matInput", "", "name", "descripcion", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "name", "entidad", "required", "", 3, "placeholder", "ngModel", "ngModelChange"], [2, "margin-right", "10px"], ["name", "tiempoEspecifica", 3, "placeholder", "ngModel", "ngModelChange"], ["value", "horas"], ["value", "dias"], ["value", "meses"], ["value", "a\u00F1os"], ["matInput", "", "type", "number", "min", "1", "required", "", "name", "tiempoNum", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", 1, "boton", 3, "click"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "nombre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "organizacion"], ["matColumnDef", "fechaIni"], ["mat-header-cell", "", "style", "width: 100px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 100px;", 4, "matCellDef"], ["matColumnDef", "fechaFin"], ["matColumnDef", "descripcion"], ["matColumnDef", "entidad"], ["matColumnDef", "tiempoEstudio"], ["matColumnDef", "eliminar"], ["mat-header-cell", "", "style", "width: 40px;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 40px;", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 2, "width", "100px"], ["mat-cell", "", 2, "width", "100px"], ["mat-header-cell", "", 2, "width", "40px"], ["mat-cell", "", 2, "width", "40px"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CursosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_9_listener($event) { return ctx.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CursosComponent_mat_error_10_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_15_listener($event) { return ctx.organizacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CursosComponent_mat_error_16_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_19_listener($event) { return ctx.fechaIni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_25_listener($event) { return ctx.fechaFin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-datepicker-toggle", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mat-datepicker", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_textarea_ngModelChange_31_listener($event) { return ctx.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CursosComponent_mat_error_32_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_37_listener($event) { return ctx.entidad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CursosComponent_mat_error_38_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_mat_select_ngModelChange_41_listener($event) { return ctx.tiempoEspecifica = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CursosComponent_Template_input_ngModelChange_51_listener($event) { return ctx.tiempoNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CursosComponent_mat_error_52_Template, 2, 1, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CursosComponent_Template_button_click_53_listener() { return ctx.guardarCurso(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](57, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, CursosComponent_th_58_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CursosComponent_td_59_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](60, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, CursosComponent_th_61_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, CursosComponent_td_62_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](63, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CursosComponent_th_64_Template, 2, 1, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CursosComponent_td_65_Template, 3, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](66, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, CursosComponent_th_67_Template, 2, 1, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, CursosComponent_td_68_Template, 3, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](69, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CursosComponent_th_70_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, CursosComponent_td_71_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](72, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, CursosComponent_th_73_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, CursosComponent_td_74_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](75, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, CursosComponent_th_76_Template, 2, 1, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, CursosComponent_td_77_Template, 2, 1, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](78, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, CursosComponent_th_79_Template, 2, 1, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, CursosComponent_td_80_Template, 4, 0, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CursosComponent_tr_81_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, CursosComponent_tr_82_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.tiposcurso);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.organizacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaIniU);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.fechaIni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.fechaFinU);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r3)("ngModel", ctx.fechaFin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.entidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.entidadet);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.entidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.tiempodeEst);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tiempoEspecifica);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.horas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.dias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.meses);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.languageTexts.cantidad);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.tiempoNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tiempoNum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.languageTexts.guardarOtro);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".formulario-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #33CEFF !important;\n  \n  color: black !important;\n  \n}\n\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.fila[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.columna[_ngcontent-%COMP%] {\n  flex-basis: calc(50% - 10px);\n  margin-bottom: 20px;\n}\n\n.campo[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGN1cnNvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7QUFBRjs7QUFFQSw2QkFBQTs7QUFDQTtFQUNFLG9DQUFBO0VBQXNDLDZCQUFBO0VBQ3RDLHVCQUFBO0VBQXlCLHNDQUFBO0FBRzNCOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFFSjs7QUFDRTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJjdXJzb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm11bGFyaW8tY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNDRUZGICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyAqL1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvKiBDYW1iaWEgZWwgY29sb3IgZGVsIHRleHRvIGEgbmVncm8gKi9cclxufVxyXG5cclxuXHJcbi50aXR1bG8ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLmNvbHVtbmEge1xyXG4gICAgZmxleC1iYXNpczogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FtcG8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9Il19 */"] });


/***/ }),

/***/ "y91y":
/*!*************************************!*\
  !*** ./src/app/language.service.ts ***!
  \*************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LanguageService {
    constructor() {
        this.language = '';
        this.languageTexts = {
            en: {
                selectLanguage: 'Select language',
                menu: 'Menu',
                nombre: 'Name',
                apellidos: 'Last names',
                nacionalidad: 'Nationality',
                edad: 'Age',
                ciudad: 'Current city of residence',
                pais: 'Current country of residence',
                obligatorio: 'This field is required',
                actual: 'Current',
                universidad: 'University',
                carrera: 'Degree',
                fechaIniU: 'Select start date',
                fechaFinU: 'Select end date',
                fechaActual: 'Select date',
                puesto: 'Position',
                empresa: 'Enterprise',
                actividades: 'Activities',
                conocimiento: 'Knowledge',
                logros: 'List three (3) major accomplishments',
                funciones: 'Indicate three (3) main functions',
                formulario: 'Form',
                generarDoc: 'Generate Document',
                guardarCono: 'Save Knowledge',
                guardarEstu: 'Save University',
                guardarExp: 'Save Work Experience',
                guardarOtro: 'Save another study',
                guardarIdioma: 'Save Language',
                eliminar: 'Delete',
                fechaInicio: 'Start date',
                fechaFin: 'End date',
                organizacion: 'Organization',
                tiempodeEst: 'Study Time',
                selectidioma: 'Enter the Language',
                idioma: 'Language',
                logroet: 'Accomplishments',
                funcionet: 'Functions',
                descripcion: 'Description',
                entidad: 'Enter entity where course',
                entidadet: 'Entity',
                cantidad: 'Amount of time',
                horas: 'Hours',
                meses: 'Months',
                dias: 'Days',
                year: 'Years',
                apellidonombre: 'Surname and first name',
                datospersonales: 'PERSONAL DATA',
                estudioscursados: 'STUDIES COMPLETED',
                generacion: 'Generation',
                actualidad: 'Currently',
                conocimientotec: 'TECHNICIAL KNOWHOW',
                experiencialab: 'WORK EXPERIENCE',
                fecha: 'Date',
                otrosEstudios: 'OTHER STUDIES',
                comentarios: 'Comments',
                tiposcurso: 'COURSES, DIPLOMA, MASTERS, DOCTORATE, CERTIFICATION',
                estilos: 'Document Design',
                estilo1: 'A column',
                estilo2: 'Two columns',
                idiomas: 'LANGUAGES',
                comentariotTitulo: 'NOTES OR COMMENTS',
                indicaConocimiento: 'Select the knowledge in the table (In the box) or enter a new knowledge (Type in the field)',
                residenciaactual: 'Current residence',
                indicaSkill: 'Select the skill in the table (In the box) or enter a new skill (Type in the field)',
                skill: 'Soft skill',
                guardarSkill: 'Save Soft Skill',
                skillEt: 'SOFT SKILLS',
                lenguajeProgramacion: 'Language of programming',
                conocimiento5: 'Vision Systems',
                conocimiento6: 'Drives / Protections',
                conocimiento7: 'Reading and Designing Electrical Drawings',
            },
            es: {
                selectLanguage: 'Seleccionar idioma',
                menu: 'Menú',
                nombre: 'Nombre',
                apellidos: 'Apellidos',
                nacionalidad: 'Nacionalidad',
                edad: 'Edad',
                ciudad: 'Ciudad de residencia actual',
                pais: 'País de residencia actual',
                obligatorio: 'El campo es obligatorio',
                actual: 'Actual',
                universidad: 'Universidad',
                carrera: 'Carrera',
                fechaIniU: 'Seleccione fecha de inicio',
                fechaFinU: 'Seleccione fecha de fin',
                fechaActual: 'Seleccione fecha',
                puesto: 'Puesto',
                empresa: 'Empresa',
                actividades: 'Actividades',
                conocimiento: 'Conocimiento',
                logros: 'Indique tres (3) principales logros',
                funciones: 'Indique tres (3) principales funciones',
                formulario: 'Formulario',
                generarDoc: 'Generar documento',
                guardarCono: 'Guardar Conocimiento',
                guardarEstu: 'Guardar Estudio',
                guardarExp: 'Guardar Experiencia Laboral',
                guardarOtro: 'Guardar otro estudio',
                guardarIdioma: 'Guardar idioma',
                eliminar: 'Eliminar',
                fechaInicio: 'Fecha de inicio',
                fechaFin: 'Fecha de fin',
                organizacion: 'Organización',
                tiempodeEst: 'Tiempo de estudios',
                selectidioma: 'Ingrese el idioma',
                idioma: 'Idioma',
                logroet: 'Logros',
                funcionet: 'Funciones',
                descripcion: 'Descripción',
                entidad: 'Ingrese entidad en donde curso',
                entidadet: 'Entidad',
                cantidad: 'Cantidad de tiempo (Aproximado)',
                horas: 'Horas',
                meses: 'Meses',
                dias: 'Días',
                year: 'Años',
                apellidonombre: 'Apellido y nombre',
                datospersonales: 'DATOS PERSONALES',
                estudioscursados: 'ESTUDIOS CURSADOS',
                generacion: 'Generación',
                actualidad: 'Actualmente',
                conocimientotec: 'CONOCIMIENTO TECNICO',
                experiencialab: 'EXPERIENCIA LABORAL',
                fecha: 'Fecha',
                otrosEstudios: 'OTROS ESTUDIOS',
                comentarios: 'Comentarios',
                tiposcurso: 'CURSOS, DIPLOMADO, MAESTRIA, DOCTORADO, CERTIFICACIÓN',
                estilos: 'Diseño del documento',
                estilo1: 'Una columna',
                estilo2: 'Dos columnas',
                idiomas: 'IDIOMAS',
                comentariotTitulo: 'NOTAS O COMENTARIOS',
                indicaConocimiento: 'Seleccione el conocimiento en la tabla (En la casilla) o ingrese un nuevo conocimiento (Escriba en el campo)',
                residenciaactual: 'Residencia actual',
                indicaSkill: 'Seleccione la habilidad en la tabla (En la casilla) o ingrese una nueva habilidad (Escriba en el campo)',
                skill: 'Habilidad blanda',
                guardarSkill: 'Guardar habilidad blanda',
                skillEt: 'HABILIDADES BLANDAS',
                lenguajeProgramacion: 'Lenguaje de programación',
                conocimiento5: 'Sistemas de vision',
                conocimiento6: 'Accionamientos / Protecciones',
                conocimiento7: 'Lectura y diseños de Planos Electricos',
            }
            // Agrega más idiomas según sea necesario
        };
        this._languageTextsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.languageTexts.es);
        this.languageTexts$ = this._languageTextsSubject.asObservable();
    }
    getLanguageTexts(language) {
        this.language = language;
        return this.languageTexts[language] || this.languageTexts['en']; // Fallback al inglés si no se encuentra el idioma
    }
    updateLanguageTexts(language) {
        this.languageTextsArray = this.getLanguageTexts(language);
        this._languageTextsSubject.next(this.languageTextsArray);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map