import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'watch finding nemo', 'it is interesting'),
    new Goal(2, 'buy cookies', 'i love cookies'),
    new Goal(3, 'get new phone case', 'diana broke her case'),
    new Goal(4, 'get dog food', 'food is over'),
    new Goal(5, 'solve math homework', 'math is good'),
    new Goal(6, 'plot my world domination plan', 'oooh nice'),
  ];
  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: boolean, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
