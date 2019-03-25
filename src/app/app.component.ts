import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FizzBuzz';

  input: number;
  result: string = "";

  onClick() 
  {
    console.log("Initial result = " + this.result);
    for (var i = 1; i <= this.input; i++)
    {
      if (i % 3 === 0 && i % 5 === 0) 
      {
        this.sayFizzBuzz();
      } else if (i % 3 === 0) 
      {
        this.sayFizz();
      } else if (i % 5 === 0) 
      {
        this.sayBuzz();
      } else 
      {
        this.result += i.toString() + " ";
      }
      console.log(" result = " + this.result);
    }
  }    
  
  sayFizz()
  {
    this.result += "Fizz" + " ";
  }

  sayBuzz()
  {
    this.result += "Buzz" + " ";
  }

  sayFizzBuzz() 
  {
    this.result += "FizzBuzz" + " ";
  }

}
