import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from 'rxjs';
import {delay, map, tap} from 'rxjs/operators';
import {Contenue, Data, Particulier, Personne} from "../../../users.model";

@Injectable({
  providedIn: 'root'
})
export class AchatProduitService {

  private host: string = "https://lamine.alwaysdata.net/api";

  constructor(private http: HttpClient) {
  }

  voirachatAjouter(id) {
    return this.http.get(this.host + "/achat/getAllProduitAcheter/" + id + "?token=" + localStorage.getItem('token'));
  }

  voirachat(idmagasin) {
    return this.http.get(this.host + "/achat/getAllAchat/" + idmagasin + "?token=" + localStorage.getItem('token'));
  }

  public GetProduitById(id) {
    return this.http.get(this.host + '/produit/' + id + '?token=' + localStorage.getItem('token'));
  }

  Item:any = [];

  getCate(term: string = null): Observable<Data[]> {
    let items:Data[]= [];
    this.getAllcategorie(localStorage.getItem('idmagasin')).subscribe(value => { this.Item=value;

      for (let i = 0; i < this.Item.length; i++) {

        items.push({id:this.Item[i].id.toString(), libelle:this.Item[i].libelle})
      }
    })
    console.log(items)
    if (term) {
      items = items.filter(x => x.libelle.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }
  Items:any = [];

  getPro(idCategorie,term: string = null): Observable<Data[]> {
    let items:Data[]= [];
    this.getAllproduitBycategorie(idCategorie).subscribe(value => { this.Items=value;

      for (let i = 0; i < this.Items.length; i++) {

        items.push({id:this.Items[i].id.toString(), libelle:this.Items[i].libelle})
      }
    })
    console.log(items)
    if (term) {
      items = items.filter(x => x.libelle.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1);
    }
    return of(items).pipe(delay(500));
  }

  getAllcategorie(idmagasin) {
    return this.http.get(this.host + "/categorie/bymagasin/" + idmagasin + "?token=" + localStorage.getItem('token'));
  }

  getAllproduitBycategorie(cat) {
    return this.http.get(this.host + "/produit/bycategorie/" + cat + "?token=" + localStorage.getItem('token'));
  }

  insertintoAjoutProduit(value: Contenue) {
    return this.http.post(this.host + '/achat/insertToAjoutproduit?produit_id=' + value.idproduit + '&' + 'quantite=' + value.quantite + '&' + 'prixUnitaire=' + value.pu + '&' + 'magasin_id=' + localStorage.getItem('idmagasin') + "&token=" + localStorage.getItem('token'), {observe: 'response'});
  }

  getAllproduitAjouter() {
    return this.http.get(this.host + "/achat/getAllProduitAjouter/" + localStorage.getItem('idmagasin') + "?token=" + localStorage.getItem('token'));
  }

  getTotalMontantAchete() {
    return this.http.get(this.host + "/achat/totalMontantAjoutProduit/" + localStorage.getItem('idmagasin') + "?token=" + localStorage.getItem('token'));

  }

  deleteAjoutProduit(id) {
    return this.http.delete(this.host + "/achat/deleteProduitAjouterById/" + id + "?token=" + localStorage.getItem('token'));
  }

  validerAchat() {

    return this.http.post(this.host + "/achat/achatProduit?magasin_id=" + localStorage.getItem('idmagasin') + "&typeFournisseur_id=3&user_id=" + localStorage.getItem('id') + "&token=" + localStorage.getItem('token'), {observe: 'response'});
  }

  validerAchatFournisseurEntreprise(value: Personne) {
    return this.http.post(this.host + "/achat/achatProduit?magasin_id=" + localStorage.getItem('idmagasin') + "&typeFournisseur_id=1&user_id=" + localStorage.getItem('id') + '&' + 'adresseFournisseur=' + value.adresse + '&telFournisseur=' + value.telephone + '&raisonSocialFournisseur=' + value.raisonSocial + "&token=" + localStorage.getItem('token'), {observe: 'response'});

  }

  validerAchatFournisseurParticulier(value: Personne) {
    return this.http.post(this.host + "/achat/achatProduit?magasin_id=" + localStorage.getItem('idmagasin') + "&typeFournisseur_id=2&user_id=" + localStorage.getItem('id') + '&' + 'adresseFournisseur=' + value.adresse + '&telFournisseur=' + value.telephone + '&nomFournisseur=' + value.nom + '&prenomFournisseur=' + value.prenom + "&token=" + localStorage.getItem('token'), {observe: 'response'});

  }

  annulerAchat() {

    return this.http.delete(this.host + "/achat/deleteAllProduitAjouter/" + localStorage.getItem('idmagasin') + "?token=" + localStorage.getItem('token'));

  }
}
