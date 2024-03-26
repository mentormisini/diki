import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {CdkDrag} from "@angular/cdk/drag-drop";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    CdkDrag,
    NgClass
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit{
  public backgroundImageUrl!: string;
  design: any = "Diki Service Text"
  public redBorder: boolean = true;

  ngOnInit() {
    this.backgroundImageUrl= 'assets/case.png';
  }
}
