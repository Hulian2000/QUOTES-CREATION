import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let currentDay:Date = new Date();//gets current date
    let todayWithNoTime:any = new Date(currentDay.getFullYear(),currentDay.getMonth(),currentDay.getDate());
    //gets userinput date

    var dateDifference = Math.abs(todayWithNoTime-value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if(dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    } else {
      return 0;
    }

    
  }

}