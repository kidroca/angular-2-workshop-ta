export abstract class Assignable {

    protected assignFields(values: Object) {
        const originalKeys = Reflect.ownKeys(this);

        //noinspection TsLint
        for (let key in values) if (values.hasOwnProperty(key)) {
            this[key.toLowerCase()] = values[key];
        }

        originalKeys.forEach(key => {
            if (!this[key]) {
                throw new Error(`The ${key} have not been assigned`);
            }
        });
    }
}
