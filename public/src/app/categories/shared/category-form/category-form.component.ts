import {
  Component, Input, Output,
  EventEmitter, OnChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Category } from "../../category";
import { CategoryService } from "../../category.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnChanges {
  @Input() category: Category;

  @Output() onCancelled: EventEmitter<any> = new EventEmitter();
  @Output() onSubmitted: EventEmitter<Category> = new EventEmitter();

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService) {
    this.createForm();
  }

  ngOnChanges() {
    this.categoryForm.reset({
      id: this.category.id,
      name: this.category.name,
      description: this.category.description
    });
  }

  canSubmit() {
    return this.categoryForm.status === 'VALID';
  }

  onCancel() {
    this.onCancelled.emit("Cancelled adding new category");
  }

  onSubmit() {
    const categoryFormValue: Category = <Category>this.categoryForm.value;
    this.onSubmitted.emit(categoryFormValue);
  }

  private createForm() {
    this.categoryForm = this.fb.group({
      id: undefined,
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
