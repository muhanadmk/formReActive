import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FromComponent } from './from/from.component';
import { Page404Component } from './page404/page404.component';
import { TestFormComponent } from './test-form/test-form.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'from', component: FromComponent },
  { path: 'test', component: TestFormComponent },
  { path: 'page404', component: Page404Component },
  { path: '**', redirectTo: 'page404' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
