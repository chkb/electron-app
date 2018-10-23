import { Component, OnInit } from '@angular/core';

import { moveIn } from './router.animations';
import { LocalStorageService } from './services/localstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = true;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
  }

}
