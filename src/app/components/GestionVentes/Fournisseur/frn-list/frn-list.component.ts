import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur.model';
import { MatTableDataSource } from '@angular/material';
import { FournisseurService } from 'src/app/services/Fournisseur/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frn-list',
  templateUrl: './frn-list.component.html',
  styleUrls: ['./frn-list.component.css']
})
export class FrnListComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];
  FrnList = new MatTableDataSource<Fournisseur>();

  displayedColumns: string[] = ['id','nom', 'nomCourt', 'ville', 'adresse', 'telFix', 'telMobile', 'telFax', 'email',  'Actions'];

  constructor(private fournisseurService: FournisseurService,
    private router: Router) {
      this.getAllFournisseurs();
    }

  ngOnInit() {
    this.getAllFournisseurs();
    console.log('init ca marche')
  }

  getAllFournisseurs() {

    this.fournisseurService.findAll().subscribe( response => {
      if(!response) {return;} 
      console.log(response);
      this.FrnList = new MatTableDataSource (response as any);
    });
  }

  edit(fournisseur: Fournisseur) {
    this.fournisseurService.populateForm(fournisseur);
    this.router.navigateByUrl('/fournisseurs/edit');
    this.getAllFournisseurs();
  }

  delete(id) {
    if (this.confimDelete()) {
      this.fournisseurService.delete(id)
        .subscribe(() => {
          //this.fournisseurs = this.fournisseurs.filter(fournisseur=>fournisseur.id!=id);
          this.getAllFournisseurs();
          console.log('delete ca marche')
        });
    }
  }

  confimDelete() {
    return confirm('DELETE THIS ROW ?');
    
    
  }

}
