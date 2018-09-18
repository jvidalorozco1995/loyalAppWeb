
import {CustomerModel} from '../../../../apps/e-commerce/_core/models/customer.model';
import {TipoIndustriaModel} from '../../../../../../../core/models/TipoIndustriaModel';

import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CustomersService} from '../../../../apps/e-commerce/_core/services';
import {TypesUtilsService} from '../../../../apps/e-commerce/_core/utils/types-utils.service';
import {TipoIndustriaService} from '../../../../../../../core/services/tipoindustria.service';



@Component({
	selector: 'm-tipoindustria-edit',
	templateUrl: './tipoindustria-edit.component.html',
	styleUrls: ['./tipoindustria-edit.component.scss']
})
export class TipoindustriaEditComponent implements OnInit {

	tipoIndustria: TipoIndustriaModel;
	tipoIndustriaForm: FormGroup;
	hasFormErrors: boolean = false;
	viewLoading: boolean = false;
	loadingAfterSubmit: boolean = false;


	constructor(public dialogRef: MatDialogRef<TipoindustriaEditComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any,
				private fb: FormBuilder,
				private tipoIndustriaService: TipoIndustriaService,
				private typesUtilsService: TypesUtilsService) {
	}

	/** LOAD DATA */
	ngOnInit() {
		this.tipoIndustria = this.data.tipoIndustria;
		this.createForm();

		/* Server loading imitation. Remove this on real code */
		this.viewLoading = true;
		setTimeout(() => {
			this.viewLoading = false;
		}, 1000);
	}

	createForm() {

		this.tipoIndustriaForm = this.fb.group({
			nombre: [this.tipoIndustria.nombre, Validators.required]
		});
	}

	/** UI */
	getTitle(): string {
		if (this.tipoIndustria.id !== '') {
			return `'Editar '${this.tipoIndustria.nombre}'`;
		}

		return 'Nuevo';
	}


	/** ACTIONS */
	prepareTipoIndustria(): TipoIndustriaModel {
		const controls = this.tipoIndustriaForm.controls;
		const _tipoIndustria = new TipoIndustriaModel();
		_tipoIndustria.id = this.tipoIndustria.id;

		_tipoIndustria.nombre = controls['nombre'].value;

		return _tipoIndustria;
	}

	onSubmit() {
		this.hasFormErrors = false;
		this.loadingAfterSubmit = false;
		const controls = this.tipoIndustriaForm.controls;
		/** check form */
		if (this.tipoIndustriaForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			return;
		}

		const editedCustomer = this.prepareTipoIndustria();
		if (editedCustomer.id !== '') {
			this.update(editedCustomer);
		} else {
			this.create(editedCustomer);
		}
	}

	update(_customer: TipoIndustriaModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		this.tipoIndustriaService.update(_customer.id.toString() , _customer).then(res => {
			this.viewLoading = false;
			this.viewLoading = false;
			this.dialogRef.close({
				_customer,
				isEdit: true
			});
		});
	}

	create(_customer: TipoIndustriaModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		this.tipoIndustriaService.create(_customer).then(res => {
			this.viewLoading = false;
			this.dialogRef.close({
				_customer,
				isEdit: false
			});
		});
	}

	onAlertClose($event) {
		this.hasFormErrors = false;
	}

}
