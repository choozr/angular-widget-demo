import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManComponent } from './man/man.component';
import { WomanComponent } from './woman/woman.component';

const routes: Routes = [
  { path: '', redirectTo: '/woman', pathMatch: 'full' },  // default to Woman component
  { path: 'man', component: ManComponent },
  { path: 'woman', component: WomanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
