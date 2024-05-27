import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponentComponent } from '../user-component/user-component.component';

@NgModule({
  declarations: [UserComponentComponent],
  imports: [CommonModule],
  exports: [UserComponentComponent],
})
export class UserModuleModule {}
