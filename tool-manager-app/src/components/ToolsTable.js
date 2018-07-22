import React from 'react'
import Tool from './Tool'

class ToolsTable extends React.Component { 
    
    toolsMap(tool){
        return <Tool key = {tool.id} tool = {tool}/>
    }
    
    render() {
        return(
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.tools.map(this.toolsMap)}
                </tbody>
            </table>
        )
    }
}
  
export default ToolsTable