import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  array = [
    {
    id: 1,
    name: "Piotr"
    },
    {
    id: 2,
    name: "Krzysiek"
    },
    {
    id: 3,
    name: "Sławek"
    }
  ]
}
