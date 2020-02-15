import {Component, OnInit, TemplateRef} from '@angular/core';
import {GerantService} from '../service/gerant.service';
import {Router} from '@angular/router';
import {
  NbDialogService,
  NbComponentStatus,
  NbGlobalPosition,
  NbGlobalPhysicalPosition,
  NbToastrService
} from '@nebular/theme';
import {NgForm} from '@angular/forms';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'ngx-liste-gerant',
  templateUrl: './liste-gerant.component.html',
  styleUrls: ['./liste-gerant.component.scss']
})
export class ListeGerantComponent implements OnInit {
  gerant: any;
  listetpeUser;
  private magasin: string;
  public modifGerant;
  public gerAsupprim;
  p: number = 1;
  filterString = '';
  public id;

  constructor(public service: GerantService, private route: Router, private dialogService: NbDialogService, private toastrService: NbToastrService) {
  }

  config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 4000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'success';

  title = 'Modification!';
  content = `Gérant modifié avec succès!`;


  config2: ToasterConfig;

  destroyByClick2 = true;
  duration2 = 4000;
  hasIcon2 = true;
  position2: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates2 = false;
  status2: NbComponentStatus = 'danger';

  title2 = 'Modification!';
  content2 = `Erreur lors de la modification!`;

  ngOnInit() {

    this.magasin = localStorage.getItem('idmagasin');
    this.service.getAllGerantByMagasin(this.magasin).subscribe((data) => {
      this.gerant = data;
      console.log(this.gerant)
    }, (err) => {
      console.log(err);
    });
    this.service.getAllTypeUser().subscribe(data => {
      this.listetpeUser = data;
      console.log(this.listetpeUser)
    }, err => {
      console.log(err)
    });
    this.resetForm()
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? ` Gérant` : '';


    this.toastrService.show(
      body,
      `Modification ${titleContent}`,
      config);
  }

  private showToastErreur(type: NbComponentStatus, title2: string, body: string) {
    const config2 = {
      status: type,
      destroyByClick: this.destroyByClick2,
      duration: this.duration2,
      hasIcon: this.hasIcon2,
      position: this.position2,
      preventDuplicates: this.preventDuplicates2,
    };
    const titleContent2 = title2 ? ` Gérant` : '';


    this.toastrService.show(
      body,
      `Modification  ${titleContent2}`,
      config2);
  }

  //Pop Suppression
  openWithoutEscClose(dialogSup: TemplateRef<any>, idGer) {


    this.id = idGer;

    this.service.GetGerantById(this.id).subscribe(data => {
      this.gerAsupprim = data;
      console.log(this.gerAsupprim)
    }, err => {
      console.log(err);
    });
    this.dialogService.open(
      dialogSup,
      {
        context: 'Voulez vous vraiment supprimer le gérant ',
        hasBackdrop: false,
      });
  }

  //Delete Gerant
  deleteGerant(c) {
    console.log(c);
    this.service.deleteGer(c).subscribe(res => {
      if (res['success'] == true) {
        location.reload();
      }
    });
  }


  //Modification ==$ reset Formulaire
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();

    this.service.ger = {

      nom: '',
      prenom: '',
      email: '',
      password: '',
      tel: '',
      typeUser_id: 0,
      login: ''
    }
  }


  openWithoutEscClose2(dialog: TemplateRef<any>, idGer) {


    this.id = idGer;

    this.service.GetGerantById(this.id).subscribe((data) => {
      this.modifGerant = data;
      console.log("affichage");
      console.log(this.modifGerant)
    }, (err) => {
      console.log(err);
    });
    this.dialogService.open(
      dialog,
      {

        hasBackdrop: false,
      });
  }

  ModifierGerant(form: NgForm) {
    // console.log(form);
    this.modiformulaire(form);
    // this.resetForm(form);
  }

  modiformulaire(form: NgForm) {

    this.service.updateGerant(form.value, this.id).subscribe(res => {
        console.log(res);
        if (res['success'] == false) {
          this.showToastErreur(this.status2, this.title2, this.content2);

        } else {

          if (res['user'] != "") {
            this.showToast(this.status, this.title, this.content);
            this.resetForm(form);
            location.reload();
          }
        }
      }, error1 => {
        console.log(error1['ok'])
        if (error1['ok'] == false) {
          this.showToastErreur(this.status2, this.title2, this.content2);
        }
      }
    );
  }
}
