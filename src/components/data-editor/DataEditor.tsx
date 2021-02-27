import React, { SyntheticEvent, useContext } from 'react';
import { Button, Card, Form, Input, Select, TextArea } from 'semantic-ui-react';
import TemplateDefContext from '../../templatedef-context';
import {
  DATAFIELD_NATIVE_TYPES as NATIVE_TYPES,
  isGroupDataField,
  set,
  getDataFromFieldDef,
} from '../../utils/utils';
import styles from './DataEditor.module.css';
import { TemplateDataFieldDef, ViewData } from './template-def.model';

const DataChangeContext = React.createContext<DataEditorProps>({
  data: {},
  onDataChange: (data) => {},
});

const typeElemMap = {
  [NATIVE_TYPES.INPUT]: Input,
  [NATIVE_TYPES.MULTILINE]: TextArea,
  [NATIVE_TYPES.SELECT]: Select,
};

interface FieldItemRendererProps {
  label: string;
  value: string;
  viewData?: Partial<ViewData>;
  viewType: string;
  dataPath: string;
}

function FieldItemRenderer({
  label,
  viewData,
  value,
  viewType,
  dataPath,
}: FieldItemRendererProps) {
  const { data, onDataChange } = useContext(DataChangeContext);

  const control = typeElemMap[viewType];
  const handleChange = (_: SyntheticEvent, { value }: any) => {
    onDataChange(set(data, dataPath, value));
  };

  return (
    <Form.Field
      control={control}
      label={label}
      placeholder={label}
      value={value}
      options={
        viewType === NATIVE_TYPES.SELECT && viewData && viewData.options
          ? viewData.options.map(({ name, value }) => ({
              key: value,
              text: name,
              value,
            }))
          : null
      }
      onChange={handleChange}
    />
  );
}

interface DataGroupRendererProps {
  grpDataFieldDef: TemplateDataFieldDef;
  grpData: Record<string, any>;
  grpPath: string;
}

function DataGroupRenderer({
  grpDataFieldDef,
  grpData,
  grpPath,
}: DataGroupRendererProps) {
  const { groupDefMap } = useContext(TemplateDefContext);
  const grpType = grpDataFieldDef.type;
  if (!grpType || !groupDefMap || !groupDefMap[grpType]) {
    return null;
  }

  return (
    <>
      {groupDefMap[grpType].dataFields?.map((dataField, idx) => (
        <DataFieldRenderer
          key={`${grpPath}.${dataField.field}`}
          dataFieldDef={dataField}
          data={grpData[dataField.field]}
          dataPath={`${grpPath}.${dataField.field}`}
        />
      ))}
    </>
  );
}

interface DataFieldRendererProps {
  dataFieldDef: TemplateDataFieldDef;
  data: any | Record<string, any>;
  dataPath: string;
}

function DataFieldRenderer({
  dataFieldDef,
  data,
  dataPath,
}: DataFieldRendererProps) {
  const type = dataFieldDef.type || NATIVE_TYPES.INPUT;
  const multiple = dataFieldDef.multiple;

  const { groupDefMap } = useContext(TemplateDefContext);
  const { data: docData, onDataChange } = useContext(DataChangeContext);

  const handleAdd = (
    path: string,
    dataFieldDef: TemplateDataFieldDef
  ) => () => {
    // create empty data
    const emptyVal = getDataFromFieldDef(dataFieldDef, groupDefMap || {});
    onDataChange(
      set(docData, path, Array.isArray(emptyVal) ? emptyVal[0] : emptyVal)
    );
  };

  if (isGroupDataField(type)) {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{dataFieldDef.description}</Card.Header>
          {multiple ? (
            (data as Record<string, any>[]).map((dataItem, idx) => (
              <DataGroupRenderer
                key={`${dataPath}[${idx}]`}
                grpDataFieldDef={dataFieldDef}
                grpData={dataItem}
                grpPath={`${dataPath}[${idx}]`}
              />
            ))
          ) : (
            <DataGroupRenderer
              grpDataFieldDef={dataFieldDef}
              grpData={data}
              grpPath={dataPath}
            />
          )}
        </Card.Content>
        {multiple && (
          <Card.Content extra className={styles.extraContent}>
            <Button
              positive
              icon="add"
              content={`Add ${dataFieldDef.description}`}
              labelPosition="left"
              onClick={handleAdd(`${dataPath}[${data.length}]`, dataFieldDef)}
            />
          </Card.Content>
        )}
      </Card>
    );
  }

  return (
    <>
      {multiple ? (
        (data as any[]).map((dataItem, idx) => (
          <FieldItemRenderer
            key={`${dataPath}[${idx}]`}
            label={dataFieldDef.description}
            value={dataItem}
            viewData={dataFieldDef.data}
            viewType={type}
            dataPath={`${dataPath}[${idx}]`}
          />
        ))
      ) : (
        <FieldItemRenderer
          label={dataFieldDef.description}
          value={data}
          viewData={dataFieldDef.data}
          viewType={type}
          dataPath={dataPath}
        />
      )}
      {multiple && (
        <Button
          positive
          icon="add"
          content={`Add ${dataFieldDef.description}`}
          labelPosition="left"
          onClick={handleAdd(`${dataPath}[${data.length}]`, dataFieldDef)}
        />
      )}
    </>
  );
}

interface DataEditorProps {
  data: Record<string, any>;
  onDataChange: (data: Record<string, any>) => void;
}

function DataEditor({ data, onDataChange }: DataEditorProps) {
  const { templateDef } = useContext(TemplateDefContext);

  return (
    <div className={styles.container}>
      <div>Document Template: {templateDef?.templateName}</div>
      <div>Document Type: {templateDef?.documentType}</div>
      <DataChangeContext.Provider value={{ data, onDataChange }}>
        <Form>
          {templateDef?.dataFields?.map((dataFieldDef) => (
            <DataFieldRenderer
              key={`${dataFieldDef.field}`}
              dataFieldDef={dataFieldDef}
              dataPath={dataFieldDef.field}
              data={data[dataFieldDef.field]}
            />
          ))}
        </Form>
      </DataChangeContext.Provider>
    </div>
  );
}

export default DataEditor;
