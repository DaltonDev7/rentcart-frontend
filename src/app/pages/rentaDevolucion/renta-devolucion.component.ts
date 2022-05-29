import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentaDevolucion } from 'src/app/core/models/RentaDevolucion';
import { RentaDevolucionService } from 'src/app/core/services/renta-devolucion.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComboboxService } from 'src/app/core/services/combobox.service';
import { ComboBox } from 'src/app/core/models/Comboxbox';
import { BuscardorDTO } from 'src/app/core/models/buscador-dto';

@Component({
  selector: 'app-renta-devolucion',
  templateUrl: './renta-devolucion.component.html',
  styleUrls: ['./renta-devolucion.component.scss']
})
export class RentaDevolucionComponent implements OnInit {

  rentas!: RentaDevolucion[]
  buscadorForm!: FormGroup
  columnasCombox: ComboBox[] = []

  constructor(
    private comboxService: ComboboxService,
    private router: Router,
    private activedRouted: ActivatedRoute,
    private rentaService: RentaDevolucionService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.buscadorForm = this.fb.group({
      TipoColumna: [null],
      Columna: [{ value: null, disabled: true }]
    })
    this.columnasCombox = this.comboxService.columnasRentasCombox

    this.activedRouted.data.subscribe((data: any) => {
      this.rentas = data.rentas
      console.log(this.rentas);

    })
    console.log(this.rentas);


    this.buscarByColumna()
    this.validateColumna()
  }

  add(tipoVista: string) {
    console.log(tipoVista);
    this.router.navigate(['/renta/addOrEdit'], { relativeTo: this.activedRouted, state: { tipoVista } })
  }

  update(idRenta?: number) {
    this.router.navigate(['/renta/addOrEdit'], { relativeTo: this.activedRouted, state: { idRenta } })
  }

  remove(idRenta?: number) {

    Swal.fire({
      title: 'Esta seguro que desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.rentaService.remove(idRenta).subscribe((data) => {

          this.rentaService.getAll().subscribe((rentas: RentaDevolucion[]) => {
            this.rentas = rentas
          })
        })
      }
    })
  }

  exportToPdf() {

    const doc = new jsPDF()
    let arregloReporte: any = []
    let contador = 0
    let arrayRenta: any[] = []

    this.rentas.forEach((renta) => {

      Object.values(renta).forEach((item) => {
        contador++
        arrayRenta.push(item)
        if (contador % 5 == 0) {
          arregloReporte.push(arrayRenta)
          arrayRenta = []
        }
      })

      console.log(arregloReporte);

    })

    // Or use javascript directly:
    autoTable(doc, {
      head: [['IdRenta', 'Vehiculo', 'Cliente', 'Fecha Renta', 'Cantidad Dias']],
      body: [
        ...arregloReporte
      ],
    })
    let nameReporte = `Reporte ${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
    doc.save(nameReporte)
  }


  private validateColumna() {
    this.buscadorForm.get('TipoColumna')?.valueChanges.subscribe((data) => {
      if (data) {
        this.buscadorForm.get('Columna')?.enable()
        this.buscadorForm.get('Columna')?.updateValueAndValidity()
      }
    })
  }

  private buscarByColumna() {
    this.buscadorForm.get('Columna')?.valueChanges.subscribe((valor) => {

      console.log(valor);
      

      if (valor) {
        let tipoColumna = this.buscadorForm.get('TipoColumna')?.value

        let buscadorDTO: BuscardorDTO = {
          TipoColumna: tipoColumna,
          Columna: valor
        }

        this.rentaService.buscador(buscadorDTO).subscribe((data) => {
          this.rentas = data
          console.log(data);
        })
      }


    })

  }





}
