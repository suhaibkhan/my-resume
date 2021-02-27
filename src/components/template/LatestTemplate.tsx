import React, { useEffect } from 'react';
import styles from './LatestTemplate.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LatestTemplateData, Skill } from './LatestTemplate.model';
import SubSection from './SubSection';
import IconLabel from './IconLabel';
import Section from './Section';

library.add(fab, faEnvelope, faMapMarkerAlt, faMobileAlt, faCalendarAlt);

interface LatestTemplateProps {
  data: Record<string, any>;
}

type SkillGroup = 'proficient' | 'familiar';

const groupSkills = (skills: Partial<Skill>[]) =>
  skills.reduce(
    (skillGrpMap: Record<SkillGroup, Partial<Skill>[]>, skill) => {
      const grpKey =
        skill.rating && skill.rating > 1 ? 'proficient' : 'familiar';
      skillGrpMap[grpKey].push(skill);
      return skillGrpMap;
    },
    { proficient: [], familiar: [] }
  );

const getTwoRowArray = <T,>(skills: T[]) => {
  const len = skills.length;
  const med = Math.ceil(len / 2);
  const multiSkills = [];
  for (let i = 0; i < med; i++) {
    const multi: [T | null, T | null] = [null, null];
    multi[0] = skills[i];
    if (i + med < len) {
      multi[1] = skills[i + med];
    }
    multiSkills.push(multi);
  }
  return multiSkills;
};

const renderSkillTable = (skills: Partial<Skill>[]) => {
  const skillMap = groupSkills(skills);
  const profSkillsLen = skillMap.proficient.length;
  const famSkillsLen = skillMap.familiar.length;

  const multiGrp = profSkillsLen > 0 && famSkillsLen > 0;

  const profSkills = getTwoRowArray(skillMap.proficient);
  const famSkills = getTwoRowArray(skillMap.familiar);

  return (
    <table className={styles.skillTable} cellSpacing={0} cellPadding={0}>
      <tbody>
        <tr>
          <td colSpan={2} className={styles.grpHeader}>
            {multiGrp ? 'Proficient' : ''}
          </td>
        </tr>
        {profSkills.length > 0 &&
          profSkills.map((skill, index) => (
            <tr key={index}>
              <td>{skill[0]?.label}</td>
              <td>{skill[1]?.label}</td>
            </tr>
          ))}
        {multiGrp && (
          <tr>
            <td colSpan={2} className={styles.grpHeader}>
              Familiar
            </td>
          </tr>
        )}
        {famSkills.length > 0 &&
          famSkills.map((skill, index) => (
            <tr key={index}>
              <td>{skill[0]?.label}</td>
              <td>{skill[1]?.label}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

function LatestTemplate(props: LatestTemplateProps) {
  const data = props.data as LatestTemplateData;

  useEffect(() => {
    document.title = data.docTitle;
  }, [data.docTitle]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.topHeading}>{data.name}</div>
        <div className={styles.topInfo}>
          <IconLabel icon="map-marker-alt">{data.currentLocation}</IconLabel>
          <IconLabel icon="mobile-alt">{data.contactNumber}</IconLabel>
          <IconLabel icon="envelope">{data.email}</IconLabel>
          <IconLabel icon={['fab', 'skype']}>{data.skype}</IconLabel>
          <IconLabel icon={['fab', 'github']} isLink>
            {data.github}
          </IconLabel>
          <IconLabel icon={['fab', 'linkedin']} isLink>
            {data.linkedin}
          </IconLabel>
        </div>
      </div>
      <div className={styles.lefCol}>
        <Section title="Summary">{data.summary}</Section>
        <Section title="Experience">
          {data.experience?.map((exp, index) => (
            <SubSection
              key={index}
              title={exp.company}
              subtitle={exp.role}
              location={exp.location}
              date={exp.dateRange}
            >
              <ul className={styles.sectionList}>
                {exp.contributions?.map((contrib, index) => (
                  <li key={index}>{contrib}</li>
                ))}
              </ul>
            </SubSection>
          ))}
        </Section>
      </div>
      <div className={styles.rightCol}>
        <Section title="Skills">
          {data.skillSet?.map((skillSet, index) => (
            <SubSection title={skillSet.category} key={index}>
              {renderSkillTable(skillSet.skills)}
            </SubSection>
          ))}
        </Section>
        <Section title="Education">
          {data.education?.map((edu, index) => (
            <SubSection
              key={index}
              title={edu.degree}
              subtitle={edu.school}
              date={edu.dateRange}
            >
              <div>{edu.details}</div>
            </SubSection>
          ))}
        </Section>
        <Section title="Personal Details">
          {data.personalDetails?.map(({ label, value }, index) => (
            <div key={index}>
              <span className={styles.detailsLabel}>{`${label}:`}</span>
              <span>{value}</span>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}

export default LatestTemplate;
