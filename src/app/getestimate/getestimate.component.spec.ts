import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TablesComponent } from '../core/tables/tables.component';
import { GetestimateComponent } from './getestimate.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertboxComponent } from '../core/alertbox/alertbox.component';
import {DialogModule} from 'primeng/dialog';

describe('GetestimateComponent', () => {
  let component: GetestimateComponent;
  let fixture: ComponentFixture<GetestimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, DialogModule ],
      declarations: [ GetestimateComponent, TablesComponent, AlertboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetestimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
