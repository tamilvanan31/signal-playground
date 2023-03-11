import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterObjectComponent } from './components/counter-object/counter-object.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-form/user-list.component';
import { PostsComponent } from './posts/posts.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterComponent,
    CounterObjectComponent,
    UserFormComponent,
    UserListComponent,
    PostsComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
