import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-menu-data',
  templateUrl: './menu-data.component.html',
  styleUrls: ['./menu-data.component.css']
})
export class MenuDataComponent implements OnInit {
  name:any=localStorage.getItem('Restaurant_name');
  notice_check:any;
  v:any=0;
  abut=false;
    not=true;
  position_id:any;
  header_title:any;
  notice_content:any="";
  font_color:any;
  back_color:any;
  role:any=0;
  role_notice_content:any=0;
  menu_id:any;
  val:any="";
  notic:any=[];
  abou:any=[];
  val_about:any;
  maxChars=150;
  disabld:boolean=false;
  tab1:boolean=false;
  tab2:boolean=true;
  counter:any=0;
  aboutus:any;
  value_menu:boolean=true;
  value_position:boolean=true;
  value_Headertitle:boolean=true;
  value_font=true;
  value_background=true;
 value_text=true;
 color_font=true;

  valid_aboutus:any;
  disabled_about:boolean=true;;
  notice:any
  t1:any;
  x :any;
  t2:any;
  // res_id:any=10;
  res_id:any=localStorage.getItem('Restaurant_id');

  success:any;
  clearall:any;
  menu:any;
  position:any;
  font:any;
  back:any;
  notice_flag:any;
  breakfast:boolean=true;
  launch:boolean=true;
  brunch:boolean=true;
  dinner:boolean=true;
  allmenus:boolean=true
  showinitialvalue:any=[]
  notice_select:any=[];
  notify:any;
  check:any=[];
  break_button:boolean=false;
  noticeme:any=0;
  show_toast:boolean=true;
  Header_title:any;
  Notice_content:any;
  Font_color:any;
  Backcolor:any;
  color_Font:any;
  color_Back:any;
  venueid:any;
  getMenus:any;
  getVenues:any;
  deSelect=false;
  serviceId:any
  res_bar_flag:any
  constructor(private dataServe:DataService,private msg:MessageService,private router:Router) { }

  ngAfterViewInit(): void {
    if('notice' in localStorage){
      this.abut=false;
      this.not=false;
      this.t1='notices';
   }
  
  }

