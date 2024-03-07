import React from 'react';
import LouiscklawGithubIo from './LouiscklawGithubIo';
import WordpressDemo from './WordpressDemo';
import ChangeDetect from './ChangeDetect';
import N8n from './N8n';
import PostTestResult from '../../pages/PostTestResult';
import DemoTestResult from '../../pages/DemoTestResult';

export default () => {
  return (
    <>
      <div>Status section</div>
      <div style={{ display: 'flex' }}>
        <LouiscklawGithubIo />
        <WordpressDemo />
        <ChangeDetect />
        <N8n />
        <PostTestResult />
        <DemoTestResult />
      </div>
    </>
  );
};
