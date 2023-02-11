import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  @ViewChild('stepper')stepper!:ElementRef
  qForm!: FormGroup;
  basicInfo!: FormGroup;
  platformInfo!: FormGroup;
  restbarInfo!: FormGroup;
  servedeptInfo!: FormGroup;
  contactInfo!:FormGroup;
  nameForm!:FormGroup;
  additionalQ!:FormGroup;
  langData:any
  langDataPrimary:any
  langDataSecondary:any
  regData:any
  resID:any
  getData:any
  exist:any
  email_data:any
  selectedItems = [];
  dropdownSettings = {};
  id:any;
  hotel_id:any;
  flag:any
  eFlag:any
  basicInfoData:any
  questData:any;
  qId:any;
  qsetData:any;
  arr:any=[]
  arr_serve:any=[]
  rsFlag=''
  reservationFlag='N'
   constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute, private router:Router, private formBuilder: FormBuilder, private _formBuilder: FormBuilder,private dataServe: DataService, private msg: MessageService) { }
  questId=localStorage.getItem('Quest')
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.id=atob(this.id);
    this.hotel_id=this.activatedRoute.snapshot.params['hotel_id'];
    this.hotel_id=atob(this.hotel_id);
    this.flag=this.activatedRoute.snapshot.params['flag'];
    this.flag=atob(this.flag);
    this.eFlag=this.activatedRoute.snapshot.params['editFlag'];
    this.eFlag=atob(this.eFlag);
    console.log(this.id,this.hotel_id,this.flag,this.eFlag)
    this.dataServe.local_service(environment.langUrl).subscribe(
      data=>{
        console.log(data)
        this.langData=data
        this.langDataPrimary=this.langData.slice(0,90)
        this.langDataSecondary=this.langData.slice(90,this.langData.length)
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
      this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select Languages",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true,
      
      };   
    
    this.basicInfo=this.formBuilder.group({
      firstCall:[''],
      note:[''],
      hotel_name: ['', [Validators.required]],
      hotel_addr: ['', [Validators.required]],
      hotel_url: ['', [Validators.required]],
      hotel_phone: ['', [Validators.required]],
      hotel_email: ['', [Validators.required,Validators.email]],
      hotel_contact: ['', [Validators.required]],
      hotel_contact_phone: ['', [Validators.required]],
      hotel_title: ['', [Validators.required]],
      hotel_contact_email: ['', [Validators.required,Validators.email]],
    })
    this.platformInfo=this.formBuilder.group({
      room_no: ['', [Validators.required]],
      multi_lang: ['', [Validators.required]],
      prim_lang: ['', [Validators.required]],
      second_lang: ['', [Validators.required]],
      add_lang: ['', [Validators.required]],
      rest_no: ['', [Validators.required]],
      bar_no: ['', [Validators.required]],
    })
    this.restbarInfo=this.formBuilder.group({
      
      restDtls:this.formBuilder.array([]),


    })
    this.servedeptInfo=this.formBuilder.group({
      f_row_id:[''],
      rs_row_id:[''],
      f_chat_call:['', [Validators.required]],
      room_service:['', [Validators.required]],
      rs_break_menu: ['', [Validators.required]],
      rs_lunch_menu: ['', [Validators.required]],
      rs_dinner_menu: ['', [Validators.required]],
      rs_brunch_menu: ['', [Validators.required]],
      rs_specials: ['', [Validators.required]],
      rs_chat_call:['', [Validators.required]],
      spa:['', [Validators.required]],
      spa_nm:['',Validators.required],
      spa_menu_services:['',Validators.required],
      spa_calendar:['',Validators.required],
      spa_call_chat:['',Validators.required],
      spa_comments:['',Validators.required],
      activities_desk:['', [Validators.required]],
      ad_menu_services:['',Validators.required],
      ad_calendar:['',Validators.required],
      ad_chat_call:['',Validators.required],
      ad_comments:['',Validators.required],
      gym:['',Validators.required],
      gym_menu_services:['',Validators.required],
      gym_calendar:['',Validators.required],
      gym_chat_call:['',Validators.required],
      gym_comments:['',Validators.required],
      salon:['',Validators.required],
      salon_nm:['',Validators.required],
      salon_menu_services:['',Validators.required],
      salon_calendar:['',Validators.required],
      salon_chat_call:['',Validators.required],
      salon_comments:['',Validators.required],
      gift_shop:['',Validators.required],
      gift_shop_chat_call:['',Validators.required],
      gift_shop_comments:['',Validators.required],
      bs:['',Validators.required],
      bs_chat_call:['',Validators.required],
      bs_menu_services:['',Validators.required],
      contact_name:this.formBuilder.array([]),
      
    })
    this.contactInfo = this.formBuilder.group({
     
      chain:['',Validators.required],
      quote:['',Validators.required],
      additional_comments:['',Validators.required],
      
    });
    this.additionalQ = this.formBuilder.group({
     
      additional_qt:['',Validators.required],
      additional_ans:['',Validators.required],
      
    });
    this.basicInfo.disable()
    if(this.eFlag=='S')
    this.basicInfo.controls.firstCall.enable()
   
    this.basicInfo.controls.note.enable()
    this.dataServe.global_service(0,'/res_dtls_custom',`id=${this.hotel_id}`).subscribe(data=>{console.log(data)
    this.basicInfoData=data;
    this.basicInfo.patchValue({
    hotel_name: this.basicInfoData.msg[0].restaurant_name,
    hotel_addr:this.basicInfoData.msg[0].addr_line1 ,
    hotel_url: this.basicInfoData.msg[0].website,
    hotel_phone: this.basicInfoData.msg[0].phone_no,
    hotel_email: this.basicInfoData.msg[0].email,
    hotel_contact:this.basicInfoData.msg[0].contact_name ,
    hotel_contact_phone: this.basicInfoData.msg[0].cnct_phone_no,
    hotel_title:this.basicInfoData.msg[0].cnct_position ,
    hotel_contact_email: this.basicInfoData.msg[0].email,
   
  })
  this.dataServe.global_service(0,'/quest_dt',`hotel_id=${this.hotel_id}`).subscribe(data=>{
    console.log(data)
    this.questData=data;
    this.basicInfo.patchValue({
      firstCall:this.questData.msg[0].first_call_dt?.substr(0,10),
      note:this.questData.msg[0].admin_note?this.questData.msg[0].admin_note:''
    })
  })
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  if(this.eFlag=='E'){
    this.dataServe.global_service(0,'/get_quest_dt',`hotel_id=${this.hotel_id}`).subscribe(data=>{console.log(data)
    this.qsetData=data;
    this.platformInfo.patchValue({
      room_no: this.qsetData.msg[0].num_of_rooms,
      multi_lang: this.qsetData.msg[0].platform_lang,
      prim_lang: this.qsetData.msg[0].primary_lang,
      second_lang: this.qsetData.msg[0].add_lang[0].lang_id,
      add_lang: this.qsetData.msg[0].add_lang_platform!="null" || this.qsetData.msg[0].add_lang_platform!=null?this.qsetData.msg[0].add_lang_platform:'',
      rest_no: this.qsetData.msg[0].num_of_res,
      bar_no: this.qsetData.msg[0].num_of_bars,
    })
    this.additionalQ.patchValue({
      additional_qt:this.qsetData.msg[0].resend_qts,
      additional_ans:this.qsetData.msg[0].reply_resend_qts
    })
    for(let i=0;i<this.qsetData.msg[0].res_bar.length;i++){
      // console.log(this.restbarInfo.controls.restDtls.value)
      this.arr.push(
        {
          id:this.qsetData.msg[0].res_bar[i].id,
          rest_flag: this.qsetData.msg[0].res_bar[i].hotel_type,
          break_menu: this.qsetData.msg[0].res_bar[i].breakfast=='Y'??'Y',
          lunch_menu: this.qsetData.msg[0].res_bar[i].lunch=='Y'??'Y',
          dinner_menu: this.qsetData.msg[0].res_bar[i].dinner=='Y'??'Y',
          brunch_menu: this.qsetData.msg[0].res_bar[i].brunch=='Y'??'Y',
          bar_menu: this.qsetData.msg[0].res_bar[i].bar_menu=='Y'??'Y',
          special_menu: this.qsetData.msg[0].res_bar[i].special_menu=='Y'??'Y',
          rest_nm:this.qsetData.msg[0].res_bar[i].name,
          chatcallbot:this.qsetData.msg[0].res_bar[i].chat_option,
          reservation:this.qsetData.msg[0].res_bar[i].reservation=='Y'??'Y',
          app:this.qsetData.msg[0].res_bar[i].reservation_platform=='Y'??'Y',
          guestChat:this.qsetData.msg[0].res_bar[i].reservation_option,
          // restDtls:this.qsetData.msg[0].res_bar[i]
         }
      )
      this.rest_dtls.patchValue(this.arr)
      if(i<this.qsetData.msg[0].res_bar.length-1)
      this.addRest()
      
    
  }
  this.servedeptInfo.patchValue({
    f_row_id:this.qsetData.msg[0].service.length > 0 ? (this.qsetData.msg[0].service[this.qsetData.msg[0].service.findIndex((dt:any) => dt.service_name == 'Front Desk')] ? this.qsetData.msg[0].service[this.qsetData.msg[0].service.findIndex((dt:any) => dt.service_name == 'Front Desk')].id : 0) : 0,
    rs_row_id:this.qsetData.msg[0].service.length > 0 ? (this.qsetData.msg[0].service[this.qsetData.msg[0].service.findIndex((dt:any) => dt.service_name == 'Room Service')] ? this.qsetData.msg[0].service[this.qsetData.msg[0].service.findIndex((dt:any) => dt.service_name == 'Room Service')].id : 0) : 0,
    f_chat_call:this.qsetData.msg[0].service[0].chat_type,
    room_service:this.qsetData.msg[0].service[1].service_name?'Y':'N',
    rs_break_menu: this.qsetData.msg[0].service[1].breakfast=='Y'??'Y',
      rs_lunch_menu: this.qsetData.msg[0].service[1].lunch=='Y'??'Y',
      rs_dinner_menu: this.qsetData.msg[0].service[1].dinner=='Y'??'Y',
      rs_brunch_menu: this.qsetData.msg[0].service[1].brunch=='Y'??'Y',
      rs_specials: this.qsetData.msg[0].service[1].special=='Y'??'Y',
      rs_chat_call:this.qsetData.msg[0].service[1].chat_type,
  })
  for(let i=2;i<this.qsetData.msg[0].service.length;i++){
        this.arr_serve.push({
          id:this.qsetData.msg[0].service[i].id,
          contact_nm: this.qsetData.msg[0].service[i].service_name,
          contact_menu_services:this.qsetData.msg[0].service[i].menu_service_list=='Y'??'Y',
          contact_calendar:this.qsetData.msg[0].service[i].calendar=='Y'??'Y',
          contact_chat_call:this.qsetData.msg[0].service[i].chat_type,
          contact_comments:this.qsetData.msg[0].service[i].comments!="null" || this.qsetData.msg[0].service[i].comments!=null?this.qsetData.msg[0].service[i].comments:'',
        })
        this.contact_names.patchValue(this.arr_serve)
        if(i<this.qsetData.msg[0].service.length-1){
          this.addName()
        }
        }
        this.contactInfo.patchValue({
          chain:this.qsetData.msg[0].hotel_part_of_chain,
          quote:this.qsetData.msg[0].quote,
          additional_comments:this.qsetData.msg[0].comments!="null"  || this.qsetData.msg[0].comments!=null ? this.qsetData.msg[0].comments:'',
          
        });
    })
  }
  this.addName()
  this.addRest()
  }
  
  get contact_names() {
    return this.servedeptInfo.controls.contact_name as FormArray;
  }
  addName(){
    const nameForm = this.formBuilder.group({
      contact_nm: ['',Validators.required],
      contact_menu_services:['',Validators.required],
      contact_calendar:['',Validators.required],
      contact_chat_call:['',Validators.required],
      contact_comments:['',Validators.required],
      id:[0]
  });
  this.contact_names.push(nameForm);
  console.log(this.contact_names)
  }
  removeName(i:any){
    this.contact_names.removeAt(i)
  }
  get rest_dtls() {
    return this.restbarInfo.controls.restDtls as FormArray;
  }
  
  addRest(){
    const restForm = this.formBuilder.group({
      rest_flag: ['', [Validators.required]],
      break_menu: ['', [Validators.required]],
      lunch_menu: ['', [Validators.required]],
      dinner_menu: ['', [Validators.required]],
      brunch_menu: ['', [Validators.required]],
      bar_menu: ['', [Validators.required]],
      special_menu: ['', [Validators.required]],
      rest_nm:['', [Validators.required]],
      chatcallbot:['', [Validators.required]],
      reservation:['', [Validators.required]],
      app:['', [Validators.required]],
      guestChat:['', [Validators.required]],
      id:[0]
  });
  this.rest_dtls.push(restForm);
  console.log(this.rest_dtls)
  }
  
  removeRest(i:any){
    this.rest_dtls.removeAt(i)
  }
  
  get b(){
    return this.basicInfo.controls
  }
  get p(){
    return this.platformInfo.controls
  }
  get s(){
    return this.servedeptInfo.controls
  }
  get r(){
    return this.restbarInfo.controls
  }
  get c(){
    return this.contactInfo.controls
  }
  get a(){
    return this.additionalQ.controls
  }
  send(){
    console.log(this.qForm)
  }
  sendProposal(){
    
    var dt={
      "Name":this.b.hotel_name.value,
      "Contact":this.b.hotel_contact.value,
      "Telephone":this.b.hotel_phone.value,
      "Email":this.b.hotel_email.value,
      "Address1":this.b.hotel_addr.value,
      "Website":this.b.hotel_url.value,
      "first_call_dt":this.b.firstCall.value,
      "admin_note":this.b.note.value
      
     }
    //  this.dataServe.global_service(1,'/registration',dt).subscribe(data=>{
      //  this.regData=data;
       var lang_dt = []
       lang_dt.push({lang_id: this.p.second_lang.value});
       console.log(lang_dt);
      //  this.resID=this.regData.lastId.insertId
      //  console.log(this.regData.lastId.insertId)
       var dt1={
        // res_id: this.regData.lastId.insertId, 
        res_id: this.hotel_id, 
        id:this.id,
        num_of_rooms:this.p.room_no.value, 
        platform_lang:this.p.multi_lang.value, 
        primary_lang:this.p.prim_lang.value, 
        lang: lang_dt, 
          add_lang_paltform:this.p.add_lang.value, 
          num_of_res:this.p.rest_no.value, 
          num_of_bars:this.p.bar_no.value, 
          quote:this.c.quote.value,
          comments:this.c.additional_comments.value,
          user:this.b.hotel_name.value,
          chain:this.c.chain.value
          
       }
      this.dataServe.global_service(1,'/quest',dt1).subscribe(data=>console.log('Quote',data))
      var res_dtls = []
      for(let i=0;i<this.r.restDtls.value.length;i++){
      res_dtls.push({
        id:this.r.restDtls.value[i].id,
        hotel_type:this.r.restDtls.value[i].rest_flag, 
        name:this.r.restDtls.value[i].rest_nm, 
        breakfast:this.r.restDtls.value[i].break_menu??'Y', 
        lunch:this.r.restDtls.value[i].lunch_menu??'Y', 
        dinner:this.r.restDtls.value[i].dinner_menu??'Y', 
        brunch:this.r.restDtls.value[i].brunch_menu??'Y', 
        bar_menu:this.r.restDtls.value[i].bar_menu??'Y', 
        special_menu:this.r.restDtls.value[i].special_menu??'Y', 
        chat_option:this.r.restDtls.value[i].chatcallbot, 
        reservation:this.r.restDtls.value[i].reservation, 
        reservation_paltform:this.r.restDtls.value[i].app, 
        reservation_option:this.r.restDtls.value[i].guestChat,
      })
    }
       var dt2={
        res_id:this.hotel_id,
        id:this.id, 
        res_dt:res_dtls, 
        user:this.b.hotel_name.value
      }
      this.dataServe.global_service(1,'/quest_rest',dt2).subscribe(data=>console.log('Quote',data))
      var service_dtls=[]
      console.log(this.s)
      service_dtls.push({
        id:this.s.f_row_id.value,
        service_type:'F', 
        menu_service_list:null,
        active_flag:null, 
        service_name:'Front Desk', 
        breakfast:null, 
        lunch:null, 
        dinner:null, 
        brunch:null, 
        special:null, 
        calendar:null, 
        chat_type:this.s.f_chat_call.value, 
        comments:null,
      })
      service_dtls.push({
        id:this.s.rs_row_id.value,
        service_type:'R', 
        active_flag:this.s.room_service.value,
        service_name:'Room Service',
        menu_service_list:null,
        breakfast:this.s.rs_break_menu.value??'Y',
        lunch:this.s.rs_lunch_menu.value??'Y',
        dinner:this.s.rs_dinner_menu.value??'Y',
        brunch:this.s.rs_brunch_menu.value??'Y',
        special:this.s.rs_specials.value??'Y',
        calendar:null,
        chat_type:this.s.rs_chat_call.value,
        comments:null,
      })
     
      for(let i=0; i< this.s.contact_name.value.length; i++){
        service_dtls.push({
          id:this.s.contact_name.value[i].id,
          service_type:'O', 
          menu_service_list:this.s.contact_name.value[i].contact_menu_services,
          active_flag:null, 
          service_name:this.s.contact_name.value[i].contact_nm, 
          breakfast:null, 
          lunch:null, 
          dinner:null, 
          brunch:null, 
          special:null, 
          calendar:this.s.contact_name.value[i].contact_calendar, 
          chat_type:this.s.contact_name.value[i].contact_chat_call, 
          comments:this.s.contact_name.value[i].contact_comments,
        })
      }
     
      var dt3={
        res_id:this.hotel_id,
        id:this.id,
        serv_dt:service_dtls,
        user:this.b.hotel_name.value
      }
      this.dataServe.global_service(1,'/quest_serv',dt3).subscribe(data=>{console.log('Quote',data)
       this.getData=data
       if(this.getData.suc>0)
        { this.msg.globalInfo('Your data has been sent to the admin! They will get back to you!')}
       else
         this.msg.errorMsg('ES')
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

    //  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    var dt_admin={
      "email":this.b.hotel_email.value,
      "hotel_id":localStorage.getItem('rid'),
      "hotel_name":this.b.hotel_name.value,
      "user":"admin@gmail.com",
      "path": ''
 
    }
    this.dataServe.global_service(1,'/send_quest_to_admin',dt_admin).subscribe(data=>{
      this.getData=data
      console.log(this.questId)
      if(this.getData.suc>0)
      { 
       
        
    
    }
      else
       this.msg.globalError('Problem sending the email!')
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)
    })
    
    console.log("Step1 ",this.basicInfo)
    console.log("Step2 ",this.platformInfo)
    console.log("Step3 ",this.restbarInfo.controls.restDtls.value)
    console.log("Step4",this.servedeptInfo)
    console.log("Step5 ",this.contactInfo)
  
}
check_mail(e:any){
  console.log(e.target.value);
  if(e.target.id=='em'){

  
  this.dataServe.global_service(0,'/email_check',`Email=${e.target.value}`).subscribe(data=>{
    console.log(data)
  this.email_data=data;
  if(this.email_data.suc==2)
   {
    this.msg.globalWarning('This email already exists')
  }
  else if(this.email_data.suc==1)
   {
    }
  else
  {}

  })
}
// check if the telephone number is an existing one
else if(e.target.id=='tel'){
  this.dataServe.global_service(0,'/mobile_check',`no=${e.target.value}`).subscribe(data=>{

    console.log(data);
    this.exist=data;
    if(this.exist.suc==2){
        this.msg.globalWarning('This number already exists');
     
    }
    else{
    }
  })
}
}
onItemSelect(item:any){
  console.log(item);
  console.log(this.selectedItems);
}
OnItemDeSelect(item:any){
  console.log(item);
  console.log(this.selectedItems);
}
onSelectAll(items: any){
  console.log(items);
}
onDeSelectAll(items: any){
  console.log(items);
}
send_email(){
  var dt={
    "hotel_id":this.hotel_id,
    "id":this.id,
    "first_call_dt":this.b.firstCall.value,
    "admin_note":this.b.note.value,
    "user":"admin@gmail.com"
  }
  console.log(dt)
  this.dataServe.global_service(1,'/quest_dt',dt).subscribe(data=>{console.log(data)
    this.regData=data;
    if(this.regData.suc>0){

      var dt1={
        "email":this.b.hotel_email.value,
        "hotel_id":localStorage.getItem('rid'),
        "user":"admin@gmail.com",
        "path": 'main/admin/hotelForm'+'/'+encodeURIComponent(btoa(this.id))+'/'+encodeURIComponent(btoa(this.hotel_id))+'/'+encodeURIComponent(btoa('U'))+'/'+encodeURIComponent(btoa(this.eFlag))
   
      }
      this.dataServe.global_service(1,'/send_quest',dt1).subscribe(data=>{
        this.getData=data
        console.log(this.questId)
        if(this.getData.suc>0)
        { this.msg.globalSuccess('Email sent successfully!')
          var qsn={
            id:this.id,
            hotel_id:this.hotel_id,
            resend_qts:this.a.additional_qt.value,
            reply_resend_qts:this.a.additional_ans.value,
            user:this.flag=='A'?"admin@gmail.com":localStorage.getItem('hotel_email'),
            url:btoa(this.questId!.toString())+'/'+btoa(this.id)+'/'+btoa('U')+'/'+btoa('E')
          }
         
          this.dataServe.global_service(1,'/quest_add_qts',qsn).subscribe(data=>{console.log(data)
          
          },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

      
      }
        else
         this.msg.globalError('Problem sending the email!')
        },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)
      })
   
    }
  })
  }
  openDialogForRow(i:any,id:any,flag:any){
    console.log(id)
    var f='delete'
   const dialogRef = this.dialog.open(DialogBoxComponent, {
     // width: '250px',
     data: { flag: f, content: null }
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log(result, f)
     if(result==1){
    //  debugger
    var dt={
       id:id.value.id,
       flag:flag,
    } 
    this.dataServe.global_service(0,'/quest_dtls_del',`id=${id.value.id}&flag=${flag}`).subscribe(data=>{
      console.log(data)
      if(flag=='R')
       this.removeRest(i)
      else
       this.removeName(i)
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)

  })  
   
  }
  })
}
go_prev_page(){
  this.router.navigate(['main/admin/manage_hotel_account',btoa(this.hotel_id)]).catch(data=>{
    this.msg.globalError(data);
  })
}
}
  

  
