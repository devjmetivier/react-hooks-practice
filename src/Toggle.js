import React, { useState } from 'react';

export default function Toggle() {
  const [isToggled, setToggled] = useState(false);

  return (
    <div>
      <button type='button' onClick={() => setToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
}

// import React, { Component } from 'react';
//
// export default class Refactor extends Component {
//   state = {
//     isToggled: false,
//   };
//
//   toggle = () => {
//     this.setState(state => ({ isToggled: !state.isToggled }));
//   };
//
//   render() {
//     return (
//       <div>
//         <button type='button' onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
