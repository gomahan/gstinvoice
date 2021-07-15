import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'GST Invoice', cols: 3, rows: 1, color: 'lightgreen',button:false},
    {text: '', cols: 3, rows: 1, color: 'white',button:false},
    {text: 'My Business', cols: 1, rows: 1, color: 'lightgreen',routeLink:'/Mybusiness'},
    {text: 'My Business Bank', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Our GST Info', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Create Product', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Create Customer', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Create Invoice', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Edit Product', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Edit Customer', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Edit Invoice', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Download Invoice', cols: 3, rows: 1, color: 'lightgreen'},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  button?:boolean;
  routeLink?:string;
}