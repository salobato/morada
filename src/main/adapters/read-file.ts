import { PropertyDTO } from '@app/core/entities'
import { ReadFile } from '@app/core/protocols'

import * as xlsx from 'xlsx'

const toDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/')
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
}

interface Row {
  Nome: string
  PrevisaoInicio: string
  PrevisaoFim: string
  Status: string
  Desconto: 'true' | 'false'
  ITBI: 'true' | 'false'
  Registro: 'true' | 'false'
  Condominio: string
  TipoLogradouro: string
  NomeLogradouro: string
  CEP: string
  Numero: string
  Bairro: string
  Cidade: string
  QtdeBanheiros: string
  Quartos: string
  Area: string
  Valor: string
}

export class ReadFileAdapter implements ReadFile {
  read(buffer: Buffer): PropertyDTO[] {
    try {
      const workbook = xlsx.read(buffer, { type: 'buffer' })
      const sheetName = workbook.SheetNames[0]
      const workSheet = workbook.Sheets[sheetName]

      const sheet = xlsx.utils.sheet_to_json(workSheet, {})

      const properties: PropertyDTO[] = []

      sheet.forEach((row: Row) => {
        const payload: PropertyDTO = {
          name: row.Nome,
          forecast_start: toDate(row.PrevisaoInicio),
          forecast_end: toDate(row.PrevisaoFim),
          itbi: row.ITBI == 'true' ? true : false,
          discount: row.Desconto == 'true' ? true : false,
          registration: row.Registro == 'true' ? true : false,
          street_type: row.TipoLogradouro,
          street: row.NomeLogradouro,
          area: parseInt(row.Area),
          bathrooms: parseInt(row.QtdeBanheiros),
          bedrooms: parseInt(row.Quartos),
          city: row.Cidade,
          complex: row.Condominio,
          neighborhood: row.Bairro,
          price: parseInt(row.Valor),
          number: row.Numero,
          status: row.Status,
          zipcode: row.CEP
        }

        properties.push(payload)
      })

      return properties
    } catch (error) {
      return error
    }
  }
}
