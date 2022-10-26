import { Component, Input, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';

interface carouselImage {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() imageList: carouselImage[] = [];
  @Input() indicators = true;
  @Input() auto = false;
  @Input() slideInterval = 3000;
  @Input() autoDelay = 0;

  selectedIndex = 0;
  prevIndex = 0;

  constructor() { }

  ngOnInit(): void {
    if(this.auto){
      if(this.autoDelay > 0){
        setTimeout(() => {
          this.autoSlideImages();
        }, this.autoDelay);
      } else {
        this.autoSlideImages();
      }
      
    }
  }

  autoSlideImages():void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onNextClick(): void {
    if(this.selectedIndex === this.imageList.length-1){
      this.updateIndex(0);
    } else {
      this.updateIndex(this.selectedIndex + 1);
    }
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.updateIndex(this.imageList.length - 1);
    }else {
      this.updateIndex(this.selectedIndex - 1);
    }
  }

  updateIndex(index: number): void {
    this.prevIndex = this.selectedIndex;
    this.selectedIndex = index;
  }

}