  ngOnInit(): void {
    this.dataServe.global_service(0,'/cust_menu_list',`hotel_id=${this.res_id}`).subscribe((data:any)=>{
      console.log(data);
      this.getVenues=data;
  
      // this.open_venue(this.getVenues.id);
    }
  ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )

// fetching notice data depending on the menu
    this.dataServe.global_service(0,'/res_menu',`id=${this.res_id}`).subscribe(data=>{
      console.log(data);
      this.notice_select=data;

      this.notice_select=this.notice_select.msg;
      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )
//       this.dataServe.global_service(0,'/venue',`res_id=${this.res_id}`).subscribe((data:any)=>{
//         console.log(data);
//         this.getVenues=data;
//         // this.putdata(this.getVenues.msg);
//       }
// ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

//       )
// fetching the special notice data
   this.dataServe.global_service(0,'/notice',`id=${this.res_id}`).subscribe(data=>{
     console.log(data);
     this.notic=data;
     this.notify=this.notic.msg[0].menu_id;
     console.log( this.notify);

     for(let i=0;i<this.notic.msg.length;i++){
       this.noticeme=1;
      if(this.notify==this.notic.msg[i].menu_id){

       if(this.notic.msg[i].notice_flag=='Y'){ console.log("ftyf");
         this.notice_check=document.getElementById('noticechecked');
         this.notice_check.checked=true;
         this.color_font=false;
         this.notice_flag='Y';
       }
       else { console.log("ftyf1");
        // this.notice_check=document.getElementById('noticechecked');
        // this.notice_check.checked=false;
        // this.color_font=true;
        // this.notice_flag='N';

       }

      //  this.position_id=this.notic.msg[i].position_id;
      //  this.position=this.position_id;
      //  if(this.position_id!=''){
      //    this.value_position=false;
      //  }
      //  else{
      //    this.value_position=true;
      //  }
       this.header_title=this.notic.msg[i].header_title;
       if( this.header_title!=''){
         this.value_Headertitle=false;
       }
       else{
         this.value_Headertitle=true;
       }
       this.notice_content=this.notic.msg[i].notice_content;
       this.role_notice_content=this.notic.msg[i]?.notice_content?.length;
       if(this.notice_content!=''){
         this.value_text=false;
       }
       else{
        this.value_text=true;

       }
       this.font_color=this.notic.msg[i].font_color;
       if(this.font_color!=''){
        this.value_font=false;
       }
       else{
        this.value_font=true
         }
       this.back_color=this.notic.msg[i].back_color;
          if(this.back_color!=''){
            this.value_background=false;
          }
          else{
            this.value_background=true;

          }
       }
      else{}
   }


   }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

   )
//fetching about us data
     this.dataServe.global_service(0,'/aboutus',`id=${this.res_id}`).subscribe(data=>{
       console.log(data);
       this.abou=data;
       for(let i=0;i<this.abou.msg.length;i++){
         if(this.abou.msg[i].about_us!=""){
         this.val=this.abou.msg[i].about_us;
         this.role=this.abou.msg[i].about_us.length;
         this.disabled_about=false;
          this.not=false;
          this.t1='notices';
          this.v=1;

          }
         else {
         this.val="";
         this.disabled_about=true;
         this.not=true;
         this.t1='';
         this.v=0;


         }
       }
       

     }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
     
     )

    // this.aboutus=document.getElementById('defaultOpen');
    // this.aboutus.className='active';

    // this.aboutus.style.background='#00477e';
    // this.aboutus.style.color='white';
//For Checking approval flag is on or not
this.dataServe.global_service(0,'/check_activity',`id=${this.res_id}`).subscribe(data=>{
  console.log(data);
  this.check=data;
  if(this.check.msg[0].approval_flag=='U'){
    this.show_toast=true;

  }
  else{
    // this.toastr.warningToastr('Set up mode is on , you can not update or insert','Alert!!',{
    //   dismiss:'click',
    //    maxShown:'1',
    //    toastTimeout:'5000'


    // })
    this.deSelect=true;
    this.show_toast=false;
    this.break_button=true;
    this.disabled_about=true;
    this.color_font=true;
    this.value_position=true;

  }
}
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}

)


  }
  open_venue(id:any){
    this.val=''
    // alert(id);
    console.log(id)
    // this.venueid='';
    // this.getMenus.length=0;
    this.venueid=id;
    this.serviceId=id;
    this.res_bar_flag='R'
    // alert(this.venueid)
    var tb_id = id > 0 ? id : '';
  var v_id = this.venueid > 0 ? this.venueid : 0;
  // return this.http.get(url_set.api_url+'/venue_menu?res_id=' + res_id + '&id=' + tb_id + '&venu_id=' + v_id)
    // this.dataServe.global_service(0,'/venue_menu',`res_id=${this.res_id}&id=${tb_id}&venu_id=${v_id}`).subscribe(data=>{
    //   console.log(data);
    //   this.getMenus=data;
    //   this.getMenus=this.getMenus.msg
     
  
    // })
    this.dataServe.global_service(0,'/aboutus',`id=${this.serviceId}&hotel_id=${this.res_id}`).subscribe(data=>{
      console.log(data);
      this.abou=data;
      for(let i=0;i<this.abou.msg.length;i++){
        if(this.abou.msg[i].about_us!=""){
        this.val=this.abou.msg[i].about_us;
        this.role=this.abou.msg[i].about_us.length;
        this.disabled_about=false;
         this.not=false;
         this.t1='notices';
         this.v=1;

         }
        else {
        this.val="";
        this.disabled_about=true;
        this.not=true;
        this.t1='';
        this.v=0;


        }
      }
      

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
console.log(this.getVenues,id)
    console.log(this.getVenues.msg.restaurant.filter((x:any)=>x.id==id)[0])
    this.getMenus=this.getVenues.msg.restaurant.filter((x:any)=>x.id==id)[0]
  }
  // opening tabs
 
// clicking on save and next
nexttab(e:any,e1:any){
  console.log(this.v)
  if(this.v==1){
    this.abut=false;
       this.not=false;
    //  localStorage.setItem('notice',this.v);
      this.tab1=true;
      this.tab2=false;
      this.t1='notices';
      var data = {aboutus: e1, hotel_id: this.res_id, restaurant_id:this.serviceId};
       this.dataServe.global_service(1,'/aboutus',data).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
         this.msg.successMsg('SS')

      }
      else{
        this.msg.errorMsg('ES')
      }
       }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
       
       )

  }
  else{

   if(e=='notices'){
    this.v=1;
    this.abut=false;
       this.not=false;
    localStorage.setItem('notice',this.v);
      this.tab1=true;
      this.tab2=false;
      this.t1='notices';
      var data = {aboutus: e1,  hotel_id: this.res_id, restaurant_id:this.serviceId};
       this.dataServe.global_service(1,'/aboutus',data).subscribe(data=>{
         console.log(data);
         this.success=data;
         if(this.success.suc==1){
          // this.myFunction();
          this.msg.successMsg('SS')

      }
      else{
       this.msg.errorMsg('ES')
      }
       }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
       
       )


    }

  }
    // For Change the color of active tab


