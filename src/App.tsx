import React, { useMemo, useState } from 'react';
import { Button } from 'semantic-ui-react';
import styles from './App.module.css';
import Doc from './components/Doc';
import { getGroupDefMap, isIEOrEdge, validateData } from './utils/utils';
import Template, { templateDef } from './components/template';
import resumeData from './data/resume.json';
import ResumeEditor from './components/data-editor/ResumeEditor';
import { ResumeData } from './components/data-editor/ResumeData.model';

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
        <Button primary icon="expand" onClick={handleReset} />
        <Button primary icon="zoom-in" onClick={handleZoom(true)} />
        <Button primary icon="zoom-out" onClick={handleZoom(false)} />
        <Button
          primary
          toggle
          icon="edit"
          active={editOpen}
          onClick={handleEdit(!editOpen)}
        />
        <Button primary icon="print" onClick={handlePrint} />
      </div>
      <div className={`${styles.panels} ${!editOpen ? styles.hideEdit : ''}`}>
        <div className={styles.editContainer}>
          {/* <TemplateDefContext.Provider value={{ templateDef, groupDefMap }}>
            <DataEditor data={docData} onDataChange={handleDataChange} />
          </TemplateDefContext.Provider> */}
          <ResumeEditor
            data={docData as ResumeData}
            onDataChange={handleDataChange}
          />
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
