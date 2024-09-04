export interface User {
  id: number | string;
  name: string;
  email: string;
  password: string;
  isDisabled: boolean;
  createdDate: Date;
  updatedDate: Date;
  
}
