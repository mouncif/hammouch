import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { MatTableDataSource } from '@angular/material';
import { ClientService } from 'src/app/services/Client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clt-list',
  templateUrl: './clt-list.component.html',
  styleUrls: ['./clt-list.component.css']
})
export class CltListComponent implements OnInit {

  clients: Client[] = [];
  CltList = new MatTableDataSource<Client>();

  displayedColumns: string[] = ['nom', 'prenom', 'statut', 'tel', 'email', 'adresse', 'ville',  'Actions'];

  constructor(private clientService: ClientService,
    private router: Router) {
      this.getAllClients();
    }

  ngOnInit() {
    this.getAllClients();
    console.log('init ca marche')
  }

  getAllClients() {

    this.clientService.findAll().subscribe( response => {
      if(!response) {return;} 
      console.log(response);
      this.CltList = new MatTableDataSource (response as any);
    });
  }

  edit(client: Client) {
    this.clientService.populateForm(client);
    this.router.navigateByUrl('/client/edit');
  }

  delete(client) {
    if (this.confimDelete()) {
      this.clientService.delete(client.id)
        .subscribe(() => {
          //this.fournisseurs = this.fournisseurs.filter(fournisseur=>fournisseur.id!=id);
          this.getAllClients();
        });
    }
  }

  confimDelete() {
    return confirm('DELETE THIS ROW ?');
    
    
  }

}
