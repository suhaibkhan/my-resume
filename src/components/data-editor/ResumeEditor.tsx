import React, { MouseEvent, SyntheticEvent, useContext, useState } from 'react';
import {
  Tab,
  Form,
  TextArea,
  InputOnChangeData,
  Input,
  Select,
  Accordion,
  AccordionTitleProps,
} from 'semantic-ui-react';
import { set, get } from '../../utils/utils';
import { ResumeData } from './ResumeData.model';
import styles from './ResumeEditor.module.css';

interface FormDef {
  path: string;
  label?: string;
  type?: 'input' | 'multiline' | 'select';
  viewOptions?: any;
}

const MAIN_FORM: FormDef[][] = [
  [
    { path: 'docTitle', label: 'Document Title' },
    { path: 'name', label: 'Name' },
    { path: 'currentLocation', label: 'Current Location' },
  ],
  [
    { path: 'contactNumber', label: 'Contact Number' },
    { path: 'email', label: 'Email' },
    { path: 'skype', label: 'Skype' },
  ],
  [
    { path: 'github', label: 'Github URL' },
    { path: 'linkedin', label: 'Linkedin URL' },
  ],
];

const SUMMARY_FORM: FormDef[][] = [
  [
    {
      path: 'summary',
      label: 'Summary',
      type: 'multiline',
      viewOptions: { rows: '8' },
    },
  ],
];

const SKILLSET_FORM: FormDef[][] = [
  [
    {
      path: 'category',
      label: 'Category',
    },
  ],
];

const SKILLS_FORM: FormDef[] = [
  {
    path: 'label',
    label: 'Name',
    viewOptions: { fluid: false, inline: false },
  },
  {
    path: 'rating',
    label: 'Rating',
    type: 'select',
    viewOptions: {
      fluid: false,
      inline: false,
      options: [
        { value: 5, text: '5' },
        { value: 4, text: '4' },
        { value: 3, text: '3' },
        { value: 2, text: '2' },
        { value: 1, text: '1' },
      ],
    },
  },
];

const EXP_FORM: FormDef[][] = [
  [
    { path: 'company', label: 'Company' },
    { path: 'location', label: 'Location' },
  ],
  [
    { path: 'role', label: 'Role' },
    { path: 'dateRange', label: 'From - To' },
  ],
];

const EXP_DETAILS_FORM: FormDef[] = [
  { path: 'contributions', label: 'Acheivements', type: 'multiline' },
];

const EDU_FORM: FormDef[][] = [
  [
    { path: 'degree', label: 'Degree' },
    { path: 'school', label: 'School / College / University' },
    { path: 'dateRange', label: 'From - To' },
  ],
  [{ path: 'details', label: 'Details', type: 'multiline' }],
];

const DETAILS_FORM: FormDef[][] = [
  [
    { path: 'label', label: 'Label' },
    { path: 'value', label: 'Details' },
  ],
];

const panes = [
  {
    menuItem: 'Summary',
    render: () => (
      <Tab.Pane>
        <Form>
          <FormRenderer formDef={SUMMARY_FORM} />
        </Form>
      </Tab.Pane>
    ),
  },
  { menuItem: 'Skills', render: () => <SkillsTabPane /> },
  { menuItem: 'Experience', render: () => <ExpTabPane /> },
  { menuItem: 'Education', render: () => <EducationTabPane /> },
  {
    menuItem: 'Personal Details',
    render: () => <PersDetailsTabPane />,
  },
];

function SkillsTabPane() {
  const { data } = useContext(DataContext);
  const [active, setActive] = useState<AccordionTitleProps['index']>(0);

  const handleAccClick = (_: MouseEvent, { index }: AccordionTitleProps) => {
    setActive((prevActive) => (prevActive !== index ? index : -1));
  };

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.skillSet?.map((skillSet, index) => (
            <>
              <Accordion.Title
                index={index}
                active={index === active}
                onClick={handleAccClick}
              >
                {`Skills Category ${index + 1}`}
              </Accordion.Title>
              <Accordion.Content active={index === active}>
                <FormRenderer
                  key={`skillSet[${index}]`}
                  formDef={SKILLSET_FORM}
                  pathPrefix={`skillSet[${index}]`}
                />
                <div className={styles.skillContainer}>
                  {skillSet?.skills?.map((_, sIndex) => (
                    <Form.Group key={`skillSet[${index}].skills[${sIndex}]`}>
                      <FormRenderer
                        formDef={SKILLS_FORM}
                        pathPrefix={`skillSet[${index}].skills[${sIndex}]`}
                      />
                    </Form.Group>
                  ))}
                </div>
              </Accordion.Content>
            </>
          ))}
        </Accordion>
      </Form>
    </Tab.Pane>
  );
}

