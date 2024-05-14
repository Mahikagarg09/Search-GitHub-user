import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserProfileComponent } from './user-profile.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [ HttpClientTestingModule ], 
      providers: [ ApiService ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details on initialization', () => {
    const mockUser = { 
      name: 'John Doe',
      bio: 'Software Developer',
      email: 'john.doe@example.com',
      followers: 100,
      following: 50,
      avatar_url: 'https://example.com/avatar.jpg',
      html_url: 'https://github.com/johndoe'
    };
    spyOn(apiService, 'getUser').and.returnValue(of(mockUser)); 

    component.ngOnInit();

    expect(component.user).toEqual(mockUser);
    expect(apiService.getUser).toHaveBeenCalled();
  });
});
