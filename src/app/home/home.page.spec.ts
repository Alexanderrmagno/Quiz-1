import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form correctly', () => {
    component.eventName = 'Test Event';
    component.startDate = new Date().toISOString();
    component.endDate = new Date().toISOString();
    component.organizerName = 'Test Organizer';
    component.organizerPhone = '1234567890';

    expect(component.validateForm()).toBeTruthy();
  });

  it('should not validate form with missing fields', () => {
    component.eventName = '';
    component.startDate = '';

    expect(component.validateForm()).toBeFalsy();
    expect(component.showError).toBeTruthy();
  });

  it('should add event correctly', () => {
    component.eventName = 'Test Event';
    component.startDate = new Date().toISOString();
    component.endDate = new Date().toISOString();
    component.organizerName = 'Test Organizer';
    component.organizerPhone = '1234567890';

    component.addEvent();

    expect(component.events.length).toBe(1);
    expect(component.events[0].eventName).toBe('Test Event');
  });

  it('should delete event correctly', () => {
    component.addEvent();
    const eventToDelete = component.events[0];
    
    component.deleteEvent(eventToDelete);

    expect(component.events.length).toBe(0);
  });
});