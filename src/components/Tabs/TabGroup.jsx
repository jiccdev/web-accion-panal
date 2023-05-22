import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';

const TabGroup = ({ tabListData, tabPanel0, tabPanel1 }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const renderedTabList = tabListData.map((tab, idx) => (
    <Tab key={idx} as={Fragment}>
      <button
        className={`${selectedTab === idx ? 'bg-amber-500 text-white' : 'bg-amber-100'
          } w-[50%] p-2 xl:p-3 outline-none focus:outline-none`}
      >
        <div className="flex items-center justify-center">
          <span className="mr-2 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center">
            {idx + 1}
          </span>
          <div className='text-[14px]'>{tab}</div>
        </div>
      </button>
    </Tab>
  ));

  return (
    <Tab.Group>
      <Tab.List>{renderedTabList}</Tab.List>
      <Tab.Panels>
        <Tab.Panel>{tabPanel0}</Tab.Panel>
        <Tab.Panel>{tabPanel1}</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default TabGroup;