    this.aboutus=document.getElementById('defaultOpen1');
    this.aboutus.style.background='#00477e';
    this.aboutus.style.color='white';
    this.notice=document.getElementById('defaultOpen');
    this.notice.style.background='#f1f1f1';
    this.notice.style.color='black';

}
// clicking on save and next
nexttab1(e:any,v7:any,v1:any,v2:any,v3:any,v4:any,v5:any,v6:any,v_id:any){
  console.log(v7,this.position,v1,v3,v5,v6,this.res_id,this.notice_flag);

  if(this.noticeme==1){

      this.abut=false;
      this.not=false;
      this.tab1=true;
      this.tab2=false;
      // alert("lalalala")
      var data = {menu:v7,notice_flag: this.notice_flag, position: this.position,headertitle:v1,fontcolor:v3,back_color:v5,notice:v6,hotel_id:this.res_id,venue_id:v_id,id:this.serviceId};
      this.dataServe.global_service(1,'/notice',data).subscribe(data=>{
          console.log(data);
          this.success=data
          if(this.success.suc==1){
             this.msg.successMsg('SS')

              }
              else{
                this.msg.successMsg('ES')

              }

      }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
      )

  }
  else{
 if(e=='about'){
  //  alert("lilili")
    this.abut=false;
    this.not=false;
    this.tab1=true;
    this.tab2=false;
    var data = {menu:v7,notice_flag: this.notice_flag, position: this.position,headertitle:v1,fontcolor:v3,back_color:v5,notice:v6,hotel_id:this.res_id,venue_id:v_id,id:this.serviceId};

    this.dataServe.global_service(1,'/notice',data).subscribe(data=>{

        console.log(data);
        this.success=data
        if(this.success.suc==1){

            this.msg.successMsg('SS')
            // this.router.navigate(['/thankyou'])

            }
            else{
              this.msg.errorMsg('ES')

            }

    }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
    
    )
  }

  }
}
//selecting a menu 
pickup_place(event:any){

  this.menu=event;
  console.log(this.menu)
 if(this.menu!=''){
   this.value_menu=false;


 this.dataServe.global_service(0,'/notice',`hotel_id=${this.res_id}&menu_id=${this.menu}&id=${this.serviceId}`).subscribe(data=>{
   console.log(data);

  this.notic=data;
  if(this.notic.msg.length > 0)
  {for(let i=0;i<this.notic.msg.length;i++){
    console.log("asdada"+this.notic.msg[i].menu_id,event);
    // if(this.notic.msg[i].menu_id > 0)
   if(this.notic.msg[i].menu_id == event){

      this.noticeme=1;
      if(this.notic.msg[i].notice_flag=='Y'){
        this.notice_check=document.getElementById('noticechecked');
        this.notice_check.checked=true;
        this.color_font=false;
        this.notice_flag='Y';
      }
      else {
       this.notice_check=document.getElementById('noticechecked');
       this.notice_check.checked=false;
       this.color_font=true;
       this.notice_flag='N';

      }

      this.position_id=this.notic.msg[i].position_id;
      console.log(this.notic.msg[i].position_id)
      this.position=this.position_id;
      if(this.position_id!=''){
        this.value_position=false;
      }
      else{
        this.value_position=true;
      }
      this.header_title=this.notic.msg[i].header_title;
      if( this.header_title!=''){
        this.value_Headertitle=false;
        this.Header_title=document.getElementById('headTitle');
        this.Header_title.value= this.header_title;
      }
      else{

        this.value_Headertitle=true;
      }
      this.notice_content=this.notic.msg[i].notice_content;
       
      if(this.notice_content!=''){
        this.value_text=false;
        this.Notice_content=document.getElementById('spclMore');
        this.Notice_content.value=this.notice_content;
        this.role_notice_content=this.notice_content.length
  
      }
      else{

       this.value_text=true;

      }
      this.font_color=this.notic.msg[i].font_color;
      if(this.font_color!=''){
       this.value_font=false;
       this.Font_color=document.getElementById('box');
       this.Font_color.value=this.font_color;
       this.color_Font=document.getElementById('colorPicker');
       this.color_Font.value=this.font_color;
      }
      else{
       this.value_font=true
        }
      this.back_color=this.notic.msg[i].back_color;
         if(this.back_color!=''){
           this.value_background=false;
           this.Backcolor=document.getElementById('box2');
           this.Backcolor.value=this.back_color;
           this.color_Back=document.getElementById('colorPicker2');
          this.color_Back.value=this.font_color;
         }
         else{
           this.value_background=true;

         }
    }
    else{
      console.log("haisdaids");
      this.notice_check=document.getElementById('noticechecked');
      this.notice_check.checked=true;
      this.color_font=false;
      // this.notice_flag='N';
      this.position_id='';
      this.Header_title=document.getElementById('headTitle');
      this.Header_title.value='';
      this.header_title='';
      this.Notice_content=document.getElementById('spclMore');
      this.Notice_content.value='';
      this.notice_content='';
      this.Font_color=document.getElementById('box');
      this.Font_color.value='';
      this.font_color='';
      this.color_Font=document.getElementById('colorPicker');
      this.color_Font.value='black';
      this.Backcolor=document.getElementById('box2');
      this.Backcolor.value='';
      this.back_color=''
      this.color_Back=document.getElementById('colorPicker2');
     this.color_Back.value='';
     this.value_font=true;
      this.color_Back=document.getElementById('pos');
      this.color_Back.value='';
     this.position='';
         this.role_notice_content=0;
    }
  }}else{
    console.log('Elaseeesss');
    console.log("haisdaids");
    this.role_notice_content=0;

      this.notice_check=document.getElementById('noticechecked');
      this.notice_check.checked=true;
      this.color_font=false;
      // this.notice_flag='N';
      this.position_id='';
      this.Header_title=document.getElementById('headTitle');
      this.Header_title.value='';
      this.header_title='';
      this.Notice_content=document.getElementById('spclMore');
      this.Notice_content.value='';
      this.notice_content='';
      this.Font_color=document.getElementById('box');
      this.Font_color.value='';
      this.font_color='';
      this.color_Font=document.getElementById('colorPicker');
      this.color_Font.value='black';
      this.Backcolor=document.getElementById('box2');
      this.Backcolor.value='';
      this.back_color=''
      this.color_Back=document.getElementById('colorPicker2');
     this.color_Back.value='';
     this.value_font=true;
     this.color_Back=document.getElementById('pos');
     this.color_Back.value='';
    this.position='';

  }
 }
,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
 
 )
}
 else{
  console.log("asdasd");
  this.value_menu=true;
 }
 console.log(this.menu)
}
// fetching position of the notice depending on the menu
getposition(e:any){
 this.position=e;
 console.log(this.position)
 if(e!=''){
   this.value_position=false;
 }
 else{
  this.value_position=true;
 }

}
// assign the color to the input text
changecolor(event:any,e:any){
     if(e=='back'){
     this.back=document.getElementById('box');
     this.back.value=event.target.value;
     this.value_font=false;
     }
     else if(e=='font'
     ){
      this.back=document.getElementById('box2');
      this.back.value=event.target.value;
      this.value_background=false;
     }
     console.log(event.target.value);
}

