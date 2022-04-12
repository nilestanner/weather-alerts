export interface LastestPollenResponse {
  message: string,
  data: Array<PollenCount>,
}

export interface PollenCount {
  Count: {
    grass_pollen: number,
    tree_pollen: number,
    weed_pollen: number,
  },
  Risk: {
    grass_pollen: string,
    tree_pollen: string,
    weed_pollen: string,
  }
}