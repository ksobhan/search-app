import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './component/index-page/index-page.component';
import  {FavoriteComponent} from './component/favorite/favorite.component'


const routes: Routes = [
  {path:'search-app',component:IndexPageComponent},
  {path:'favorite',component:FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
