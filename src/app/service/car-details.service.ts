import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../model/Model';
import { Option } from '../model/Option';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {

  constructor(private http:HttpClient) { }

  getCarModels():Observable<Array<Model>>
  {
    return this.http.get<Array<Model>>('/models');
  }
  
  getCarOptions(id: string):Observable<Option>
  {
    return this.http.get<Option>(`/options/${id}`);
  }
}
