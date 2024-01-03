import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../service/voiture.service';
import { voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../service/marque.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrl: './update-voiture.component.css'
})
export class UpdateVoitureComponent implements OnInit {
  currentVoiture = new voiture();
  marques! : Marque[];
updatedMarId! : number;

  constructor(private activatedRoute: ActivatedRoute,private voitureservice:VoitureService,private marqueservice:MarqueService,private router:Router){

  }
  ngOnInit(): void {
    this.marqueservice.listemarque().subscribe(marq => {this.marques = marq;
      console.log(marq);
    });
    this.voitureservice.consulterVoiture(this.activatedRoute.snapshot. params['id']).
    subscribe( voit =>{ this.currentVoiture = voit; } ) ;
    console.log(this.currentVoiture);

  }
 
  updateVoiture() {
    this.voitureservice.updateVoiture(this.currentVoiture).subscribe(prod => {
    this.router.navigate(['voitures']); }
    );
    }
    
}
