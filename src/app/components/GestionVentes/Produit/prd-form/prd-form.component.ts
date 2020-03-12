import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/Produit/produit.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-prd-form',
  templateUrl: './prd-form.component.html',
  styleUrls: ['./prd-form.component.css']
})
export class PrdFormComponent implements OnInit {

  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit() {
  }

  onClear(){
    this.produitService.initializeFormGroup();
    this.produitService.form.reset();
  }

  add(produit){
    this.produitService.add(produit)
    .subscribe((user)=>{
      this.router.navigateByUrl('/produits');
    });
  }

  onSubmit(){
    if(this.produitService.form.valid){
      if (!this.produitService.form.get('id').value) {
        this.add(this.produitService.form.value);
      } else {
        this.update(this.produitService.form.value);
      }
      this.produitService.form.reset();
      this.produitService.initializeFormGroup();
      this.router.navigate(['/produits']);
    }
  }

  update(produit) {
    this.produitService.update(produit)
      .subscribe((user) => {
        this.router.navigateByUrl('/produits');
      });
  }

  produits :Produit[] = []

  delete(id){
    this.produitService.delete(id).subscribe(()=>{
      this.produits = this.produits.filter(user=>user.id!=id);
      //this.notification.openSnackBar("success Delete...!")
      //this.fetchUsers();

    })
  }

}
