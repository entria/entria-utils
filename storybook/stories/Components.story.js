import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { InfiniteScroll } from '../../src';

const stories = storiesOf('Components', module);

stories.add('InfiniteScroll', () =>
  <div style={{ minHeight: window.outerHeight }}>
    <InfiniteScroll onScroll={() => alert('end reached')}>
      <div>
        Scroll me
      </div>
    </InfiniteScroll>
  </div>
);
