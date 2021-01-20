import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from '../models/character';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('OnPageChange#', () => {
    it('should  compute and emit page elements to display', () => {
      //Given
      component.items = [
        new Character('Fake Name1', {
          thumbnailPath: 'FakePath1',
          thumbnailExtention: 'FakeExtention1',
        }),
        new Character('Fake Name2', {
          thumbnailPath: 'FakePath2',
          thumbnailExtention: 'FakeExtention2',
        }),
        new Character('Fake Name3', {
          thumbnailPath: 'FakePath3',
          thumbnailExtention: 'FakeExtention3',
        }),
      ];
      const dummyPagingEvent = {
        previousPageIndex: 0,
        pageIndex: 1,
        pageSize: 1,
        length: 3,
      };
      spyOn(component.paginationAction, 'emit');

      //when
      component.OnPageChange(dummyPagingEvent);

      //Then
      expect(component.pageSlice.length).toBe(1);
      expect(component.pageSlice).toEqual([
        new Character('Fake Name2', {
          thumbnailPath: 'FakePath2',
          thumbnailExtention: 'FakeExtention2',
        }),
      ]);
      expect(component.paginationAction.emit).toHaveBeenCalledWith(
        component.pageSlice
      );

      //When
      const dummyPagingEventNext = {
        previousPageIndex: 1,
        pageIndex: 2,
        pageSize: 1,
        length: 3,
      };
      component.OnPageChange(dummyPagingEventNext);

      //Then
      expect(component.pageSlice.length).toBe(1);
      expect(component.pageSlice).toEqual([
        new Character('Fake Name3', {
          thumbnailPath: 'FakePath3',
          thumbnailExtention: 'FakeExtention3',
        }),
      ]);
      expect(component.paginationAction.emit).toHaveBeenCalledWith(
        component.pageSlice
      );
    });
  });
});
