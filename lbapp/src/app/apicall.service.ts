import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }
  public token:any;
  public header:any;

  getbooks() {
     this.token = localStorage.getItem('token') || '';
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    return this.http.get<any>('http://127.0.0.1:8000/bookview/', { "headers":this.header });
  }

  postbook(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/bookview/",data,{ "headers":this.header })
  }
  getbooksbyid(id:any){
    return this.http.get<any>(`http://127.0.0.1:8000/bookview/${id}`,{ "headers":this.header })
  }
  deletebookbyid(id:any){
    return this.http.delete(`http://127.0.0.1:8000/bookview/${id}`,{ "headers":this.header })
  }
  editbookbyid(id:any,data:any){
    return this.http.put<any>(`http://127.0.0.1:8000/bookview/${id}`,data,{ "headers":this.header })
  }
  register(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/users/",data,{ "headers":this.header })
  }
  
  login(data:any){
    return this.http.post<any>("http://127.0.0.1:8000/api-token-auth/",data)
  }

}
