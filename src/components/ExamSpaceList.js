import React from 'react';
import {
  Collapsible,
  CollapsibleItem,
  Icon,
  Tabs,
  Tab,
  Select
} from 'react-materialize';

const exams = ["MidSem", "EndSem"];
const ExamSpace = ({ exampapersData}) => {
  const [selectedBranch, setSelectedBranch] = React.useState("COE");
  return (
    <div>
      <Select
        id="Select-9"
        multiple={false}
        options={{
          classes: '',
          dropdownOptions: {
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }
        }}
        value={selectedBranch}
        onChange={e => setSelectedBranch(e.currentTarget.value)}
        >
        {Object.keys(exampapersData).map((branch) => (
          <option value={branch} key={branch}>Selected Branch : {branch}</option>
        ))}
      </Select>
      <Tabs>
        {exams.map((exam, index) => (
          <Tab title={exam} key={index} active={exam === "MidSem"}>
            <Collapsible popout>
              {exampapersData[selectedBranch][exam].sems.map((exampapers, index) => (
                <CollapsibleItem
                  header={"Semester:" + (index+1)}
                  icon={<Icon>all_inclusive</Icon>}
                  className='center-align'
                  style={{ fontSize: '20px' }}
                  key={index}
                >
                  <ul>
                  {exampapers.map((paper, index) => (
                      <li key={index}><a href={"https://drive.google.com/uc?export=download&id="+paper.link}> Year: {paper.year}</a></li>
                  ))}
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
