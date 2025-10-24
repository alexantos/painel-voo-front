import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Painel } from '../../models/painel';
import { PainelService } from '../../services/painel.service';



@Component({
	selector: 'app-painel',
	imports: [MatTableModule],
	templateUrl: './painel.component.html',
	styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {

	readonly painelService = inject(PainelService);

	displayedColumns: string[] = ["codigo", "companhia", "destino", "portao", "hora", "status"];

	paineis: Painel[] = [];

	ngOnInit(): void {
		this.listarPaineis();
	}

	listarPaineis() {
		this.painelService.listar().subscribe({
			next: (paineis: Painel[]) => {
				this.paineis = paineis;
			}
		});
	}
}
