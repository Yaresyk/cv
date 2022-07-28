import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import { MeEducationComponent } from './home/about-me/me-education/me-education.component';
import { MeInfoComponent } from './home/about-me/me-info/me-info.component';
import { MeTitleComponent } from './home/about-me/me-title/me-title.component';
import { MyDetailsComponent } from './home/my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    HomeCardsComponent,
    MeEducationComponent,
    MeInfoComponent,
    MeTitleComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  BrowserAnimationsModule,
	  MatToolbarModule,
	  MatMenuModule,
	  MatInputModule,
	  MatIconModule,
	  MatButtonModule,
	  FlexLayoutModule,
	  MatCardModule,
	  MatProgressBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
