import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
    //https://5944f686cf46400011a81285.mockapi.io/vtvcab/employees
    private apiUrl = "https://5944f686cf46400011a81285.mockapi.io/vtvcab/employees";
    constructor(private _http:Http){

    }
    public getList():Observable<any[]>{
        // return this._http.get(this.apiUrl).map((response:Response){
        //     return response.json()
        // })
        return this._http.get(this.apiUrl).map((response:Response)=> response.json())

        // let employees:any[] =[
        //     {Id:1,Name:"Nguyen Van A"},
        //     {Id:2,Name:"Nguyen Van B"},
        //     {Id:3, Name :"Nguyen Van C"},
        //     {Id:4, Name :"Nguyen Van D"},
        //     {Id:5, Name :"Nguyen Van E"}
        // ]
        // return employees;
    }
}