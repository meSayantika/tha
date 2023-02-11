import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { filter, map, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-manage-hotel-account',
  templateUrl: './manage-hotel-account.component.html',
  styleUrls: ['./manage-hotel-account.component.css']
})
export class ManageHotelAccountComponent implements OnInit {
  dashboardData: any;
  yes_stnd: any;
  no_stnd: any ;
  set_value: any;
  laguna: any;
  eventData: any;
  show_add_update_button_for_venue:any;
  displayedColumns: string[] = ['id', 'Venue_name', 'Option'];
  dataSource=new  MatTableDataSource();
  @ViewChild('MatPaginator1',{static:true}) MatPaginator1!: MatPaginator;
  @ViewChild('datasort1',{static:true}) datasort1!: MatSort;

  @ViewChild('MatPaginator2',{static:true}) MatPaginator2!: MatPaginator;
  @ViewChild('datasort2',{static:true}) datasort2!: MatSort;

  displayedColumns_menu: string[] = ['id', 'Venue_name', 'menu_name','Option'];
  @ViewChild('yesstnd') yesPackage!: ElementRef
  @ViewChild('nostnd') noPackage!: ElementRef
  @ViewChild('yesBirth') yesBirth!: ElementRef
  @ViewChild('noBirth') noBirth!: ElementRef
  @ViewChild('yesCal') yesCal!: ElementRef
  @ViewChild('noCal') noCal!: ElementRef
  dataSource_menu=new  MatTableDataSource();
  venue_name: any;
  create_menu='';
  vid: any;
  show_add_update_button_for_menu: any;
  qTabForm!: FormGroup;
  hotelInfo!: FormGroup;
  propForm!: FormGroup;
  msgForm!: FormGroup;
  previousUrl:any
  index=0
  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private router:Router,private msg:MessageService,private dataServe:DataService,private formBuilder: FormBuilder) { 
   
  }
  rest_web='';
  rest_setup='';
  rest_monthly='';
  rest_nm='';
  rest_phone='';
  rest_em='';
  rest_contact='';
  rest_add='';
  r_id:any
  stanData:any;
  stanplusData:any;
  premiumData:any;
  windowData:any;
  edit_menu_id:any;
  stnd_specialmenu_yes:any
  stnd_numberofmenu:any
  stndpackage_setupfee:any;
  stndpackage_desc:any;
  stndpacakge__monthlyfee:any;
  tabletopData:any;
  stndplus_specialmenu_yes:any
  stndpluspacakge__numberofmenu:any;
  stndpluspackage_monthlyfee:any;
  stndpluspacakge_setupfee:any;
  stndpluspacakge_desc:any;
  birthdayData:any;
  windowcling_yes:any;
  getData:any
  del_menu_id:any
  premiumpacakge_specialmenu_yes:any;
  premiumpacakge_specialmenu_no:any;
  premiumpacakge_numberofmenu:any;
  premiumpacakge_monthlyfee:any;
  premiumpacakge_setupfee:any;
  premiumpacakge_des:any;
 wallData:any;
  promo_Birthdaypriceyes:any
  promo_Birthdaypriceno:any
  promo_Birthdayprice:any;
  promo_EventCalendarprice:any;
  promo_EventCalendarprice_yes:any
  promo_EventCalendarprice_no:any
  promocalendar:any=[];
  stockimage=true;
  venueData:any;
  m='';
  menu_instruction='';
  insbody:any;
  stylediv:any;
  signholder_price1:any;
  signholder_price2:any;
  signholder_price3:any;
  signholder:any=[];
  Package:any
  promo1:any
  promo2:any
  window:any
  windowcling_price:any
  signqty1:any
  signqty2:any
  signqty3:any
  winqty1:any
  create_venue:any='';
  edit_id:any
  del_id_venue:any
  getVenues:any
  showWallData:any
  venueid=0;
  venueid_del:any;
  getMenus:any
  radioName:any
  userData:any;
  countryData:any
  regData:any
  questId: any
  id:any
  propId=0;
  submitInfoData:any;
  proposalData:any
  proposalEmailData:any
  updatePropData:any
  secondIndex=0
  ngOnInit() {
    this.r_id=this.activatedRoute.snapshot.params['id'];
    this.r_id=atob(this.r_id);
    localStorage.setItem('rid',this.r_id)
    // this.getDashboardData()
    // this.getWindowCling()
    // this.getSignHolder()
    this.fetchdata()
    // this.radioName=document.getElementById('yes_stnd')
    // console.log(this.radioName)
    // this.yes_stnd=document.getElementById('yes_stnd');
    // this.no_stnd=document.getElementById('no_stnd');
    this.qTabForm = this.formBuilder.group({
      firstCall: [''],
      notes: [''],
      date_sent: [''],
      qcomplete: [''],
      
    });
    this.hotelInfo=this.formBuilder.group({
      hotel_date: [''],
      hotel: [''],
      address: [''],
      country: [''],
      website: [''],
      phone: [''],
      whatsapp: [''],
      contact_name: [''],
      contact_position: [''],
      email: [''],
      contact_phone: [''],
      contact_whatsapp: [''],
      notes: [''],
      no_sale: [''],
      proposal_amount: [''],
      first_payment: [''],
      final_payment: [''],
    })
    this.propForm=this.formBuilder.group({
      send_date:[''],
      resend_date:[''],
      hotel_qsns:[''],
      edited_send_date:[''],
      accepted_date:[''],
      status:[''],
      proposal_amt:[''],
      first_half_pay:[''],
      first_half_pay_date:[''],
      final_half_pay:[''],
      final_half_pay_date:[''],
      subscription_fee:[''],
      additional_fee:[''],
      declined_comments:['']
    })
    this.msgForm=this.formBuilder.group({
      msg_type:[''],
      audience:[''],
      language:[''],
      link:[''],
      img:[''],
      gallery:[''],
      dept_name:[''],
      dept_mng_name:[''],
      dept_phone:[''],
      dept_email:[''],
      dept_language:[''],
      dept_subject_line:[''],
      dept_text:[''],
      mon:[''],
      tue:[''],
      wed:[''],
      thu:[''],
      fri:[''],
      sat:[''],
      sun:[''],
      mon_off:[''],
      tue_off:[''],
      wed_off:[''],
      thu_off:[''],
      fri_off:[''],
      sat_off:[''],
      sun_off:[''],
      mon_start_time:[''],
      tue_start_time:[''],
      wed_start_time:[''],
      thu_start_time:[''],
      fri_start_time:[''],
      sat_start_time:[''],
      sun_start_time:[''],
      mon_end_time:[''],
      tue_end_time:[''],
      wed_end_time:[''],
      thu_end_time:[''],
      fri_end_time:[''],
      sat_end_time:[''],
      sun_end_time:[''],
      schedule:[],
      date_time:[],
      extend:[]
    })
    this.dataServe.global_service(0,'/country','').pipe(map((x: any) => x.msg)).subscribe(data=>{
      this.countryData=data;
      console.log(this.countryData);

    })
    this.dataServe.global_service(0,'/quest_dt',`hotel_id=${localStorage.getItem('rid')}`).subscribe(data => {
      console.log(data)
      this.userData = data
      this.questId = this.userData.suc > 0 && this.userData.msg.length > 0 ? this.userData.msg[0].id : 0
      console.log('Quest', this.questId);
      localStorage.setItem('Quest',this.questId)
      this.qTabForm.patchValue({
        qcomplete:this.userData.msg[0]?.receive?.substr(0,10),
        firstCall:this.userData.msg[0]?.first_call_dt?.substr(0,10),
        notes:this.userData.msg[0]?.admin_note,
        date_sent:this.userData.msg[0]?.send_dt?.substr(0,10)

      })
      console.log(this.qTabForm.controls)
      
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

   this.get_proposal_data()

    this.getDashboardData()
    console.log(this.index,this.previousUrl)

    this.router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      console.log('previous url', events[0].urlAfterRedirects);
      console.log('current url', events[1].urlAfterRedirects);
      this.previousUrl=events[0].urlAfterRedirects
      console.log(this.previousUrl.includes('questionnaire'))
    localStorage.setItem('prev',this.previousUrl)
    console.log(this.index)
    

    })
    if(localStorage.getItem('prev')?.includes('questionnaire'))
    {this.index=1}
    if(localStorage.getItem('prev')?.includes('proposal'))
    this.index=2
    if(localStorage.getItem('prev')?.includes('account'))
    this.index=0
    if(localStorage.getItem('prev')?.includes('create_notification'))
    {this.index=4; this.secondIndex=2}
    if(localStorage.getItem('prev')?.includes('create_emergency'))
    {this.index=4; this.secondIndex=3}
    if(localStorage.getItem('prev')?.includes('pca_voice_create'))
    {this.index=4; this.secondIndex=0}
  }
  ngAfterViewInit(){
    console.log(this.yes_stnd,this.no_stnd)
    console.log(this.yesPackage,this.noPackage)
    this.getPackageData()
    this.getPromoCalendar()

  }
  check_empty_venue(){
    if(this.create_venue==''){
      this.show_add_update_button_for_venue=false;
    }
  }
  getDashboardData(){
    this.dataServe.global_service(0,'/res_dtls_custom',`id=${this.r_id}`).subscribe(data=>{console.log(data)
      this.dashboardData=data;
      // this.show_spinner=true;
      this.dashboardData=this.dashboardData.msg;
      this.rest_nm=this.dashboardData[0].restaurant_name;
      this.rest_contact=this.dashboardData[0].contact_name;
      this.rest_phone=this.dashboardData[0].phone_no;
      this.rest_em=this.dashboardData[0].email;
      this.rest_web=this.dashboardData[0].website;
      this.rest_monthly=this.dashboardData[0].monthly_fee;
      this.rest_setup=this.dashboardData[0].setup_fee;
      this.dashboardData[0].addr_line2=this.dashboardData[0].addr_line2?this.dashboardData[0].addr_line2:''
      this.rest_add=this.dashboardData[0].addr_line1+" "+this.dashboardData[0].addr_line2+" "+this.dashboardData[0].zip+" "+this.dashboardData[0].city+", "+this.dashboardData[0].country
      this.hotelInfo.patchValue({
        hotel_date:this.dashboardData[0].contact_date.substr(0,10),
        hotel:this.rest_nm,
        address:this.dashboardData[0].addr_line1,
        country:this.dashboardData[0].country_id,
        website:this.rest_web,
        phone:this.rest_phone,
        whatsapp:this.dashboardData[0].whatsapp_no,
        contact_name:this.dashboardData[0].contact_name,
        contact_position:this.dashboardData[0].cnct_position,
        contact_phone:this.dashboardData[0].cnct_phone_no,
        contact_whatsapp:this.dashboardData[0].cnct_whatsapp_no,
        email:this.rest_em,
        notes:this.dashboardData[0].remarks || this.dashboardData[0].remarks!=undefined || this.dashboardData[0].remarks!="undefined"?this.dashboardData[0].remarks:'',
        no_sale:this.dashboardData[0].proposal_status,
        proposal_amount:this.dashboardData[0].proposal_amt,
        first_payment:this.dashboardData[0].first_pay?.substr(0,10),
        final_payment:this.dashboardData[0].final_pay?.substr(0,10)
      })
      console.log(this.dashboardData[0].remarks)
    
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  getPackageData(){
    // this.dataServe.global_service(0,'/package',`res_id=${this.r_id}`).subscribe(data=>{
    //   console.log(data);  //api call for fetching various packages 
    //     this.Package=data;
  
    //     this.stndpackage_setupfee=this.Package.msg[0].setup_fee;
    //     this.stndpacakge__monthlyfee=this.Package.msg[0].monthly_fee;
    //       this.stndpackage_desc=this.Package.msg[0].pack_description;
    //       this.stnd_numberofmenu=this.Package.msg[0].no_of_menu;
    //       console.log(this.stndpackage_setupfee,this.stndpacakge__monthlyfee);
    //       if(this.Package.msg[0].special_menu=="Y"){
    //       this.stnd_specialmenu_yes=document.getElementById('yes_stnd');
    //       console.log(document.getElementById('yes_stnd'))
    //       // this.stnd_specialmenu_yes.checked=true;
    //       // console.log(this.yesPackage.nativeElement.value)
    //       // this.yesPackage.nativeElement.checked=true
    //       // this.yes_stnd.value='Y'
    //       }
    //       else{
    //         this.stnd_specialmenu_yes=document.getElementById('no_stnd');
    //       // this.stnd_specialmenu_yes.checked=true;
    //       // this.no_stnd.value='N'
    //       // console.log(this.noPackage.nativeElement.value)
    //       // this.noPackage.nativeElement.checked=true


    //       }
  
    //   },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  get_sec_id_venue(id:any,desc:any){
    this.edit_id=id;
    this.create_venue=desc;
    this.show_add_update_button_for_venue=true
    // alert(this.edit_id+" "+this.create_venue)
    window.scrollTo(0, 0);
  
  }
  addvenue(){
    var dt={
      "res_id":this.r_id,
      "venue_name":this.create_venue,
      "user":"admin@gmail.com",
      "id":this.edit_id?this.edit_id:0
    }
  //   this.dataServe.global_service(1,'/venue',dt).subscribe(data=>{console.log(data)
  //   this.venueData=data;
  //   if(this.venueData.suc>0)
   
  //   {
  //     if(this.show_add_update_button_for_venue)
  //     this.msg.successMsg('SU')
  //     else
  //     this.msg.successMsg('SS')
  //      this.create_venue=''
  //      this.edit_id=null
      
  //   }
  //   else
  //    {
  //     if(this.show_add_update_button_for_venue)
  //     this.msg.errorMsg('EU')
  //     else
  //     this.msg.errorMsg('ES')
  //    }
  //   this.show_add_update_button_for_venue=false
  
  //   this.fetchdata()
  // },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  fetchdata(){

    // this.dataServe.global_service(0,'/venue',`res_id=${this.r_id}`).subscribe(data=>{
    //   console.log(data);
    //   this.getVenues=data;
    //   if(this.getVenues.suc==1){
    //   this.putdata(this.getVenues.msg);}
    //   else{
    //     this.getVenues.length=0;
    //     this.putdata(this.getVenues);
    //   }
    // })
  
  }
  get_sec_id_menu(id:any,venue_id:any,desc:any){
    this.venue_name=venue_id;
    this.edit_menu_id=id;
    this.create_menu=desc;
    this.vid=venue_id;
    // alert(this.edit_menu_id+" "+this.create_menu)
    this.show_add_update_button_for_menu=true
    // alert(this.edit_id+" "+this.create_venue)
    window.scrollTo(0, 0);
  
  }
  putdata(v:any){
    this.dataSource.paginator=this.MatPaginator1;
    this.dataSource.sort=this.datasort1;
    this.dataSource=new MatTableDataSource(v);
  }
  getPromoCalendar(){
    // this.dataServe.global_service(0,'/promo',`res_id=${this.r_id}`).subscribe(data=>{
    //   console.log(data)
    //   this.promocalendar=data; //api call to fetch facilities regarding the promo calendar
    //   for(let i=0;i<this.promocalendar.msg.length;i++){
    //     if(this.promocalendar.msg[i].id==4){
    //       this.promo_Birthdayprice=this.promocalendar.msg[i].birth_price;

    //         if(this.promocalendar.msg[i].birth_free_flag=='Y'){
    //       this.promo_Birthdaypriceyes=document.getElementById('yes_birth');
    //       this.promo1=true;
    //       this.yesBirth.nativeElement.checked=true
    //       this.verify(0)
    //      }
    //     else{
    //       this.promo_Birthdaypriceno=document.getElementById('no_birth');
    //       this.promo1=false;
    //       this.noBirth.nativeElement.checked=true
    //       this.verify(1)
    //     }
    //     }
    //     // else if(this.promocalendar.msg[i].id==5){
    //       this.promo_EventCalendarprice=this.promocalendar.msg[i].event_price;
    //       if(this.promocalendar.msg[i].event_free_flag=='Y'){
    //         this. promo_EventCalendarprice_yes=document.getElementById('yes_calend');
    //         // this. promo_EventCalendarprice_yes.checked=true;
    //         // this.yesCal.nativeElement.checked=true
    //         // this.promo2=true;
    //       }
    //       else{
    //         this.promo_EventCalendarprice_no=document.getElementById('no_calend');
    //         // this.promo_EventCalendarprice_no.checked=true;
    //         // this.noCal.nativeElement.checked=true
    //         // this.promo2=false;;
    //       }
    //       console.log(this.noCal,this.yesCal)
    //     // }
    //     // else{

    //     // }
    //   }

    // },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  
  getSignHolder(){
    this.dataServe.global_service(0,'/holder_cling',`res_id=${this.r_id}`).subscribe(data=>{
      this.signholder=data;
     
           this.signholder_price1=this.signholder.msg[0].table_top_6_price;
          
           this.signqty1=this.signholder.msg[0].table_top_6;
           this.signqty2=this.signholder.msg[0].table_top_7;
           this.signqty3=this.signholder.msg[0].table_top_8;
           this.winqty1=this.signholder.msg[0].window_cling_9;
       
             this.signholder_price2=this.signholder.msg[0].table_top_7_price;
       
      
          this.signholder_price3=this.signholder.msg[0].table_top_8_price;
       
      
        },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
       
  }
    showwindow(v1:any,v2:any,v3:any){
      var dt={
        "res_id":this.r_id,
        "per_Holder_Price":v2,
         "serial_no":v1,
         "qty":v3
      }
     console.log(v1,v2);
     console.log(dt);
     this.dataServe.global_service(1,'/holder_cling',dt).subscribe(data=>{
       console.log(data);
       this.windowData=data
       if(this.windowData.suc==1){
      this.msg.successMsg('SS')
      }
      else{
       this.msg.errorMsg('ES')
      }
      this.fetchdata()
     },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     )
    }
updatevenue(){this.addvenue()}
getrow_id_menu(id:any){
  this.del_menu_id=id;
  this.delete_menu()
}
getrow_id_venue(id:any){
   this.del_id_venue=id
   var f='delete'
   const dialogRef = this.dialog.open(DialogBoxComponent, {
     // width: '250px',
     data: { flag: f, content: null }
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log(result, f)
     if(result==1)
    //  debugger
     this.delete_venue()
     
   })
}
delete_venue(){
  this.dataServe.global_service(0,'/del_venue',`id=${this.del_id_venue}`).subscribe(data=>{console.log(data)
   
    this.getData=data
    if(this.getData.suc>1){
      this.create_venue=''
  this.show_add_update_button_for_venue=false
  this.msg.successMsg('SD')

    }
    else
  this.msg.successMsg('ED')


    this.fetchdata()
  },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

}
  getWindowCling(){
    this.dataServe.global_service(0 ,'/holder_cling',`res_id=${this.r_id}`).subscribe(data=>{
      // console.log(data);
      this.window=data;
      
          this.windowcling_price=this.window.msg[0].window_cling_9_price;
        
      

      // this.windowcling_description
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  
  }
  verify(e:any){
    if(e=='y'){
      this.promo1=true;
      this.windowcling_yes=document.getElementById('birthday');
      this.windowcling_yes.value=0;
    }
    else{
      this.promo1=false;
    }
  }
  verifytre(e:any){
    if(e=='yes'){
      this.promo2=true;
      this.windowcling_yes=document.getElementById('eventcalnedar');
      this.windowcling_yes.value=0;
    }
    else{
         this.promo2=false;
    }
  }
  submit(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_stnd');
    this.no_stnd=document.getElementById('no_stnd');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    
    else{
      this.set_value='N';
      
    }
    var dt={
       "Menu_number":v1,
       "Serial_no":'Custom',
       "Special_Menu":this.set_value,
       "SetUp_Fee":v3,
       "Monthly_Fee":v4,
       "res_id":this.r_id
      //  "Description":v5
    }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.dataServe.global_service(1,'/package',dt).subscribe(data=>{
      console.log(data);
      this.stanData=data;
      if(this.stanData.suc==1){
        this.msg.successMsg('SS')
      }
      else{
        this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    );
  }
  get f(){return this.hotelInfo.controls}
  
    //Admin order set up page package tab second row
  submitstndplus(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes');
    this.no_stnd=document.getElementById('no');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
     
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.dataServe.global_service(1,'/package',dt).subscribe(data=>{
      console.log(data);
      this.stanplusData=data;
      if(this.stanplusData.suc==1){
       this.msg.successMsg('SS')
      }
      else{
        this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    );
  }
    //Admin order set up page package tab third row
  submitpremium(v1:any,v2:any,v3:any,v4:any){
    this.yes_stnd=document.getElementById('yes_premium');
    this.no_stnd=document.getElementById('no_premium');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
      
    }
    else{
      this.set_value='N';
     
    }
    var dt={
      "Menu_number":v1,
      "Serial_no":v2,
      "Special_Menu":this.set_value,
      "SetUp_Fee":v3,
      "Monthly_Fee":v4,
      // "Description":v5
   }
    // console.log(v1,v2,v3,v4,v5,this.set_value);
    console.log(dt);
    this.dataServe.global_service(1,'/package',dt).subscribe(data=>{
      console.log(data);
      this.premiumData=data;
      if(this.premiumData.suc==1){
       this.msg.successMsg('SS')
      }
      else{
       this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    );

  }
  showeventcalendar(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_calend');
    this.no_stnd=document.getElementById('no_calend');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    var dt={
      "checked":'Y',
      "res_id":this.r_id,
     "serial_no":v1,
     "price":v2,
     "free":this.set_value
    }

    console.log(v1,v2,this.set_value);
    console.log(dt);
    this.dataServe.global_service(1,'/promo',dt).subscribe(data=>{
      console.log(data);
      this.eventData=data;
      if(this.eventData.suc==1){
       this.msg.successMsg('SS')
      }
      else{
       this.msg.errorMsg('ES')
      }
      
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    )
  }
  birthdayaniversery(v1:any,v2:any){
    this.yes_stnd=document.getElementById('yes_birth');
    this.no_stnd=document.getElementById('no_birth');
    console.log(this.yes_stnd.checked,this.no_stnd.checked);
    if(this.yes_stnd.checked){
      this.set_value='Y';
    }
    else{
      this.set_value='N';
    }
    console.log(v1,v2,this.set_value);
    var dt={
      "checked":'Y',
      "res_id":this.r_id,
      "serial_no":v1,
      "price":v2,
      "free":this.set_value
     }
     console.log(v1,v2,this.set_value);
     console.log(dt);
      this.dataServe.global_service(1,'/promo',dt).subscribe(data=>{
        console.log(data);
        this.birthdayData=data;
        if(this.birthdayData.suc==1){
       this.msg.successMsg('SS')
        }
        else{
         this.msg.successMsg('ES')
        }
      }    ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      )
     

  }
  preventNonNumericalInput(e:any){
    e = e || window.event;
    
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);

    if (!charStr.match(/^[0-9]+$/))
     { e.preventDefault();}

  }
  opentabletop(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v1,
       "serial_no":v2,
       "qty":v3
    }
    console.log(v1,v2);
    console.log(dt);
    this.dataServe.global_service(1,'/holder_cling',dt).subscribe(data=>{
      console.log(data);
      this.tabletopData=data;
      if(this.tabletopData.suc==1){
       this.msg.successMsg('SS')
      }
      else{
       this.msg.errorMsg('ES')
      }
      
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    
  }
   //Admin order set up page signholder tab second row
  openwallmount(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v2,
       "serial_no":v1,
       "qty":v3
    }
    console.log(v1,v2);
    console.log(dt);
    this.dataServe.global_service(1,'/holder_cling',dt).subscribe(data=>{

      console.log(data);
      this.wallData=data;
      if(this.wallData.suc==1){
      this.msg.successMsg('SS')
      }
      else{
        this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
   //Admin order set up page signholder tab third row
  showwall(v1:any,v2:any,v3:any){
    var dt={
      "res_id":this.r_id,
      "per_Holder_Price":v2,
       "serial_no":v1,
       "qty":v3
    }
    console.log(v1,v2);
    console.log(dt);
    this.dataServe.global_service(1,'/holder_cling',dt).subscribe(data=>{
      console.log(data);
      this.showWallData=data
      if(this.showWallData.suc==1){
       this.msg.successMsg('SS')
      }
      else{
        this.msg.errorMsg('ES')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  get_venue_name(id:any){
    this.venueid=id;
    console.log(id)
    this.getMenus=null;
    this.fetchdata_menu(this.r_id, 0, id);
    // alert(this.venueid)
    this.venue_name=id;
  }
  fetchdata_menu(rid: any, id:any, vid:any){
    var tb_id = id > 0 ? id : '';
    var v_id = vid > 0 ? vid : 0;
    this.dataServe.global_service(0,'/venue_menu',`res_id=${rid}&id=${tb_id}&venu_id=${v_id}`).subscribe(data=>{
      console.log(data);
      this.getMenus=data;
      if(this.getMenus.suc == 1){
        this.putdata_menu(this.getMenus.msg);
      }
      else
      this.putdata_menu('');

    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  
  }
  putdata_menu(v:any){
    console.log(v)
    this.dataSource_menu.paginator=this.MatPaginator2;
    this.dataSource_menu.sort=this.datasort2;
    this.dataSource_menu=new MatTableDataSource(v);
  }
  addmenu(is_edit:any){
    console.log(this.venue_name)
    // alert(this.venue_name+" "+this.create_menu)
    var dt={
      "res_id":this.r_id,
      "venue_id":this.venueid,
      "menu_name":this.create_menu,
      "user":"admin@gmail.com",
      "id":is_edit > 0 ? (this.edit_menu_id?this.edit_menu_id:0):0
    }
    this.dataServe.global_service(1,'/venue_menu',dt).subscribe(data=>{console.log(data)
      
      this.getData=data
      if(this.getData.suc>0){
        this.show_add_update_button_for_menu=false;
      this.create_menu=''
        if(is_edit>0)
         this.msg.successMsg('SU')
        else
         this.msg.successMsg('SS')
      }
      else
       {
        if(is_edit>0)
        this.msg.errorMsg('EU')
       else
        this.msg.errorMsg('ES')
       }
      // this.venue_name=''
      // this.vid=''
      this.fetchdata_menu(this.r_id, 0, this.venue_name)
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  updatemenu(is_edit:any){
    this.addmenu(is_edit)
  }
  check_empty(){
    if(this.create_menu==''){
      this.show_add_update_button_for_menu=false;
    }
  }
  delete_menu(){
    var f='delete'
   const dialogRef = this.dialog.open(DialogBoxComponent, {
     // width: '250px',
     data: { flag: f, content: null }
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log(result, f)
     if(result==1)
    //  debugger
     {
      this.dataServe.global_service(0,'/del_venue_menu',`id=${this.del_menu_id}`).subscribe(data=>{console.log(data)
       
        this.getData=data
        if(this.getData.suc>0)
       { this.msg.successMsg('SD')
       this.show_add_update_button_for_menu=false;
        this.create_menu=''
      }
        else
         this.msg.errorMsg('ED')
        // this.venue_name=''
        // this.vid=''
        this.fetchdata_menu(this.r_id, 0, this.venueid);
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
     }
     
   })
  }
  // go_to_proposal(){
  //   this.router.navigate(['main/admin/send_proposal',btoa(this.r_id + '/' + this.rest_em),0])
  // }
  sendQ(){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: { flag: 'sendQ', content: this.rest_em }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result==1){
        this.dataServe.global_service(0,'/quest_dt',`hotel_id=${localStorage.getItem('rid')}`).subscribe(data => {
          console.log(data)
          this.userData = data

          this.qTabForm.patchValue({
            qcomplete:this.userData.msg[0].send_dt.substr(0,10)
          })
        },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

      
      }
  })
}
  submitqInfo(){
    console.log(this.qTabForm.controls,this.questId)
    var dt={
      "hotel_id":localStorage.getItem('rid'),
      "id":this.questId,
      "first_call_dt":this.qTabForm.controls.firstCall.value,
      "admin_note":this.qTabForm.controls.notes.value,
      "user":"admin@gmail.com"
    }
    console.log(dt)
    this.dataServe.global_service(1,'/quest_dt',dt).subscribe(data=>{
       this.submitInfoData=data;
       if(this.submitInfoData.suc>0){
        this.msg.successMsg('SU')
       }
      else
        this.msg.errorMsg('EU')
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  
  updatehotelInfo(){
    console.log(this.hotelInfo.controls)
   
      var dt={
       "hotel_id":localStorage.getItem('rid'),
       "Name":this.f.hotel.value,
       "Contact":this.f.contact_name.value,
       "Telephone":this.f.phone.value,
       "Email":this.f.email.value,
       "Address1":this.f.address.value,
       "country":this.f.country.value,
       "Website":this.f.website.value,
       "cnct_position":this.f.contact_position.value,
       "cnct_phone_no":this.f.contact_phone.value,
       "cnct_whatsapp_no":this.f.contact_whatsapp.value,
       "whatsapp_no":this.f.whatsapp.value,
       "remarks":this.f.notes.value,
       "first_pay":this.f.first_payment.value,
       "final_pay":this.f.final_payment.value,
       "status":this.f.no_sale.value,
       "proposal_amt":this.f.proposal_amount.value
       
      }
      this.dataServe.global_service(1,'/registration',dt).subscribe(data=>{
        this.regData=data;
        if(this.regData.suc>0)
        { this.msg.successMsg('SU')}
         else
         { this.msg.errorMsg('EU')}
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
   
    
  }
  go_to_questionnaire(v:any){
    this.id=localStorage.getItem('rid')
    this.router.navigate(['/main/admin/questionnaire',btoa(this.questId),btoa(this.id),btoa('A'),btoa(v)])
  }
  go_to_proposal(v:any){
    this.id=localStorage.getItem('rid')
    localStorage.setItem('hotel_email',this.hotelInfo.controls.email.value)
    
    this.router.navigate(['/main/admin/proposal_draft',btoa(this.propId.toString()),btoa(this.id),btoa('A'),btoa(v)])
  }
  get_proposal_data(){
    this.dataServe.global_service(0,'/proposal_cust',`hotel_id=${localStorage.getItem('rid')}`).subscribe(data=>{
      console.log(data)
      this.proposalData=data
      this.propId=this.proposalData.msg[0]?.id?this.proposalData.msg[0].id:0

      this.propForm.patchValue({
       status:this.proposalData.msg[0]?.status,
       send_date:this.proposalData.msg[0]?.send_dt?.substr(0,10),
      resend_date:this.proposalData.msg[0]?.modified_dt?.substr(0,10),
      hotel_qsns:this.proposalData.msg[0]?.hotel_remarks,
      edited_send_date:this.proposalData.msg[0]?.modified_dt.substr(0,10),
      accepted_date:this.proposalData.msg[0]?.receive_dt?.substr(0,10),
     
      // proposal_amt:this.proposalData.msg[0]?.,
      // first_half_pay:this.proposalData.msg[0]?.,
      // first_half_pay_date:this.proposalData.msg[0]?.,
      // final_half_pay:this.proposalData.msg[0]?.,
      // final_half_pay_date:this.proposalData.msg[0]?.,
      // subscription_fee:this.proposalData.msg[0]?.,
      // additional_fee:this.proposalData.msg[0]?.,
      declined_comments:this.proposalData.msg[0]?.admin_notes?this.proposalData.msg[0]?.admin_notes:''
      })
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  send_proposal_email(){
    var dt={
      id:this.propId,
      hotel_id:localStorage.getItem('rid'),
      hotel_name:this.hotelInfo.controls.hotel.value,
      email:this.hotelInfo.controls.email.value,
      user:"admin@gmail.com",
      path: 'main/admin/view_proposal'+'/'+encodeURIComponent(btoa(this.propId.toString()))+'/'+encodeURIComponent(btoa(localStorage.getItem('rid')!))+'/'+encodeURIComponent(btoa('U'))+'/'+encodeURIComponent(btoa('E'))
    }
    this.dataServe.global_service(1,'/send_proposal',dt).subscribe(data=>{
      console.log(data)
      this.proposalEmailData=data;
      if(this.proposalEmailData.suc>0){
        this.msg.globalSuccess('Email sent successfully!')
      
      }
      else{
        this.msg.globalError('Problem sending email')
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  submitpropInfo(){
    var dt={
      status: this.propForm.controls.status.value,
      hotel_remarks: this.propForm.controls.hotel_qsns.value,
      admin_notes: this.propForm.controls.declined_comments.value,
      user:"admin@gmail.com",
      id:this.propId,
      user_type:'A',
      hotel_id:localStorage.getItem('rid'),
    }
    debugger;
    this.dataServe.global_service(1,'/update_proposal',dt).subscribe(data=>{
      console.log(data)
      this.updatePropData=data;
      if(this.updatePropData.suc>0)
       this.msg.successMsg('SU')
      else
       this.msg.errorMsg('EU')
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
}
