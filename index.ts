const {
    Observable: { create }, interval, from, Observable,
    operators: { reduce, bufferTime, bufferCount }
} = rxjs;

// 1. Имплементировать функцилнал range используя функцию create.

const analogRange = (startingIndex: number, finalIndex: number) => {
    const publisher = create((observable: any) => {
        for (let index: number = startingIndex; index <= finalIndex; index++) {
            observable.next(index);
        };
    });

    return publisher;
};



// EXAMPLE ↓ UNCOMMENT

// const publisher1 = analogRange(1, 10);
// const subscriber1 = publisher1.subscribe((value: number) => {
//     console.log(`1 ===> ${value}`);
// })

// 2. Имплементировать функционал interval используя функцию create.

const analogInterval = (time: number) => {
    const publisher = create((observable) => {
        let index: number = 0;

        setInterval(() => {
            index++;
            observable.next(index);
        }, time)
    })

    return publisher;
}

// EXAMPLE ↓ UNCOMMENT

// const publisher2 = analogInterval(1000);
// const subscriber2 = publisher2.subscribe((value: number) => {
//     console.log(value);
// });

// 3. Используя только reduce иммплементировать функционал filter.

const analogFilter = (callback) => (source) => {
    return source.pipe(
        reduce((acc: any, val: any) => {
            if (callback(val)) acc.push(val);

            return acc;
        }, [])
    );
}

// EXAMPLE ↓ UNCOMMENT

// const publisher3 = from([4, 23, 12, 32, 9, 42])
//     .pipe(analogFilter((num: number) => num % 2 === 0));

// const subscriber3 = publisher3.subscribe((value: number) => {
//     console.log(value);
// });

// 4. Дан обзервабле interval - 1 tick in 50 msec -> выдавать данные либо 1 раз в 333 сек или же когда накапливается 7 элементов.

const publisher4 = interval(500)
    .pipe(bufferCount(7))
    .pipe(bufferTime(3330));

const subscriber4 = publisher4.subscribe(
    (val: number) => {
        console.log(val)
    }
);
