import { Marque } from "./marque.model";

export class voiture{
    idVoiture!:number;
    nomVoiture!: string;
    prixVoiture!: number;
    serie!: string;
    dateMiseEnCirculation!: Date;
    marque!:Marque
  }