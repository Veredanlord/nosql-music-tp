import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'music-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
  albums: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
     this.http.get('http://localhost:3000/api/album').subscribe(data => {
      this.albums = data;
      console.log(this.albums);
   });
 }
}
