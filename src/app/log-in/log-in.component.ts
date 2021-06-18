import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  users = [];

  constructor(private fb: FormBuilder) {}

  public form = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
  });

  ngOnInit() {
    this.form.get('email')?.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
    this.form.get('username')?.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
  }

  onSubmit() {
    
  }
}
