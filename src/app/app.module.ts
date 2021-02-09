import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatternService } from './patterns/pattern.service';
import { PatternsComponent } from './patterns/patterns.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HeaderComponent } from './header/header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PatternDetailComponent } from './patterns/pattern-detail/pattern-detail.component';
import { PatternsListComponent } from './patterns/patterns-list/patterns-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PatternsComponent,
    ShoppingComponent,
    HeaderComponent,
    ContactUsComponent,
    HomeComponent,
    PatternDetailComponent,
    PatternsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PatternService],
  bootstrap: [AppComponent]
})
export class AppModule { }
