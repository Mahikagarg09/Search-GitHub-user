import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; 
import { RepositoryListComponent } from './repository-list.component';
import { Repository } from '../../models/repository.model';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ],
      imports: [FormsModule] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page change event on onPageChange', () => {
    const page = 2;
    spyOn(component.pageChange, 'emit');
    
    component.onPageChange(page);

    expect(component.pageChange.emit).toHaveBeenCalledWith(page);
    expect(component.currentPage).toEqual(page);
  });

  it('should emit page size change event on onPageSizeChange', () => {
    const event = { target: { value: '20' }};
    spyOn(component.pageSizeChange, 'emit');
    
    component.onPageSizeChange(event);

    expect(component.pageSizeChange.emit).toHaveBeenCalledWith(20);
    expect(component.pageSize).toEqual(20);
    expect(component.currentPage).toEqual(1);
  });
});
