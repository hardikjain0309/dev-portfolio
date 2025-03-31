"use client";

import * as React from 'react';
import './logoAnimation.css';

export default function LogoAnimation() {
  return <div className="logo-animation-container flex flex-col justify-center items-center">
    <div className="flex items-center logo-container justify-between">
      <div className='flex'>
        <div className="bg-interactive bracket-v-line bracket-vline-left"></div>
        <div className="flex flex-col justify-between bracket-h-line-ctnr items-start">
          <div className="bg-interactive bracket-h-line"></div>
          <div className="bg-interactive bracket-h-line"></div>
        </div>
      </div>
      <div className="bg-interactive hyphen"></div>
      <div className='flex'>
        <div className="flex flex-col justify-between bracket-h-line-ctnr items-end">
          <div className="bg-interactive bracket-h-line"></div>
          <div className="bg-interactive bracket-h-line"></div>
        </div>
        <div className="bg-interactive bracket-vline-right"></div>
      </div>
    </div>
  </div>
}