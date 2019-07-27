const {
    fromEvent,
    operators: { bufferCount }
} = rxjs;

const alertButton = document.querySelector('.alert-button');
const publisher = fromEvent(alertButton, 'click')
    .pipe(bufferCount(4));

const subscriber = publisher.subscribe((value) => {
    alert(`Aleft Button ===> ${JSON.stringify(value)}`)
})