import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BubbleSortComponent } from './screen/bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './screen/merge-sort/merge-sort.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BubbleSortComponent },
  { path: 'bubble-sort', component: BubbleSortComponent },
  { path: 'merge-sort', component: MergeSortComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    BubbleSortComponent,
    MergeSortComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
