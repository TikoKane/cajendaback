import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contenue, Entreprise, Particulier} from "../../../users.model";

@Injectable({
  providedIn: 'root'
})
export class VenteProduitService {
  private host:string ="https://adama.alwaysdata.net/api";
  constructor(private http:HttpClient) { }
  getStok(idmagasin){
    return this.http.get(this.host+"/stockproduit/bymagasin/"+idmagasin+"?token="+localStorage.getItem('token'));

  }
  getClientBytel(tel){
    return this.http.get(this.host+"/client/byphone/"+tel+"?token="+localStorage.getItem('token'));

  }

  insertintoAjoutProduit(value:Contenue){
    return this.http.post(this.host+'/vente/insertToAjoutproduit?produit_id='+value.idproduit+'&'+'quantite='+value.quantite+'&'+'prixUnitaire='+value.pu+'&'+'magasin_id='+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token'),{observe : 'response'});
  }
  getAllproduitAjouter(){
    return this.http.get(this.host+"/achat/getAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  getTotalMontantVendu(){
    //a faire api
    return this.http.get(this.host+"/achat/totalMontantAjoutProduit/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
  deleteVenteProduit(id){
    //a faire api
    return this.http.delete(this.host+"/achat/deleteProduitAjouterById/"+id+"?token="+localStorage.getItem('token'));
  }
  validerventeRapide(){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?magasin_id="+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token')+"&typeClient_id=3&user_id="+localStorage.getItem('iduser'),{observe : 'response'});
  }
  validerventeParticulier(value:Particulier){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?nomClient="+value.nom+"&prenomClient="+value.prenom+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token')+"&typeClient_id=1&user_id="+localStorage.getItem('iduser'),{observe : 'response'});
  }
  validerventeEntreprise(value:Entreprise){
    //a faire api
    return this.http.post(this.host+"/vente/venteProduit?raisonSocialClient="+value.raisonSocial+"&telClient="+value.telephone+"&adresseClient="+value.adresse+"&magasin_id="+localStorage.getItem('idmagasin')+"&token="+localStorage.getItem('token')+"&typeClient_id=2&user_id="+localStorage.getItem('iduser'),{observe : 'response'});
  }
  annulerVente(){
    //a faire api
    return this.http.delete(this.host+"/achat/deleteAllProduitAjouter/"+localStorage.getItem('idmagasin')+"?token="+localStorage.getItem('token'));

  }
}
