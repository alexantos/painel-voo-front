import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Painel } from '../../models/painel';
import { PainelService } from '../../services/painel.service';
import { CommonModule } from '@angular/common';
import { repeat } from 'rxjs';



@Component({
	selector: 'app-painel',
	imports: [MatTableModule, CommonModule],
	templateUrl: './painel.component.html',
	styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit {

	readonly painelService = inject(PainelService);

	displayedColumns: string[] = ["codigo", "companhia", "destino", "portao", "horario_decolagem", "status"];

	paineis: Painel[] = [];

	ngOnInit(): void {
		this.listarPaineis();
	}

	listarPaineis() {
		
		this.painelService.listar().pipe(repeat({ delay: 1000 })).subscribe({
			next: (paineis: Painel[]) => {
				this.paineis = paineis;
			}
		});
	}
}
