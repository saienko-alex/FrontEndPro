import './HeaderBlock.css'
import { Component } from 'react';

export default class HeaderBlock extends Component {

  
    render () {
      return (
        <>
            <thead>
              <tr>
                  <th className='tr'>Name</th>
                  <th className='tr'>Surname</th>
                  <th className='tr'>Email</th>
                  <th className='tr'>Actions</th>
              </tr>
            </thead>
        </>
      )
    }
}
