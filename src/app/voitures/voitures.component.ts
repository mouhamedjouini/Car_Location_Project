import { Component } from '@angular/core';
import { voiture } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrl: './voitures.component.css'
})
export class VoituresComponent {
  voitures: voiture[] = [];
  
  constructor(private voitureservice:VoitureService){
 

  }
  ngOnInit(): void {
  this. loadVoiture();
  }
  loadVoiture(){
    this.voitureservice.listevoiture().subscribe(voit =>{
      console.log(voit);
      this.voitures = voit;
    })
  }
  supprimerVoiture(id: number)
  {
   
this.voitureservice.supprimerVoiture(id).subscribe(res => {
console.log(res);

this.ngOnInit();

});


  }
  
}
