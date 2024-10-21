import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCategoriesComponent } from './list-categories.component';
import { HighlightDirective } from '../../highlight.directive';  // Import the directive

describe('ListCategoriesComponent', () => {
  let component: ListCategoriesComponent;
  let fixture: ComponentFixture<ListCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCategoriesComponent, HighlightDirective]  // Include the directive in declarations
    });
    fixture = TestBed.createComponent(ListCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Optionally, test the highlight directive behavior
  it('should add and remove highlight class on hover', () => {
    const element = fixture.nativeElement.querySelector('.col-md-4');
    const mouseEnterEvent = new Event('mouseenter');
    const mouseLeaveEvent = new Event('mouseleave');

    // Trigger mouse enter
    element.dispatchEvent(mouseEnterEvent);
    fixture.detectChanges();
    expect(element.classList).toContain('highlight');  // Assert the class is added

    // Trigger mouse leave
    element.dispatchEvent(mouseLeaveEvent);
    fixture.detectChanges();
    expect(element.classList).not.toContain('highlight');  // Assert the class is removed
  });
});
