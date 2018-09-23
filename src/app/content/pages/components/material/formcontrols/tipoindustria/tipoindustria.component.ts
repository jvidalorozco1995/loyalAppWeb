import {Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, AfterViewInit} from '@angular/core';
// Material
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatSnackBar, MatDialog, MatTableDataSource} from '@angular/material';
// RXJS
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs/operators';
import {fromEvent, merge, forkJoin, Observable, BehaviorSubject} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
// Services
import { CustomersService } from '../../../apps/e-commerce/_core/services/index';
import { LayoutUtilsService, MessageType } from '../../../apps/e-commerce/_core/utils/layout-utils.service';
import { HttpUtilsService } from '../../../apps/e-commerce/_core/utils/http-utils.service';
// Models
import { QueryParamsModel } from '../../../apps/e-commerce/_core/models/query-models/query-params.model';

import { CustomersDataSource } from '../../../apps/e-commerce/_core/models/data-sources/customers.datasource';
import {CustomerModel} from '../../../apps/e-commerce/_core/models/customer.model';
import {TipoIndustriaModel} from '../../../../../../core/models/TipoIndustriaModel';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TipoIndustriaService} from '../../../../../../core/services/tipoindustria.service';





// Components
import {TipoindustriaEditComponent} from './tipoindustria-edit/tipoindustria-edit.component';


@Component({
	selector: 'm-tipoindustria',
	templateUrl: './tipoindustria.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})



export class TipoindustriaComponent implements OnInit {


	public currentStatus = 1;
	public tipoIndustria: TipoIndustriaModel = new TipoIndustriaModel();

	public TipoIndustriaForm = new FormGroup({
		nombre: new FormControl('', Validators.required),
		id: new FormControl('')
	});

	loading$: Observable<boolean>;

	displayedColumns = ['id', 'nombre', 'actions'];

	accountsObservable: Observable<Account[]>;
	dataSource = new MatTableDataSource();

	@ViewChild(MatSort) sort: MatSort;

	@ViewChild(MatPaginator) paginator: MatPaginator;



	constructor(private tipoindustriaService: TipoIndustriaService,
				public dialog: MatDialog,
				public snackBar: MatSnackBar,
				private layoutUtilsService: LayoutUtilsService,
				private translate: TranslateService
				) {


		this.TipoIndustriaForm.setValue({
			id: '',
			nombre: ''

		});


		this.tipoindustriaService.get().subscribe(data => {
			this.dataSource.data = data;
			console.log(this.dataSource.data);
		});

	}

	addCustomer() {
		const tipoIndustria = new TipoIndustriaModel();
		tipoIndustria.clear(); // Set all defaults fields
		/*tipoIndustria.id = ''*/
		this.editCustomer(tipoIndustria);
	}

	deleteById(id: string) {
		console.log(id)
		this.tipoindustriaService.deleteById(id);
	}


	editCustomer(tipoIndustria: TipoIndustriaModel) {
        console.log(tipoIndustria.id);
     	let saveMessageTranslateParam = 'ECOMMERCE.CUSTOMERS.EDIT.';
		saveMessageTranslateParam += tipoIndustria.id !== ''  ? 'UPDATE_MESSAGE' : 'ADD_MESSAGE';
		const _saveMessage = this.translate.instant(saveMessageTranslateParam);
		const _messageType = tipoIndustria.id !== '' ? MessageType.Update : MessageType.Create;
		const dialogRef = this.dialog.open(TipoindustriaEditComponent, { data: { tipoIndustria } });
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

			this.tipoIndustria.nombre = this.TipoIndustriaForm.get('nombre').value;

			this.tipoindustriaService.create(this.tipoIndustria).then(() => {

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

