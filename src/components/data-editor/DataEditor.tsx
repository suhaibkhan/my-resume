import React, { SyntheticEvent, useContext } from 'react';
import { Button, Card, Input, Textarea, Select } from '@geist-ui/react';
import TemplateDefContext from '../../templatedef-context';
import {
  DATAFIELD_NATIVE_TYPES as NATIVE_TYPES,
  isGroupDataField,
  set,
  getDataFromFieldDef,
} from '../../utils/utils';
import styles from './DataEditor.module.css';
import { TemplateDataFieldDef, ViewData } from './template-def.model';

interface DataEditorProps {
  data: Record<string, any>;
  onDataChange: (data: Record<string, any>) => void;
}

const DataChangeContext = React.createContext<DataEditorProps>({
  data: {},
  onDataChange: (data) => {},
});

interface FieldItemRendererProps {
  label: string;
  value: string;
  viewData?: Partial<ViewData>;
  viewType: string;
  dataPath: string;
}

const typeElemMap = {
  [NATIVE_TYPES.INPUT]: ({ value, label }: Partial<FieldItemRendererProps>) => (
    <Input value={value} placeholder={label} />
  ),
  [NATIVE_TYPES.MULTILINE]: ({
    value,
    label,
  }: Partial<FieldItemRendererProps>) => (
    <Textarea value={value} placeholder={label} />
  ),
  [NATIVE_TYPES.SELECT]: ({
    value,
    label,
    viewData,
  }: Partial<FieldItemRendererProps>) => (
    <Select placeholder={label}>
      {viewData?.options?.map((opt) => (
        <Select.Option key={opt.value} value={opt.value}>
          {opt.name}
        </Select.Option>
      ))}
    </Select>
  ),
};

function FieldItemRenderer(props: FieldItemRendererProps) {
  const { data, onDataChange } = useContext(DataChangeContext);
  const { viewType, dataPath } = props;
  const control = typeElemMap[viewType];
  const handleChange = (_: SyntheticEvent, { value }: any) => {
    onDataChange(set(data, dataPath, value));
  };

  return control && control(props);
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
      <Card>
        <div>{dataFieldDef.description}</div>
        <div>
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
        </div>
        {multiple && (
          <Card.Footer className={styles.extraContent}>
            <Button
              onClick={handleAdd(`${dataPath}[${data.length}]`, dataFieldDef)}
            >
              Add {dataFieldDef.description}
            </Button>
          </Card.Footer>
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
        <div className={styles.extraContent}>
          <Button
            onClick={handleAdd(`${dataPath}[${data.length}]`, dataFieldDef)}
          >
            Add {dataFieldDef.description}
          </Button>
        </div>
      )}
    </>
  );
}

function DataEditor({ data, onDataChange }: DataEditorProps) {
  const { templateDef } = useContext(TemplateDefContext);

  return (
    <div className={styles.container}>
      <div>Document Template: {templateDef?.templateName}</div>
      <div>Document Type: {templateDef?.documentType}</div>
      <DataChangeContext.Provider value={{ data, onDataChange }}>
        <div>
          {templateDef?.dataFields?.map((dataFieldDef) => (
            <DataFieldRenderer
              key={`${dataFieldDef.field}`}
              dataFieldDef={dataFieldDef}
              dataPath={dataFieldDef.field}
              data={data[dataFieldDef.field]}
            />
          ))}
        </div>
      </DataChangeContext.Provider>
    </div>
  );
}

export default DataEditor;
