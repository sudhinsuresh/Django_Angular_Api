import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private reapi:ApicallService, private route:Router){}

  data={
    username:'',
    password:''

  }


  onsubmit(){
    console.log(this.data)
    this.reapi.register(this.data).subscribe((res)=>{
      console.log(res)
      this.route.navigate([''])
    })

  }

}
