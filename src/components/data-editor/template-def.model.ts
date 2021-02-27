export type NameVal = { name: string; value: any };

export interface ViewData {
  options: NameVal[];
  [key: string]: any;
}

export interface TemplateDataFieldDef {
  field: string;
  description: string;
  multiple?: boolean;
  type?: string;
  data?: Partial<ViewData>;
}

export interface TemplateGroupDef {
  groupId: string;
  dataFields?: TemplateDataFieldDef[];
}

export interface TemplateDef {
  templateName: string;
  documentType: string;
  dataGroups?: TemplateGroupDef[];
  dataFields?: TemplateDataFieldDef[];
}
