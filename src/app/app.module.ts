import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { PrdFormComponent } from './components/GestionVentes/Produit/prd-form/prd-form.component';
import { PrdListComponent } from './components/GestionVentes/Produit/prd-list/prd-list.component';
import { MatTableModule } from '@angular/material';
import { ProduitService } from './services/Produit/produit.service';
import { RouterComponent } from './components/router/router.component';
import { FrnFormComponent } from './components/GestionVentes/Fournisseur/frn-form/frn-form.component';
import { FournisseurService } from './services/Fournisseur/fournisseur.service';
import { FrnListComponent } from './components/GestionVentes/Fournisseur/frn-list/frn-list.component';
import { CltFrmComponent } from './components/GestionVentes/Client/clt-frm/clt-frm.component';
import { CltListComponent } from './components/GestionVentes/Client/clt-list/clt-list.component';
import { ClientService } from './services/Client/client.service';
import { UtilisateurService } from './services/Utilisateur/utilisateur.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrdFormComponent,
    PrdListComponent,
    RouterComponent,
    FrnFormComponent,
    FrnListComponent,
    CltFrmComponent,
    CltListComponent,
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule
    
  ],
  providers: [ProduitService, FournisseurService, ClientService, UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
