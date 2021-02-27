import React from 'react';
import {
  TemplateDef,
  TemplateGroupDef,
} from './components/data-editor/template-def.model';

const TemplateDefContext = React.createContext<{
  groupDefMap?: Record<string, TemplateGroupDef>;
  templateDef?: TemplateDef;
}>({});

export default TemplateDefContext;
