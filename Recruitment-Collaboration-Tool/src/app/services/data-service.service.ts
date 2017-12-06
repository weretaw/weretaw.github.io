import { Injectable, OnDestroy } from '@angular/core';
import { Job } from "../model/job";
import { Applicant } from "../model/applicant";
import { Skillset } from "../model/skillset";
import { skipWhile } from 'rxjs/operator/skipWhile';
import { JobsServiceService } from './jobs-service.service';

@Injectable()
export class DataServiceService {

  public jobToEdit: Job;
  public MatchingJob: Job;
  public applicantToEdit: Applicant;
  public MatchingApplicant:Applicant;
  
  arSkillSetPicked: string[] = [];
  SearchInput:string;
  SearchBy:string="";

 
  
   constructor() {}
 
  public arSkillset = ["HTML5", "CSS3", "JavaScript", "Python", "Java", ".NET", "C#", "Angular2", "JQuery", "Json"]

  public HR = [
    { Id: "srPwKFXNEBR7xoEuR3Sx2RQo5qf1", Name: "Shani",Email:"shani25@gmail.com" },//Password : shani25
    { Id: "2Rjb1v9PYFQyOx8kKskOhRG2Nvw1", Name: "Or",Email:"or_44@gmail.com" },//Password : or_4444
    { Id: "VmxhbUculrUgXuNlN2dc2A1zDnd2", Name: "Yael",Email:"yael@gmail.com" },//Password : yael55
    { Id: "jpM5rtXeo8cNARSq2Ejkkx9PPBI2", Name: "Mor",Email:"mor_10@gmail.com" },//Password : mor_10
  ];
  public RecuterManagers = [
    { Id: "o4tKZkzhvvahDm7ITTgvo9Aondn2", Name: "Yotam Avivi",Email:"yotam66@gmail.com" },//Password : yotam66
    { Id: "TiZFBDzsGDUZMUPi4v5N5yalTX93", Name: "Almog Laktivi" ,Email:"almog58@gmail.com"},//Password : almog58
    { Id: "jS8TbGmy1EhRpLNOwC8QZrFa4sg1", Name: "Eran Leiser",Email:"Eran_603@gmail.com" },//Password : Eran_603
    { Id: "jS8TbGmy1EhRpLNOwC8QZrFa4sg1", Name: "Ronen Wolfson",Email:"Ronen_w83@gmail.com" },//Password : Ronen_w83
  ]
}
