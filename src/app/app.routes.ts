import { Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {DesignerComponent} from "./view/designer/designer.component";
import {ClientComponent} from "./view/client/client.component";

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
  {
    path: 'designer',
    component: DesignerComponent
  },
  {
    path: 'client',
    component: ClientComponent
  }
  ];
