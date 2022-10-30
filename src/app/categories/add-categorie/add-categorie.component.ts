import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css'],
})
export class AddCategorieComponent implements OnInit {
  categorieForm = new FormGroup({
    code: new FormControl(''),
    nom: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {}
  onBack() {
    this.router.navigateByUrl('/categories');
  }
  onReset(){
    
  }
}
