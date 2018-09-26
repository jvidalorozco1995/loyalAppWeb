import {Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
// Material
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource} from '@angular/material';
// RXJS
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {fromEvent, merge, forkJoin, Observable, BehaviorSubject} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
// Services
import { CustomersService } from '../../../apps/e-commerce/_core/services';
import { LayoutUtilsService, MessageType } from '../../../apps/e-commerce/_core/utils/layout-utils.service';
import { HttpUtilsService } from '../../../apps/e-commerce/_core/utils/http-utils.service';
// Models
import { QueryParamsModel } from '../../../apps/e-commerce/_core/models/query-models/query-params.model';

import { CustomersDataSource } from '../../../apps/e-commerce/_core/models/data-sources/customers.datasource';
import {CustomerModel} from '../../../apps/e-commerce/_core/models/customer.model';
import {ClientesModel} from '../../../../../../core/models/ClientesModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../../../../../../core/services/cliente.service';





// Components
import {ClienteEditComponent} from './cliente-edit/cliente-edit.component';


@Component({
	selector: 'm-cliente',
	templateUrl: './cliente.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})



export class ClienteComponent implements OnInit {


	public currentStatus = 1;
	public cliente: ClientesModel = new ClientesModel();

	public ClienteForm = new FormGroup({
		nombre: new FormControl('', Validators.required),
		id: new FormControl('')
	});

	loading$: Observable<boolean>;

	displayedColumns = ['id', 'nombre', 'actions'];

	accountsObservable: Observable<Account[]>;
	dataSource = new MatTableDataSource();

	@ViewChild(MatSort) sort: MatSort;

	@ViewChild(MatPaginator) paginator: MatPaginator;



	constructor(private clienteService: ClienteService,
				public dialog: MatDialog,
				public snackBar: MatSnackBar,
				private layoutUtilsService: LayoutUtilsService,
				private translate: TranslateService
				) {


		this.ClienteForm.setValue({
			id: '',
			nombre: ''

		});


		this.clienteService.get().subscribe(data => {
			this.dataSource.data = data;
			console.log(this.dataSource.data);
		});

	}

	addCustomer() {
		const cliente = new ClientesModel();
		cliente.clear(); // Set all defaults fields
		/*cliente.id = ''*/
		this.editCustomer(cliente);
	}

	deleteById(id: string) {
		console.log(id)
		this.clienteService.deleteById(id);
	}


	editCustomer(cliente: ClientesModel) {
        console.log(cliente.id);
     	let saveMessageTranslateParam = 'ECOMMERCE.CUSTOMERS.EDIT.';
		saveMessageTranslateParam += cliente.id !== ''  ? 'UPDATE_MESSAGE' : 'ADD_MESSAGE';
		const _saveMessage = this.translate.instant(saveMessageTranslateParam);
		const _messageType = cliente.id !== '' ? MessageType.Update : MessageType.Create;
		const dialogRef = this.dialog.open(ClienteEditComponent, { data: { cliente } });
		dialogRef.afterClosed().subscribe(res => {
			if (!res) {
				return;
			}

			this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, false);
		});
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}



	public onSave() {
		console.log(`Status: ${this.currentStatus}`);



		if (this.currentStatus === 1) {

			this.cliente.nombre = this.ClienteForm.get('nombre').value;

			this.clienteService.create(this.cliente).then(() => {

			}, (error) => {
				console.error(error);
			});

		}


	}



	/** UI */
	getItemCssClassByStatus(status: number = 0): string {
		switch (status) {
			case 0:
				return 'metal';
			case 1:
				return 'success';
			case 2:
				return 'danger';
		}
		return '';
	}

	getItemStatusString(status: number = 0): string {
		switch (status) {
			case 0:
				return 'Suspended';
			case 1:
				return 'Active';
			case 2:
				return 'Pending';
		}
		return '';
	}

	getItemCssClassByType(status: number = 0): string {
		switch (status) {
			case 0:
				return 'accent';
			case 1:
				return 'primary';
			case 2:
				return '';
		}
		return '';
	}

	getItemTypeString(status: number = 0): string {
		switch (status) {
			case 0:
				return 'Business';
			case 1:
				return 'Individual';
		}
		return '';
	}





}

