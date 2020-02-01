export class Gerant {
    nom:string;
    prenom:string;
    tel:string;
    login:string;
    email:string;
    password:string;
    typeUser_id:number;
    
    }
    
    export class Categorie {
        libelle:string;
        magasin_id:number; 
        }
        
        export class Produit {
            libelle:string;
            categorie_id:number; 
            }
            