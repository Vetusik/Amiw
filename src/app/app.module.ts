import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NawigacjaComponent } from './nawigacja/nawigacja.component';

import { HttpClientModule } from '@angular/common/http';
import { StarWarsContentComponent } from './star-wars-content/star-wars-content.component';
import { StarWarsService } from './star-wars.service';

@NgModule({
  declarations: [
    AppComponent,
    NawigacjaComponent,
    routingComponents,
    StarWarsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
