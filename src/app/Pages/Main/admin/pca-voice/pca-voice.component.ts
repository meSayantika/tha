import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-pca-voice',
  templateUrl: './pca-voice.component.html',
  styleUrls: ['./pca-voice.component.css']
})
export class PcaVoiceComponent implements OnInit {
  displayedColumns: string[] = ['position','text','edit', 'sound'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  getvoiceData:any
  constructor(private http:HttpClient, public dialog: MatDialog,private activatedRoute:ActivatedRoute,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
  pcavoiceForm!: FormGroup;
  hotel_id:any
  showPrev=false
  audPath=new Audio();
  prev:any;
  stop:any;
  requestOptions:any
  ngOnInit() {
      //
   
  
    this.hotel_id=this.activatedRoute.snapshot.params['id'];
    console.log(this.hotel_id)
    this.hotel_id=atob(this.hotel_id);
    this.getVoice()
    this.stopPreview(1)

  



  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getVoice(){
    this.dataServe.global_service(0,'/pc_voice',`hotel_id=${this.hotel_id}`).subscribe(data=>{
      console.log(data)
      this.getvoiceData=data;
    
      
     
      this.putdata(this.getvoiceData.msg)

    } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
   putdata(v: any) { //assign pagination and sort header to datatable
     this.dataSource = new MatTableDataSource(v);
     this.dataSource.paginator = this.paginator;
     console.log(this.dataSource)
    // for(let i=1;i<this.getvoiceData.msg.length;i++){
      
    //   this.stopPreview(i)
    // }
 
   }
   go_to_message(v:any){
    this.router.navigate(['/main/admin/pca_voice_create',btoa(this.hotel_id),btoa(v)])
  }

  playPreview(v:any,id:any){
    this.playAudio(v)
    // for(let i=0;i<this.getvoiceData.msg.length;i++){
    //   this.prev=document.getElementById('prev'+i);
    //   this.prev.style.display='none'
    //   this.stop=document.getElementById('stop'+i);
    //   this.stop.style.display='block'
    // }
    // this.showPrev=true
    for(let i=1;i<this.getvoiceData.msg.length;i++){
      this.prev=document.getElementById('prev'+i);
      this.prev.style.display='block'
      this.stop=document.getElementById('stop'+i);
      this.stop.style.display='none'
    }
    this.prev=document.getElementById('prev'+id);
    this.prev.style!.display='none'
    this.stop=document.getElementById('stop'+id);
    this.stop.style!.display='block'
  }
  playAudio(v:any){
    this.audPath.src = environment.api_url+'/'+v
    this.audPath.load();
    this.audPath.play();
  }
  stopPreview(id:any){
    for(let i=1;i<this.getvoiceData?.msg.length;i++){
      this.prev=document.getElementById('prev'+i);
      this.prev.style.display='none'
      this.stop=document.getElementById('stop'+i);
      this.stop.style.display='block'
    }
    this.prev=document.getElementById('prev'+id);
    this.prev.style!.display='block'
    this.stop=document.getElementById('stop'+id);
    this.stop.style!.display='none'
    this.audPath.pause();

  }
}
