import { Component, OnInit } from '@angular/core';

type CrewMember = {
  tag: string;
  imageUrl: string;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  constructor() { }

  crewMembers: CrewMember[] = [
    {
      tag: "Spud_McTater",
      imageUrl: ""
    },
    {
      tag: "Gladiator0607",
      imageUrl: ""
    },
    {
      tag: "Dipshit",
      imageUrl: ""
    },
    {
      tag: "Dumbass",
      imageUrl: ""
    },
    {
      tag: "FuckFarter",
      imageUrl: ""
    },
    {
      tag: "G00b3r",
      imageUrl: ""
    },
    {
      tag: "1234567",
      imageUrl: ""
    },
    {
      tag: "TurtBurglar",
      imageUrl: ""
    },
  ];

  ngOnInit(): void {
  }

}
