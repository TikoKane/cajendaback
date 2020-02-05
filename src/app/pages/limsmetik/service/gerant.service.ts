import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Gerant } from './general.model';
@Injectable({
  providedIn: 'root'
})
export class GerantService {
  private host: string = 'http://lims.alwaysdata.net/api';
  constructor(private http: HttpClient) { }
  ger: Gerant;
  public deleteGer(id) {
    return this.http.delete(this.host+'/user/deleteById/'+id+"?token="+localStorage.getItem('token'));
  }

  public GetGerantById(id){
    return this.http.get(this.host+'/user/byid/'+id+"?token="+localStorage.getItem('token'));
  }
  getAllGerantByMagasin(id){
    return this.http.get(this.host+'/user/bymagasin/'+id);
   }


  insertGerant(ger:Gerant,idMagasin){
  return this.http.post(this.host+'/register?nom='+ger.nom+'&'+'prenom='+ger.prenom+'&'+'tel='+ger.tel+'&'+'login='+ger.login+'&'+'email='+ger.email+'&'+'password='+ger.password+'&'+'typeUser_id='+ger.typeUser_id+'&'+'magasin_id='+idMagasin,Gerant);
  }
  updateGerant(ger:Gerant,id){

    return this.http.put(this.host+'/user/updateById/'+id+'?nom='+ger.nom+'&'+'prenom='+ger.prenom+'&'+'tel='+ger.tel+'&'+'login='+ger.login+'&'+'email='+ger.email+'&'+'password='+ger.password+'&'+'typeUser_id='+ger.typeUser_id+'&'+"&token="+localStorage.getItem('token'),Gerant);

    }
  getAllTypeUser(){
    return this.http.get(this.host+"/typeuser/getAllTypeUser");
   }

}
