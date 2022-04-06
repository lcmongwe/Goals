import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    { id: 1, name: 'watch finding nemo', description: 'it is interesting' },
    { id: 2, name: 'buy cookies', description: 'i love cookies' },
    { id: 3, name: 'get new phone case', description: 'diana broke her case' },
    { id: 4, name: 'get dog food', description: 'food is over' },
    { id: 5, name: 'solve math homework', description: 'math is good' },
    { id: 6, name: 'plot my world domination plan', description: 'oooh nice' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
