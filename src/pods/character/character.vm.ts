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
  episode: any; // <---- ¿?¿? duda array
  url: string;
  created: string;
}