import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    // Mock ElementRef and Renderer2
    elementRef = new ElementRef(null);
    renderer = jasmine.createSpyObj('Renderer2', ['addClass', 'removeClass']);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elementRef, renderer); // Pass mocks to constructor
    expect(directive).toBeTruthy();
  });
});
