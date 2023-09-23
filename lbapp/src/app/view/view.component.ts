import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;

  constructor(private apiService: ApicallService, private router: Router) {}

  ngOnInit() {
    this.apiService.getbooks().subscribe((res) => {
      this.data = res;
    });
  }

  details(id: any) {
    if (id !== undefined) {
      this.router.navigate(['/detail', id]);
    } else {
      console.error('Invalid or undefined ID.');
    }
  }
  edit(id:any){
    console.log(id)
    this.router.navigate(['edit',id])
  }


  delete(id:any){
    this.apiService.deletebookbyid(id).subscribe((res)=>{
      console.log(res)
      this.ngOnInit()
    })
  }


}

