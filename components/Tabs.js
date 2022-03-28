import React, { useState } from 'react';
import { CardProgramacao } from './CardProgramacao';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  const width = 400
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
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'flex flex-wrap gap-4' : 'hidden'} id="seg">
                  <CardProgramacao />
                  <CardProgramacao />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="ter">
                  <p>Terça</p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="qua">
                  <p>Quarta</p>
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="qui">
                  <p>Quinta</p>
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id="sex">
                  <p>Sexta</p>
                </div>
                <div className={openTab === 6 ? 'block' : 'hidden'} id="sab">
                  <p>Sábado</p>
                </div>
                <div className={openTab === 7 ? 'block' : 'hidden'} id="dom">
                  <p>Domingo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />
    </>
  );
}
