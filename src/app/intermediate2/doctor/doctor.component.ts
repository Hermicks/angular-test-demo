import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
  }

  hi(name: string): string {
    return `Saludos ${ name }`;
  }

  getDoctors() {
    this.doctorService.getDoctors().subscribe((doctors: any[]) => this.doctors = doctors);
  }

}
