import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { DataService } from 'src/app/Services/data.service';
import { MessageService } from 'src/app/Services/message.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-proposal-draft',
  templateUrl: './proposal-draft.component.html',
  styleUrls: ['./proposal-draft.component.css']
})
export class ProposalDraftComponent implements OnInit {
  id: any;
  hotel_id: any;
  flag: any;
  eFlag: any;
  propData:any;
  propDataHtml:any
  updatePropData: any;
  constructor(private activatedRoute:ActivatedRoute,public dialog: MatDialog, private router:Router, private formBuilder: FormBuilder, private _formBuilder: FormBuilder,private dataServe: DataService, private msg: MessageService) { }
  pForm!: FormGroup;
  userRemarksForm!: FormGroup;
  showHtml=false;
  htmlPropForm:any;
  arr:any=[]
  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.id=atob(this.id);
    this.hotel_id=this.activatedRoute.snapshot.params['hotel_id'];
    this.hotel_id=atob(this.hotel_id);
    this.flag=this.activatedRoute.snapshot.params['flag'];
    this.flag=atob(this.flag);
    this.eFlag=this.activatedRoute.snapshot.params['editFlag'];
    this.eFlag=atob(this.eFlag);
    this.pForm=this.formBuilder.group({
      greeting:[''],
      development_details:[''],
     
      fee_structure:this.formBuilder.array([]),
    })
    this.userRemarksForm=this.formBuilder.group({
      remarks:['']
    })
    this.addFee()
    this.showHtml=this.eFlag=='E'?true:false
    if(this.showHtml || this.eFlag=='EE'){
      this.getHtmlForm()
    }
  }
  get fee_struct() {
    return this.pForm.controls.fee_structure as FormArray;
  }
  getHtmlForm(){
    this.dataServe.global_service(0,'/proposal_dtls',`hotel_id=${this.hotel_id}`).subscribe(data=>{console.log(data)
      this.propDataHtml=data
      if(this.eFlag=='EE'){
        this.pForm.patchValue({

          greeting:this.propDataHtml.msg[0].greeting,
          development_details:this.propDataHtml.msg[0].dev_dtls,
        })
        for(let i=0;i<this.propDataHtml.msg[0].propDtls.length;i++){
          this.arr.push({
            id:this.propDataHtml.msg[0].propDtls[i].id,
            fee_type:this.propDataHtml.msg[0].propDtls[i].fee_type,
            fee_amount:this.propDataHtml.msg[0].propDtls[i].fee_amount,
            notes:this.propDataHtml.msg[0].propDtls[i].remarks,
            additional_notes:this.propDataHtml.msg[0].propDtls[i].additional_remarks
          })
        this.fee_struct.patchValue(this.arr)
        if(i<this.propDataHtml.msg[0].propDtls.length-1)
        this.addFee()

        }
      }
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
 
  }
  addFee(){
    const feeForm = this.formBuilder.group({
      fee_type: [''],
      fee_amount: [''],
      notes:[''],
      additional_notes:[''],
      id:[0]
  });
  this.fee_struct.push(feeForm);
  // console.log(this.rest_dtls)
  }
  removeFee(i:any,id:any){
  
    this.fee_struct.removeAt(i)
    if(id>0){
      this.dataServe.global_service(0,'/proposal_dtls_del',`id=${id}`).subscribe(data=>{
        console.log(data)
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

    }
  }
  send_proposal_by_admin(){
    console.log(this.pForm.controls)
    var dt={
      id:this.id,
      hotel_id:this.hotel_id,
      greeting:this.pForm.controls.greeting.value,
      dev_dtls:this.pForm.controls.development_details.value,
      user:this.flag=='A'?"admin@gmail.com":"",
      fee_dtls:this.pForm.controls.fee_structure.value,
      user_type:this.flag
      
    }
    console.log(dt)
    this.dataServe.global_service(1,'/proposal_cust',dt).subscribe(data=>{
      
      console.log(data)
      this.propData=data;
      if(this.propData.suc>0){
        this.msg.successMsg('SS')
      }
      else{
        this.msg.errorMsg('ES')
      }
    
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})

  }
  openDialog(v:any,id:any) {
    console.log(id.value.id)
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: {flag:'delete',content:null}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result==1)
       {
        this.removeFee(v,id.value.id)
        // localStorage.clear();
        // this.router.navigate(['main/admin/adminlogin'])
       }

    });

  }
  openDialogForStatus(v:any){
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      // width: '250px',
      data: {flag:'status',content:v=='A'?'accept':'decline'}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result==1)
       {
        var dt={
          status: v,
          hotel_remarks: this.userRemarksForm.controls.remarks.value,
          user:localStorage.getItem('hotel_email'),
          id:this.id,
          user_type:'U',
          hotel_id:localStorage.getItem('rid'),
        }
        this.dataServe.global_service(1,'/update_proposal',dt).subscribe(data=>{
          console.log(data)
          this.updatePropData=data;
          if(this.updatePropData.suc>0)
           this.msg.successMsg('SU')
          else
           this.msg.errorMsg('EU')
          },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
    
       }
    })
  }
  go_prev_page(){
    this.router.navigate(['main/admin/manage_hotel_account',btoa(this.hotel_id)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
}
