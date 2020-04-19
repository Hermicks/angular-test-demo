import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html'
})
export class RouterMedicoComponent implements OnInit {

  id: string;

  constructor(
    public router: Router,
    public routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }

}
