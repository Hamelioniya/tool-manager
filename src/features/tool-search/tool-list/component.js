import React from 'react';

import { TOOL_PROPS as headers } from './constants';
import Tool from '../../shared/components/tool';

const ToolsComponent = ({ tools }) => {
    return(
        <table border="1" width="100%">
            <thead>
                <tr>
                    {headers.map((header) => <th>{header}</th>)}
                </tr>
            </thead>
            <tbody>
                {tools.map((tool) => <Tool key={tool.id} tool={tool}/>)}
            </tbody>
        </table>
    )
};
  
export default ToolsComponent