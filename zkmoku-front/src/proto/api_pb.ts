// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file proto/api.proto (package api.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message api.v1.Signature
 */
export class Signature extends Message<Signature> {
  /**
   * @generated from field: int64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string signature = 2;
   */
  signature = "";

  constructor(data?: PartialMessage<Signature>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.Signature";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "signature", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Signature {
    return new Signature().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Signature {
    return new Signature().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Signature {
    return new Signature().fromJsonString(jsonString, options);
  }

  static equals(a: Signature | PlainMessage<Signature> | undefined, b: Signature | PlainMessage<Signature> | undefined): boolean {
    return proto3.util.equals(Signature, a, b);
  }
}

/**
 * @generated from message api.v1.SetUpRequest
 */
export class SetUpRequest extends Message<SetUpRequest> {
  /**
   * @generated from field: repeated int64 ids = 1;
   */
  ids: bigint[] = [];

  constructor(data?: PartialMessage<SetUpRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SetUpRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ids", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetUpRequest {
    return new SetUpRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetUpRequest {
    return new SetUpRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetUpRequest {
    return new SetUpRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SetUpRequest | PlainMessage<SetUpRequest> | undefined, b: SetUpRequest | PlainMessage<SetUpRequest> | undefined): boolean {
    return proto3.util.equals(SetUpRequest, a, b);
  }
}

/**
 * @generated from message api.v1.SetUpResponse
 */
export class SetUpResponse extends Message<SetUpResponse> {
  /**
   * @generated from field: string H = 1;
   */
  H = "";

  /**
   * @generated from field: repeated api.v1.Signature signatures = 2;
   */
  signatures: Signature[] = [];

  /**
   * @generated from field: string KpPubk = 3;
   */
  KpPubk = "";

  constructor(data?: PartialMessage<SetUpResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.SetUpResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "H", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "signatures", kind: "message", T: Signature, repeated: true },
    { no: 3, name: "KpPubk", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetUpResponse {
    return new SetUpResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetUpResponse {
    return new SetUpResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetUpResponse {
    return new SetUpResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SetUpResponse | PlainMessage<SetUpResponse> | undefined, b: SetUpResponse | PlainMessage<SetUpResponse> | undefined): boolean {
    return proto3.util.equals(SetUpResponse, a, b);
  }
}

/**
 * @generated from message api.v1.ProveRequest
 */
export class ProveRequest extends Message<ProveRequest> {
  /**
   * @generated from field: string H = 1;
   */
  H = "";

  /**
   * @generated from field: string pub = 2;
   */
  pub = "";

  /**
   * @generated from field: repeated api.v1.Signature signatures = 3;
   */
  signatures: Signature[] = [];

  /**
   * @generated from field: int64 val = 4;
   */
  val = protoInt64.zero;

  constructor(data?: PartialMessage<ProveRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProveRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "H", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "signatures", kind: "message", T: Signature, repeated: true },
    { no: 4, name: "val", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProveRequest {
    return new ProveRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProveRequest {
    return new ProveRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProveRequest {
    return new ProveRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ProveRequest | PlainMessage<ProveRequest> | undefined, b: ProveRequest | PlainMessage<ProveRequest> | undefined): boolean {
    return proto3.util.equals(ProveRequest, a, b);
  }
}

/**
 * @generated from message api.v1.ProveResponse
 */
export class ProveResponse extends Message<ProveResponse> {
  /**
   * @generated from field: string V = 1;
   */
  V = "";

  /**
   * @generated from field: string D = 2;
   */
  D = "";

  /**
   * @generated from field: string C = 3;
   */
  C = "";

  /**
   * @generated from field: string A = 4;
   */
  A = "";

  /**
   * @generated from field: string Zsig = 5;
   */
  Zsig = "";

  /**
   * @generated from field: string Zv = 6;
   */
  Zv = "";

  /**
   * @generated from field: string Cc = 7;
   */
  Cc = "";

  /**
   * @generated from field: string M = 8;
   */
  M = "";

  /**
   * @generated from field: string Zr = 9;
   */
  Zr = "";

  constructor(data?: PartialMessage<ProveResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.ProveResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "V", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "D", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "C", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "A", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "Zsig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "Zv", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "Cc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "M", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "Zr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProveResponse {
    return new ProveResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProveResponse {
    return new ProveResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProveResponse {
    return new ProveResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ProveResponse | PlainMessage<ProveResponse> | undefined, b: ProveResponse | PlainMessage<ProveResponse> | undefined): boolean {
    return proto3.util.equals(ProveResponse, a, b);
  }
}

/**
 * @generated from message api.v1.VerifyRequest
 */
export class VerifyRequest extends Message<VerifyRequest> {
  /**
   * @generated from field: string H = 1;
   */
  H = "";

  /**
   * @generated from field: string pub = 2;
   */
  pub = "";

  /**
   * @generated from field: string V = 3;
   */
  V = "";

  /**
   * @generated from field: string D = 4;
   */
  D = "";

  /**
   * @generated from field: string C = 5;
   */
  C = "";

  /**
   * @generated from field: string A = 6;
   */
  A = "";

  /**
   * @generated from field: string Zsig = 7;
   */
  Zsig = "";

  /**
   * @generated from field: string Zv = 8;
   */
  Zv = "";

  /**
   * @generated from field: string Cc = 9;
   */
  Cc = "";

  /**
   * @generated from field: string M = 10;
   */
  M = "";

  /**
   * @generated from field: string Zr = 11;
   */
  Zr = "";

  constructor(data?: PartialMessage<VerifyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VerifyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "H", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "V", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "D", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "C", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "A", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "Zsig", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "Zv", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "Cc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "M", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "Zr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyRequest {
    return new VerifyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyRequest {
    return new VerifyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyRequest {
    return new VerifyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyRequest | PlainMessage<VerifyRequest> | undefined, b: VerifyRequest | PlainMessage<VerifyRequest> | undefined): boolean {
    return proto3.util.equals(VerifyRequest, a, b);
  }
}

/**
 * @generated from message api.v1.VerifyResponse
 */
export class VerifyResponse extends Message<VerifyResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: bool result = 2;
   */
  result = false;

  constructor(data?: PartialMessage<VerifyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.VerifyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "result", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyResponse {
    return new VerifyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyResponse {
    return new VerifyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyResponse {
    return new VerifyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: VerifyResponse | PlainMessage<VerifyResponse> | undefined, b: VerifyResponse | PlainMessage<VerifyResponse> | undefined): boolean {
    return proto3.util.equals(VerifyResponse, a, b);
  }
}

/**
 * @generated from message api.v1.HealthCheckRequest
 */
export class HealthCheckRequest extends Message<HealthCheckRequest> {
  constructor(data?: PartialMessage<HealthCheckRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.HealthCheckRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest {
    return new HealthCheckRequest().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined, b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined): boolean {
    return proto3.util.equals(HealthCheckRequest, a, b);
  }
}

/**
 * @generated from message api.v1.HealthCheckResponse
 */
export class HealthCheckResponse extends Message<HealthCheckResponse> {
  constructor(data?: PartialMessage<HealthCheckResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "api.v1.HealthCheckResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse {
    return new HealthCheckResponse().fromJsonString(jsonString, options);
  }

  static equals(a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined, b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined): boolean {
    return proto3.util.equals(HealthCheckResponse, a, b);
  }
}
