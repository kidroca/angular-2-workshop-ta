export abstract class Assignable {

    protected assignFields(values: Object) {
        //noinspection TsLint
        for (let key in values) if (values.hasOwnProperty(key)) {
            this[toCamelCase(key)] = values[key];
        }
    }
}

function toCamelCase(field: string) {
    return field[0].toLowerCase() + field.substring(1, field.length);
}
