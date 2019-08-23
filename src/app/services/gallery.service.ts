import { EventEmitter } from '@angular/core';
import { imageCardContent } from '../models';

export class GalleryService {
    public publication: EventEmitter<imageCardContent> = new EventEmitter<imageCardContent>();

    private set publicationContent(value: imageCardContent) {
        this.publication.emit(value);
    }

    private getImageContent(): imageCardContent {
        const result = {
            author: 'username_111',
            avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHV2zPP7AaVFZ3pFafne_Pp2l8AFYn-127xOijlDlimMJuZR9b',
            cardImage: '',
            description: 'description for publication)) Так как я особо не разобрался в формах Material UI и мало времени осталосьб можно только загрузить картинку',
            place: 'Kharkov',
            likes: 0,
            id: 0
        }
        
        return result;
    }

    addPublication(image: File): void {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener('loadend', () => {
            const publication = this.getImageContent();

            publication.cardImage = reader.result;
            publication.likes = Math.round(Math.random() * 1000);

            this.publicationContent = publication;
        });
    }
}