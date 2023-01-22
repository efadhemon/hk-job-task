export interface IBaseFilter {
  query?: string;
  searchTerm?: string;
  page?: number;
  limit?: number;
  name?: string;
  category?: string;
  filter?: string[];
  s?: object;
  sort?: string[];
  user?: string;
}

export interface IBaseResponse {
  message: string;
  success: boolean;
  statusCode: string;
  total: number;
  payload: object[] | object | null;
}

export interface IBaseFilterPayload {
  data: any[];
  page?: number;
  limit?: number;
  total?: number;
}

export interface IBaseEntity {
  id: string;
  serial: number;
  createdBy: string;
  updatedBy: string | null;
  deletedBy: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
}
