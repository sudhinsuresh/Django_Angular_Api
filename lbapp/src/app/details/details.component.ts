import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any;

  constructor(private route: ActivatedRoute, private detailapi: ApicallService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.detailapi.getbooksbyid(this.id).subscribe(
      (res) => {
        console.log(res);
        this.data = res;
      },
      (error) => {
        console.error('Error fetching book details:', error);
      }
    );
  }
}
