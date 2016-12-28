import {Assignable} from './asignable';

export class MovieCast extends Assignable {
    director: string;
    writer: string;
    actors: string[] = [];

    constructor(values: Object = {}) {
        super();

        this.assignFields(values);
    }
}
