import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneMoreNewComponentComponent } from './one-more-new-component/one-more-new-component.component';
import {NewModule1Module} from '../new-module-1/new-module-1.module';



@NgModule({
  declarations: [OneMoreNewComponentComponent],
    imports: [
        CommonModule,
        NewModule1Module
    ]
})
export class NewModule2Module { }
