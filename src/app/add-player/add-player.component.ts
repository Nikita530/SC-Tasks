import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  
  public players: any;
  constructor(private fb: FormBuilder) {}

  public form = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
  });
  
  

  ngOnInit() {
    this.form.get("email")?.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
    this.form.get("username")?.valueChanges.subscribe(() => {
      console.log(this.form.value);
    });
    
    
  }

  onSubmit(){
    this.players.push(this.form.value);
  }
}
