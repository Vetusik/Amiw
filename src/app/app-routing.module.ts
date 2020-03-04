import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StarWarsContentComponent } from './star-wars-content/star-wars-content.component';
import { StarWarsPlanetsComponent } from './star-wars-planets/star-wars-planets.component';
import { StarWarsSpeciesComponent } from './star-wars-species/star-wars-species.component';
import { StarWarsHomepageComponent } from './star-wars-homepage/star-wars-homepage.component';


const routes: Routes = [
  { path: '', redirectTo: '/StarWarsHomepage', pathMatch: 'full' },
  { path: 'StarWarsHomepage', component: StarWarsHomepageComponent },
  { path: 'StarWarsPeople', component: StarWarsContentComponent },
  { path: 'StarWarsPlanets', component: StarWarsPlanetsComponent },
  { path: 'StarWarsSpecies', component: StarWarsSpeciesComponent },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PageNotFoundComponent, 
  StarWarsContentComponent, 
  StarWarsPlanetsComponent, 
  StarWarsSpeciesComponent,
  StarWarsHomepageComponent]
