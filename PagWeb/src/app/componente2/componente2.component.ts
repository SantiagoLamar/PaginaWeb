import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Pag3 (){
    this.router.navigate(['web3'])
  }
  volver (){
    this.router.navigate([''])
  }

}
