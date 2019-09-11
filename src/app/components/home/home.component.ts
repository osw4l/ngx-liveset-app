import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  liveOn = false;
  constructor() { }

  ngOnInit() {
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
