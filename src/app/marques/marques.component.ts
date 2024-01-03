import { Component, OnInit } from '@angular/core';
import { MarqueService } from '../service/marque.service';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrl: './marques.component.css'
})
export class MarquesComponent implements OnInit {
  marques!:Marque[]
  ngOnInit(): void {
    this.loadMarque();
  }
  constructor(private marqueservice:MarqueService){

  }
  loadMarque(){
    this.marqueservice.listemarque().subscribe(marq =>{
      console.log(marq);
      this.marques = marq;
    })
  }
  supprimerMarque(id: number)
  {
   
this.marqueservice.supprimerMarque(id).subscribe(res => {
console.log(res);

this.ngOnInit();

});


  }
}
