import { Component } from '@angular/core';
import { JwtService } from '../../services/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private service: JwtService
  ){}

  ngOnInit(){
    this.sayHello();
  }
  sayHello(){
    this.service.sayHello().subscribe(
      (response) =>{
        console.log(response);
      }
    )
  }
}
