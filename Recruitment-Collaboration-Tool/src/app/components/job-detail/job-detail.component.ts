import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../model/job';
import { JobsServiceService } from "../../services/jobs-service.service";
import { DataServiceService } from "../../services/data-service.service";
import { SkillsetServiceService } from '../../services/skillset-service.service';
import { Skillset } from '../../model/skillset';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  show = false;
  pickedJob: any;
  newArSkillSet: Skillset[] = [];
  arSkillSetPicked: string[] = [];
  skil;
  toggleAfterUpdate: boolean = true;
  toggleEditIcon: boolean = false;
  arSkils: any;

  constructor(public jobService: JobsServiceService,
    public DataService: DataServiceService,
    public SkillsetService: SkillsetServiceService,
    private router: Router,
    public authService: AuthService) {
    this.pickedJob = DataService.jobToEdit;
    if (this.authService.isUserAdmin()) {
      this.toggleEditIcon = true;
    }
  }

  ngOnInit() {
  }

  goToEditJob() {
    if (this.authService.isUserAdmin()) {
      this.router.navigate(['./edit-job'])
    }
  }
}