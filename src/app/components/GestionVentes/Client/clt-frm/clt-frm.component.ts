import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/Client/client.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clt-frm',
  templateUrl: './clt-frm.component.html',
  styleUrls: ['./clt-frm.component.css']
})
export class CltFrmComponent implements OnInit {

  constructor(private clientService: ClientService,
    private router: Router) { }

  ngOnInit() {
  }

  onClear(){
    this.clientService.initializeFormGroup();
    this.clientService.form.reset();
  }

  add(client){
    this.clientService.add(client)
    .subscribe((user)=>{
      this.router.navigateByUrl('/clients');
    });
  }

  onSubmit(){
    if(this.clientService.form.valid){
      if (!this.clientService.form.get('id').value) {
        this.add(this.clientService.form.value);
      } else {
        this.update(this.clientService.form.value);
      }
      this.clientService.form.reset();
      this.clientService.initializeFormGroup();
      this.router.navigate(['/clients']);
    }
  }

  update(client) {
    this.clientService.update(client)
      .subscribe((user) => {
        this.router.navigateByUrl('/clients');
      });
  }

  clients :Client[] = []

  delete(id){
    this.clientService.delete(id).subscribe(()=>{
      this.clients = this.clients.filter(user=>user.id!=id);
      //this.notification.openSnackBar("success Delete...!")
      //this.fetchUsers();

    })
  }

}
