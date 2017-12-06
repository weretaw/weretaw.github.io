import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SkillsetServiceService } from "../../services/skillset-service.service";
import { Skillset } from '../../model/skillset';
import { FilterPipe } from '../../filters-pipes/filter-jobs.pipe';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavbarComponent implements OnInit {
  newArSkillSet: Skillset[] = [];
 arSkillSetPicked: string[] = [];

  constructor(public SkillsetService: SkillsetServiceService,
    public dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.arSkillset.forEach(element => {
      const skil = { name: element, selected: false };
      this.newArSkillSet.push(skil);
    });

  }

  skillSetArray(skill) {
    if (skill.selected) {
      this.dataService.arSkillSetPicked.push(skill.name)
    }
    if (!skill.selected) {
      //   console.log(skill)
      let aa = this.dataService.arSkillSetPicked.indexOf(skill.name);
      this.dataService.arSkillSetPicked.splice(aa, 1)
    }
    console.log(this.dataService.arSkillSetPicked)

  }
}
