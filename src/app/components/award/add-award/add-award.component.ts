import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-award',
  templateUrl: './add-award.component.html',
  styleUrls: ['./add-award.component.css']
})
export class AddAwardComponent implements OnInit {

  options: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
      ) {

  }

  ngOnInit() {
  }

  AddAward() {
    this.router.navigate(['award-list'])
  }
}
