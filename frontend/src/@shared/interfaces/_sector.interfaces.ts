export interface ISector {
  _id: string;
  isActive: boolean;
  title: string;
}

export interface ISectorCreate {
  isActive: boolean;
  title: string;
}

export interface ISectorUpdate {
  id?: string;
  isActive: boolean;
  title: string;
}
