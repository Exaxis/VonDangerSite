import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CrewComponent } from './crew/crew.component';
import { CarouselModule } from './carousel/carousel.module';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'crew', component: CrewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CrewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
