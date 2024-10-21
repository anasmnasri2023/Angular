import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent.component';

describe('ProductsCategoryQPComponentComponent', () => {
  let component: ProductsCategoryQPComponentComponent;
  let fixture: ComponentFixture<ProductsCategoryQPComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCategoryQPComponentComponent]
    });
    fixture = TestBed.createComponent(ProductsCategoryQPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
