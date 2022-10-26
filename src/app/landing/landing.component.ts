import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  shipList1 = [
    {
      imgSrc:"assets/slider/slider-taurus.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider-msr.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider-hull.webp",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider-herc.jpg",
      imgAlt:""
    }
  ];

  shipList2 = [
    {
      imgSrc:"assets/slider/slider-m50.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider-nomad.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider13.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/slider/slider-mole.jpg",
      imgAlt:""
    }
  ];

  salvageList = [
    {
      imgSrc:"assets/images/salvage/salvage-1.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/images/salvage/salvage-1-2.jpg",
      imgAlt:""
    },
    {
      imgSrc:"assets/images/salvage/salvage-1-3.jpg",
      imgAlt:""
    }
  ];

  cargoList = [
    {
      imgSrc:"assets/images/cargo/cargo-1-2.webp",
      imgAlt:""
    },
    {
      imgSrc:"assets/images/cargo/cargo-2.png",
      imgAlt:""
    },
    {
      imgSrc:"assets/images/cargo/nomad-1.webp",
      imgAlt:""
    }
  ];

  appearOnScrollOptions = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px"
  };

  

  appearOnScroll: IntersectionObserver;

  ngAfterViewInit(): void {
    this.appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach(entry => {
          if(!entry.isIntersecting){
            return;
          }else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
          }
        })
      },
      this.appearOnScrollOptions
    );

    let faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
      this.appearOnScroll.observe(fader);
    });

  }

  ngOnInit(): void {

  }

}
