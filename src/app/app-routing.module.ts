import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PatternDetailComponent } from './patterns/pattern-detail/pattern-detail.component';
import { PatternsListComponent } from './patterns/patterns-list/patterns-list.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ShoppingComponent } from './shopping/shopping.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'patterns',
    component: PatternsComponent,
    children: [
      { path: '', component: PatternsListComponent },
      { path: ':id', component: PatternDetailComponent },
    ],
  },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'contact-us', component: ContactUsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
