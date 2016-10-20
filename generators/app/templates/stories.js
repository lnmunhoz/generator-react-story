import React from 'react';
import { storiesOf } from '@kadira/storybook';
<% if (centered){ %>import centered from '@kadira/react-storybook-decorator-centered'; <% } %>

import <%= Component %> from './index';

storiesOf('<%= Component %>', module)
<% if (centered){ %>  .addDecorator(centered)<% } %>
  .add('default', () => (
    <<%= Component %> />
  ));
