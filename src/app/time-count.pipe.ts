import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  // transform(value: any): number {
  //   let today:Date = new Date();
  //   let currentTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getTime());

  //   var timeDifference = Math.abs(value-currentTime);

  //   var timeDifferenceSeconds= timeDifference*0.001;

  //   if (timeDifferenceSeconds > 0 && timeDifferenceSeconds < 60){
  //     return timeDifferenceSeconds;
  //   }
  // }
  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getTime())
    var dateDifference = Math.abs(value - todayWithNoTime)// returns value in milliseconds
    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    if (dateDifferenceSeconds >= 0 && value > todayWithNoTime) {
      return dateDifferenceSeconds;
    } else {
      return 0;
    }
  }

}
