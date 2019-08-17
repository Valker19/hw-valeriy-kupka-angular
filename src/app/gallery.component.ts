import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-gallery',
    template: `
        <div>
          <img *ngFor="let url of images" [src]="url"/>
        </div>
    `,
    // angular has two kinds of ChangeDetectionStrategy: default and onpush. default setted by default, that's mean if angular application state will change
    // angular come deeper from parent component to every children that he has. but if we're set onpush strategy on the omponent - angular will skip him
    // he launches the component, if this component receive some new inputs from the parent component
    changeDetection: ChangeDetectionStrategy.OnPush
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
        if (this.isValid(changes)) {
          this.images.push(changes.imageSrc.currentValue);
        }
//         this is interesting solve of problem, but in the future you should to avoid this, cause angular hasn't add html elements to the dom directly. he's has a view, where he first add element and then draw him in the dom. it's service called renderer2, but in this case his redundant
//         if (typeof(this.imageSrc) === 'string') 
//             this.template.nativeElement.innerHTML += `<img src="${this.imageSrc}">`
    }

    private isValid = (changes: SimpleChanges): boolean => changes && changes.imageSrc && changes.imageSrc.currentValue;
}
