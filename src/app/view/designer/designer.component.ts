import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SplitterModule} from "primeng/splitter";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {
  CdkDrag,
  CdkDragDrop, CdkDragEnd,
  CdkDragMove, CdkDragStart,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray
} from "@angular/cdk/drag-drop";
import {DragDropModule} from "primeng/dragdrop";
import {LogLevel} from "@angular/compiler-cli";
import {ButtonModule} from "primeng/button";
import {InputNumberModule} from "primeng/inputnumber";
import {DividerModule} from "primeng/divider";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import {ColorPickerModule} from "primeng/colorpicker";
import {EditorModule} from "primeng/editor";
import Quill from 'quill';
import {NgClass} from "@angular/common";
import {SliderModule} from "primeng/slider";
@Component({
  selector: 'app-designer',
  standalone: true,
  imports: [
    SplitterModule,
    InputTextModule,
    FormsModule,
    CdkDrag,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    ButtonModule,
    InputNumberModule,
    DividerModule,
    DropdownModule,
    CheckboxModule,
    ColorPickerModule,
    EditorModule,
    NgClass,
    SliderModule
  ],
  templateUrl: './designer.component.html',
  styleUrl: './designer.component.scss'
})
export class DesignerComponent implements OnInit , AfterViewInit{
  public design:string = 'METntor';
  public color:string ='#252cb8';
  public heightBox:string= '50';
  public backgroundImageUrl!:string;
  public widthBox:string= '300';
  startX!: number;
  startY!: number;
  currentX!: number;
  currentY!: number;
  public mouseP:any;
  public lineHeightOfBox:string= "1";
  @ViewChild('draggableElement') draggableElement!: ElementRef;
  cities:any | undefined;


  selectedCity: any | undefined;
  redBorder:boolean = true;
ngOnInit() {
  const quill = new Quill('#editor');
  this.backgroundImageUrl= 'assets/case.png';
  this.cities = [
    { name: 'Gravure', code: 'NY' },
    { name: 'Tampon', code: 'RM' },
    { name: 'Stylo', code: 'LDN' },
    { name: 'Plaquet', code: 'IST' },

  ];

}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.backgroundImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
ngAfterViewInit() {
  //this.setElementPosition(240,20);
}
  showRedBorder(){
  this.redBorder = !this.redBorder;
  }
  public log(event: any) {
    this.mouseP = `Position X: ${event.x}, Y: ${event.y}`;
  }

  private setElementPosition(x: number, y: number) {
    // Access the native element of the draggable element
    const element = this.draggableElement.nativeElement;
    element.style.transform = `translate(${x}px, ${y}px)`;
  }
  // Event listener for drag start
  onDragStarted(event: CdkDragStart) {
    this.startX = event.source.element.nativeElement.getBoundingClientRect().left;
    this.startY = event.source.element.nativeElement.getBoundingClientRect().top;
  }

  // Event listener for drag move
  onDragMoved(event: CdkDragMove) {
    this.currentX = event.source.element.nativeElement.getBoundingClientRect().left;
    this.currentY = event.source.element.nativeElement.getBoundingClientRect().top;
    console.log(this.currentX , this.currentY)
  }

  // Event listener for drag end
  onDragEnded(event: CdkDragEnd) {
    // You can access final x and y coordinates here if needed
    const finalX = event.source.element.nativeElement.getBoundingClientRect().left;
    const finalY = event.source.element.nativeElement.getBoundingClientRect().top;


  }


}


