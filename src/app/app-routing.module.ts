

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes=[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
   { path: 'patterns', component:PatternsComponent},
  { path: 'shopping-list', component:ShoppingListComponent },
  { path: 'contact-us', component:ContactUsComponent }
];
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
