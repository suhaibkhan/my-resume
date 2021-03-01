import React, { useMemo, useState } from 'react';
import { Button, Col, Row } from '@geist-ui/react';
import styles from './App.module.css';
import Doc from './components/Doc';
import { getGroupDefMap, isIEOrEdge, validateData } from './utils/utils';
import DataEditor from './components/data-editor/DataEditor';
import TemplateDefContext from './templatedef-context';
import Template, { templateDef } from './components/template';
import resumeData from './data/resume.json';
import {
  FullScreen,
  Edit,
  ZoomIn,
  ZoomOut,
  Printer,
} from '@geist-ui/react-icons';

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
        <Row gap={0.3}>
          <Col>
            <Button
              type="success"
              auto
              icon={<FullScreen />}
              size="small"
              onClick={handleReset}
            />
          </Col>
          <Col>
            <Button
              type="success"
              auto
              icon={<ZoomIn />}
              size="small"
              onClick={handleZoom(true)}
            />
          </Col>
          <Col>
            <Button
              type="success"
              auto
              icon={<ZoomOut />}
              size="small"
              onClick={handleZoom(false)}
            />
          </Col>
          <Col>
            <Button
              type="success"
              auto
              icon={<Edit />}
              size="small"
              onClick={handleEdit(!editOpen)}
            />
          </Col>
          <Col>
            <Button
              type="success"
              auto
              icon={<Printer />}
              size="small"
              onClick={handlePrint}
            />
          </Col>
        </Row>
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
