import React from 'react';
import {
  Collapsible,
  CollapsibleItem,
  Icon,
  Tabs,
  Tab,
} from 'react-materialize';

const exams = ['MidSem', 'EndSem'];
const ExamSpace = ({ exampapersData }) => {
  let semList = [];
  for (let i = 1; i <= 8; i++) semList.push(`semester_${i}`);

  return (
    <div>
      <Tabs>
        {exams.map((exam, index) => (
          <Tab title={exam} key={index} active={exam === 'MidSem'}>
            <Collapsible popout>
              {semList.map((sem, index) => (
                <CollapsibleItem
                  header={'Semester: ' + (index + 1)}
                  icon={<Icon>all_inclusive</Icon>}
                  className='center-align'
                  style={{ fontSize: '20px' }}
                  key={index}
                >
                  <ul>
                    {exampapersData[exam.toLowerCase()][sem].map(
                      (paper, index) => (
                        <li key={index}>
                          <a
                            href={
                              'https://drive.google.com/uc?export=download&id=' +
                              paper.link
                            }
                          >
                            {' '}
                            Year: {paper.year}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </CollapsibleItem>
              ))}
            </Collapsible>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default ExamSpace;
