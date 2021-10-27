export class Employee {
    id?: number;
    name: string;
    last_name: string;
    birthday: string;

    constructor(name: string, last_name: string, birthday: string) {
        this.name = name;
        this.last_name = last_name;
        this.birthday = birthday;
    }
}