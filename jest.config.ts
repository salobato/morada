import { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'

const paths = {
  '@app/*': ['src/*'],
  '@test/*': ['__test__/*']
}

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  roots: ['<rootDir>/__test__'],
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['core', 'protocols'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(paths, {
    prefix: '<rootDir>/'
  })
}

export default config
