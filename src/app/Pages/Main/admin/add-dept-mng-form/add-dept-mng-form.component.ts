import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataService } from 'src/app/Services/data.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';
import { DialogBoxComponent } from 'src/app/Core/dialogBox/dialogBox.component';
import { Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-add-dept-mng-form',
  templateUrl: './add-dept-mng-form.component.html',
  styleUrls: ['./add-dept-mng-form.component.css']
})
export class AddDeptMngFormComponent implements OnInit {
  mngForm!: FormGroup;
  letterForm!:FormGroup;
  hotel_id:any;
  id:any;
  getDeptData:any
  getEmpData:any
  email_body=''
  mngFlag:any
  empID:any
  postdeptMngData:any
  selectedItems:any=[
    
  ]
  dropdownSettings:IDropdownSettings = {
    // singleSelection: false,
    // idField: 'item_id',
    // textField: 'item_text',
    // selectAllText: 'Select All',
    // unSelectAllText: 'UnSelect All',
    // itemsShowLimit: 3,
    // allowSearchFilter: true
    //singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  msgList=[
    {id:"H", name:"Hotel Message Center"},
    {id:"E", name:"Emergency Messages"},
    {id:"V", name:"VIP Messages"},
    {id:"M", name:"Employee Messages"},
    {id:"G", name:"Group Messages"}
  ]

