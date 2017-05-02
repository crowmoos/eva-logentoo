import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {
  articles = [
    {
      "title" : "Appartement centre ville 650€ + charges",
      "imgSrc" : "https://img4.leboncoin.fr/ad-thumb/00f0d17f15df2a0f333de99b7019011313d097b2.jpg",
      "link" : "https://www.leboncoin.fr/locations/1119000837.htm?ca=12_s",
      "price" : "795",
      "location" : "Caen",
      "subLocation" : "Calvados"
    },{
      "title" : "Loue 2 pieces boulogne billancourt marcel sembat",
      "imgSrc" : "https://img2.leboncoin.fr/ad-thumb/ac341fca135dfa3b2fc5be3099ec3b020dfbdf3e.jpg",
      "link" : "https://www.leboncoin.fr/locations/1125583465.htm?ca=12_s",
      "price" : "1385",
      "location" : "Boulogne-Billancourt",
      "subLocation" : "Hauts-de-Seine"
  },{
    "title" : "Appartement centre ville 650€ + charges",
    "imgSrc" : "https://img4.leboncoin.fr/ad-thumb/00f0d17f15df2a0f333de99b7019011313d097b2.jpg",
    "link" : "https://www.leboncoin.fr/locations/1119000837.htm?ca=12_s",
    "price" : "795",
    "location" : "Caen",
    "subLocation" : "Calvados"
  },{
    "title" : "Appartement 2 pièces 55 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122921526.htm?ca=12_s",
    "price" : "450",
    "location" : "Lorette",
    "subLocation" : "Loire"
  },{
    "title" : "Duplex 4 pièces 85 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122921481.htm?ca=12_s",
    "price" : "570",
    "location" : "Saint-Symphorien-sur-Coise",
    "subLocation" : "Rhône"
  },{
    "title" : "Maison 4 pièces 100 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122921335.htm?ca=12_s",
    "price" : "550",
    "location" : "Cublize",
    "subLocation" : "Rhône"
  },{
    "title" : "Maison de village 2 pièces 75 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122921173.htm?ca=12_s",
    "price" : "450",
    "location" : "Saint-Didier-sous-Riverie",
    "subLocation" : "Rhône"
  },{
    "title" : "Appartement 2 pièces 42 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122920974.htm?ca=12_s",
    "price" : "325",
    "location" : "Grandris",
    "subLocation" : "Rhône"
  },{
    "title" : "Appartement 4 pièces 78 m²",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1122920473.htm?ca=12_s",
    "price" : "508",
    "location" : "Villefranche-sur-Saône",
    "subLocation" : "Rhône"
  },{
    "title" : "Grand studio gap",
    "imgSrc" : "https://img7.leboncoin.fr/ad-thumb/555740e5f9d5e1675b19591fda3a0ad4aca32f19.jpg",
    "link" : "https://www.leboncoin.fr/locations/1125583375.htm?ca=12_s",
    "price" : "350",
    "location" : "Gap",
    "subLocation" : "Hautes-Alpes"
  },{
    "title" : "Loue f 3",
    "imgSrc" : "https://img3.leboncoin.fr/ad-thumb/b88ab730b8c0288d0528d3958c8b7c8a093d3da7.jpg",
    "link" : "https://www.leboncoin.fr/locations/1104457578.htm?ca=12_s",
    "price" : "560",
    "location" : "Le Havre",
    "subLocation" : "Seine-Maritime"
  },{
    "title" : "Studio meublé de 30 m2",
    "imgSrc" : null,
    "link" : "https://www.leboncoin.fr/locations/1125583296.htm?ca=12_s",
    "price" : "340",
    "location" : "Saint-Marcel-lès-Valence",
    "subLocation" : "Drôme"
  },{
    "title" : "Studio avec jardin",
    "imgSrc" : "https://img5.leboncoin.fr/ad-thumb/318c0c27aab91e6ebbbe9a802afe164db6ebc8dc.jpg",
    "link" : "https://www.leboncoin.fr/locations/1125583198.htm?ca=12_s",
    "price" : "420",
    "location" : "Calais",
    "subLocation" : "Pas-de-Calais"
  },{
    "title" : "Metz centre, très bel appartement F3",
    "imgSrc" : "https://img2.leboncoin.fr/ad-thumb/8f939dc94ec4c9a7d29fc6ece7c0f66ce6dce728.jpg",
    "link" : "https://www.leboncoin.fr/locations/1122253040.htm?ca=12_s",
    "price" : "650",
    "location" : "Metz",
    "subLocation" : "Moselle"
  },{
    "title" : "Loue T2 Valenciennes Terr.Harpignies +parking",
    "imgSrc" : "https://img5.leboncoin.fr/ad-thumb/5fe314d30d0ffd55a492a422d714ebf42856e44f.jpg",
    "link" : "https://www.leboncoin.fr/locations/1125583103.htm?ca=12_s",
    "price" : "595",
    "location" : "Valenciennes",
    "subLocation" : "Nord"
  },{
    "title" : "Appartement 1er étage entièrement refait",
    "imgSrc" : "https://img4.leboncoin.fr/ad-thumb/03bf751384162f61066aa684efede0bea554e51c.jpg",
    "link" : "https://www.leboncoin.fr/locations/1125583042.htm?ca=12_s",
    "price" : "510",
    "location" : "Brignoles",
    "subLocation" : "Var"
  }
];

  constructor() { }

}