function ExpTabPane() {
  const { data } = useContext(DataContext);
  const [active, setActive] = useState<AccordionTitleProps['index']>(0);

  const handleAccClick = (_: MouseEvent, { index }: AccordionTitleProps) => {
    setActive((prevActive) => (prevActive !== index ? index : -1));
  };

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.experience?.map((exp, index) => (
            <>
              <Accordion.Title
                index={index}
                active={index === active}
                onClick={handleAccClick}
              >
                {`Experience ${index + 1}`}
              </Accordion.Title>
              <Accordion.Content active={index === active}>
                <FormRenderer
                  key={`experience[${index}]`}
                  formDef={EXP_FORM}
                  pathPrefix={`experience[${index}]`}
                />
                {exp?.contributions?.map((_, cIndex) => (
                  <FormRenderer
                    key={`experience[${index}].contributions[${cIndex}]`}
                    formDef={EXP_DETAILS_FORM}
                    pathPrefix={`experience[${index}]`}
                    pathIndex={cIndex}
                  />
                ))}
              </Accordion.Content>
            </>
          ))}
        </Accordion>
      </Form>
    </Tab.Pane>
  );
}

function EducationTabPane() {
  const { data } = useContext(DataContext);
  const [active, setActive] = useState<AccordionTitleProps['index']>(0);

  const handleAccClick = (_: MouseEvent, { index }: AccordionTitleProps) => {
    setActive((prevActive) => (prevActive !== index ? index : -1));
  };

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.education?.map((edu, index) => (
            <>
              <Accordion.Title
                index={index}
                active={index === active}
                onClick={handleAccClick}
              >
                {`Education ${index + 1}`}
              </Accordion.Title>
              <Accordion.Content active={index === active}>
                <FormRenderer
                  key={`education[${index}]`}
                  formDef={EDU_FORM}
                  pathPrefix={`education[${index}]`}
                />
              </Accordion.Content>
            </>
          ))}
        </Accordion>
      </Form>
    </Tab.Pane>
  );
}

function PersDetailsTabPane() {
  const { data } = useContext(DataContext);

  return (
    <Tab.Pane>
      <Form>
        {data?.personalDetails?.map((_, index) => (
          <FormRenderer
            key={`personalDetails[${index}]`}
            formDef={DETAILS_FORM}
            pathPrefix={`personalDetails[${index}]`}
          />
        ))}
      </Form>
    </Tab.Pane>
  );
}

interface ResumeEditorProps {
  data?: ResumeData;
  onDataChange: (data: Record<string, any>) => void;
}

const DataContext = React.createContext<ResumeEditorProps>({
  onDataChange: (data) => {},
});

const typeElemMap = {
  input: Input,
  multiline: TextArea,
  select: Select,
};

interface FormRendererProps {
  formDef: FormDef[][] | FormDef[];
  pathPrefix?: string;
  pathIndex?: number;
}

const FormRenderer = ({
  formDef,
  pathPrefix = '',
  pathIndex,
}: FormRendererProps) => {
  const { data, onDataChange } = useContext(DataContext);

  const handleChange = (dataPath: string) => (
    _: SyntheticEvent,
    { value }: InputOnChangeData
  ) => {
    onDataChange(set(data, dataPath, value));
  };

  const getFullPath = (path: string) => {
    let fullPath = pathPrefix ? `${pathPrefix}.${path}` : path;
    if (typeof pathIndex !== 'undefined') {
      fullPath += `[${pathIndex}]`;
    }
    return fullPath;
  };

  return (
    <>
      {formDef.map((formGrp: FormDef[] | FormDef) => (
        <>
          {Array.isArray(formGrp) ? (
            <Form.Group widths="equal">
              {formGrp.map(({ label, path, type, viewOptions }) => (
                <Form.Field
                  key={getFullPath(path)}
                  fluid
                  control={typeElemMap[type || 'input']}
                  label={label}
                  placeholder={label}
                  onChange={handleChange(getFullPath(path))}
                  value={get(data, getFullPath(path))}
                  {...viewOptions}
                />
              ))}
            </Form.Group>
          ) : (
            <Form.Field
              key={getFullPath(formGrp.path)}
              fluid
              control={typeElemMap[formGrp.type || 'input']}
              label={formGrp.label}
              placeholder={formGrp.label}
              onChange={handleChange(getFullPath(formGrp.path))}
              value={get(data, getFullPath(formGrp.path))}
              {...formGrp.viewOptions}
            />
          )}
        </>
      ))}
    </>
  );
};

function ResumeEditor({ data, onDataChange }: ResumeEditorProps) {
  return (
    <div>
      <h3>Resume Editor</h3>
      <DataContext.Provider value={{ data, onDataChange }}>
        <Form>
          <FormRenderer formDef={MAIN_FORM} />
        </Form>
        <Tab
          menu={{
            color: 'blue',
            inverted: true,
            attached: true,
            tabular: true,
          }}
          panes={panes}
        />
      </DataContext.Provider>
    </div>
  );
}

export default ResumeEditor;
