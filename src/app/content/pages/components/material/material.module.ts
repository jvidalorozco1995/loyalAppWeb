import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponent } from './material.component';
import { AutocompleteComponent } from './formcontrols/autocomplete/autocomplete.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodePreviewModule } from '../../../partials/content/general/code-preview/code-preview.module';
import { PartialsModule } from '../../../partials/partials.module';
import { CoreModule } from '../../../../core/core.module';
import { MaterialPreviewModule } from '../../../partials/content/general/material-preview/material-preivew.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import {
	MatAutocompleteModule,
	MatNativeDateModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSliderModule,
	MatPaginatorModule,
	MatSortModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatToolbarModule,
	MatDividerModule,
	MatTabsModule,
	MatTableModule,
	MatTooltipModule,
	MatListModule,
	MatGridListModule,
	MatButtonToggleModule,
	MatBottomSheetModule,
	MatExpansionModule,
	_MatChipListMixinBase,
	MatMenuModule,
	MatTreeModule,
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetRef
} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';


// Form controls
import { DatepickerComponent } from './formcontrols/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormfieldComponent } from './formcontrols/formfield/formfield.component';
import { InputComponent } from './formcontrols/input/input.component';
import { RadiobuttonComponent } from './formcontrols/radiobutton/radiobutton.component';
import { SelectComponent } from './formcontrols/select/select.component';
import { SliderComponent } from './formcontrols/slider/slider.component';
import { SlidertoggleComponent } from './formcontrols/slidertoggle/slidertoggle.component';
// Navigation
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
// Layout
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './layout/grid-list/grid-list.component';
import { ListComponent } from './layout/list/list.component';
import { MaterialTabsComponent } from './layout/material-tabs/material-tabs.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TreeComponent } from './layout/tree/tree.component';
import { DefaultFormsComponent } from './layout/default-forms/default-forms.component';
// Buttons & indicators
import { ButtonComponent } from './buttons-and-indicators/button/button.component';
import { ButtonToggleComponent } from './buttons-and-indicators/button-toggle/button-toggle.component';
import { ChipsComponent } from './buttons-and-indicators/chips/chips.component';
import { IconComponent } from './buttons-and-indicators/icon/icon.component';
import { ProgressBarComponent } from './buttons-and-indicators/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './buttons-and-indicators/progress-spinner/progress-spinner.component';
// Popups & modals
import { DialogComponent, ModalComponent, Modal2Component, Modal3Component } from './popups-and-modals/dialog/dialog.component';
import { SnackbarComponent } from './popups-and-modals/snackbar/snackbar.component';
import { MaterialTooltipComponent } from './popups-and-modals/material-tooltip/material-tooltip.component';
import { BottomSheetComponent } from './popups-and-modals/bottom-sheet/bottom-sheet.component';
import { BottomSheetExampleComponent } from './popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component';
import { PizzaPartyComponent } from './popups-and-modals/snackbar/pizza-party.component';
// Data table
import { PaginatorComponent } from './data-table/paginator/paginator.component';
import { SortHeaderComponent } from './data-table/sort-header/sort-header.component';
import { MaterialTableComponent } from './data-table/material-table/material-table.component';
import { TipoindustriaComponent } from './formcontrols/tipoindustria/tipoindustria.component';
import { TipoindustriaEditComponent } from './formcontrols/tipoindustria/tipoindustria-edit/tipoindustria-edit.component';
import {Alert2Component} from './alert/alert2.component';

