import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contenue} from "../../../users.model";

@Injectable({
  providedIn: 'root'
})
export class AchatProduitService {
  private host:string ="http://lims.alwaysdata.net/api";
  constructor(private http:HttpClient) { }
  voirachatAjouter(id){
    return this.http.get(this.host+"/achat/getAllProduitAcheter/"+id+"?token="+localStorage.getItem('token'));
  }
  voirachat(idmagasin){
    return this.http.get(this.host+"/achat/getAllAchat/"+idmagasin+"?token="+localStorage.getItem('token'));
  }

  getAllcategorie(idmagasin){
    return this.http.get(this.host+"/categorie/bymagasin/"+idmagasin+"?token="+localStorage.getItem('token'));
  }

  getAllproduitBycategorie(cat){
    return this.http.get(this.host+"/produit/bycategorie/"+cat+"?token="+localStorage.getItem('token'));
  }
  insertintoAjoutProduit(value:Contenue){
    return this.http.post(this.host+'/achat/insertToAjoutproduit?produit_id='+value.idproduit+'&'+'quantite='+value.quantite+'&'+'prixUnitaire='+value.pu+'&'+'magasin_id='+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }

  getAllproduitAjouter(){
    return this.http.get(this.host+"/achat/getAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  getTotalMontantAchete(){
    return this.http.get(this.host+"/achat/totalMontantAjoutProduit/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  deleteAjoutProduit(id){
    return this.http.delete(this.host+"/achat/deleteProduitAjouterById/"+id+"?token="+localStorage.getItem('token'));
  }
  validerAchat(){
    return this.http.post(this.host+"/achat/achatProduit?magasin_id="+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  annulerAchat(){
    return this.http.delete(this.host+"/achat/deleteAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
}
