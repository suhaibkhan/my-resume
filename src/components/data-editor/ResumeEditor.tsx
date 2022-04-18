import React, {
  Fragment,
  MouseEvent,
  SyntheticEvent,
  useContext,
  useState,
} from 'react';
import {
  Tab,
  Form,
  TextArea,
  InputOnChangeData,
  Input,
  Select,
  Accordion,
  AccordionTitleProps,
  Icon,
  Button,
} from 'semantic-ui-react';
import { set, get } from '../../utils/utils';
import {
  Education,
  Experience,
  PersonalDetail,
  ResumeData,
  Skill,
  SkillSet,
} from './ResumeData.model';
import styles from './ResumeEditor.module.css';

interface FormDef {
  path: string;
  label?: string;
  type?: 'input' | 'multiline' | 'select';
  viewOptions?: any;
}

const SUMMARY_FORM: FormDef[][] = [
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
  [{ path: 'github', label: 'Github URL' }],
  [{ path: 'linkedin', label: 'Linkedin URL' }],
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
  {
    path: 'contributions',
    label: 'Acheivements',
    type: 'multiline',
    viewOptions: { fluid: false },
  },
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

interface SecAccordianTitleProps {
  title: string;
  index: AccordionTitleProps['index'];
  active: boolean;
  onAccClick: (_: MouseEvent, titleProps: AccordionTitleProps) => void;
  onDelete: (index: AccordionTitleProps['index']) => void;
}

function SecAccordianTitle({
  title,
  index,
  active,
  onAccClick,
  onDelete,
}: SecAccordianTitleProps) {
  const handleDelete = (evt: MouseEvent) => {
    evt.stopPropagation();
    onDelete(index);
  };

  return (
    <Accordion.Title index={index} active={active} onClick={onAccClick}>
      <div className={styles.sectionTitle}>
        <div>
          <Icon name="dropdown" />
          {title}
        </div>
        <div>
          <Button
            negative
            basic
            icon="close"
            circular
            onClick={handleDelete}
          ></Button>
        </div>
      </div>
    </Accordion.Title>
  );
}

function useAccordionToggle(
  defaultIndex = 0
): [
  AccordionTitleProps['index'],
  (_: MouseEvent, titleProps: AccordionTitleProps) => void
] {
  const [active, setActive] = useState<AccordionTitleProps['index']>(0);
  const handleAccToggle = (_: MouseEvent, { index }: AccordionTitleProps) => {
    setActive((prevActive) => (prevActive !== index ? index : -1));
  };
  return [active, handleAccToggle];
}

function useDataArrayDelete(arrayPath: string) {
  const { data, onDataChange } = useContext(DataContext);

  const handleDelete = (index: AccordionTitleProps['index']) => {
    const newArray = get(data, arrayPath).slice(0);
    newArray.splice(index, 1);
    onDataChange(set(data, arrayPath, newArray));
  };

  return handleDelete;
}

function useDataNestedArrayDelete(arrayPath: string) {
  const { data, onDataChange } = useContext(DataContext);

  const handleNestedDelete = (parentPrefix: string, index: number) => () => {
    const nestedArrayPath = `${parentPrefix}.${arrayPath}`;
    const newArray = get(data, nestedArrayPath).slice(0);
    newArray.splice(index, 1);
    onDataChange(set(data, nestedArrayPath, newArray));
  };

  return handleNestedDelete;
}

function useDataArrayAdd<T>(arrayPath: string, emptyVal: T) {
  const { data, onDataChange } = useContext(DataContext);
  const handleAdd = () => {
    const arrayVal = get(data, arrayPath);
    if (!Array.isArray(arrayVal)) {
      console.log('Invalid operation on non array field');
      return;
    }
    onDataChange(set(data, `${arrayPath}[${arrayVal.length}]`, emptyVal));
  };

  return handleAdd;
}

function useDataNestedArrayAdd<T>(arrayPath: string, emptyVal: T) {
  const { data, onDataChange } = useContext(DataContext);
  const handleNestedAdd = (parentPrefix: string) => () => {
    const nestedArrayPath = `${parentPrefix}.${arrayPath}`;
    const arrayVal = get(data, nestedArrayPath);
    if (!Array.isArray(arrayVal)) {
      console.log('Invalid operation on non array field');
      return;
    }
    onDataChange(set(data, `${nestedArrayPath}[${arrayVal.length}]`, emptyVal));
  };

  return handleNestedAdd;
}

function SkillsTabPane() {
  const { data } = useContext(DataContext);
  const [active, onAccToggle] = useAccordionToggle(0);
  const onDelete = useDataArrayDelete('skillSet');
  const onAdd = useDataArrayAdd<SkillSet>('skillSet', {
    category: '',
    skills: [{ label: '', rating: 1 }],
  });
  const onSkillAdd = useDataNestedArrayAdd<Skill>('skills', {
    label: '',
    rating: 1,
  });
  const onSkillDelete = useDataNestedArrayDelete('skills');

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.skillSet?.map((skillSet, index) => (
            <Fragment key={`skillSet[${index}]`}>
              <SecAccordianTitle
                title={`Skills Category ${index + 1}`}
                index={index}
                active={index === active}
                onAccClick={onAccToggle}
                onDelete={onDelete}
              />
              <Accordion.Content active={index === active}>
                <FormRenderer
                  formDef={SKILLSET_FORM}
                  pathPrefix={`skillSet[${index}]`}
                />
                <div className={styles.skillContainer}>
                  {skillSet?.skills?.map((_, sIndex) => (
                    <Form.Group key={`skillSet[${index}].skills[${sIndex}]`}>
                      <FormRenderer
                        formDef={SKILLS_FORM}
                        pathPrefix={`skillSet[${index}].skills[${sIndex}]`}
                        onItemDelete={onSkillDelete(
                          `skillSet[${index}]`,
                          sIndex
                        )}
                      />
                    </Form.Group>
                  ))}
                  <div className={styles.nestAddBtnContainer}>
                    <Button
                      positive
                      icon="add"
                      content="Add Skill"
                      labelPosition="left"
                      onClick={onSkillAdd(`skillSet[${index}]`)}
                    />
                  </div>
                </div>
              </Accordion.Content>
            </Fragment>
          ))}
        </Accordion>
        <div className={styles.addBtnContainer}>
          <Button
            positive
            icon="add"
            content="Add Skills Category"
            labelPosition="left"
            onClick={onAdd}
          />
        </div>
      </Form>
    </Tab.Pane>
  );
}

