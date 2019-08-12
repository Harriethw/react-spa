import React from 'react';
import { shallow, mount, simulate } from 'enzyme';
import Main from './Main';
import { MemoryRouter } from 'react-router-dom';

describe('Main', () => {
  it('should render correctly ', () => {
    const component = shallow(<Main />);
  
    expect(component).toMatchSnapshot();
  });

  it('should link to FAQs', () => {
    const component = mount(<MemoryRouter>
            <Main />
    </MemoryRouter>);
    
    component.find('a').last().simulate('click', { button: 0 });
    component.containsMatchingElement('<h2>GOT QUESTIONS?</h2>');
    component.unmount();
  })
});