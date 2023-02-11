import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-pca-voice-create',
  templateUrl: './pca-voice-create.component.html',
  styleUrls: ['./pca-voice-create.component.css']
})
export class PcaVoiceCreateComponent implements OnInit {
  @ViewChild('slider')slider!:ElementRef;
  constructor(private http:HttpClient, public dialog: MatDialog,private activatedRoute:ActivatedRoute,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
  id:any;
  hotel_id:any;
  pcavoiceForm!: FormGroup;
  category=''
  getVenues:any
  showButton=true
  disableVT=''
  postVoiceData:any
  audFile:any
  audFilePlay:any;
  getvoiceData:any
  voices:any
  audPath=new Audio();
  audPath_old=new Audio();
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 200;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value =100;
  vertical = false;
  tickInterval = 1;
  voiceDt:any
  disableVoice=true
  old_audio_path:any
  audFilePlay_old:any;
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;
  filteredOptions1: any;
  showButton_old=true
  showOld=false
  sliderID:any
  ngOnInit() {
    this.hotel_id=this.activatedRoute.snapshot.params['hotel_id'];
    this.hotel_id=atob(this.hotel_id);
    this.id=this.activatedRoute.snapshot.params['id'],
    this.id=atob(this.id)
    this.pcavoiceForm=this.formBuilder.group({
      rest_serve:['',Validators.required],
      menu:['',Validators.required],
      vText:['',Validators.maxLength(800)],
      disb:[''],
      aud:[''],
      voice:[''],
      speed:['']
    })
    
    this.getCat()
    console.log(this.id)
    if(this.id!=0)
    {  
      this.disableVoice=false
      this.getVoice(this.id)}
    

     this.http.get('https://www.texttovoice.online/api/GetVoices.php').subscribe(data=>{
      console.log(data)
      this.voices=data
      this.filteredOptions=data
      this.filteredOptions1=data
      console.log(this.filteredOptions)
     })


    //  this.filteredOptions = this.p.voice?.value?.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
 
  }
  play_old(){
    // play_old_au
    this.play_old_audio()
  }
  _filter(value: any){
    const filterValue = value.target.value;
    console.log(filterValue)
    const ab = this.filteredOptions1.filter((dt:any) => {
      dt.langName.match(filterValue)
      // console.log(dt.langName)
    })
    console.log(this.filteredOptions1.filter((dt:any) => {
      dt.langName.match(filterValue)
      // console.log(dt.langName)
    }));
    
    this.filteredOptions = ab
  //  this.filteredOptions=this.filteredOptions1.filter((option:any) => {
  //     option.langName.includes(filterValue) 
  //     console.log(option.langName.includes(filterValue))
     
  // });
  console.log(this.filteredOptions)
  }
  getCat(){
    // this.disableVoice=true
    this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=${this.hotel_id}`).subscribe((data:any)=>{
      console.log(data,this.category);
      this.getVenues=data;
      if(this.category=='R'){
        this.getVenues=this.getVenues.msg.restaurant
      }
      else{
        this.getVenues=this.getVenues.msg.service

      }
      
    }
  ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  
  
}
getVoice(v:any){
  this.dataServe.global_service(0,'/pc_voice',`hotel_id=${this.hotel_id}&id=${this.id}`).subscribe(data=>{
    console.log(data)
    this.getvoiceData=data;
    // this.disableVT=this.getvoiceData.msg[0].sound_flag=='N'?'T':'V'
    this.disableVoice=false
    this.showButton=true
    this.category=this.getvoiceData.msg[0].srv_res_flag;
    this.audFile=this.getvoiceData.msg[0].aud
    this.audFilePlay=environment.api_url+'/'+this.getvoiceData.msg[0].sound_path
    this.audFilePlay_old=environment.api_url+'/'+this.getvoiceData.msg[0].sound_path
    console.log(this.audFilePlay)
    this.getCat()
    this.value=this.getvoiceData.msg[0].void_speed
     this.pcavoiceForm.patchValue({
      rest_serve:this.getvoiceData.msg[0].srv_res_flag,
      menu:this.getvoiceData.msg[0].srv_res_id,
      // disb:this.getvoiceData.msg[0].active_flag,
      vText:this.getvoiceData.msg[0].msg_text,
      voice:this.getvoiceData.msg[0].voice_id,
      speed:this.getvoiceData.msg[0].void_speed
     })
  } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
}
upload(e:any){
  console.log(e)
  // console.log(e.target)
  this.audFile=e.target.files[0]
  this.audFilePlay=URL.createObjectURL(e.target.files[0]);
  console.log(this.audFile)
}
get p(){
  return this.pcavoiceForm.controls
}
play(){this.showButton=!this.showButton
  this.playAudio();

}
generateVoice(){
  const body = new URLSearchParams();    
      body.set('voiceID', this.pcavoiceForm.controls.voice.value);    
      body.set('apiKey', '082043a3ae2e478c9dd8cce8f074f3ba');    
      body.set('text', this.pcavoiceForm.controls.vText.value);    
      body.set('speed', this.p.speed.value);    
      body.set('usePremium', '0');    
      let options = {      
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')   
      };    
      this.http.post('https://www.texttovoice.online/api/ConvertText.php', body.toString(), options).subscribe(mock => { 
               console.log('success', mock);  
               this.voiceDt=mock
               this.audFilePlay=this.voiceDt.temp_audio_file    
               this.disableVoice=this.voiceDt.temp_audio_file?false:true
              },     
               mockError => { 
                console.log('error', mockError); 
           }   
            );  
}
stop(){
  this.showButton=!this.showButton
  this.stopAudio()
}
playAudio(){
  this.audPath.src = this.audFilePlay
  this.audPath.load();
  this.audPath.play();
  this.audPath.onended = ()=> {
   this.showButton=true
 };
}
play_old_audio(){
  // this.showButton_old=true
  this.showButton_old=false
  this.audPath_old.src = this.audFilePlay_old
  this.audPath_old.load();
  this.audPath_old.play();
  this.audPath_old.onended = ()=> {
   this.showButton_old=true
 };
}
stop_old_audio(){
  this.showButton_old=!this.showButton_old
  
  this.audPath_old.pause();
}
stopAudio(){
 
  this.audPath.pause();
}
submitAud(){
 console.log(this.p)
 debugger;
 var dt={
  "id":this.id?this.id:0,
  "hotel_id":this.hotel_id,
  "srv_res_flag":this.p.rest_serve.value,
  "srv_res_id":this.p.menu.value,
  "voice_path":this.voiceDt.temp_audio_file,
  "msg_text":this.p.vText.value,
  "active_flag":this.p.disb.value,
  "voice_id":this.p.voice.value,
  "voice_speed":this.p.speed.value,
  "use_premium":1,
  "user":"admin@gmail.com"
 }
 
  this.dataServe.global_service(1,'/pc_voice',dt).subscribe(data=>{
    console.log(data)
    this.postVoiceData=data;
    if(this.postVoiceData.suc>0)
     this.msg.successMsg('SS')
    else
     this.msg.errorMsg('ES')
    }
    ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
        )
}
go_prev_page(){
  this.router.navigate(['main/admin/manage_hotel_account',btoa(this.hotel_id)]).catch(data=>{
    this.msg.globalError(data);
  })
}

getSliderTickInterval(): number | 'auto' {
  if (this.showTicks) {
    return this.autoTicks ? 'auto' : this.tickInterval;
  }

  return 0;
}

show(){
  // this.sliderID=document.getElementById('sliderSpeed')
  // console.log(this.sliderID.value)
  console.log(this.p.speed.value)
  // console.log(this.value)
}

openDialog() {
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    data: {flag:'voiceChange',content:null}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if(result==1)
     {
      this.submitAud()
     }

  });
}
changeVoice(){
  this.disableVoice=true ; 
  this.audFilePlay_old=this.audFilePlay
}
}