function ExpTabPane() {
  const { data } = useContext(DataContext);
  const [active, onAccToggle] = useAccordionToggle(0);
  const onDelete = useDataArrayDelete('experience');
  const onAdd = useDataArrayAdd<Experience>('experience', {
    company: '',
    role: '',
    dateRange: '',
    location: '',
    contributions: [''],
  });
  const onContribAdd = useDataNestedArrayAdd<string>('contributions', '');
  const onContribDelete = useDataNestedArrayDelete('contributions');

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.experience?.map((exp, index) => (
            <Fragment key={`experience[${index}]`}>
              <SecAccordianTitle
                title={`Experience ${index + 1}`}
                index={index}
                active={index === active}
                onAccClick={onAccToggle}
                onDelete={onDelete}
              />
              <Accordion.Content active={index === active}>
                <FormRenderer
                  formDef={EXP_FORM}
                  pathPrefix={`experience[${index}]`}
                />
                {exp?.contributions?.map((_, cIndex) => (
                  <FormRenderer
                    key={`experience[${index}].contributions[${cIndex}]`}
                    formDef={EXP_DETAILS_FORM}
                    pathPrefix={`experience[${index}]`}
                    pathIndex={cIndex}
                    onItemDelete={onContribDelete(
                      `experience[${index}]`,
                      cIndex
                    )}
                  />
                ))}
                <div className={styles.nestAddBtnContainer}>
                  <Button
                    positive
                    icon="add"
                    content="Add Achievements"
                    labelPosition="left"
                    onClick={onContribAdd(`experience[${index}]`)}
                  />
                </div>
              </Accordion.Content>
            </Fragment>
          ))}
        </Accordion>
        <div className={styles.addBtnContainer}>
          <Button
            positive
            icon="add"
            content="Add Experience"
            labelPosition="left"
            onClick={onAdd}
          />
        </div>
      </Form>
    </Tab.Pane>
  );
}

function EducationTabPane() {
  const { data } = useContext(DataContext);
  const [active, onAccToggle] = useAccordionToggle(0);
  const onDelete = useDataArrayDelete('education');
  const onAdd = useDataArrayAdd<Education>('education', {
    school: '',
    degree: '',
    dateRange: '',
    details: '',
  });

  return (
    <Tab.Pane>
      <Form>
        <Accordion fluid styled>
          {data?.education?.map((edu, index) => (
            <Fragment key={`education[${index}]`}>
              <SecAccordianTitle
                title={`Education ${index + 1}`}
                index={index}
                active={index === active}
                onAccClick={onAccToggle}
                onDelete={onDelete}
              />
              <Accordion.Content active={index === active}>
                <FormRenderer
                  formDef={EDU_FORM}
                  pathPrefix={`education[${index}]`}
                />
              </Accordion.Content>
            </Fragment>
          ))}
        </Accordion>
        <div className={styles.addBtnContainer}>
          <Button
            positive
            icon="add"
            content="Add Education"
            labelPosition="left"
            onClick={onAdd}
          />
        </div>
      </Form>
    </Tab.Pane>
  );
}

function PersDetailsTabPane() {
  const { data } = useContext(DataContext);
  const onAdd = useDataArrayAdd<PersonalDetail>('personalDetails', {
    label: '',
    value: '',
  });

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
        <div className={styles.nestAddBtnContainer}>
          <Button
            positive
            icon="add"
            content="Add Personal Details"
            labelPosition="left"
            onClick={onAdd}
          />
        </div>
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
  onItemDelete?: () => void;
}

const FormRenderer = ({
  formDef,
  pathPrefix = '',
  pathIndex,
  onItemDelete,
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

  const multiRow = Array.isArray(formDef[0]);

  return (
    <>
      {multiRow
        ? (formDef as FormDef[][]).map((formGrp, rowIndex) => (
            <Form.Group widths="equal" key={`row-${rowIndex}`}>
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
          ))
        : (formDef as FormDef[]).map((form) => (
            <Form.Field
              key={getFullPath(form.path)}
              fluid
              control={typeElemMap[form.type || 'input']}
              label={form.label}
              placeholder={form.label}
              onChange={handleChange(getFullPath(form.path))}
              value={get(data, getFullPath(form.path))}
              {...form.viewOptions}
            />
          ))}
      {onItemDelete && (
        <div className={styles.deleteBtn}>
          <Button
            negative
            basic
            icon="close"
            onClick={onItemDelete}
            style={{ boxShadow: 'none !important' }}
          ></Button>
        </div>
      )}
    </>
  );
};

function ResumeEditor({ data, onDataChange }: ResumeEditorProps) {
  return (
    <div>
      <h3>Resume Editor</h3>
      <DataContext.Provider value={{ data, onDataChange }}>
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
