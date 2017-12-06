import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JobsServiceService } from "../../services/jobs-service.service";
import { Job } from "../../model/job";
import { Skillset } from '../../model/skillset';
import { DataServiceService } from "../../services/data-service.service";

@Component({
  selector: 'add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css']
})
export class AddNewJobComponent implements OnInit {
  newJob: Job = <Job>{};
  arSkillSetPicked: string[] = [];
  arSkillset: any;
  newArSkillSet: Skillset[] = [];
  @Output() onClickAdd = new EventEmitter<Job>();
  recutManagerName: string;
  RecruitingManager: string;
  formValidateMsg: string = "";

  constructor(public jobService: JobsServiceService,
    public dataService: DataServiceService) { }
  ngOnInit() {
    this.arSkillset = this.dataService.arSkillset;
    this.arSkillset.forEach(element => {
      const skil = { name: element, selected: false };
      this.newArSkillSet.push(skil);
    });
  }

  skillSetArray(skill) {
    if (skill.selected) {
      this.arSkillSetPicked.push(skill.name)
    }
    if (!skill.selected) {
      console.log(skill)
      let aa = this.arSkillSetPicked.indexOf(skill.name);
      this.arSkillSetPicked.splice(aa, 1)
    }
    console.log(this.arSkillSetPicked)
  }

  addNewJobSubmitHandler() {
    if (this.arSkillSetPicked != null) {
      const jobToAdd = {
        Postion: this.newJob.Postion,
        RecruitingManager: this.RecruitingManager,
        MinimumReqYears: this.newJob.MinimumReqYears,
        Description: this.newJob.Description,
        IsArcheive: false,
        Skills: this.arSkillSetPicked,
      }
      this.onClickAdd.emit(jobToAdd);
    }
    else {
      this.formValidateMsg = "Not all fields are fuiled";
    }
  }
}