checknotice(event:any){
  if(event.target.checked){
    this.notice_flag='Y';
    this.color_font=false;

  }
  else
  {

    this.notice_flag='N';
    this.color_font=true;
  }

}
// snackbar

prevent_null(event:any){

  console.log(event.target.value);
  this.role=event.target.value.length;

    if(event.target.id=='about'){


      if(this.val == ''){
        console.log("adsasda1")
        this.disabled_about=true;
      }

      else{
        console.log("adsasda")
        this.disabled_about=false;
      }


    }
else {
     this.disabld=true;

}
}
//color assigned in input
checkvalidity(event:any){
  console.log(event);
 
  if(event.target.id=='headTitle'){

    if(event.target.value!=''){
      this.value_Headertitle=false;
      }
      else{
      this.value_Headertitle=true;

      }
  }
  else if(event.target.id=='box'){
    if(event.target.value!=''){
      this.value_font=false;
      }
      else{
      this.value_font=true;

      }
  }
  else if(event.target.id=='box2'){
    
    if(event.target.value!=''){
      this.value_background=false;
      }
      else{
      this.value_background=true;

      }
  }
  else if(event.target.id=='spclMore'){
    this.role_notice_content=event.target.value.length;
    if(event.target.value!=''){
      this.value_text=false;
      }
      else{
      this.value_text=true;

      }
  }

}
// 
see_validation(){
  if(this.color_font==true){
    this.msg.globalInfo('Please select the checkbox to proceed further!');
  }
  else{

  }
}

// show snackbar when hovered over the div of the notice has been selected
myFunction_foralert() {
  // Get the snackbar DIV
  this.x = document.getElementById("snackbar2");

  // Add the "show" class to DIV
  this.x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(()=>{  this.x.className =  this.x.className.replace("show", ""); }, 5000);
}
//For going to thankyou page
go_to_thankyou_page(){
  this.router.navigate(['/thankyou'])

}

}


