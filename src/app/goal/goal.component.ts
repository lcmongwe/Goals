import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote: Quote;

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
        this.alertService.alertMe('The goal has been deleted');
      }
    }
  }
  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }

  constructor(
    private http: HttpClient,
    goalService: GoalService,
    alertService: AlertService
  ) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit() {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http
      .get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json')
      .subscribe(
        (data) => {
          // Succesful API request
          this.quote = new Quote(data.author, data.quote);
        },
        (err) => {
          this.quote = new Quote('Winston Churchill', 'Never never give up!');
          console.log('An error occurred');
        }
      );
  }
}
