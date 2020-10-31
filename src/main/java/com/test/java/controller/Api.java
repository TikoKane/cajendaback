package com.test.java.controller;
import com.test.java.Repository.*;
import com.test.java.config.JwtTokenUtil;
import com.test.java.message.ResponseFile;
import com.test.java.message.ResponseMessage;
import com.test.java.model.*;
import com.test.java.service.FileStorageService;
import com.test.java.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.sql.Date;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 369)
@RestController
public class Api {

    // Section Type de Paiements

    @Autowired
    ITypePaiement iTypePaiement;

    // Affichage de tous les types paiements

    @GetMapping("/allTypePaiement")
    public ResponseEntity<?> alltypepaiement ()  {
        return ResponseEntity.ok(iTypePaiement.findAll());
    }


    //Création des type de paiements

    @PostMapping("/createTypePaiement")
    public ResponseEntity<?> createtypepaiement ()  {
        Typepaiement tp = iTypePaiement.getOne((long)2);
        tp.setType("Mastercard");

      /*  Typepaiement tp2 = new Typepaiement();
        tp2.setType("visa");*/

       // iTypePaiement.save(tp2);
       // iTypePaiement.save(tp);
        return ResponseEntity.ok(iTypePaiement.save(tp));
    }

    @PostMapping("/createRole")
    public ResponseEntity<?> createRole (Role role)  {
        return ResponseEntity.ok(iRole.save(role));
    }

    // Mis à jour des types de paiements

