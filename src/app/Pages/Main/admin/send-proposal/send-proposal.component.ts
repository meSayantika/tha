import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/Services/message.service';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-send-proposal',
  templateUrl: './send-proposal.component.html',
  styleUrls: ['./send-proposal.component.css']
})
export class SendProposalComponent implements OnInit {
  id_rest: any;
  // menu_url=environment.Redirect_url;
  res_nme:any;
  x: any;
  dashboardData:any=[];
  success:any;
  rest_nm:any;
  paymentData: any;
  pay_Check:any=[];
  openmodal:any;
  PAY:boolean=false;
  paycheck:any;
  time_dt_now:any;
  dt_now:any;
  time_now:any;
  packageData:any;
  URL=environment.api_url;
  now_datetime:any;
  gethelpText:any;
  menu_readonly='';
 calendar_readonly='';
 qrcs_readonly='';
 bdad_readonly='';
 circ_readonly='';
 helpData:any;
 editorText1='';
 editorText2=''
 promoData:any;
 price_b:any;
 price_e:any;
 price_c:any;
 spp_setup:any;
 spp_monthly:any;
 spp_desc:any;
 p_setup:any;
 p_monthly:any;
 p_desc:any;
 clingData:any;
  cling_data1='';
  cling_data2='';
  cling_data3='';
  cling_data4='';
  Tabletop_Sign_Holder:any='';
  Wall_Mount_Sign_Holder1:any='';
  Wall_Mount_Sign_Holder2:any='';
  Window_Clings:any='';
  decoded_rest_id:any;
  catch_selected_order:any=[];
  enable_next=true;
  enable_birthday_tab=true;
  enable_event_tab=true;
  enable_wall_tab=true;
  value1:any=0;
  value2:any=0;
  value3:any=0;
  stnd_spl_menu:boolean=false;
  stnd_calendar:any;
  stnd_birth_day:any;
  pkg:any;
  pckageData:any;
  stnd_plus_spl_menu:boolean=false;
  stnd_plus_calendar:any;
  stnd_plus_birth_day:any;
  tbl: any;
  wall: any;
  wall2: any;
  self: any;
  standard=false;
  standardplus=false;
  premium_spl_menu:boolean=false;
  premium_calendar:any;
  premium_birth_day:any;
 setup_fee:any;
 monthly_fee:any;
  m_calendar:any;
  b_calendar:any;
  e_calendar:any;
  a_calendar:any;
  s_calendar:any;
  birthday:any;
  // RES_ID:any=localStorage.getItem('RES_id');
  RES_ID:any;
  entertainment:any;
  op2:any;
  op1:any;
  premium=false;
  table_total:any;
  grand_total:any;
  show_list=true;
package_name:any = {1: "Standard", 2: "Standard+", 3: "Premium"};
package_price:any;
pkg_name:any;
breakupData:any;
  breakupsetup: any;
  breakupmonthly: any;
  breakupcal: any;
  breakupbirthday: any;
  breakupwindow: any;
  tabletop1: any;
  tabletop2: any;
  tabletop3: any;
  confirmedData:any;
  getVenues:any;
  getMenus:any=[];
  getMenus1:any;
  flag:any
  emailData:any;
  issue:any;
  decoded_rest_email:any;
  list_id:any;
  constructor(private dataServe:DataService,private msg:MessageService,private activatedroute:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    var now_date = new Date();
    var datePipe = new DatePipe("en-US");
    this.now_datetime = datePipe.transform(now_date,"yyyy-MM-dd hh:mm:ss");
    // console.log(now_datetime);
    
    this.id_rest = this.activatedroute.snapshot.params['id'];
    this.flag = this.activatedroute.snapshot.params['flag'];
    localStorage.setItem('rest_id',this.id_rest);
    console.log(atob(this.id_rest).split('/')[0]);
    this.decoded_rest_id=atob(this.id_rest).split('/')[0];
    this.decoded_rest_email=atob(this.id_rest).split('/')[1];
    // alert(this.decoded_rest_id)
   console.log(this.id_rest);
   console.log(atob(this.id_rest).split('/').length)
  //  alert(this.id_rest)
  this.dataServe.global_service(0,'/venue',`res_id=${this.decoded_rest_id}`).subscribe((data:any)=>{
    console.log(data);
    this.getVenues=data;
    // this.putdata(this.getVenues.msg);
  })
  if(atob(this.id_rest).split('/').length > 2){
    this.time_dt_now=atob(this.id_rest).split('/')[2];
    console.log({ct:this.time_dt_now, mt: this.now_datetime});
    if(this.time_dt_now >= this.now_datetime){
      this.dataServe.global_service(0,'/pay_check',`id=${atob(this.id_rest).split('/')[0]}`).subscribe(data=>{
        console.log(data);
        this.pay_Check=data;
        if(this.pay_Check.msg[0].pay_flag==1){
              this.PAY=true;
              this.paycheck=document.getElementById('paycheck');
              this.paycheck.click();
        }
        else{
          this.PAY=false;
        }
      })
    }else{
     this.router.navigate(['/no_link'])
    }
  }else{console.log(this.time_dt_now);
   
    this.dataServe.global_service(0,'/pay_check',`id=${atob(this.id_rest).split('/')[0]}`).subscribe(data=>{

     console.log(data);
     this.pay_Check=data;
     if(this.pay_Check.msg[0].pay_flag==1){
           this.PAY=true;
           this.paycheck=document.getElementById('paycheck');
           this.paycheck.click();
     }
     else{
       this.PAY=false;
     }
   })}
   this.dataServe.global_service(0,'/help_text','').subscribe(data=>{console.log(data)
    this.gethelpText=data;
    this.gethelpText=this.gethelpText.msg;
    this.menu_readonly=this.gethelpText[0].menu_help;
    this.calendar_readonly=this.gethelpText[0].calender_help;
    this.qrcs_readonly=this.gethelpText[0].qr_help;
    this.bdad_readonly=this.gethelpText[0].birthday_help;
    this.circ_readonly=this.gethelpText[0].cantact_info_help;
    this.editorText1=this.gethelpText[0].birthday_body;
    this.editorText2=this.gethelpText[0].event_body
  })
  this.dataServe.global_service(0,'/promo',`res_id=${this.decoded_rest_id}`).subscribe(data=>{console.log(data)
    this.promoData=data;
    console.log(data)
    if(this.promoData.msg[0].birth_free_flag=='Y')
    {
      this.price_b='FREE'
    }
    else
    {
      this.price_b='$'+this.promoData.msg[0].birth_price;
    }
    this.op1=this.promoData.msg[0].birth_flag=='Y'?'Y':'N'
    this.op2=this.promoData.msg[0].event_flag=='Y'?'Y':'N'
    this.entertainment=document.getElementById('option2a');
    this.birthday=document.getElementById('option1a');
    this.birthday.checked=this.promoData.msg[0].birth_flag=='Y'?true:false;
    this.entertainment.checked=this.promoData.msg[0].event_flag=='Y'?true:false;
    
    if(this.promoData.msg[0].event_free_flag=='Y')
    {
      this.price_e='FREE'
    }
    else
    {
      this.price_e='$'+this.promoData.msg[0].event_price;
    }
    
    })
    this.dataServe.global_service(0,'/holder_cling',`res_id=${this.decoded_rest_id}`).subscribe(data=>{console.log(data)
      this.clingData=data;
      console.log(data);
      // if(this.clingData.msg[0].free_flag=='Y'){
      //   this.cling_data1='FREE'
      // }
      // else
      // {
        this.cling_data1='$'+this.clingData.msg[0].table_top_6_price+' per holder';
      // }
      // if(this.clingData.msg[1].free_flag=='Y'){
      //   this.cling_data2='FREE'
      // }
      // else
      // {
        this.cling_data2='$'+this.clingData.msg[0].table_top_7_price+' per holder';
      // }
      // if(this.clingData.msg[2].free_flag=='Y'){
      //   this.cling_data3='FREE'
      // }
      // else
      // {
        this.cling_data3='$'+this.clingData.msg[0].table_top_8_price+' per holder';
      // }
      // if(this.clingData.msg[3].free_flag=='Y'){
      //   this.cling_data4='FREE'
      // }
      // else
      // {
        this.cling_data4='$'+this.clingData.msg[0].window_cling_9_price+' per holder';
      // }
  
      
      })
      this.dataServe.global_service(0,'/order_dtls',`id=${this.decoded_rest_id}`).subscribe(data=>{
        console.log(data);
        this.catch_selected_order=data;
        if(this.catch_selected_order.msg!=''){
       this.value1=1;
       this.value2=2;
       this.value3=3;
       this.enable_birthday_tab = false
       this.enable_wall_tab=false;
       this.enable_event_tab=false;
        if(this.catch_selected_order.msg[0].event_calendar=='Y'){
        // this.entertainment=document.getElementById('option2a');
        // this.entertainment.checked=true;
        // this.op2='Y';
   
        }
        else{
        //  this.entertainment=document.getElementById('option2a');
        //  this.entertainment.checked=false;
        // this.op2='N';
   
        }
        if(this.catch_selected_order.msg[0].birth_calendar_flag=='Y'){
        //  this.birthday=document.getElementById('option1a');
        //  this.birthday.checked=true;
        //  this.op1='Y';
        }
       else{
        //  this.birthday=document.getElementById('option1a');
        //  this.birthday.checked=false;
        //  this.op1='N';
   
       }
       this.pkg=this.catch_selected_order.msg[0].package_id;
      //  this.pkg_name = this.package_name[this.pkg]
       console.log(this.pkg);
       this.dataServe.global_service(0,'/package',`res_id=${this.decoded_rest_id}`).subscribe(data=>{
        this.packageData=data;
       this.pkg_name = this.packageData.msg[0].package_name
        console.log({data, msg: this.pkg})
        this.setup_fee=this.packageData.msg[0].setup_fee;
    this.monthly_fee=this.packageData.msg[0].monthly_fee;
        // fetch dynamic data for various packages
       
        
        })
      //   if(this.catch_selected_order.msg[0].package_id==1){
      //    console.log("package1");
      // this.pkg=this.catch_selected_order.msg[0].package_id;
      //     this.standard=true;
      //     this.enable_next=false;
      //   }
      //   if(this.catch_selected_order.msg[0].package_id==2){
      //    console.log("package2");
      //    this.pkg=this.catch_selected_order.msg[0].package_id;
   
   
      //    this.standardplus=true;
      //    this.enable_next=false;
   
   
      //   }
      //   if(this.catch_selected_order.msg[0].package_id==3){
      //    console.log("package3");
      //    this.pkg=this.catch_selected_order.msg[0].package_id;
   
      //    this.premium=true;
      //    this.enable_next=false;
   
   
      //   }
       this.Tabletop_Sign_Holder=this.catch_selected_order.msg[0].table_top_6;
        this.tbl=this.Tabletop_Sign_Holder;
       this.Wall_Mount_Sign_Holder1=this.catch_selected_order.msg[0].table_top_7;
       this.wall=this.Wall_Mount_Sign_Holder1
       this.Wall_Mount_Sign_Holder2=this.catch_selected_order.msg[0].table_top_8; 
       this.wall2=this.Wall_Mount_Sign_Holder2;
       this.Window_Clings=this.catch_selected_order.msg[0].window_cling_9;
       this.self= this.Window_Clings;
        }
      })
    this.dataServe.global_service(0,'/order_price',`id=${this.decoded_rest_id}`).subscribe(data=>{console.log(data)
    this.breakupData=data;
    this.breakupsetup=this.breakupData.msg[0].setup_fee;
    this.breakupmonthly=this.breakupData.msg[0].monthly_fee;
    this.breakupcal=this.breakupData.msg[0].eve_price;
    this.breakupbirthday=this.breakupData.msg[0].cal_price;
    this.breakupwindow=this.breakupData.msg[0].window_cling_9_price
    this.tabletop1=this.breakupData.msg[0].table_top_6_price;
    this.tabletop2=this.breakupData.msg[0].table_top_7_price;
    this.tabletop3=this.breakupData.msg[0].table_top_8_price;
    this.table_total=Number(this.tabletop1)+Number(this.tabletop2)+Number(this.tabletop3)
    this.grand_total=Number(this.breakupsetup)+Number(this.breakupmonthly)+Number(this.breakupcal)+Number(this.breakupbirthday)+Number(this.breakupwindow)+this.table_total
    })
    
  }
  go_to_login() {
    this.dataServe.global_service(0,'/res_details',`id=${atob(this.id_rest).split('/')[0]}`).subscribe(data=>{console.log(data);
      this.dashboardData=data;
      this.dashboardData=this.dashboardData.msg;
      this.rest_nm=this.dashboardData[0].restaurant_name;
      this.rest_nm=this.rest_nm.replace(' ','_')
      console.log(this.rest_nm);
  
    console.log(this.rest_nm);

    var dt = {
      res_id: this.id_rest,
      // url:this.menu_url= this.menu_url+this.rest_nm+'/'+btoa(this.id_rest)
      }
    console.log(dt);
    //  this.dataServe.sendPaymentData(dt).subscribe(data => {
    //   console.log(data);
    //    this.success=data;
    //    console.log(this.success);
    //   //  show menus according to the package selected
    //    if(this.success.suc == 1){
    //      localStorage.setItem('breakfast','active');
    //      localStorage.setItem('launch','active');
    //      localStorage.setItem('dinner','active');
    //      localStorage.setItem('brunch','active');

    //     localStorage.setItem('No_of_menu',this.success.res.no_of_menu);
    //     localStorage.setItem('Restaurant_id',this.success.res.id);
    //     localStorage.setItem('Restaurant_email',this.success.res.email);
    //     localStorage.setItem('Restaurant_name',this.success.res.restaurant_name);
    //    setTimeout(() => {
    //      if(localStorage.getItem('No_of_menu')=='U'){
    //       this.router.navigate(['/CreateMenus']);
  
    //      }
    //      else{
    //       this.router.navigate(['/menu_setup']);
    //      }
    //   }, 3000)
    //    }
      
    // })
  })
   

   
  }
  open_venue(id:any){
    // alert(id);
    // this.venueid='';
    // alert("hello")
    // this.venueid=id;
    if(id=='')
    this.getMenus.length=0
    else{
     
    this.dataServe.global_service(0,'/venue_menu',`res_id=${this.decoded_rest_id}&tb_id=${null}&venu_id=${id}`).subscribe(data=>{
      console.log(data);
      this.getMenus1=data;
      this.getMenus1=this.getMenus1.msg
      console.log(Array.isArray(this.getMenus1))
      if(Array.isArray(this.getMenus1))
        this.getMenus=this.getMenus1;
      else
         this.getMenus.length=0;
      
     
  
    })
  }
  }
  // function to show snackbar
 
