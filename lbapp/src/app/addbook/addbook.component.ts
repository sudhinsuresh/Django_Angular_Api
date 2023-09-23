import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  constructor(private postapi: ApicallService, private route:Router,private router:ActivatedRoute) {}
  data={
    'name':'',
    'auther':'',
    'price':''
  }
  id:any;
  ngOnInit(){
    this.id=this.router.snapshot.paramMap.get('id')
    console.log(this.id)
    if(this.id)
    this.postapi.getbooksbyid(this.id).subscribe((res)=>{
      console.log(res);
      this.data=res
    })

  }
  
  onsubmit(){
    if(this.id){
      this.postapi.editbookbyid(this.id,this.data).subscribe((res)=>{
        console.log(res)
        this.route.navigate(['viewbooks'])
      })

    }else{
      console.log(this.data)
    this.postapi.postbook(this.data).subscribe((res)=>{
      console.log(res)
      this.route.navigate(['viewbooks'])

    })
      
    }
    
  }
}
