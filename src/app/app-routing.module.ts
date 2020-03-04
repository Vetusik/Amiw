import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StarWarsContentComponent } from './star-wars-content/star-wars-content.component';


const routes: Routes = [
  { path: '', redirectTo: '/StarWarsContent', pathMatch: 'full' },
  { path: 'StarWarsContent', component: StarWarsContentComponent },
  { path: 'PageNotFound', component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent, StarWarsContentComponent]
