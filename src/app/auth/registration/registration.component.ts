import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {

    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
        this.regForm.reset();
      }
    )
  }
}
