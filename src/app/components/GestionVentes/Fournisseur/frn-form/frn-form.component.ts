import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/Fournisseur/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-frn-form',
  templateUrl: './frn-form.component.html',
  styleUrls: ['./frn-form.component.css']
})
export class FrnFormComponent implements OnInit {

  constructor(private fournisseurService: FournisseurService,
    private router: Router) { }

  ngOnInit() {
  }

  onClear(){
    this.fournisseurService.initializeFormGroup();
    this.fournisseurService.form.reset();
  }

  add(fournisseur){
    this.fournisseurService.add(fournisseur)
    .subscribe((user)=>{
      this.router.navigateByUrl('/fournisseurs');
    });
  }

  onSubmit(){
    if(this.fournisseurService.form.valid){
      if (!this.fournisseurService.form.get('id').value) {
        this.add(this.fournisseurService.form.value);
      } else {
        this.update(this.fournisseurService.form.value);
      }
      this.fournisseurService.form.reset();
      this.fournisseurService.initializeFormGroup();
      this.router.navigate(['/fournisseurs']);
    }
  }

  update(fournisseur) {
    this.fournisseurService.update(fournisseur)
      .subscribe((user) => {
        this.router.navigateByUrl('/fournisseurs');
      });
  }

  fournisseurs :Fournisseur[] = []

  delete(id){
    this.fournisseurService.delete(id).subscribe(()=>{
      this.fournisseurs = this.fournisseurs.filter(user=>user.id!=id);
      //this.notification.openSnackBar("success Delete...!")
      //this.fetchUsers();

    })
  }

}
