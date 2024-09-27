import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCreationComponent } from './inventory-creation.component';

describe('InventoryCreationComponent', () => {
  let component: InventoryCreationComponent;
  let fixture: ComponentFixture<InventoryCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
