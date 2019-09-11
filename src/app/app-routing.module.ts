import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LiveComponent} from './components/live/live.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'live', component: LiveComponent},
  {path: 'home', component: HomeComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
