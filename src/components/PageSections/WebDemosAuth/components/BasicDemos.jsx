import React from 'react';
import { RadioGroup } from '@headlessui/react';
import Section from '@/components/Section/Section';
import { demosBasicData } from '../../../../data/demos';
import Image from 'next/image';
import { iconsList } from '@/components/icons';
import styles from '../../../../styles/components/Scroll/ScrollBar.module.css';

const BasicDemos = ({ basicDemoSelected, setBasicDemoSelected }) => {
  const { BsCheckCircle } = iconsList;

  return (
    <Section>
      <div>
        <div className="uppercase border-l-4 border-amber-500 p-2">
          <label>Webs Demo basicas</label>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            Una descripcion de esta seccion
          </div>
        </div>

        <RadioGroup value={basicDemoSelected} onChange={setBasicDemoSelected}>
          <div
            className={`${styles.customerScrollBar} flex overflow-x-auto py-5 space-x-4 w-full`}
          >
            {demosBasicData.map((demo, index) => (
              <RadioGroup.Option
                key={index}
                value={demo}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-amber-300 ring-white ring-opacity-60'
                      : ''
                  }
                  ${checked ? 'bg-amber-500 text-white' : 'hover:bg-gray-100 '}
                    relative flex-shrink-0 sm:w-[100%] md:w-[50%] xl:w-[32%] h-auto rounded-2xl border border-gray-200 cursor-pointer flex focus:outline-none `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between flex-col w-full">
                      <div className="text-sm">
                        <div className="flex items-center justify-between">
                          <RadioGroup.Description as="div">
                            <a href={demo.href}>
                              <Image
                                src={demo.src}
                                target="_blank"
                                width={400}
                                height={400}
                                alt="image"
                                className="w-full h-[250px] rounded-2xl object-cover"
                              />
                            </a>
                          </RadioGroup.Description>
                        </div>

                        <RadioGroup.Label
                          as="p"
                          className={`font-light mt-3 flex flex-row items-center px-6 py-5 ${
                            checked ? 'text-white' : ''
                          }`}
                        >
                          {demo.name}

                          {checked && (
                            <div className="flex-shrink-0 text-white ml-2">
                              <BsCheckCircle className="text-xl" />
                            </div>
                          )}
                        </RadioGroup.Label>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </Section>
  );
};

export default BasicDemos;
