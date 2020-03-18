import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { CustomersRoutingModule } from './user-routing.module';
import {MatTableModule} from '@angular/material/table';
import { UserAdminService } from './services/user-admin.service';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers:[UserAdminService]
})
export class UserAdminModule { }
