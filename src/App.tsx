import React, { useMemo, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styles from './App.module.css';
import Doc from './components/Doc';
import { getGroupDefMap, isIEOrEdge, validateData } from './utils/utils';
import DataEditor from './components/data-editor/DataEditor';
import TemplateDefContext from './templatedef-context';
import Template, { templateDef } from './components/template';
import resumeData from './data/resume.json';

function App() {
  const groupDefMap = useMemo(() => getGroupDefMap(templateDef), []);
  const [docData, setDocData] = useState<Record<string, any>>(
    validateData(resumeData, templateDef, groupDefMap)
  );
  const [scale, setScale] = useState(1);
  const [editOpen, setEditOpen] = useState(false);

  const handlePrint = () => {
    // If Edge or IE, try catch with execCommand
    if (isIEOrEdge) {
      try {
        window.document.execCommand('print', false);
      } catch (e) {
        window.print();
      }
    } else {
      // Other browsers
      window.print();
    }
  };

  const handleDataChange = (data: Record<string, any>) => {
    setDocData(data);
  };

  const handleZoom = (zoomIn: boolean) => () => {
    const factor = zoomIn ? 0.1 : -0.1;
    setScale(scale + factor);
  };

  const handleReset = () => {
    setScale(1);
  };

  const handleEdit = (open: boolean) => () => {
    setEditOpen(open);
  };

  return (
    <div className={styles.app}>
      <div className={`${styles.toolbar} hideInPrint`}>
        <Button primary icon onClick={handleReset}>
          <Icon name="expand" />
        </Button>
        <Button primary icon onClick={handleZoom(true)}>
          <Icon name="zoom-in" />
        </Button>
        <Button primary icon onClick={handleZoom(false)}>
          <Icon name="zoom-out" />
        </Button>
        <Button
          primary
          toggle
          icon
          active={editOpen}
          onClick={handleEdit(!editOpen)}
        >
          <Icon name="edit" />
        </Button>
        <Button primary icon onClick={handlePrint}>
          <Icon name="print" />
        </Button>
      </div>
      <div className={`${styles.panels} ${!editOpen ? styles.hideEdit : ''}`}>
        <div className={styles.editContainer}>
          <TemplateDefContext.Provider value={{ templateDef, groupDefMap }}>
            <DataEditor data={docData} onDataChange={handleDataChange} />
          </TemplateDefContext.Provider>
        </div>
        <div className={styles.docContainer}>
          <Doc scale={scale}>
            <Template data={docData} />
          </Doc>
        </div>
      </div>
    </div>
  );
}

export default App;
