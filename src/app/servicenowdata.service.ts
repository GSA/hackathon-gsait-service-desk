import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'authorization':'Basic YWRtaW46V2VsY29tZTEyMw==',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    //"accept-encoding": "gzip, deflate",
    'Cache-Control': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/json'


  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicenowdataService {

  constructor(private http: HttpClient) { }

  getIncidents() {
    //return this.http.get('https://reqres.in/api/users')
    return this.http.get('https://dev52217.service-now.com/api/now/table/incident?sysparm_query=active=true^ORDERBYnumber^ORDERBYDESCnumber',httpOptions)  
  }

  postIncident(data) {
   
    return this.http.post('https://dev52217.service-now.com/api/now/table/incident',data,httpOptions)  
  }
  getSpecificIncidents(id) {
    return this.http.get('https://dev52217.service-now.com/api/now/table/incident/'+id,httpOptions)  
  }
  patchIncident(id,data) {
    
    return this.http.patch('https://dev52217.service-now.com/api/now/table/incident/'+id,data,httpOptions)  
  }
}
