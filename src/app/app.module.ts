import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { LocalReferenceComponent } from './local-reference/local-reference.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { Contentprojection27Component } from './contentprojection27/contentprojection27.component';
import { HighLightText } from './Directives/HightLightText.directive';
import { RendereHighlightDirective } from './directives/rendere-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    LocalReferenceComponent,
    ViewChildComponent,
    Contentprojection27Component,
    HighLightText,
    RendereHighlightDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
