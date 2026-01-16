/*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree.
*/

import React from 'react';


import { createPlugin } from '../../utils/PluginsUtils';
import Message from '../../components/I18N/Message';
import { CONTROL_NAME } from './constants';
import { toggleControl } from '../../actions/controls';
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { get } from 'lodash';
import InfoMapComponent from './InfoMapComponent';
import { Glyphicon } from 'react-bootstrap';

const InfoMapConnected = connect(
    createStructuredSelector({
        isEnable: state => get(state, ['controls', CONTROL_NAME, 'enabled'])
    }), {
        toggleControl // map dispatch to props
    }
)(InfoMapComponent);

/**
 * Plugin registration using MapStore's plugin system.
 */
export default createPlugin('InfoMap', {
    component: InfoMapConnected,
    containers: {
        // review containers
        BurgerMenu: {
            name: CONTROL_NAME,
            position: 1000,
            priority: 2,
            doNotHide: true,
            text: <Message msgId="dynamiclegend.title" />,
            tooltip: <Message msgId="dynamiclegend.tooltip" />,
            icon: <Glyphicon glyph="info-sign" />,
            toggle: true,
            action: toggleControl.bind(null, CONTROL_NAME, null)
        },
        SidebarMenu: {
            name: CONTROL_NAME,
            position: 1000,
            priority: 1,
            doNotHide: true,
            text: <Message msgId="dynamiclegend.title" />,
            tooltip: <Message msgId="dynamiclegend.tooltip" />,
            icon: <Glyphicon glyph="info-sign" />,
            toggle: true,
            action: toggleControl.bind(null, CONTROL_NAME, null)
        }
    }
});
