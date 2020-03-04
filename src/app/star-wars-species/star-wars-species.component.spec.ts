import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsSpeciesComponent } from './star-wars-species.component';

describe('StarWarsSpeciesComponent', () => {
  let component: StarWarsSpeciesComponent;
  let fixture: ComponentFixture<StarWarsSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
