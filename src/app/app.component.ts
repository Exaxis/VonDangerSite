import { Component } from '@angular/core';

// const routes: Routes = [
//   { path: '', redirectTo: '/snow', pathMatch: 'full' },
//   { path: 'dotmatrix', component: DotMatrixSlideComponent},
//   { path: 'snow', component: SnowSlideComponent},
//   { path: 'fortressplanner', component: DfPlannerComponent},
//   { path: 'flow', component: PerlinFlowComponent}
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vondanger-site';
}
