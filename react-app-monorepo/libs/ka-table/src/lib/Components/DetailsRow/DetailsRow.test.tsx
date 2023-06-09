import { DataType, EditingMode } from '../../enums';
import Enzyme, { mount } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DetailsRow from './DetailsRow';
import { IRowProps } from '../../props';
import React from 'react';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

const props: IRowProps = {
    childComponents: {},
    columns: [
        { key: 'column', title: 'Column 1', dataType: DataType.String },
        { key: 'column2', title: 'Column 2', dataType: DataType.String },
    ],
    dispatch: () => {},
    editableCells: [],
    editingMode: EditingMode.None,
    isSelectedRow: false,
    groupColumnsCount: 0,
    rowData: [{ column: 1, column2: 2 }],
    rowKeyField: 'column',
    rowKeyValue: 1,
    selectedRows: [],
} as any;

it('renders without crashing', () => {
    const element = document.createElement('tbody');
    ReactDOM.render(<DetailsRow {...props} />, element);
    ReactDOM.unmountComponentAtNode(element);
});

it('Should add colSpan to details row', () => {
    const wrapper = mount(
        <DetailsRow
            {...props}
            childComponents={{
                detailsRow: {
                    content: () => <>Details Row</>,
                },
            }}
        />,
        {
            attachTo: document.createElement('tbody'),
        }
    );
    expect(wrapper.find('td').props().colSpan).toBe(2);
    expect(wrapper.find('td').text()).toBe('Details Row');
});
