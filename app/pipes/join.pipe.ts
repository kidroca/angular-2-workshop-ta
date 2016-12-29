import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'join'})
export class JoinPipe implements PipeTransform {

    transform(collection: string[], separator = ', '): any {

        return collection.join(separator);
    }
}
