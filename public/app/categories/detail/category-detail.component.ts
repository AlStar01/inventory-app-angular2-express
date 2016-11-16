import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
    moduleId: module.id,
    templateUrl: 'category-detail.html'
})
export class CategoryDetailComponent implements OnInit {
    category: Category;
    errorMessage: string;

    constructor(
        private categoryService: CategoryService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.getCategory();
    }

    private getCategory() {
        this.route.params.subscribe(
            params => {
                const categoryId: number = +params['categoryId'];
                this.categoryService.getCategoryById(categoryId)
                                    .subscribe(
                                        category => this.category = category,
                                        error => this.errorMessage = <any> error
                                    );
            },
            error => this.errorMessage = <any> error
        );
    }

    goToEditCategory() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    goBack() {
        window.history.back();
    }
}