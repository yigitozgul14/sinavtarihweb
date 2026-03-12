export interface MapViewState {
  center: [number, number];
  zoom: number;
}

export interface RegionHighlight {
  countryCode: string;
  color: string;
  opacity: number;
}
