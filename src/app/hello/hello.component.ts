import {Component, Input} from "@angular/core";

@Component({
    selector:'app-hello',
    template: `<span>hello component world ! {{name}} </span>`
})
export class HelloComponent{
    @Input() name: string;

    ngOnInit(){
        console.log('Hello Init');
        
    }

    ngOnDestroy(){
        console.log('Hello Destroy');
        
    }
} 