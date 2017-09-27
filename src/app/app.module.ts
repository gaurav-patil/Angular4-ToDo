import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './About/about.component';
import { ItemsComponent } from './Items/items.component';
import { ItemsListComponent } from './Items/Items List/items-list.component';
import {items} from './common/stores/items.store';
import {selectedItem} from './common/stores/selectedItem.store';
import {ItemsService} from './common/services/items.service';
import {DropdownlistService} from './common/services/dropdownlist.service';
import {ItemDetailComponent} from './Items/Item Detail/item-detail.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemsCountComponent } from './Items/Items Count/itemsCount.component';
import {OrderBy} from './common/sort';

export const routes: Routes = [
  {path: '',            component: AboutComponent },
  {path: 'items',      component: ItemsComponent},
  {path: 'about',    component: AboutComponent},
  {path: '*',           component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent, AboutComponent, ItemsComponent, ItemsListComponent,
    ItemDetailComponent, ItemsCountComponent, OrderBy
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({items, selectedItem}),
    ReactiveFormsModule, FormsModule, HttpModule
  ],
  providers: [ItemsService, DropdownlistService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
