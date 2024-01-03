import { Component, OnInit } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../service/marque.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrl: './add-voiture.component.css'
})
export class AddVoitureComponent implements OnInit {
  newVoiture=new voiture();
  marques!: Marque[]
  newIdMar! : number;

  constructor(private voitureservice:VoitureService,private marqueservice:MarqueService,
    private router:Router){
 

  }
  ngOnInit(): void {
    this.marqueservice.listemarque().subscribe(marq => {this.marques = marq;
      console.log(marq);
      });
      
  }
  addVoiture(){
    this.newVoiture.marque = this.marques.find(marq => marq.idMar == this.newIdMar)!;
    console.log(this.newVoiture);
   this.voitureservice.ajouterVoiture(this.newVoiture)
    .subscribe(voit => {
    console.log(voit);
    this.router.navigate(['voitures']);
    });
    }
}
