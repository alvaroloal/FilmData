import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../services/actor.service';
import { Actor } from '../../interfaces/popular-actors-response.interface';


@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
  actors: Actor[] = [];

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.actorService.getFamousActors().subscribe(
      (data) => {
        this.actors = data.results; 
      },
      
    );
  }
}
