import { File } from '@app/core/File'
import { PassThrough } from 'stream'

import faker from 'faker'

export const fileFactory = (options?: Partial<File>): File => {
  const chunks: any[] = []
  let buffer: Buffer = Buffer.concat([])
  const mockedStream = new PassThrough()

  mockedStream.on('data', data => {
    chunks.push(data)
  })

  mockedStream.on('end', () => {
    buffer = Buffer.concat(chunks)
  })

  mockedStream.end() //   <-- end. not close.
  mockedStream.destroy()

  return {
    content: buffer,
    name: faker.random.word(),
    extension: faker.random.word(),
    size: faker.datatype.number(),
    type: faker.datatype.string(),
    ...options
  }
}
