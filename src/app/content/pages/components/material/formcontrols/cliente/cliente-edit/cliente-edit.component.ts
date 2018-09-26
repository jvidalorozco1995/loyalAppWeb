
import {CustomerModel} from '../../../../apps/e-commerce/_core/models/customer.model';
import {ClientesModel} from '../../../../../../../core/models/ClientesModel';

import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CustomersService} from '../../../../apps/e-commerce/_core/services';
import {TypesUtilsService} from '../../../../apps/e-commerce/_core/utils/types-utils.service';
import {ClienteService} from '../../../../../../../core/services/cliente.service';



@Component({
	selector: 'm-cliente-edit',
	templateUrl: './cliente-edit.component.html',
	styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {

	cliente: ClientesModel;
	clienteForm: FormGroup;
	hasFormErrors: boolean = false;
	viewLoading: boolean = false;
	loadingAfterSubmit: boolean = false;


	constructor(public dialogRef: MatDialogRef<ClienteEditComponent>,
				@Inject(MAT_DIALOG_DATA) public data: any,
				private fb: FormBuilder,
				private clienteService: ClienteService,
				private typesUtilsService: TypesUtilsService) {
	}

	/** LOAD DATA */
	ngOnInit() {
		this.cliente = this.data.cliente;
		this.createForm();

		/* Server loading imitation. Remove this on real code */
		this.viewLoading = true;
		setTimeout(() => {
			this.viewLoading = false;
		}, 1000);
	}

	createForm() {

		this.clienteForm = this.fb.group({
			nombre: [this.cliente.nombre, Validators.required]
		});
	}

	/** UI */
	getTitle(): string {
		if (this.cliente.id !== '') {
			return `'Editar '${this.cliente.nombre}'`;
		}

		return 'Nuevo';
	}


	/** ACTIONS */
	prepareCliente(): ClientesModel {
		const controls = this.clienteForm.controls;
		const _cliente = new ClientesModel();
		_cliente.id = this.cliente.id;

		_cliente.nombre = controls['nombre'].value;

		return _cliente;
	}

	onSubmit() {
		this.hasFormErrors = false;
		this.loadingAfterSubmit = false;
		const controls = this.clienteForm.controls;
		/** check form */
		if (this.clienteForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			return;
		}

		const editedCustomer = this.prepareCliente();
		if (editedCustomer.id !== '') {
			this.update(editedCustomer);
		} else {
			this.create(editedCustomer);
		}
	}

	update(_customer: ClientesModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		this.clienteService.update(_customer.id.toString() , _customer).then(res => {
			this.viewLoading = false;
			this.viewLoading = false;
			this.dialogRef.close({
				_customer,
				isEdit: true
			});
		});
	}

	create(_customer: ClientesModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		this.clienteService.create(_customer).then(res => {
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
