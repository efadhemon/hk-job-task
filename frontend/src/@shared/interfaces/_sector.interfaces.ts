export interface ISector {
  _id: string;
  title: string;
}

export interface ISectorCreate {
  title: string;
}

export interface ISectorUpdate {
  _id?: string;
  title: string;
}
