import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { calcBindingFlags } from '@angular/core/src/view/util';
import { City } from 'src/app/city';
import { DataRow } from 'src/app/data-row';
import { getLocaleCurrencyName } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  registerForm: FormGroup;

  isFirst: Boolean = true;
  cardTitle: string = 'Select Your City';

  whatt: number = 100;
  sum: number = 123;
  tva: number;
  ht: number;

  city: City;
  citys: City[];

  cityControl = new FormControl('', [Validators.required]);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      city: ['', Validators.required],
    });

    this.citys = [new City('Fes', [0.7904, 0.9414, 0.9414, 1.0242, 1.2120, 1.3998], 'RADEEF'),
    new City('casablanca', [0.8496, 1.0220, 0.0220, 1.1119, 1.3157, 1.5193], 'LYDEC'),
    new City('mohammedia', [0.8496, 1.0220, 0.0220, 1.1119, 1.3157, 1.5193], 'LYDEC'),
    new City('tanger', [0.7940, 0.8830, 0.9134, 1.0137, 1.2480, 1.4470], 'AMENDIS'),
    new City('tetouan', [0.7940, 0.8820, 0.9123, 1.0137, 1.2490, 1.4492], 'AMENDIS')];



    // auto next
    if (localStorage.city) {

      this.next();
    }


  }

  selectCity() {
    if (!this.city) {
      this.cityControl.markAsTouched(); return;
    }
    localStorage.setItem("city", this.city.name);
    this.next();
  }


  next() {

    // if city is not selected show error
    if (!this.city) {
      if (!this.citys.find(s => s.name == localStorage.city)) {
        this.isFirst = true;
        return;
      }
      this.city = this.citys.find(s => s.name == localStorage.city);
    }



    console.log(localStorage.city);
    this.cardTitle = localStorage.city;
    this.isFirst = false;
    // init
    this.calc();

  }



  calc() {
    this.ht = this.city.calcTarifHT(this.whatt);
    this.sum = this.city.calcCost(this.whatt);
    this.tva = this.city.calcTva(this.whatt);
    
  }
  save() {
   
  }
  fakeData(){
  if (!localStorage.data)
  localStorage.data = "[]";

  var obgData:DataRow[] = JSON.parse(localStorage.data) || new Array() ;
 

  let obj:DataRow = {date : new Date() , whatt : this.whatt , cost :this.sum} ;

  obgData.push( obj ) ;

  localStorage.data = JSON.stringify(obgData);;
 
  }

}
