import BigInt from 'bn.js';
import { ec as EllipticCurve } from 'elliptic';

export const EC = new EllipticCurve('secp256k1');

export const BI_RED_CTX = BigInt.red(EC.n);
export const BI_RED_ONE = new BigInt(1).toRed(BI_RED_CTX);
export const BI_RED_EC_N = EC.n.toRed(BI_RED_CTX);

export const BUFFER_DIGEST_ENCODING = 'base64';

export const CARDS_IN_DECK = 52;

export const INT32_MIN_VALUE = -(2 ** 31);
export const INT32_RANGE = 2 ** 32;
export const UINT32_MAX_VALUE = INT32_RANGE - 1;
