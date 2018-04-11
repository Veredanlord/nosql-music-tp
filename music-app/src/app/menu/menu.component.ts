import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'music-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  albums: Number;
  artists: Number;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/album/count').subscribe((data: Number) => {
      this.albums = data;
    });
    this.http.get('http://localhost:3000/api/artist/count').subscribe((data: Number) => {
      this.artists = data;
    });
 }
}
