import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.component.html',
  styleUrls: ['./personalizado.component.scss'],
})
export class PersonalizadoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
    @Input() text: string = '';
}
