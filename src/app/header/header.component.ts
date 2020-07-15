import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement: ElementRef;
  menuPosition: any;
  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }
  sticky = false;
  imgS = false;
  Nfix = false;
  fix = true;
  Nimg = true;
  logout = true;
  logout2 = false;
  ngOnInit(): void {
  }
  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }

  ngAfterViewInit(): void {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(): void {
    const windowScroll = window.pageYOffset;
    if (windowScroll > this.menuPosition) {
      this.sticky = true;
      this.fix = false;
      this.imgS = true;
      this.Nimg = false;
      this.Nfix = true;
      this.logout = false;
      this.logout2 = true;
    } else {
      this.sticky = false;
      this.fix = true;
      this.imgS = false;
      this.Nimg = true;
      this.Nfix = false;
      this.logout = true;
      this.logout2 = false;
    }
  }
}
