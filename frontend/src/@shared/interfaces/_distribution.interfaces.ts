import { ISector } from "./_sector.interfaces";

export interface IDistribution {
  _id: string;
  name: string;
  sectors: ISector[];
  agreeToTerms: string;
}

export interface IDistributionCreate {
  name: string;
  sectors: string[];
  agreeToTerms: string;
}

export interface IDistributionUpdate {
  _id?: string;
  name: string;
  sectors: string[];
  agreeToTerms: string;
}
