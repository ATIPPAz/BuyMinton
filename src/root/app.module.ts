import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { CommonModule } from '@angular/common'

// import Component
import { AppComponent } from './app.component'
import { HomeComponent } from '../pages/home/home.component'
import { ContactComponent } from '../pages/contact/contact.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: ContactComponent },

  // { path: '/', component: HomeComponent, pathMatch: 'full' },
]

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
