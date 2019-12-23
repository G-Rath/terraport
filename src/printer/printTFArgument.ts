import { printTFIdentifier, printTFLiteralExpression } from '@src/printer';
import { TFArgument } from '@src/types';

export const printTFArgument = (blockArgument: TFArgument): string =>
  [
    printTFIdentifier(blockArgument.identifier),
    '=',
    printTFLiteralExpression(blockArgument.expression)
  ].join(' ');
