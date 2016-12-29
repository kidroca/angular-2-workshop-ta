import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe<T extends Object> implements PipeTransform {

    transform(collection: T[], key: string, term: string): any {

        if (!key || !term || collection.length === 0) {

            return collection;
        }

        return collection.filter(item => item[key]
            .toString()
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase()));
    }
}
