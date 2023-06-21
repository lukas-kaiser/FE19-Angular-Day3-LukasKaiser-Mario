import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import { IPets } from '../IPets';
import { pets } from '../pets';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{
  pet : IPets = {} as IPets;
  index : number = 0;

  constructor(private route : ActivatedRoute){

  }

  ngOnInit(): void {
   this.route.params.subscribe((params: Params) => {
    this.index = +params["petId"];
    this.pet= pets[this.index];
   })
  }
}