  go_to_payment(){
   
    console.log(encodeURIComponent(this.id_rest))
    var dt={
      "en_dt":encodeURIComponent(this.id_rest),
      "res_id":this.decoded_rest_id
    }
    this.dataServe.global_service(1,'/send_pay_email',dt).subscribe(data=>{
      console.log(data)
      this.emailData=data;
      if(this.emailData.suc>0)
      {
       this.msg.globalSuccess('Email sent successfully!')

      }
      else{
        this.msg.globalError('Problem sending email! Please try again later.')

      }
    })
  }
  amend_menu(status:any){
    this.issue=document.getElementById('spec_change');
    console.log(encodeURI(this.id_rest))
    var dt={
      "flag":status,
      "remarks":this.issue.value,
      "res_id":this.decoded_rest_id,
      "en_dt":encodeURIComponent(this.id_rest),
      "user":this.decoded_rest_email
    }
    
      this.dataServe.global_service(1,'/approve_proposal',dt).subscribe(data=>{console.log(data)
      this.emailData=data;
      if(this.emailData.suc>0){
        if(status=='R') 
      {  debugger;
        this.msg.globalSuccess('Email sent! The admin will review the issues!')
      }

        else{
          this.router.navigate(['main/admin/confirm_pay',this.id_rest])
        }

        
      }
      else{
       this.msg.globalError('Problem while completing the process!')
      }
      })
      
  
  }
  go_to_edit(){
    this.router.navigate(['main/admin/proposal',this.id_rest])
  }
  open_tree(i:any){
    alert(i)
    this.list_id=document.getElementById('nested_ul'+i);
    this.list_id.style.display="block"
    console.log(this.list_id)
    // this.show_list=!this.show_list
  }
  
}
