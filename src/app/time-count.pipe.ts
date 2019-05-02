import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let currentTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getTime());

    var timeDifference = Math.abs(value-currentTime);
    return null;
  }

}
