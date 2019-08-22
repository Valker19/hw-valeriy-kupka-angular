import { Component, Input } from '@angular/core';
import { imageCardContent } from 'src/app/models';

@Component({
    selector: 'card-image-component',
    templateUrl: './imageCard.component.html',
    styleUrls: ['./imageCard.component.scss']
})

export class ImageCardComponent {
    private likeOn: boolean = false;

    @Input()
        publication: imageCardContent;

    public getAvatarImage(): string {
        return `url(${this.publication.avatarImage})`;
    }

    public like(): void {
        if (this.likeOn === false) {
            this.likeOn = true;
            this.publication.likes += 1;
        } else {
            this.likeOn = false; this.publication.likes -= 1;
        } 
    }

    public onFullscreen($event) {
        $event.target.requestFullscreen();
    }
}