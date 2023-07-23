export interface Groups {
  count:    number;
  included: null;
  input:    string;
  result:   GroupsResult[];
  links:    null;
}

export interface GroupsResult {
  merchantId:        number;
  serieId:           number;
  versionId:         null;
  templateId:        null;
  associationType:   AssociationType;
  associatedGroupId: null;
  status:            Status;
  position:          number;
  type:              Type;
  isPaid:            boolean;
  isPartner:         boolean;
  hasApproval:       boolean;
  hasPartner:        boolean;
  hasPolls:          boolean;
  name:              string;
  description:       null | string;
  slug:              string;
  groupId:           number;
  imageUrl:          null | string;
  category:          Category | null;
  serie:             Serie;
}

export enum AssociationType {
  Main = "MAIN",
}

export interface Category {
  language:    string;
  slug:        string;
  name:        string;
  description: null | string;
}

export interface Serie {
  preffix:        string;
  creationDate:   string;
  lastUpdateDate: string;
  serieId:        number;
}

export enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

export enum Type {
  Entity = "ENTITY",
  Person = "PERSON",
}
