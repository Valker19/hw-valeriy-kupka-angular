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

    public get getAvatarImage(): string {
        return `url(${this.publication.avatarImage})`;
    }

    public like(): void {
        const likes = this.publication.likes;
        this.publication.likes = !this.likeOn ? likes + 1 : likes - 1;
        this.likeOn = !this.likeOn;
    }

    public onFullscreen($event: Event): void {
        ($event.target as HTMLImageElement).requestFullscreen();
    }
}