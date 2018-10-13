export interface IPatient {
    id?: number;
    name?: string;
    location?: string;
    age?: number;
    accepted?: boolean;
}

export class Patient implements IPatient {
    constructor(public id?: number, public name?: string, public location?: string, public age?: number, public accepted?: boolean) {
        this.accepted = this.accepted || false;
    }
}

export class BecomePatient implements IPatient {
    constructor(public name?: string, public location?: string, public age?: number) {}
}
