import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesCloudComponent } from './stories-cloud.component';

describe('StoriesCloudComponent', () => {
  let component: StoriesCloudComponent;
  let fixture: ComponentFixture<StoriesCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
