export interface CharacterEntityVmRM {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: any;
  url: string;
  created: string;
}

export interface InfoEntityVmRM {
  count: number;
  pages: number;
  next: string;
  prev: string;
}