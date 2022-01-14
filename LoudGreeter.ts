import {
    Greeter
} from "./greeter";


export class LoudGreeter extends Greeter {

    private extra: string = '!';

    constructor(greeting: string) {
        super(greeting);
    }

    greet(name: string): string {
        return super.greet(name) + this.extra;
    }

    addvolume() {
        this.extra += '!';
    }
}

const loud = new LoudGreeter('Renato');
loud.addvolume();
loud.addvolume();
loud.addvolume();

