import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe<T extends Object> implements PipeTransform {

    transform(collection: T[], key = '', inReverse = false): T[] {

        if (collection.length <= 1) {
            return collection;
        }

        return collection.sort((a, b) => {

            a = a[key] || a;
            b = b[key] || b;

            let result = +(a > b) || +(a === b) - 1;

            return inReverse ? result * -1 : result;
        });
    }
}
