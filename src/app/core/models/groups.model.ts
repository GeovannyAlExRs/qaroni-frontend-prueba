export interface Groups {
  count: number;
  included: null;
  input: string;
  result: GroupsResult[];
  links: null;
}

export interface GroupsResult {
  merchantId: number;
  associatedGroupId: number | null;
  formId: number | null;
  categoryId: number | null;
  emailTemplateId: number | null;
  serieId: number | null;
  versionId: number | null;
  associationType: string | null;
  status: string | null;
  position: number | null;
  type: string | null;
  templateId: number | null;
  isPaid: boolean;
  isPartner: boolean;
  hasPartner: boolean;
  hasApproval: boolean;
  language: string | null;
  name: string | null;
  description: string | null;
  slug: string | null;
  category: string | null;
  productId: number | null;
  variantId: number | null;
  price: number | null;
  iva: number | null;
  creationDate: string | null;
  lastUpdateDate: string | null;
  groupId: number | null;
  imageUrl: string | null;
  templateUUID: number | null;
  setting?: Setting;
  version: string | null;
  metatags?: Metatags[];
}

export interface Setting {
  groupId: number | null;
  schemaId: number | null;
  mutualityId: string | null;
  alertDays: number | null;
  bankCharge: number | null;
  keepCode: number | null;
  hasRenewal: number | null;
  hasExpiration: number | null;
  hasInscriptionNotification: number | null;
  visibility: string | null;
  notificationEmail: string | null;
  renovationType: string | null;
  renovationNumber: number | null;
  feeNumber: number | null;
  codeField: string | null;
  creationDate: string | null;
  lastUpdateDate: string | null;
}

export interface Metatags {
  merchantId: number;
  status: string | null;
  name: string | null;
  type: string | null;
  typeId: number | null;
  creationDate: string | null;
  lastUpdateDate: string | null;
  metatagId: number;
  typeName: string | null;
  descriptions?: Descriptions[]
}

export interface Descriptions {
  language: string;
  title: string | null;
  description: string | null;
  keywords?: string | null;
  creationDate?: string | null;
  lastUpdateDate?: string | null;
}
