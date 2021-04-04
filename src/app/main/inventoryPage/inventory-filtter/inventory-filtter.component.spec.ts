import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryFiltterComponent } from './inventory-filtter.component';

describe('InventoryFiltterComponent', () => {
  let component: InventoryFiltterComponent;
  let fixture: ComponentFixture<InventoryFiltterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryFiltterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryFiltterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
