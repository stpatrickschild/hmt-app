import React from 'react';
import  SelectDropDown  from './SelectDropDown.js'

// //Class Component
// class ProvidersCostComponent extends Component {
//   render() {
//     return (
//       <div className="Providers-CostComponent">
//         Providers Cost Component
//       </div>
//     );
//   }
// }
export const ProvidersCost = () => (
  <div>
    <h2>See your Health Care Cose with your Insurance Provider </h2>
    <p>What do you think your procedure's cost it? </p>
    <SelectDropDown></SelectDropDown>
  </div>
)

export default ProvidersCost;