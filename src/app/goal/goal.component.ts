import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(
      1,
      'watch finding nemo',
      'it is interesting',
      new Date(2020, 3, 14)
    ),
    new Goal(2, 'buy cookies', 'i love cookies', new Date(2020, 3, 14)),
    new Goal(
      3,
      'get new phone case',
      'diana broke her case',
      new Date(2020, 3, 14)
    ),
    new Goal(4, 'get dog food', 'food is over', new Date(2020, 3, 14)),
    new Goal(5, 'solve math homework', 'math is good', new Date(2020, 3, 14)),
    new Goal(
      6,
      'plot my world domination plan',
      'oooh nice',
      new Date(2020, 3, 14)
    ),
  ];
  toggleDetails(index: number) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete: boolean, index: number) {
    if (isComplete) {
      this.goals.splice(index, 1);
    }
  }

  deleteGoal(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
      }
    }
  }
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor() {}

  ngOnInit(): void {}
}
