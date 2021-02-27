import {
  TemplateDataFieldDef,
  TemplateDef,
  TemplateGroupDef,
} from '../components/data-editor/template-def.model';

export const isIEOrEdge = /msie\s|trident\/|edge\//i.test(
  window.navigator.userAgent
);

const setVal = (obj: any, field: string, value: any): any => {
  const arrMatch = field.match(/^(.*)\[(\d+)\]$/);
  if (arrMatch) {
    const field = arrMatch[1];
    const idx = +arrMatch[2];

    const fieldVal = [...obj[field]];
    if (idx >= 0 && idx < fieldVal.length) {
      fieldVal[idx] = value;
    } else if (idx === fieldVal.length) {
      // add to array
      fieldVal.push(value);
    }
    return { ...obj, [field]: fieldVal };
  }
  return { ...obj, [field]: value };
};

const getVal = (obj: any, field: string): any => {
  if (!obj) {
    return obj;
  }

  const arrMatch = field.match(/^(.*)\[(\d+)\]$/);
  if (arrMatch) {
    const field = arrMatch[1];
    const idx = +arrMatch[2];

    const fieldVal = obj[field];
    return fieldVal && Array.isArray(fieldVal) && fieldVal[idx];
  }

  return obj[field];
};

/**
 * Set given value to the obj based on path and returns new obj
 * Note: Multi dimentional array won't work, only nested objects and array of objects
 *
 * @param obj current obj
 * @param path object path eg: "a.b[2].c"
 * @param value value to set
 */
export const set = (obj: any, path: string, value: any): any => {
  if (!path) {
    return obj;
  }

  const fields = path.split('.');

  if (fields.length === 1) {
    return setVal(obj, fields[0], value);
  }

  const [root, ...rest] = fields;
  const rootVal = set(getVal(obj, root), rest.join('.'), value);
  return setVal(obj, root, rootVal);
};

export const isEmpty = (obj: any) =>
  Array.isArray(obj) ? obj.length === 0 : !obj;

export const DATAFIELD_NATIVE_TYPES = {
  INPUT: 'INPUT',
  SELECT: 'SELECT',
  MULTILINE: 'MULTILINE',
};

/**
 * Check whether given type is group type
 *
 * @param type data field type
 */
export const isGroupDataField = (type: string) =>
  Object.values(DATAFIELD_NATIVE_TYPES).indexOf(type) < 0;

/**
 * Get group definitions map from template def
 *
 * @param templateDef template def
 */
export const getGroupDefMap = (templateDef: TemplateDef) =>
  templateDef?.dataGroups?.reduce((map, grpDef) => {
    const grpId = grpDef.groupId;
    map[grpId] = grpDef;
    return map;
  }, {} as Record<string, TemplateGroupDef>);

/**
 * Create data from TemplateGroupDef and merge with existing data if present
 * @param grpDef
 * @param groupDefMap
 * @param curData
 */
const getGroupDataFromGrpDef = (
  grpDef: TemplateGroupDef,
  groupDefMap: Record<string, TemplateGroupDef>,
  curData?: any
) => {
  const curGrpData: Record<string, any> = curData || {};
  const grpData: Record<string, any> = {};
  grpDef?.dataFields?.forEach((df) => {
    grpData[df.field] = getDataFromFieldDef(
      df,
      groupDefMap,
      curGrpData[df.field]
    );
  });
  return grpData;
};

/**
 * Create data field data based on data field def from
 * template def and merge with existing data if present
 *
 * @param dataFieldDef data field def
 * @param groupDefMap group definitions map
 * @param data existing data field data
 */
export const getDataFromFieldDef = (
  dataFieldDef: TemplateDataFieldDef,
  groupDefMap: Record<string, TemplateGroupDef>,
  data?: any
) => {
  const { type = DATAFIELD_NATIVE_TYPES.INPUT, multiple } = dataFieldDef;

  let curData = data;
  if (!multiple && Array.isArray(data)) {
    console.error(
      `Invalid array data for non multiple field ${dataFieldDef.field}`
    );
    curData = null;
  } else if (multiple && !Array.isArray(data)) {
    console.error(`Invalid data for multi-value field ${dataFieldDef.field}`);
    curData = null;
  }

  // empty array will be replaced with single elem array later
  if (multiple && curData && curData.length === 0) {
    curData = null;
  }

  if (!isGroupDataField(type)) {
    // return current data as is if valid
    // else return empty value or array with single empty value
    return curData || (multiple ? [''] : '');
  }

  const grpDef = groupDefMap[type];
  if (!grpDef) {
    console.error(`Group with type ${type} not found`);
    return multiple ? [{}] : {};
  }

  if (!multiple) {
    return getGroupDataFromGrpDef(grpDef, groupDefMap, curData);
  }

  if (!curData) {
    // multiple group data field, but current data is invalid / empty
    // create empty grp obj and return as single value array
    return [getGroupDataFromGrpDef(grpDef, groupDefMap, null)];
  } else {
    // multiple group data field, with valid current data array
    return (curData as any[]).map((curGrpData) =>
      getGroupDataFromGrpDef(grpDef, groupDefMap, curGrpData)
    );
  }
};

/**
 * Validate document data with template def
 *
 * @param data document data
 * @param templateDef template def
 * @param groupDefMap group definitions map
 */
export const validateData = (
  data: any,
  templateDef: TemplateDef,
  groupDefMap?: Record<string, TemplateGroupDef>
): Record<string, any> => {
  if (!templateDef || !groupDefMap) {
    return data;
  }

  const validData: Record<string, any> = {};
  templateDef?.dataFields?.forEach((dataField) => {
    validData[dataField.field] = getDataFromFieldDef(
      dataField,
      groupDefMap,
      data[dataField.field]
    );
  });

  return validData;
};
