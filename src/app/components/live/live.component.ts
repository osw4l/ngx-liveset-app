import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../environments/environment';
import {MatVideoComponent} from 'mat-video/app/video/video.component';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit, OnDestroy {
  videoSource;
  sockets = [];
  socket = null;
  loop = false;
  autoplay = false;
  @ViewChild('video', {static: false}) matVideo: MatVideoComponent;

  constructor() {
  }

  ngOnInit() {
    // this.videoSource = 'http://localhost:8000/media/1_first.mp4';
    console.log('start live ws');
    this.socket = new WebSocket(`${environment.ws_server}/videos/`);
    this.socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log(data);
      this.videoSource = data['url'];
      data['url'] = '';
      setTimeout(() => {
        if (data['action'] === 'play') {
          this.startVideo(null);
        }
        if (data['action'] === 'stop') {
          this.stopVideo(null);
        }
      }, 100);
    };
    this.sockets.push(this.socket);
  }

  startVideo(event: any) {
  }

  stopVideo(event: any) {
  }

  closeWsConnection() {
    for (const s in this.sockets) {
      this.sockets[s].close();
    }
  }

  ngOnDestroy(): void {
    this.closeWsConnection();
  }

}
