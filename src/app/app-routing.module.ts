import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrdFormComponent } from './components/GestionVentes/Produit/prd-form/prd-form.component';
import { PrdListComponent } from './components/GestionVentes/Produit/prd-list/prd-list.component';
import { FrnFormComponent } from './components/GestionVentes/Fournisseur/frn-form/frn-form.component';
import { FrnListComponent } from './components/GestionVentes/Fournisseur/frn-list/frn-list.component';
import { CltFrmComponent } from './components/GestionVentes/Client/clt-frm/clt-frm.component';
import { CltListComponent } from './components/GestionVentes/Client/clt-list/clt-list.component';


const routes: Routes = [
  { path: 'produits', component: PrdListComponent},
  { path: 'produits/add', component: PrdFormComponent},
  { path: 'produits/edit', component: PrdFormComponent},
  { path: 'fournisseurs', component: FrnListComponent},
  { path: 'fournisseurs/add', component: FrnFormComponent},
  { path: 'fournisseurs/edit', component: FrnFormComponent},
  { path: 'clients', component: CltListComponent},
  { path: 'clients/add', component: CltFrmComponent},
  { path: 'clients/edit', component: CltFrmComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }