webpackJsonp([7],{1061:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),forms_1=__webpack_require__(79),validators_1=__webpack_require__(526),Register=function(){function Register(fb){this.submitted=!1,this.form=fb.group({name:["",forms_1.Validators.compose([forms_1.Validators.required,forms_1.Validators.minLength(4)])],email:["",forms_1.Validators.compose([forms_1.Validators.required,validators_1.EmailValidator.validate])],passwords:fb.group({password:["",forms_1.Validators.compose([forms_1.Validators.required,forms_1.Validators.minLength(4)])],repeatPassword:["",forms_1.Validators.compose([forms_1.Validators.required,forms_1.Validators.minLength(4)])]},{validator:validators_1.EqualPasswordsValidator.validate("password","repeatPassword")})}),this.name=this.form.controls.name,this.email=this.form.controls.email,this.passwords=this.form.controls.passwords,this.password=this.passwords.controls.password,this.repeatPassword=this.passwords.controls.repeatPassword}return Register.prototype.onSubmit=function(values){this.submitted=!0,this.form.valid},Register=__decorate([core_1.Component({selector:"register",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1205)],template:__webpack_require__(1240)}),__metadata("design:paramtypes",["function"==typeof(_a="undefined"!=typeof forms_1.FormBuilder&&forms_1.FormBuilder)&&_a||Object])],Register);var _a}();exports.Register=Register},1149:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(58),register_component_1=__webpack_require__(1061),routes=[{path:"",component:register_component_1.Register}];exports.routing=router_1.RouterModule.forChild(routes)},1205:function(module,exports){module.exports='.auth-main {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00abff; }\n    .auth-block a:hover {\n      color: #0091d9; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: "";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n'},1240:function(module,exports){module.exports='<div class="auth-main">\n  <div class="auth-block">\n    <h1>Sign up to ng2-admin</h1>\n    <a routerLink="/login" class="auth-link">Already have an ng2-admin account? Sign in!</a>\n\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal">\n      <div class="form-group row" [ngClass]="{\'has-error\': (!name.valid && name.touched), \'has-success\': (name.valid && name.touched)}">\n        <label for="inputName3" class="col-sm-2 control-label">Name</label>\n\n        <div class="col-sm-10">\n          <input [formControl]="name" type="text" class="form-control" id="inputName3" placeholder="Full Name">\n        </div>\n      </div>\n      <div class="form-group row" [ngClass]="{\'has-error\': (!email.valid && email.touched), \'has-success\': (email.valid && email.touched)}">\n        <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n\n        <div class="col-sm-10">\n          <input [formControl]="email" type="email" class="form-control" id="inputEmail3" placeholder="Email">\n        </div>\n      </div>\n      <div class="form-group row" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\n        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>\n\n        <div class="col-sm-10">\n          <input [formControl]="password" type="password" class="form-control" id="inputPassword3" placeholder="Password">\n        </div>\n      </div>\n      <div class="form-group row" [ngClass]="{\'has-error\': (!repeatPassword.valid && repeatPassword.touched), \'has-success\': (repeatPassword.valid && repeatPassword.touched)}">\n        <label for="inputPassword4" class="col-sm-2 control-label">Repeat</label>\n\n        <div class="col-sm-10">\n          <input [formControl]="repeatPassword" type="password" class="form-control" id="inputPassword4" placeholder="Repeat">\n          <span *ngIf="!passwords.valid && (password.touched || repeatPassword.touched)" class="help-block sub-little-text">Passwords don\'t match.</span>\n        </div>\n      </div>\n      <div class="form-group row">\n        <div class="offset-sm-2 col-sm-10">\n          <button [disabled]="!form.valid" type="submit" class="btn btn-default btn-auth">Sign up</button>\n        </div>\n      </div>\n    </form>\n\n    <div class="auth-sep"><span><span>or Sign up with one click</span></span></div>\n\n    <div class="al-share-auth">\n      <ul class="al-share clearfix">\n        <li><i class="socicon socicon-facebook" title="Share on Facebook"></i></li>\n        <li><i class="socicon socicon-twitter" title="Share on Twitter"></i></li>\n        <li><i class="socicon socicon-google" title="Share on Google Plus"></i></li>\n      </ul>\n    </div>\n  </div>\n</div>\n'},930:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(55),forms_1=__webpack_require__(79),nga_module_1=__webpack_require__(358),register_component_1=__webpack_require__(1061),register_routing_1=__webpack_require__(1149),RegisterModule=function(){function RegisterModule(){}return RegisterModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,forms_1.ReactiveFormsModule,forms_1.FormsModule,nga_module_1.NgaModule,register_routing_1.routing],declarations:[register_component_1.Register]}),__metadata("design:paramtypes",[])],RegisterModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=RegisterModule}});