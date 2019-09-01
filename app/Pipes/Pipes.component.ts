import { Component } from '@angular/core';

@Component({
    selector: 'Pipes',
    templateUrl: 'Pipes.component.html',
    styleUrls: ['../../assets/css/index.css']
    
})

export class PipesComponent {
    public date;
    public date2;

constructor(){
    this.date = new Date(2018,11,20);
    this.date2 = new Date();
}

}