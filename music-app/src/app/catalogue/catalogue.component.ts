import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'music-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit{
  catalogue: any;
  sort: boolean;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.http.get('http://localhost:3000/api/album/catalogue/' + this.sort).subscribe(data => {
      this.catalogue = data;
   });
 }
}
