import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  @Input() videoSource;
  constructor() { }

  ngOnInit() {
  }

  startVideo(event: any) {
    this.videoplayer.nativeElement.play();
  }

  stopVideo(event: any) {
    this.videoplayer.nativeElement.pause();
  }

}