const routes: Routes = [
	{
		path: '',
		component: MaterialComponent,
		children: [
			{
				path: 'form-controls/tipoIndustria',
				component: TipoindustriaComponent
			},
			{
				path: 'form-controls/autocomplete',
				component: AutocompleteComponent
			},
			{
				path: 'form-controls/checkbox',
				component: CheckboxComponent
			},
			{
				path: 'form-controls/datepicker',
				component: DatepickerComponent
			},
			{
				path: 'form-controls/formfield',
				component: FormfieldComponent
			},
			{
				path: 'form-controls/input',
				component: InputComponent
			},
			{
				path: 'form-controls/radiobutton',
				component: RadiobuttonComponent
			},
			{
				path: 'form-controls/select',
				component: SelectComponent
			},
			{
				path: 'form-controls/slider',
				component: SliderComponent
			},
			{
				path: 'form-controls/slidertoggle',
				component: SlidertoggleComponent
			},
			{
				path: 'navigation/menu',
				component: MenuComponent
			},
			{
				path: 'navigation/sidenav',
				component: SidenavComponent
			},
			{
				path: 'navigation/toolbar',
				component: ToolbarComponent
			},
			{
				path: 'layout/card',
				component: CardComponent
			},
			{
				path: 'layout/divider',
				component: DividerComponent
			},
			{
				path: 'layout/expansion-panel',
				component: ExpansionPanelComponent
			},
			{
				path: 'layout/grid-list',
				component: GridListComponent
			},
			{
				path: 'layout/list',
				component: ListComponent
			},
			{
				path: 'layout/tabs',
				component: MaterialTabsComponent
			},
			{
				path: 'layout/stepper',
				component: StepperComponent
			},
			{
				path: 'layout/default-forms',
				component: DefaultFormsComponent
			},
			{
				path: 'layout/tree',
				component: TreeComponent
			},
			{
				path: 'buttons-and-indicators/button',
				component: ButtonComponent
			},
			{
				path: 'buttons-and-indicators/button-toggle',
				component: ButtonToggleComponent
			},
			{
				path: 'buttons-and-indicators/chips',
				component: ChipsComponent
			},
			{
				path: 'buttons-and-indicators/icon',
				component: IconComponent
			},
			{
				path: 'buttons-and-indicators/progress-bar',
				component: ProgressBarComponent
			},
			{
				path: 'buttons-and-indicators/progress-spinner',
				component: ProgressSpinnerComponent
			},
			{
				path: 'popups-and-modals/bottom-sheet',
				component: BottomSheetComponent
			},
			{
				path: 'popups-and-modals/dialog',
				component: DialogComponent
			},
			{
				path: 'popups-and-modals/snackbar',
				component: SnackbarComponent
			},
			{
				path: 'popups-and-modals/tooltip',
				component: MaterialTooltipComponent
			},
			{
				path: 'data'
			},
			{
				path: 'data-table/paginator',
				component: PaginatorComponent
			},
			{
				path: 'data-table/sort-header',
				component: SortHeaderComponent
			},
			{
				path: 'data-table/table',
				component: MaterialTableComponent
			}
		]
	}
];

@NgModule({
	imports: [
		// material modules
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatListModule,
		MatSliderModule,
		MatCardModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatMenuModule,
		MatTabsModule,
		MatTooltipModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
		MatGridListModule,
		MatToolbarModule,
		MatBottomSheetModule,
		MatExpansionModule,
		MatDividerModule,
		MatSortModule,
		MatStepperModule,
		MatChipsModule,
		MatPaginatorModule,
		MatDialogModule,
		CoreModule,
		CommonModule,
		MatRadioModule,
		MatTreeModule,
		MatButtonToggleModule,
		PartialsModule,
		MaterialPreviewModule,
		FormsModule,
		ReactiveFormsModule,
		CodePreviewModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],
	entryComponents: [
		PizzaPartyComponent,
		DialogComponent,
		ModalComponent,
		Modal2Component,
		Modal3Component,
		IconComponent,
		TreeComponent,
		BottomSheetExampleComponent,
		TipoindustriaEditComponent
	],
	providers: [
		MatIconRegistry,
		{ provide: MatBottomSheetRef, useValue: {} },
		{
			provide: MAT_BOTTOM_SHEET_DATA, useValue: {}
		}
	],
	declarations: [
		MaterialComponent,
		AutocompleteComponent,
		CheckboxComponent,
		DatepickerComponent,
		FormfieldComponent,
		InputComponent,
		RadiobuttonComponent,
		SelectComponent,
		SliderComponent,
		SlidertoggleComponent,
		MenuComponent,
		SidenavComponent,
		ToolbarComponent,
		CardComponent,
		DividerComponent,
		ExpansionPanelComponent,
		GridListComponent,
		ListComponent,
		MaterialTabsComponent,
		StepperComponent,
		ButtonComponent,
		ButtonToggleComponent,
		ChipsComponent,
		IconComponent,
		ProgressBarComponent,
		ProgressSpinnerComponent,
		DialogComponent,
		ModalComponent,
		Modal2Component,
		Modal3Component,
		PizzaPartyComponent,
		SnackbarComponent,
		MaterialTooltipComponent,
		PaginatorComponent,
		SortHeaderComponent,
		MaterialTableComponent,
		DefaultFormsComponent,
		TreeComponent,
		BottomSheetComponent,
		BottomSheetExampleComponent,
		TipoindustriaComponent,
		TipoindustriaEditComponent,
		Alert2Component
	]
})
export class MaterialModule {}