    @PostMapping("/updateTypePaiement/{id}")
    public ResponseEntity<?> updatetypepaiement (@PathVariable("id") long idupdate, Typepaiement typepaiement)  {
        Typepaiement tp = new Typepaiement();
        tp = iTypePaiement.getType_paiementById(idupdate);
        if(tp != null) {
            tp.setType(typepaiement.getType());
            return ResponseEntity.ok(iTypePaiement.save(tp));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'un type de paiement

    @GetMapping("/GetTypePaiementById/{id}")
    public ResponseEntity<?> gettypepaiementbyid (@PathVariable("id") long id)  {
        Typepaiement tp = new Typepaiement();
        tp = iTypePaiement.getType_paiementById(id);
        if(tp != null) {
            return ResponseEntity.ok(iTypePaiement.getType_paiementById(tp.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

//Suppression d'un type de paiement avec affichage des autres types de paiements restants

    @DeleteMapping("/DeleteTypePaiementById/{id}")
    public ResponseEntity<?> deletetypepaiementbyid (@PathVariable("id") long id)  {
        Typepaiement tp = new Typepaiement();
        tp = iTypePaiement.getType_paiementById(id);
        if(tp != null) {
            iTypePaiement.delete(tp);
            return ResponseEntity.ok(iTypePaiement.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    /* Section Abonnement ````````````````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IAbonnement iAbonnement;

    // Affichage de tous les abonnements
    @GetMapping("/allAbonnement")
    public ResponseEntity<?> allabonnement ()  {
        return ResponseEntity.ok(iAbonnement.findAll());
    }

    //Création d'un abonnement
    @PostMapping("/createAbonnement")
    public ResponseEntity<?> createabonnement (Abonnement abonnement)  {

        return ResponseEntity.ok(iAbonnement.save(abonnement));
    }


    // Mis à jour des abonnements
    @PostMapping("/updateAbonnement/{id}")
    public ResponseEntity<?> updateabonnement (@PathVariable("id") long idupdate, Abonnement abonnement )  {
        Abonnement ab = new Abonnement();
        ab = iAbonnement.getAbonnementById(idupdate);
        if(ab != null) {
            ab.setEtat(abonnement.isEtat());
            ab.setDate_debut(abonnement.getDate_debut());
            ab.setDate_fin(abonnement.getDate_fin());
            ab.setIdBonReduction(abonnement.getIdBonReduction());
            return ResponseEntity.ok(iAbonnement.save(ab));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @PutMapping("/desactiveCompte/{id}")
    public ResponseEntity<?> desactiveCompte (@PathVariable("id") long idupdate, Abonnement abonnement )  {
        Abonnement ab = new Abonnement();
        ab = iAbonnement.getAbonnementById(idupdate);
        if(ab != null) {
            ab.setEtat(false);
            return ResponseEntity.ok(iAbonnement.save(ab));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @PutMapping("/activeCompte/{id}")
    public ResponseEntity<?> activeCompte (@PathVariable("id") long idupdate, Abonnement abonnement )  {
        Abonnement ab = new Abonnement();
        ab = iAbonnement.getAbonnementById(idupdate);
        if(ab != null) {
            ab.setEtat(true);
            return ResponseEntity.ok(iAbonnement.save(ab));
        }
        else
            return ResponseEntity.notFound().build();
    }




    //Affichage d'un abonnement

    @GetMapping("/GetAbonnementById/{id}")
    public ResponseEntity<?> getabonnementbyid (@PathVariable("id") long id)  {
        Abonnement ab = new Abonnement();
        ab = iAbonnement.getAbonnementById(id);
        if(ab != null) {
            return ResponseEntity.ok(iAbonnement.getAbonnementById(ab.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'un Abonnement avec affichage des autres abonnements restants

    @DeleteMapping("/DeleteAbonnementById/{id}")
    public ResponseEntity<?> deleteabonnementbyid (@PathVariable("id") long id)  {
        Abonnement ab = new Abonnement();
        ab = iAbonnement.getAbonnementById(id);
        if(ab != null) {
            iAbonnement.delete(ab);
            return ResponseEntity.ok(iAbonnement.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    /* Section Admin ``````````````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IAdmin iAdmin;

    // Affichage de tous les admins
    @GetMapping("/allAdmin")
    public ResponseEntity<?> alladmin ()  {
        return ResponseEntity.ok(iAdmin.findAll());
    }


    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/createAdmin")
    public ResponseEntity<?> addClient2(Admin admin) {
        Admin a = new Admin();
        Role r = iRole.getOne(Integer.valueOf(1).longValue());
        a = admin;
        a.setRole(r);
        if(a != null)
        {
            a.setPassword(encoder.encode(a.getPassword()));
            return ResponseEntity.ok(iAdmin.save(a));
        }
        else{
            return ResponseEntity.badRequest().body("Impossible d'ajouter  un utilisateur avec des champs vides");
        }

    }

    // Mis à jour des admins
    @PostMapping("/updateAdmin/{id}")
    public ResponseEntity<?> updateadmin (@PathVariable("id") long idupdate )  {
        Admin ad = iAdmin.getOne(idupdate);
        if(ad != null) {
          /*  ad.setEmail(admin.getEmail());
            ad.setNom(admin.getNom());
        //    ad.setPassword(admin.getPassword());
            ad.setPrenom(admin.getPrenom());*/
            ad.setPrenom("cajanda prénom");
            ad.setNom("cajande nom");
            ad.setUsername("cajenda");
            return ResponseEntity.ok(iAdmin.save(ad));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'un admin
    @GetMapping("/GetAdminById/{id}")
    public ResponseEntity<?> getadminbyid (@PathVariable("id") long id)  {
        Admin ad = new Admin();
        ad = iAdmin.getAdminById(id);
        if(ad != null) {
            return ResponseEntity.ok(iAdmin.getAdminById(ad.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'un Admin avec affichage des autres admins restants
    @DeleteMapping("/DeleteAdminById/{id}")
    public ResponseEntity<?> deleteadminbyid (@PathVariable("id") long id)  {
        Admin ad = new Admin();
        ad = iAdmin.getAdminById(id);
        if(ad != null) {
            iAdmin.delete(ad);
            return ResponseEntity.ok(iAdmin.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    /* Section Bon de Réduction `````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IBon_Reduction iBon_reduction;

    // Affichage de tous les bons de réduction
    @GetMapping("/allBonReduction")
    public ResponseEntity<?> allbonreduction ()  {
        return ResponseEntity.ok(iBon_reduction.findAll(Sort.by(Sort.Direction.DESC, "id")));
    }

    //Création d'un bon de réduction
    @PostMapping("/createBonReduction/{pourcentage}/{admin}")
    public ResponseEntity<?> createbonreduction (@PathVariable("pourcentage") float pourcentage,@PathVariable("admin") long admin,Bon_Reduction bon_reduction)  {
      Admin a = iAdmin.getAdminById(admin);
      Long maxId = iBon_reduction.maxBon();
      bon_reduction.setAdmin(a);
       bon_reduction.setCode("Boncaj000"+maxId);
       bon_reduction.setEtat(false);
       bon_reduction.setPourcentage(pourcentage);
       iBon_reduction.save(bon_reduction);
        return ResponseEntity.ok(iBon_reduction.findAll());
    }

    // Mis à jour des bons de réductions
    @PostMapping("/updateBonReduction/{id}")
    public ResponseEntity<?> updatebonreduction (@PathVariable("id") long idupdate, Bon_Reduction bon_reduction )  {
        Bon_Reduction br = new Bon_Reduction();
        br = iBon_reduction.getBon_ReductionById(idupdate);
        if(br != null) {
            br.setCode(bon_reduction.getCode());
            br.setEtat(bon_reduction.isEtat());
            br.setPourcentage(bon_reduction.getPourcentage());
            return ResponseEntity.ok(iBon_reduction.save(br));
        }
        else
            return ResponseEntity.notFound().build();
    }


    @PutMapping("/activerDesactiverQuestion/{id}")
    public ResponseEntity<?> activerDesactiverQuestion (@PathVariable("id") long idupdate)  {
        Question q= iQuestion.getOne((long)19);
        q.setEtat(0);
        return ResponseEntity.ok(iQuestion.save(q));


      /*  if(q != null) {
            if(q.getEtat()==0){
              q.setEtat(1);
            }
            else if(q.getEtat()==1){
                q.setEtat(0);
            }
            else    if(q.getEtat()==null){
                q.setEtat(0);
            }
            return ResponseEntity.ok(iQuestion.save(q));

        }
        else
            return ResponseEntity.notFound().build();*/

    }

    //Affichage d'un bon de réduction
    @GetMapping("/GetBonReductionById/{id}")
    public ResponseEntity<?> getbonreductionbyid (@PathVariable("id") long id)  {
        Bon_Reduction br = new Bon_Reduction();
        br = iBon_reduction.getBon_ReductionById(id);
        if(br != null) {
            return ResponseEntity.ok(iBon_reduction.getBon_ReductionById(br.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'un Bon de réduction avec affichage des autres Bons de réduction restants
    @DeleteMapping("/DeleteBonReductionById/{id}")
    public ResponseEntity<?> deletebonreductionbyid (@PathVariable("id") long id)  {
        Bon_Reduction br = new Bon_Reduction();
        br = iBon_reduction.getBon_ReductionById(id);
        if(br != null) {
            iBon_reduction.delete(br);
            return ResponseEntity.ok(iBon_reduction.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    /* Section Ingédients ````````````````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IIngredient iIngredient;

    // Affichage de tous les ingrédients
    @GetMapping("/allIngredients")
    public ResponseEntity<?> allingredients ()  {
        return ResponseEntity.ok(iIngredient.findAll());
    }

    //Création d'un Ingrédient
    @PostMapping("/createIngredient")
    public ResponseEntity<?> createingredient (Ingredient ingredient)  {
        return ResponseEntity.ok(iIngredient.save(ingredient));
    }

    @PostMapping("/createIngredient/{ingredient}/{reponse}")
    public ResponseEntity<?> createingredient2(@PathVariable("ingredient") String ingredient, @PathVariable("reponse") long reponse)  {
        Reponse q = iReponse.getReponseById(reponse);
        if(q!=null){
            Ingredient sr =new Ingredient();
            sr.setReponse(q);
            sr.setIngredient(ingredient);
            return ResponseEntity.ok(iIngredient.save(sr));

        }
        else{
            return ResponseEntity.notFound().build();
        }

    }



    // Mis à jour des Ingredients
    @PostMapping("/updateIngredient/{id}")
    public ResponseEntity<?> updateingredient (@PathVariable("id") long idupdate, Ingredient ingredient )  {
        Ingredient ig = new Ingredient();
        ig = iIngredient.getIngredientById(idupdate);
        if(ig != null) {
            ig.setIngredient(ingredient.getIngredient());
            return ResponseEntity.ok(iIngredient.save(ig));
        }
        else
            return ResponseEntity.notFound().build();
    }


    //Affichage d'un Ingredient
    @GetMapping("/GetIngredientById/{id}")
    public ResponseEntity<?> getIngredientbyid (@PathVariable("id") long id)  {
        Ingredient ig = new Ingredient();
        ig = iIngredient.getIngredientById(id);
        if(ig != null) {
            return ResponseEntity.ok(iIngredient.getIngredientById(ig.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'un Admin avec affichage des autres admins restants
    @DeleteMapping("/DeleteIngredientById/{id}")
    public ResponseEntity<?> deleteingredientbyid (@PathVariable("id") long id)  {
        Ingredient ig = new Ingredient();
        ig = iIngredient.getIngredientById(id);
        if(ig != null) {
            iIngredient.delete(ig);
            return ResponseEntity.ok(iIngredient.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }


    /* Section Paiement ```````````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IPaiement iPaiement;

    // Affichage de tous les paiements
    @GetMapping("/allPaiements")
    public ResponseEntity<?> allpaiements ()  {
        return ResponseEntity.ok(iPaiement.findAll());
    }

    //Création d'un Paiement
    @PostMapping("/createPaiement")
    public ResponseEntity<?> createpaiement (Paiement paiement)  {
        return ResponseEntity.ok(iPaiement.save(paiement));
    }

    // Mis à jour des Paiements
    @PostMapping("/updatePaiement/{id}")
    public ResponseEntity<?> updatepaiement (@PathVariable("id") long idupdate, Paiement paiement )  {
        Paiement p = new Paiement();
        p= iPaiement.getPaiementById(idupdate);
        if(p != null) {
            p.setCvv(paiement.getCvv());
            p.setEmail(paiement.getEmail());
            p.setNom(paiement.getNom());
            p.setNumcarte(paiement.getNumcarte());
            p.setPassword(paiement.getPassword());
            p.setPrenom(paiement.getPrenom());
            return ResponseEntity.ok(iPaiement.save(p));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'un paiement
    @GetMapping("/GetPaiementById/{id}")
    public ResponseEntity<?> getPaiementbyid (@PathVariable("id") long id)  {
        Paiement p = new Paiement();
        p = iPaiement.getPaiementById(id);
        if(p != null) {
            return ResponseEntity.ok(iPaiement.getPaiementById(p.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }


    //Suppression d'un paiement avec affichage des autres paiements restants
    @DeleteMapping("/DeletePaiementById/{id}")
    public ResponseEntity<?> deletepaiementbyid (@PathVariable("id") long id)  {
        Paiement p = new Paiement();
        p = iPaiement.getPaiementById(id);
        if(p != null) {
            iPaiement.delete(p);
            return ResponseEntity.ok(iPaiement.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    /*`Section  Question  ``````````````````````````````````````````````````````````````````````````*/
    @Autowired
    IQuestion iQuestion;

    // Affichage de toutes les questions
    @GetMapping("/allQuestions")
    public ResponseEntity<?> allquestions ()  {
        return ResponseEntity.ok(iQuestion.findAll(Sort.by(Sort.Direction.DESC, "id")));
    }

    // Affichage de toutes les questions
    @GetMapping("/questionByReponse/{id}")
    public ResponseEntity<?> responseByIdQuestion (@PathVariable("id") int id)  {
        if(iQuestion.getOne(Integer.valueOf(id).longValue()).getReponses()!=null){
            System.out.println(iQuestion.getOne(Integer.valueOf(id).longValue()).getQuestion());
        return ResponseEntity.ok(iQuestion.getOne(Integer.valueOf(id).longValue()).getReponses());
        }
        else{
            return ResponseEntity.notFound().build();
        }
    }


    // Affichage de tous les ingrédients by id Reponse
    @GetMapping("/ingredientsByIdReponse/{id}")
    public ResponseEntity<?> ingredientsByIdReponse (@PathVariable("id") int id)  {
        if(iReponse.getOne(Integer.valueOf(id).longValue()).getIngredients()!=null)
        return ResponseEntity.ok(iReponse.getOne(Integer.valueOf(id).longValue()).getIngredients());
                else{
              return ResponseEntity.notFound().build();
        }
    }

    // Affichage de tous les ingrédients by id Reponse
    @GetMapping("/sousreponsesByIdReponse/{id}")
    public ResponseEntity<?> sousreponseByIdReponse (@PathVariable("id") int id)  {
        if(iReponse.getOne(Integer.valueOf(id).longValue()).getSousreponses()!=null)
            return ResponseEntity.ok(iReponse.getOne(Integer.valueOf(id).longValue()).getSousreponses());
        else{
            return ResponseEntity.notFound().build();
        }
    }


    //Création d'une Question
    @PostMapping("/createQuestion/{Question}/{admin}")
    public ResponseEntity<?> createquestion (Question question,@PathVariable("Question") String Question,@PathVariable("admin") long admin)  {
        Admin a = iAdmin.getAdminById(admin);

        question.setQuestion(Question);
        question.setAdmin(a);
        return ResponseEntity.ok(iQuestion.save(question));
    }

    // Mis à jour des Questions
    @PutMapping("/updateQuestion/{id}/{Question}/{admin}")
    public ResponseEntity<?> updatequestion (@PathVariable("id") long idupdate, @PathVariable("admin") long admin,@PathVariable("Question") String Question,Question question )  {
        Admin a = iAdmin.getAdminById(admin);
        question.setAdmin(a);
        question.setQuestion(Question);
        question.setId(idupdate);
        iQuestion.save(question);
            return ResponseEntity.ok(iQuestion.getQuestionById(idupdate));


    }

    //Affichage d'une question
    @GetMapping("/GetQuestionById/{id}")
    public ResponseEntity<?> getQuestionbyid (@PathVariable("id") long id)  {
        Question q = new Question();
        q = iQuestion.getQuestionById(id);
        if(q != null) {
            return ResponseEntity.ok(iQuestion.getQuestionById(q.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'une Question  avec affichage des autres questions restants
    @DeleteMapping("/DeleteQuestionById/{id}")
    public ResponseEntity<?> deletequestionbyid (@PathVariable("id") long id)  {
        Question q = iQuestion.getOne(id);
        if(q != null) {
            iQuestion.delete(q);
            return ResponseEntity.ok(iQuestion.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }


    /*Section Reponse ```````````````````````````````````````````````````````````````````````````````````````````````*/
    @Autowired
    IReponse iReponse;

    // Affichage de toutes les réponses
    @GetMapping("/allReponses")
    public ResponseEntity<?> allreponses ()  {
        return ResponseEntity.ok(iReponse.findAll());
    }

    //Création d'une Réponse
    @PostMapping("/createReponse")
    public ResponseEntity<?> createreponse (Reponse reponse)  {
        return ResponseEntity.ok(iReponse.save(reponse));
    }

    @PostMapping("/createReponse/{duree1}/{duree2}/{titre}/{titre2}/{image1}/{image2}/{questions}")
    public ResponseEntity<?> createreponse2(@PathVariable("duree1") String duree1, @PathVariable("duree2") String duree2,@PathVariable("titre") String titre,@PathVariable("titre2") String titre2,@PathVariable("image2") String image2,@PathVariable("image1") String image1,@PathVariable("questions") Long questions)  {
     Question q = iQuestion.getQuestionById(questions);
     if(q!=null){
         Reponse r = new Reponse();
         r.setDuree1(duree1);
         r.setDuree2(duree2);
         r.setImage1(image1);
         r.setImage2(image2);
         r.setQuestions(q);
         r.setTitre(titre);
         r.setTitre2(titre2);
         return ResponseEntity.ok(iReponse.save(r));
     }
     else{
         return  ResponseEntity.notFound().build();
     }
    }


    // Mis à jour des Réponses
    @PostMapping("/updateReponse/{id}")
    public ResponseEntity<?> updatereponse (@PathVariable("id") long idupdate, Reponse reponse )  {
        Reponse R = new Reponse();
        R= iReponse.getReponseById(idupdate);
        if(R != null) {
            R.setTitre(reponse.getTitre());
            R.setDuree_1(reponse.getDuree_1());
            R.setDuree_2(reponse.getDuree_2());
            return ResponseEntity.ok(iReponse.save(R));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'une réponse
    @GetMapping("/GetReponseById/{id}")
    public ResponseEntity<?> getReponsebyid (@PathVariable("id") long id)  {
        Reponse R = new Reponse();
        R = iReponse.getReponseById(id);
        if(R != null) {
            return ResponseEntity.ok(iReponse.getReponseById(R.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'une Réponse avec affichage des autres réponses restantes
    @DeleteMapping("/DeleteReponseById/{id}")
    public ResponseEntity<?> deletereponsebyid (@PathVariable("id") long id)  {
        Reponse R = new Reponse();
        R = iReponse.getReponseById(id);
        if(R != null) {
            iReponse.delete(R);
            return ResponseEntity.ok(iReponse.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }


    /* Section Sous Réponses ```````````````````````````````````````````````````````````````````````````*/


    @Autowired
    ISousReponse iSous_Reponse;

    // Affichage de toutes les  Sous réponses
    @GetMapping("/allSousReponses")
    public ResponseEntity<?> allsousreponses ()  {
        return ResponseEntity.ok(iSous_Reponse.findAll());
    }

    //Création d'une Sous Réponse
    @PostMapping("/createSousReponse")
    public ResponseEntity<?> createsousreponse (SousReponse sousreponse)  {
        return ResponseEntity.ok(iSous_Reponse.save(sousreponse));
    }

    @PostMapping("/createSousReponse/{sousreponse}/{reponse}")
    public ResponseEntity<?> createsousreponse2(@PathVariable("sousreponse") String sousreponse, @PathVariable("reponse") long reponse)  {
     Reponse q = iReponse.getReponseById(reponse);
     if(q!=null){
         SousReponse sr =new SousReponse();
         sr.setReponse(q);
         sr.setSousreponse(sousreponse);
         return ResponseEntity.ok(iSous_Reponse.save(sr));

     }
     else{
         return ResponseEntity.notFound().build();
     }

    }


    // Mis à jour des Sous Réponses
    @PostMapping("/updateSousReponse/{id}")
    public ResponseEntity<?> updatesousreponse (@PathVariable("id") long idupdate, SousReponse sousreponse )  {
        SousReponse SR = new SousReponse();
        SR = iSous_Reponse.getSous_ReponseById(idupdate);
        if(SR != null) {
            SR.setSousreponse(sousreponse.getSousreponse());
            return ResponseEntity.ok(iSous_Reponse.save(SR));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'une Sous réponse
    @GetMapping("/GetSousReponseById/{id}")
    public ResponseEntity<?> getSousReponsebyid (@PathVariable("id") long id)  {
        SousReponse SR = new SousReponse();
        SR = iSous_Reponse.getSous_ReponseById(id);
        if(SR != null) {
            return ResponseEntity.ok(iSous_Reponse.getSous_ReponseById(SR.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'une Sous Réponse avec affichage des autres sous réponses restantes
    @DeleteMapping("/DeleteSousReponseById/{id}")
    public ResponseEntity<?> deletesousreponsebyid (@PathVariable("id") long id)  {
        SousReponse SR = new SousReponse();
        SR = iSous_Reponse.getSous_ReponseById(id);
        if(SR != null) {
            iSous_Reponse.delete(SR);
            return ResponseEntity.ok(iSous_Reponse.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }






    /* Section Type Abonnements ```````````````````````````````````````````````````````````````````````*/


    @Autowired
    IType_abonnement iType_abonnement;

    // Affichage de tous les types d'abonnement
    @GetMapping("/allTypeAbonnement")
    public ResponseEntity<?> alltypeabonnement ()  {
        return ResponseEntity.ok(iType_abonnement.findAll());
    }

    //Création d'un type d'abonnement
    @PostMapping("/createTypeAbonnement")
    public ResponseEntity<?> createsousreponse (Typeabonnement typeabonnement)  {
        return ResponseEntity.ok(iType_abonnement.save(typeabonnement));
    }


    // Mis à jour des types d'abonnement
    @PutMapping("/updateTypeAbonnement/{id}")
    public ResponseEntity<?> updatetypeabonnement(@PathVariable("id") long idupdate)  {
        Typeabonnement TA =iType_abonnement.getOne(idupdate);
        if(TA != null) {
            TA.setLibelle("Simple");
            TA.setPrix((float)11.90);
            TA.setType("Mensuel");

            Typeabonnement TA2 =iType_abonnement.getOne((long)2);
            TA2.setLibelle("Gold");
            TA2.setPrix((float)15.90);
            TA2.setType("Mensuel");

            Typeabonnement TA3 =iType_abonnement.getOne((long)3);
            TA3.setLibelle("Simple");
            TA3.setPrix((float)250.00);
            TA3.setType("Annuel");


            iType_abonnement.save(TA3);
            iType_abonnement.save(TA2);
            return ResponseEntity.ok(iType_abonnement.save(TA));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Affichage d'un Type D'abonnement
    @GetMapping("/GetTypeAbonnementById/{id}")
    public ResponseEntity<?> getypeabonnementbyid (@PathVariable("id") long id)  {
        Typeabonnement TA = new Typeabonnement();
        TA = iType_abonnement.getType_abonnementById(id);
        if(TA != null) {
            return ResponseEntity.ok(iType_abonnement.getType_abonnementById(TA.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    //Suppression d'un Type d'abonnement avec affichage des autres types d'abonnement restants
    @DeleteMapping("/DeleteTypeAbonnementById/{id}")
    public ResponseEntity<?> deletetypeabonnementbyid (@PathVariable("id") long id)  {
        Typeabonnement TA = new Typeabonnement();
        TA = iType_abonnement.getType_abonnementById(id);
        if(TA != null) {
            iType_abonnement.delete(TA);
            return ResponseEntity.ok(iType_abonnement.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }





    /*Section User ``````````````````````````````````````````````````````````````````````````````````*/


    @Autowired
    IUser iUser;

    // Affichage de tous les utilisateurs
    @GetMapping("/allUsers")
    public ResponseEntity<?> alluser ()  {
        return ResponseEntity.ok(iUser.findAll(Sort.by(Sort.Direction.DESC, "id")));
    }

    //Création d'un utilisateur
    @PostMapping("/createUser")
    public ResponseEntity<?> createuser (Utilisateur user)  {
        return ResponseEntity.ok(iUser.save(user));
    }


    // Mis à jour des informations d'un utilisateur
    @PostMapping("/updateUser/{id}")
    public ResponseEntity<?> updateuser(@PathVariable("id") long idupdate, Utilisateur user )  {
        Utilisateur U = new Utilisateur();
        U = iUser.getUserById(idupdate);
        if(U != null) {
            U.setNom(user.getNom());
            U.setPassword(user.getPrenom());
            U.setCivil(user.getCivil());
            U.setEmail(user.getEmail());
    //        U.setPassword(user.getPassword());
            return ResponseEntity.ok(iUser.save(U));
        }
        else
            return ResponseEntity.notFound().build();
    }



    //Affichage des infromations d'un utilisateur
    @GetMapping("/GetUserById/{id}")
    public ResponseEntity<?> getuserbyid (@PathVariable("id") long id)  {
        Utilisateur U = new Utilisateur();
        U = iUser.getUserById(id);
        if(U != null) {
            return ResponseEntity.ok(iUser.getUserById(U.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }



    //Suppression d'un utilisateur avec affichage des autres utilisateurs restants
    @DeleteMapping("/DeleteUserById/{id}")
    public ResponseEntity<?> deleteuserbyid (@PathVariable("id") long id)  {
        Utilisateur U = new Utilisateur();
        U = iUser.getUserById(id);
        if(U != null) {
            iUser.delete(U);
            return ResponseEntity.ok(iUser.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }



    // Service Inscription

    @PostMapping("/inscription")
    public ResponseEntity inscription (@RequestBody Utilisateur user)
    {
        if(user == null)
        {
            return ResponseEntity.badRequest().body("Impossible d'ajouter  un utilisateur avec des champs vides");
        }
        return ResponseEntity.ok(iUser.save(user));
    }



    @Autowired
    private IRole iRole;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(JwtRequest authenticationRequest) {

        final UserDetails details = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());
        Authentication authentication = null;
        try {
            authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtTokenUtil.generateToken(details);
            Utilisateur ut = iUser.findByUsername(details.getUsername());
            Admin a = iAdmin.findByUsername(details.getUsername());

            if (details != null)
                  if(ut!=null){
                      return ResponseEntity.ok(new ResponseJwt(jwt,details.getUsername(), details.getAuthorities(),ut.getAbonnements().isEtat(),ut.getEmail()));
                  }
            else {
                      return ResponseEntity.ok(new ResponseJwt(jwt,details.getUsername(), details.getAuthorities(),a.getEmail()));

                  }
                      return ResponseEntity.ok(new ErrorResponse("INVALID_CREDENTIALS"));
        } catch (DisabledException e) {
            return ResponseEntity.ok(new ErrorResponse("USER_DISABLED"));
        } catch (BadCredentialsException e) {
            return ResponseEntity.ok(new ErrorResponse("INVALID_CREDENTIALS"));
        }
    }


    /* Section Video ````````````````````````````````````````````````````````````````````````````````````````````````*/

    @Autowired
    IVideo iVideo;

    //Création d'une video
    @PostMapping("/createVideo")
    public ResponseEntity<?> createvideo (Video video)  {
        return ResponseEntity.ok(iVideo.save(video));
    }


    // Affichage d'une vidéo
    @GetMapping("/GetVideoById/{id}")
    public ResponseEntity<?> getvideobyid (@PathVariable("id") long id)  {
        Video V = new Video();
        V = iVideo.getVideoById(id);
        if(V != null) {
            return ResponseEntity.ok(iVideo.getVideoById(V.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @Autowired
    IAstuce iAstuce;

    //Création d'une astuce
    @PostMapping("/createAstuce")
    public ResponseEntity<?> createAstuce (Astuce astuce)  {
        return ResponseEntity.ok(iAstuce.save(astuce));
    }

    @PutMapping("/updateAstuce/{id}/{libelle}/{admin}")
    public ResponseEntity<?> updateAstuce (@PathVariable("id") long idupdate,@PathVariable("admin") long admin,@PathVariable("libelle") String libelle, Astuce astuce)  {
        Astuce tp = new Astuce();
        Admin a = iAdmin.getAdminById(admin);
        tp = iAstuce.getAstuceById(idupdate);
        if(tp != null) {
            tp.setLibelle(libelle);
            tp.setAdmin(a);
            return ResponseEntity.ok(iAstuce.save(tp));
        }
        else
            return ResponseEntity.notFound().build();
    }


    //All astuces
    @GetMapping("/allAstuce")
    public ResponseEntity<?> allAstuce ()  {
        return ResponseEntity.ok(iAstuce.findAll());
    }

    @DeleteMapping("/DeleteAstuceById/{id}")
    public ResponseEntity<?> deletetastucebbyid (@PathVariable("id") long id)  {
        Astuce tp = new Astuce();
        tp = iAstuce.getAstuceById(id);
        if(tp != null) {
            iAstuce.delete(tp);
            return ResponseEntity.ok(iAstuce.findAll());
        }
        else
            return ResponseEntity.notFound().build();
    }

    // Affichage d'une astuce
    @GetMapping("/AstuceyId/{id}")
    public ResponseEntity<?> getAstuceById (@PathVariable("id") long id)  {
        Astuce a = new Astuce();
        a = iAstuce.getAstuceById(id);
        if(a != null) {
            return ResponseEntity.ok(iAstuce.getAstuceById(a.getId()));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/getBonByCode/{code}")
    public ResponseEntity<?> getBonByCode (@PathVariable("code") String code)  {
        Bon_Reduction b = new Bon_Reduction();
        b = iBon_reduction.findByCode(code);
        if(b != null) {
            return ResponseEntity.ok(iBon_reduction.findByCode(code));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/getUtilisateurByEmail/{email}")
    public ResponseEntity<?> getUserByEmail (@PathVariable("email") String email)  {
        Utilisateur b = new Utilisateur();
        b = iUser.findByEmail(email);
        if(b != null) {
            return ResponseEntity.ok(iUser.findByEmail(email));
        }
        else
            return ResponseEntity.notFound().build();
    }

    @GetMapping("/getUtilisateurByUsername/{username}")
    public ResponseEntity<?> getUserByUsername (@PathVariable("username") String username)  {
        Utilisateur b = new Utilisateur();
        b = iUser.findByUsername(username);
        if(b != null) {
            return ResponseEntity.ok(iUser.findByUsername(username));
        }
        else
            return ResponseEntity.notFound().build();
    }


    @ResponseStatus(HttpStatus.CREATED)
        @PostMapping("/addUserClient")
    public ResponseEntity<?> addClient2(Utilisateur utilisateur) {
        Utilisateur t = new Utilisateur();
        Role r = iRole.getOne(Integer.valueOf(2).longValue());
        t = utilisateur;
        t.setRole(r);
        if(t != null)
        {
            t.setPassword(encoder.encode(t.getPassword()));
            return ResponseEntity.ok(iUser.save(t));
        }
        else{
            return ResponseEntity.badRequest().body("Impossible d'ajouter  un utilisateur avec des champs vides");
        }

    }

    @Autowired
    private FileStorageService storageService;

    @Autowired
    private FileDBRepository FileDBRepository;

    @PostMapping("/upload")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            storageService.store(file);

            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getId())
                    .toUriString();

            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        FileDB fileDB = storageService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }

    @GetMapping("/deletefiles/{id}")
    public ResponseEntity<byte[]> deleteFile(@PathVariable String id) {
       FileDB fileDB = storageService.getFile(id);

        FileDBRepository.delete(fileDB);

        return ResponseEntity.ok().build();
    }
}

