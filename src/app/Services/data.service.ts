import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  local_service(url:any){
    return this.http.get(url);  
  }
 
  global_service(flag:any, api_path:any, data:any){ 
     // FLAG : 1 -> POST || 0 -> GET  
     if(flag > 0){   
      // EX: data = {id: this.id, dt: this.dt};  
       return this.http.post(environment.api_url + api_path, data);  
      }
       else{  
         // EX: data = 'id=' + this.id + '&dt=' + this.dt  
          var api_dt = data ? '?' + data : '';   
          return this.http.get(environment.api_url + api_path + api_dt); 
      } 
  }

          downloadsection(restid:any,menuid:any){ //download section data
            console.log(restid+" "+menuid)
            return this.http.get(environment.api_url+'/download_section?id='+restid+'&menu_id='+menuid,{responseType:'arraybuffer'})
          }
          downloadlogotopcover(restid:any){ //download all
            return this.http.get(environment.api_url+'/download_cov?id='+restid,{responseType:'arraybuffer'})
          
          }
}
