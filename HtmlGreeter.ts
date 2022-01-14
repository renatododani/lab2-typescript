import { Greeter } from "./greeter";


class HtmlGreeter extends Greeter {
    tagName: string;

    constructor(greeting: string,tagName: string ) {
        super(greeting);
        this.tagName = tagName;
    }

    greet(name:string):string {
        return '<h1>'+ super.greet(name) + '</h1>'
    }
}