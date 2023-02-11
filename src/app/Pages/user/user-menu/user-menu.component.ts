import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  getAvatarData: any;
  hotel_id: any;
  id: any;
  spstockImg: any;
  pcaForm: any;
  msg: any;
  getvoiceData: any;
  audFilePlay: any;
  r_id: any;
  spdescData: any;
  spdesc_text_readonly: any;
  stockImg1: any;
  imgcat: any;
  constructor(private router:Router, public dialog: MatDialog,private dataServe:DataService,private activatedRoute:ActivatedRoute) { }
 serve_id:any;
 restaurant_id:any
 menuData:any
 menus:any
 cover_img:any
 top_img:any
 urlSet=environment.api_url+'/'
 audPath=new Audio();
  msg_text:any
  showPlay=false
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['serve_id'],this.activatedRoute.snapshot.params['rid'])
    this.serve_id= atob( this.activatedRoute.snapshot.params['serve_id'])
    this.restaurant_id= atob( this.activatedRoute.snapshot.params['rid'])
    this.dataServe.global_service(0,'/static_menu',`hotel_id=${this.restaurant_id}&res_id=${this.serve_id}`).subscribe(data=>{
      console.log(data)
      this.menuData=data
      var menu = Object.keys( this.menuData.msg);
      this.menus = Object.keys( this.menuData.msg);
      
      }
      )
      this.dataServe.global_service(0,'/pc_avatar',`hotel_id=${this.restaurant_id}`).subscribe(data=>{
        console.log(data)
        this.getAvatarData=data;
        this.id=this.getAvatarData.msg[0].id
        this.spstockImg=environment.api_url+'/'+this.getAvatarData.msg[0].img_path
       
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
      
        )
       

        this.getVoice(this.serve_id)
      //   this.dataServe.global_service(0,'/get_special_data',`id=${this.r_id}&menu_id=5`).subscribe(data=>{console.log(data)
    
      //     this.spdescData=data;
      //     this.spdescData=this.spdescData.msg
      //     this.spdesc_text_readonly=this.spdescData[0]?.menu_desc;
      //     this.stockImg1=this.spdescData[0]?.img_path;
      //     this.spstockImg=environment.api_url+'/stock/'+ this.spdescData[0]?.img_path;
      //     this.imgcat=this.spdescData[0]?.img_catg
      //     console.log(this.spstockImg);
      //     }
      // ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)}
          
      //     )

}
getVoice(v:any){
  this.dataServe.global_service(0,'/pc_voice',`hotel_id=${this.restaurant_id}&id=${v}`).subscribe(data=>{
    console.log(data)
    this.getvoiceData=data;
   this.msg_text=this.getvoiceData.msg[0].msg_text
    this.audFilePlay=environment.api_url+'/'+this.getvoiceData.msg[0].sound_path
  } ,error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
}
view_menu(menu:any){
  console.log(menu)
  var section;

  // for(let menu of this.menuData){
    console.log(menu);
    section = Object.keys( this.menuData.msg[menu])
    console.log(section);
    for(let sec of section){

        // for(let m of  this.menuData.msg[menu][sec]){
      console.log(this.menuData.msg[menu][sec].cover_img,this.menuData.msg[menu][sec].top_img);
     this.cover_img=this.urlSet+this.menuData.msg[menu][sec].cover_img
     this.top_img=this.urlSet+this.menuData.msg[menu][sec].top_img
        // }
    }

    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      height: '600px',
      width: '350px',
        autoFocus: false,
      data: { flag: 'menuPrev', content:{arr:this.menuData.msg,key:menu}}
    });
    dialogRef.afterClosed().subscribe(result => {})
  // }
}
play(){
  // this.showButton=!this.showButton
  this.playAudio();


}

stop(){
  // this.showButton=!this.showButton
  this.stopAudio()
}
playAudio(){
  this.audPath.src = this.audFilePlay
  this.audPath.load();
  this.audPath.play();
}
stopAudio(){
 
  this.audPath.pause();
}
readText(){
  console.log(this.msg_text)
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    // height: '600px',
    // width: '350px',
    //   autoFocus: false,
    data: { flag: 'aboutAVT', content:this.msg_text}
  });
  dialogRef.afterClosed().subscribe(result => {})
}
go_to_directory(){
  this.router.navigate(['/directory/directory_home'])
}

readSpecial(){
  const dialogRef = this.dialog.open(DialogBoxComponent, {
    // width: '250px',
    // height: '600px',
    // width: '350px',
    //   autoFocus: false,
    data: { flag: 'specialMenuPrev', content:this.spdescData}
  });
  dialogRef.afterClosed().subscribe(result => {})
}
}
