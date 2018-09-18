import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoindustriaEditComponent } from './tipoindustria-edit.component';

describe('TipoindustriaEditComponent', () => {
  let component: TipoindustriaEditComponent;
  let fixture: ComponentFixture<TipoindustriaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoindustriaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoindustriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
