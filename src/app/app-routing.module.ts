import { CompresionComponent } from './artist/comparison/compresion.component';
import { ArtistItemComponent } from './artist/artist-item/artist-item.component';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'artists',
        pathMatch: 'full',
      },
      { path: 'artists', component: ArtistListComponent },
      { path: 'artists/:name/details', component: ArtistItemComponent },
      { path: 'compresion', component: CompresionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
