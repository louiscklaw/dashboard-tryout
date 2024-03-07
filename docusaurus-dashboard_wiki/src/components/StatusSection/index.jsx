import React from 'react';
import LouiscklawGithubIo from './LouiscklawGithubIo';
import WordpressDemo from './WordpressDemo';
import ChangeDetect from './ChangeDetect';
import PostTestResult from './PostTestResult';
import DemoTestResult from './DemoTestResult';
import InternalTools from './InternalTools';

export default () => {
  return (
    <>
      <div>Status section</div>
      <div style={{ display: 'flex' }}>
        <LouiscklawGithubIo />
        <WordpressDemo />
        <ChangeDetect />
        <InternalTools />
        <PostTestResult />
        <DemoTestResult />
      </div>
    </>
  );
};
