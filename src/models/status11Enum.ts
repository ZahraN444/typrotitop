/**
 * Cypress Test APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status11Enum
 */
export enum Status11Enum {
  Enumvalue1 = 'enumvalue1',
  Enumvalue2 = 'enumvalue2',
  Enumvalue3 = 'enumvalue3',
}

/**
 * Schema for Status11Enum
 */
export const status11EnumSchema: Schema<Status11Enum> = stringEnum(
  Status11Enum
);