  dayFields = [
    {id: 0, day: 'Monday', code:1, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Tuesday', code:2, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Wednesday', code:3, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Thursday', code:4, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Friday', code:5, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Saturday', code:6, active_flag: false, off_on: false, start: '', end: ''},
    {id: 0, day: 'Sunday', code:7, active_flag: false, off_on: false, start: '', end: ''},
  ]
  constructor(public dialog: MatDialog,private activatedRoute:ActivatedRoute,private msg:MessageService, private router: Router,private dataServe:DataService,private formBuilder: FormBuilder) { }
 

  ngOnInit() {
    console.log(this.selectedItems)
    this.hotel_id=this.activatedRoute.snapshot.params['hotel_id'];
    this.hotel_id=atob(this.hotel_id);
    this.id=this.activatedRoute.snapshot.params['id'],
    this.id=atob(this.id)
    this.mngForm=this.formBuilder.group({
      dept_name:['',Validators.required],
      mng_name:['',Validators.required],
      m_email:['',[Validators.required,Validators.email]],
      m_phone:['',Validators.required],
      msg_type:['',Validators.required],
      check_mon:['',Validators.required],
      check_mon_off:['',Validators.required],
      mon_time_start:['',Validators.required],
      mon_time_end:['',Validators.required],
      check_tue:['',Validators.required],
      check_tue_off:['',Validators.required],
      tue_time_start:['',Validators.required],
      tue_time_end:['',Validators.required],
      check_wed:['',Validators.required],
      check_wed_off:['',Validators.required],
      wed_time_start:['',Validators.required],
      wed_time_end:['',Validators.required],
      check_thur:['',Validators.required],
      check_thur_off:['',Validators.required],
      thur_time_start:['',Validators.required],
      thur_time_end:['',Validators.required],
      check_fri:['',Validators.required],
      check_fri_off:['',Validators.required],
      fri_time_start:['',Validators.required],
      fri_time_end:['',Validators.required],
      check_sat:['',Validators.required],
      check_sat_off:['',Validators.required],
      sat_time_start:['',Validators.required],
      sat_time_end:['',Validators.required],
      check_sun:['',Validators.required],
      check_sun_off:['',Validators.required],
      sun_time_start:['',Validators.required],
      sun_time_end:['',Validators.required]
    })
    this.letterForm=this.formBuilder.group({
      subject:['',Validators.required],
      email_text:['',Validators.required],
      preview:['']

    })
    this.getDept()
  }
  getDept(){
    this.dataServe.global_service(0,'/dept',`hotel_id=${this.hotel_id}`).subscribe(data=>{console.log(data)
    this.getDeptData=data
    },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  getEmp(){
    this.mngForm.controls.m_email.reset()
    this.mngForm.controls.m_phone.reset()
    this.dataServe.global_service(0,'/emp_dtls',`hotel_id=${this.hotel_id}&dept_id=${this.mngForm.controls.dept_name.value}`).subscribe(data=>{console.log(data)
      this.getEmpData=data
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
  change(){
    console.log(this.email_body)
    this.letterForm.controls.preview.setValue(this.email_body)
  }

  go_prev_page(){
    this.router.navigate(['main/admin/manage_hotel_account',btoa(this.hotel_id)]).catch(data=>{
      this.msg.globalError(data);
    })
  }
  onItemSelect(item: any) {
    console.log(item);
    // this.selectedItems.push(item)
    console.log(this.selectedItems)

  }
  onSelectAll(items: any) {
    console.log(items);
    // this.selectedItems=items
    console.log(this.selectedItems)

  }
  getEmpDtls(){
    this.mngFlag=this.getEmpData.msg.filter((e:any)=>e.emp_id==this.mngForm.controls.mng_name.value)[0].manager_flag
    this.empID=this.getEmpData.msg.filter((e:any)=>e.emp_id==this.mngForm.controls.mng_name.value)[0].emp_id
      this.mngForm.controls.m_email.setValue(this.getEmpData.msg.filter((e:any)=>e.emp_id==this.mngForm.controls.mng_name.value)[0].email_id)
      this.mngForm.controls.m_phone.setValue(this.getEmpData.msg.filter((e:any)=>e.emp_id==this.mngForm.controls.mng_name.value)[0].mobile_no)
  }
  add_manager(){
    console.log(this.mngForm.controls)
    console.log(this.letterForm.controls)
    console.log(this.selectedItems)
    this.dayFields[0].active_flag=this.mngForm.controls.check_mon.value?true:false
    this.dayFields[1].active_flag=this.mngForm.controls.check_tue.value?true:false
    this.dayFields[2].active_flag=this.mngForm.controls.check_wed.value?true:false
    this.dayFields[3].active_flag=this.mngForm.controls.check_thur.value?true:false
    this.dayFields[4].active_flag=this.mngForm.controls.check_fri.value?true:false
    this.dayFields[5].active_flag=this.mngForm.controls.check_sat.value?true:false
    this.dayFields[6].active_flag=this.mngForm.controls.check_sun.value?true:false

    this.dayFields[0].off_on=this.mngForm.controls.check_mon_off.value?true:false
    this.dayFields[1].off_on=this.mngForm.controls.check_tue_off.value?true:false
    this.dayFields[2].off_on=this.mngForm.controls.check_wed_off.value?true:false
    this.dayFields[3].off_on=this.mngForm.controls.check_thur_off.value?true:false
    this.dayFields[4].off_on=this.mngForm.controls.check_fri_off.value?true:false
    this.dayFields[5].off_on=this.mngForm.controls.check_sat_off.value?true:false
    this.dayFields[6].off_on=this.mngForm.controls.check_sun_off.value?true:false

    this.dayFields[0].start=this.mngForm.controls.mon_time_start.value
    this.dayFields[1].start=this.mngForm.controls.tue_time_start.value
    this.dayFields[2].start=this.mngForm.controls.wed_time_start.value
    this.dayFields[3].start=this.mngForm.controls.thur_time_start.value
    this.dayFields[4].start=this.mngForm.controls.fri_time_start.value
    this.dayFields[5].start=this.mngForm.controls.sat_time_start.value
    this.dayFields[6].start=this.mngForm.controls.sun_time_start.value

    this.dayFields[0].end=this.mngForm.controls.mon_time_end.value
    this.dayFields[1].end=this.mngForm.controls.tue_time_end.value
    this.dayFields[2].end=this.mngForm.controls.wed_time_end.value
    this.dayFields[3].end=this.mngForm.controls.thur_time_end.value
    this.dayFields[4].end=this.mngForm.controls.fri_time_end.value
    this.dayFields[5].end=this.mngForm.controls.sat_time_end.value
    this.dayFields[6].end=this.mngForm.controls.sun_time_end.value
    var dt={
      id:0,
      dept_id:this.mngForm.controls.dept_name.value,
      emp_name: this.getEmpData.msg.filter((e:any)=>e.emp_id==this.mngForm.controls.mng_name.value)[0].emp_name,
      phone_no:this.mngForm.controls.m_phone.value,
      email:this.mngForm.controls.m_email.value,
      group_leader_flag:this.mngFlag,
      msg_type:this.selectedItems,
      emp_id:this.empID,
      day_dt: this.dayFields,
      user_type:'E',
      user:"admin@gmail.com",
      hotel_id:this.hotel_id
    }
    console.log(dt)
    this.dataServe.global_service(1,'/dept_user_dtls',dt).subscribe(data=>{
      console.log(data)
      this.postdeptMngData=data 
      if(this.postdeptMngData.suc>0){
        this.msg.successMsg('SS')
      }
      else
        this.msg.errorMsg('ES')
      },error=>{this.msg.globalError(error.status+' '+error.statusText+' in '+error.url)})
  }
}
