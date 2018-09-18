import { Observable, of } from 'rxjs';
import {catchError, finalize, map, tap} from 'rxjs/operators';
import { CustomersService } from '../../services/index';
import { QueryParamsModel } from '../query-models/query-params.model';
import { BaseDataSource } from './_base.datasource';
import { QueryResultsModel } from '../query-models/query-results.model';
import {TipoIndustriaService} from '../../../../../../../../core/services/tipoindustria.service';
import {TipoIndustriaModel} from '../../../../../../../../core/models/TipoIndustriaModel';

export class CustomersDataSource extends BaseDataSource {
	constructor(private customersService: CustomersService) {
		super();
	}

	loadCustomers(
		queryParams: QueryParamsModel
	) {
		this.loadingSubject.next(true);
		this.customersService.findCustomers(queryParams).pipe(
			tap(res => {
				this.entitySubject.next(res.items);
				this.paginatorTotalSubject.next(res.totalCount);
			}),
			catchError(err => of(new QueryResultsModel([], err))),
			finalize(() => this.loadingSubject.next(false))
		).subscribe();
	}


}
