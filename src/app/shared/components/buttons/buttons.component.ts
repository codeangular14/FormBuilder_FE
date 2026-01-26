import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-buttons',
    standalone: true,
     imports: [CommonModule],
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent {
     @Input() isIcon:boolean = false;
     @Input() disabled:boolean = false;
     @Input() maticon:string = '';
     @Input() label:string = '';
     @Input() cssClass:string = 'btn-primary';
    btnType: 'button' | 'submit' | 'reset' = 'button';
}