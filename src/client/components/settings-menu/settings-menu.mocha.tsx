/*
 * Copyright 2015-2016 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { expect } from 'chai';
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';
import { Timezone } from 'chronoshift';
import { SettingsMenu } from './settings-menu';
import { findDOMNode } from '../../utils/test-utils/index';
import { DataCubeMock } from '../../../common/models/mocks';


describe('SettingsMenu', () => {

  it('adds the correct class', () => {
    var openOn = document.createElement('div');

    var renderedComponent = TestUtils.renderIntoDocument(
      <SettingsMenu
        dataCube={DataCubeMock.twitter()}
        onClose={null}
        openOn={openOn}
        changeTimezone={() => {}}
        timezone={Timezone.UTC}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), 'should be composite').to.equal(true);
    expect((findDOMNode(renderedComponent) as any).className, 'should contain class').to.contain('settings-menu');
  });

});
