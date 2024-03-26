import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DesignerComponent} from "./view/designer/designer.component";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DesignerComponent, RouterLink, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DDesigner';
}
