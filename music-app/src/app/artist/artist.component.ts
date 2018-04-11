import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'music-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit{
  artists: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.http.get('http://localhost:3000/api/artist').subscribe(data => {
      this.artists = data;
   });
 }
}
