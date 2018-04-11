import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'artistes',
    component: ArtistComponent
  },
  { path: 'catalogue',
    component: CatalogueComponent
  },
  { path: 'albums',
    component: AlbumComponent
  },
  { path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AlbumComponent,
    ArtistComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
