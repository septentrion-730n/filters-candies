import {
  BlendMode,
  ChannelSelector,
  Color,
  EdgeMode,
  Matrix9,
  MorphologyOperator,
  SourceUuid,
  Transfer,
} from "./filtersUtils";

export type SVGFilterType =
  | "feBlend"
  | "feColorMatrix"
  | "feComponentTransfer"
  | "feConvolveMatrix"
  | "feDisplacementMap"
  | "feDropShadow"
  | "feFlood"
  | "feGaussian"
  | "feMorphology"
  | "source";

export type AbstractFilter<T extends SVGFilterType> = {
  id: string;
  type: T;
};

export type FilterArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type FeBlendFilter = AbstractFilter<"feBlend"> &
  FilterArea & {
    mode: BlendMode;
    input1: SourceUuid;
    input2: SourceUuid;
  };

export type FeColorMatrixFilter = AbstractFilter<"feColorMatrix"> &
  FilterArea & {
    type: "hueRotate" | "luminanceToAlpha" | "matrix" | "saturate";
    values: string;
    input: SourceUuid;
  };

export type FeComponentTransferFilter = AbstractFilter<"feComponentTransfer"> &
  FilterArea & {
    input: SourceUuid;
    feFuncR: Transfer;
    feFuncG: Transfer;
    feFuncB: Transfer;
    feFuncA: Transfer;
  };

export type FeConvolveMatrixFilter = AbstractFilter<"feConvolveMatrix"> &
  FilterArea & {
    order: [number, number];
    kernelMatrix: Matrix9;
    divisor: number;
    bias: number;
    target: [number, number];
    edgeMode: EdgeMode;
    preserveAlpha: boolean;
    input: SourceUuid;
  };

export type FeDropShadowFilter = AbstractFilter<"feDropShadow"> &
  FilterArea & {
    stdDeviation: [number, number];
    input: SourceUuid;
    d: [number, number];
    floodColor: Color;
    floodOpacity: number;
    edgeMode: EdgeMode;
  };

export type FeDisplacementMapFilter = AbstractFilter<"feDisplacementMap"> &
  FilterArea & {
    input1: SourceUuid;
    input2: SourceUuid;
    scale: number;
    xChannelSelector: ChannelSelector;
    yChannelSelector: ChannelSelector;
  };

export type FeFloodFilter = AbstractFilter<"feFlood"> &
  FilterArea & {
    floodColor: Color;
    floodOpacity: number;
  };

export type FeGaussianFilter = AbstractFilter<"feGaussian"> &
  FilterArea & {
    stdDeviation: [number, number];
    input: SourceUuid;
    edgeMode: EdgeMode;
  };

export type FeMorphologyFilter = AbstractFilter<"feMorphology"> &
  FilterArea & {
    radius: [number, number];
    operator: MorphologyOperator;
    input: SourceUuid;
  };

// @todo FeSpecularLightingFilter
// @todo FeDiffuseLightingFilter
// @todo FeTileFilter
// @todo FeTurbulenceFilter
// @todo FeCompositeFilter
// @todo FeOffsetFilter
// @todo FeImageFilter
// @todo FeMergeFilter