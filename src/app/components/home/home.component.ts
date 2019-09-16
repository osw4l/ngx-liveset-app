import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveOn = false;
  videos = [];
  songs = [];
  current_video = null;
  sockets = [];
  socket;
  constructor(public api: ApiService) {
  }

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
    if (this.liveOn) {
      this.markActive(null);
      this.current_video = null;
      this.openWsConnection();
    } else {
      const action = 'stop';
      this.socket.send(JSON.stringify({url: null, action}));
      this.closeWsConnection();
    }
  }

  play(id, url, index) {
    console.log(`${id} - ${url} - ${index}`);
    this.current_video = url;
    this.markActive(index);
    const action = 'play';
    this.socket.send(JSON.stringify({url, action}));
  }

  markActive(index) {
    this.videos.forEach((value, pos) => {
      if (index === pos) {
        this.videos[pos]['active'] = true;
      } else {
        this.videos[pos]['active'] = false;
      }
    });
  }

  openWsConnection() {
    this.socket = new WebSocket(`${environment.ws_server}/videos/`);
    this.sockets.push(this.socket);
  }

  closeWsConnection() {
    for (const s in this.sockets) {
      this.sockets[s].close();
    }
  }


}
