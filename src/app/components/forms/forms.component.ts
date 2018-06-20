import { PeticionesService } from './../../services/peticiones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  providers: [PeticionesService]
})
export class FormsComponent implements OnInit {

  public user: any;

  constructor(
    public _peticionesService: PeticionesService
  ) {}

  ngOnInit() {
    this._peticionesService.getUser().subscribe((result) => {
      this.user = result.data;
    },
    error => {
      console.log(error);
    });
  }

}
