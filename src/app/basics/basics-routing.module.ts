import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicsComponent } from './basics.component';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './directives/attribute-directive/attribute-directive.component';
import { CustomDirectiveComponent } from './directives/custom-directive/custom-directive.component';
import { CustomDirectiveDirective } from './directives/custom-directive/custom-directive.directive';
import { RouterComponent } from './router/router.component';
import { HomeComponent } from './router/home/home.component';
import { BlogComponent } from './router/blog/blog.component';
import { AboutComponent } from './router/about/about.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenFormsComponent } from './forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: BasicsComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'child', component: ChildcomponentComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'structuraldirective', component: StructuralDirectiveComponent },
  { path: 'attributedirective', component: AttributeDirectiveComponent },
  { path: 'customdirective', component: CustomDirectiveComponent },
  { path: 'routercomp', component: RouterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'templatedriven', component: TemplateDrivenFormsComponent },
  { path: 'reactiveform', component: ReactiveFormsComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
