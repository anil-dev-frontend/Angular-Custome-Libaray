import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUiLibrary } from './custom-ui-library';

describe('CustomUiLibrary', () => {
  let component: CustomUiLibrary;
  let fixture: ComponentFixture<CustomUiLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomUiLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomUiLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
