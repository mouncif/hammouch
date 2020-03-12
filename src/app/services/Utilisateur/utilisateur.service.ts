import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Utilisateur } from 'src/app/models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/utilisateurs';

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profile: new FormControl(''),
    dateCreation: new FormControl(new Date),
    dateFin: new FormControl(new Date),
    photo: new FormControl(''),
    email: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      profile: '',
      dateCreation: '',
      dateFin: '',
      photo: '',
      email: '',
      
    });
  }

  findAll() {
    return this.http.get<Utilisateur[]>(this.url);
  }

  add(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(this.url, utilisateur);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  update(utilisateur) {
    return this.http.put(`${this.url}/${utilisateur.id}`, utilisateur);
  }

  populateForm(utilisateur) {
    this.form.setValue(utilisateur);
  }
}
