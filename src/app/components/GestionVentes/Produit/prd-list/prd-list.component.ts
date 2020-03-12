import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/Produit/produit.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-prd-list',
  templateUrl: './prd-list.component.html',
  styleUrls: ['./prd-list.component.css']
})
export class PrdListComponent implements OnInit {

  produits: Produit[] = [];
  PrdList = new MatTableDataSource<Produit>();

  displayedColumns: string[] = ['image', 'id', 'nom', 'nomCourt', 'prixBase', 'prixVente', 'maxRemise', 'unite', 'qteInitial', 'qteActuel', 'Actions'];


  constructor(private produitService: ProduitService,
    private router: Router) {
      this.getAllProduits();
   
     }

  ngOnInit() {
    this.getAllProduits();
    console.log('init ca marche')

  }

  getAllProduits() {

    this.produitService.findAll().subscribe( response => {
      if(!response) {return;} 
      console.log(response);
      this.PrdList = new MatTableDataSource (response as any);
    });
  }

  edit(produit: Produit) {
    this.produitService.populateForm(produit);
    this.router.navigateByUrl('/produits/edit');
    this.getAllProduits();
  }

  delete(id) {
    if (this.confimDelete()) {
      this.produitService.delete(id)
        .subscribe(() => {
          //this.produits = this.produits.filter(produit=>produit.id!=id);
          this.getAllProduits();
        });
    }
  }

  confimDelete() {
    return confirm('DELETE THIS ROW ?');
    
    
  }

}
