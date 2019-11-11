import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicsRoutingModule } from './basics-routing.module';
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



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BasicsRoutingModule
  ],
  declarations: [
    BasicsComponent,
    DataBindingComponent,
    ChildcomponentComponent,
    DirectivesComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent,
    CustomDirectiveComponent,
    CustomDirectiveDirective,
    RouterComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    FormsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ServicesComponent,
    
    
  ]
})
export class BasicsModule { }
