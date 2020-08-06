import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from "@angular/material/icon";

import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageSource;

  constructor(private sanitizer: DomSanitizer,private matIconRegistry: MatIconRegistry,private renderer: Renderer2) {}

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      "img",
      this.sanitizer.bypassSecurityTrustResourceUrl("../assets/img.svg")
    );
  }

  onClickMe(event) {
    let element = document.getElementById(event.id);
    var attributo = element.getAttribute("title");
    alert(attributo);

    this.renderer.setStyle(event, 'fill', 'green');

  }

}
