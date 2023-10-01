export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {id: 1,
  title: 'My first note',
  text: 'This is the first note that is stored in this file. It will be a local file for now.',},
  {
    id: 2,
    title: 'The second note',
    text: 'This note is the second one. Also stored in a local file. I will just assume that later on, these notes will be stored in some database.',
  },
];

