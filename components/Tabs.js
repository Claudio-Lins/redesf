import React, { useState } from 'react';
import { CardProgramacao } from './CardProgramacao';

export function Tabs() {
  const [openTab, setOpenTab] = useState(1);
  const width = 4000
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 ">
          <ul
            className="flex mb-0 list-none w-full pt-3 pb-4 justify-center "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#seg"
                role="tablist"
              >
                {width <= 400 ? 'SEG' : 'Segunda-Feira'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#ter"
                role="tablist"
              >
                {width <= 400 ? 'TER' : 'Terça-Feira'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#qua"
                role="tablist"
              >
                {width <= 400 ? 'QUA' : 'Quarta-Feira'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 4
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#qui"
                role="tablist"
              >
                {width <= 400 ? 'QUI' : 'Quinta-Feira'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 5
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#sex"
                role="tablist"
              >
                {width <= 400 ? 'SEX' : 'Sexta-Feira'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 6
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#sab"
                role="tablist"
              >
                {width <= 400 ? 'SÁB' : 'Sábado'}
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 md:flex-auto w-12 text-center">
              <a
                className={
                  'text-xs text-center font-bold uppercase md:px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 7
                    ? 'text-white bg-green-900'
                    : 'text-green-900 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#dom"
                role="tablist"
              >
                {width <= 400 ? 'DOM' : 'Domigo'}
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className=" py-5">
              <div className="flex justify-center items-center">
                
                <div className={openTab === 1 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="seg">
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                </div>

                <div className={openTab === 2 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="ter">
                  <CardProgramacao />
                  <CardProgramacao />
                </div>

                <div className={openTab === 3 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="qua">
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                </div>

                <div className={openTab === 4 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="qui">
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                </div>

                <div className={openTab === 5 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="sex">
                  <CardProgramacao />
                </div>

                <div className={openTab === 6 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="sab">
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                </div>

                <div className={openTab === 7 ? 'flex justify-center flex-wrap gap-6' : 'hidden'} id="dom">
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                  <CardProgramacao />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
