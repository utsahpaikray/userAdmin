import {
  Component,
  OnInit
} from '@angular/core';
import {
  user
} from '../../userdata';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  UserAdminService
} from '../../services/user-admin.service'
import {
  MatTableDataSource
} from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({
        height: '0px',
        minHeight: '0'
      })),
      state('expanded', style({
        height: '*'
      })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['select', 'userId', 'firstName', 'lastName', 'email', 'company'];
  expandedElement: any | null;
  solutionList: any;
  UserInfo: any;
  dataSource;
  constructor(public user: UserAdminService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(user[0].data)
  }
  public getUser() {
    this.user.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users.data)
    })
  }
  public getUserSolution(emailId) {
    // this.user.getSolutionAccess(emailId).subscribe(solution=>{
    //   this.solutionList = solution;
    // })
    let query = `emailId=${emailId}`
    this.solutionList = this.user.getSolutionAccess(query);

  }
  public provideUserSolution() {
    let userInfo = {
      "emailId": this.UserInfo.email,
      "roleName": "SolutionOwner"
    }
    console.log(userInfo)
    this.user.provideSolutionAccess(userInfo).subscribe(res => {
      console.log(res);
    })
  }
  public removeUserSolution() {
    let userInfo = {
      "emailId": "",
      "roleName": "SolutionOwner"
    }
    this.user.provideSolutionAccess(userInfo).subscribe(res => {
      console.log(res);
    })
  }
  public getUserValue(user) {
    this.UserInfo = user
    console.log(user);
  }
  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
