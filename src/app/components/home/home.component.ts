import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveOn = false;
  videos = [];
  songs = [];
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getSongs();
    this.getVideos();
  }

  getVideos() {
    this.api.getVideos().subscribe(
      videos => {
        this.videos = videos;
      });
  }

  getSongs() {
    this.api.getSongs().subscribe(
      songs => {
        this.songs = songs;
      });
  }

  goToLive() {
    const url = `${window.location.origin}/live`;
    console.log(url);
    window.open(url, '_blank');
  }

  setLive() {
    this.liveOn = !this.liveOn;
  }

}
