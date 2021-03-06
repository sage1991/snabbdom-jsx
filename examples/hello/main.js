/** @jsx html */

import { html } from '../../snabbdom-jsx';
import snabbdom from 'snabbdom';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),
  require('snabbdom/modules/props'),
  require('snabbdom/modules/style'),
  require('snabbdom/modules/eventlisteners')
]);

//HelloMessage : (attrs, body) -> vnode
const HelloMessage = ({name}) =>
  <div on-click={ _ => alert('Hi ' + name) }>
    {name}
  </div>;


var vnode = <HelloMessage name="Yassine" />

patch(document.getElementById('placeholder'), vnode);