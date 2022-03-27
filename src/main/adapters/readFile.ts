import { PropertyDTO } from '@app/core/Property'
import { ReadFile } from '@app/services/protocols/read'

import * as xlsx from 'xlsx'

interface Row {
  Nome: string
  PrevisaoInicio: Date
  PrevisaoFim: Date
  Status: string
  Desconto: boolean
  ITBI: boolean
  Registro: boolean
  Condominio: string
  TipoLogradouro: string
  NomeLogradouro: string
  CEP: string
  Numero: string
  Bairro: string
  Cidade: string
  QtdeBanheiros: number
  Quartos: number
  Area: number
  Valor: number
}

export class ReadFileAdapter implements ReadFile {
  read(buffer: Buffer): PropertyDTO[] {
    const workbook = xlsx.read(buffer, { type: 'buffer' })
    const sheetName = workbook.SheetNames[0]
    const workSheet = workbook.Sheets[sheetName]

    const sheet = xlsx.utils.sheet_to_json(workSheet, {})

    const properties: PropertyDTO[] = []

    sheet.forEach((row: Row) => {
      const payload: PropertyDTO = {
        name: row.Nome,
        forecast_start: row.PrevisaoInicio,
        forecast_end: row.PrevisaoFim,
        itbi: row.ITBI,
        discount: row.Desconto,
        street_type: row.TipoLogradouro,
        street: row.NomeLogradouro,
        area: row.Area,
        bathrooms: row.QtdeBanheiros,
        bedrooms: row.Quartos,
        city: row.Cidade,
        complex: row.Condominio,
        registration: row.Registro,
        neighborhood: row.Bairro,
        price: row.Valor,
        number: row.Numero,
        status: row.Status,
        zipcode: row.CEP
      }

      properties.push(payload)
    })

    return properties
  }
}
