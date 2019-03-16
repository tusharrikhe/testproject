import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editForm: FormGroup;

  submitted: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userservice: UserService
  ) {}

  ngOnInit() {
    if(localStorage.getItem("username")!=null){
      let userId = localStorage.getItem("editUserId");
      if(!userId)
      {
        alert('Invalid Action');
        this.router.navigate(['list-user']);
        return;
      }
    
    this.editForm = this.formBuilder.group({
      id: [],

      firstName: ["", Validators.required],

      lastName: ["", Validators.required],

      email: ["", [Validators.required, Validators.email]]
    });
    this.userservice.getusersById(+userId).subscribe(data=>
      {
        this.editForm.setValue(data)
      });
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    this.userservice
      .editUser(this.editForm.value)

      .subscribe(data => {
        alert(
          this.editForm.controls.firstName.value +
            " record is added successfully ..!"
        );

        this.router.navigate(["list-user"]);
      });
  }

}
