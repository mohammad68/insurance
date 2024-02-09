export interface IIdTitle {
  id: number;
  title: string;
}

export interface IInsuranceCompony extends IIdTitle {}
export interface IThridDicounts extends IIdTitle {}
export interface IVehicelType extends IIdTitle {
  usages: IIdTitle[];
}
