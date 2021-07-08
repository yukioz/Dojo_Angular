import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lista: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    
    this.lista.forEach((curso) => {
      return curso;
    })

  }

  ngOnInit(): void {
  }

}
