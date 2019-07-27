import { fromEvent } from 'rxjs'
import { bufferCount } from 'rxjs/operators'

const alertButton = document.querySelector('.alert-button');
const publisher = fromEvent(alertButton, 'click')
    .pipe(bufferCount(4));

const subscriber = publisher.subscribe((value: any) => {
    alert(`Aleft Button ===> ${JSON.stringify(value)}`)
})