import { Component, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-gallery',
    template: `
        <div>
          <img *ngFor="let url of images" [src]="url"/>
        </div>
    `
})

export class GalleryComponent implements OnChanges {
//     @ViewChild('imageTemplate', { static: false })
//     template: ElementRef;

    @Input()
    private imageSrc: string;
  
    images: Array<string> = [];

//     ngAfterViewChecked(): void {
//     use ngOnChanges life cycle hook, cause he's triggers on every changing of the component inputs
    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.imageSrc) {
          this.images.push(changes.imageSrc);
        }
//         this is interesting solve of problem, but in the future you should to avoid this, cause angular hasn't add html elements to the dom directly. he's has a view, where he first add element and then draw him in the dom. it's service called renderer2, but in this case his redundant
//         if (typeof(this.imageSrc) === 'string') 
//             this.template.nativeElement.innerHTML += `<img src="${this.imageSrc}">`
    }
}
