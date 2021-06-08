import React from 'react';
const Hello = () => 
{ 
// return(
//     <div className = 'dummyClass>
//     <h1> we use JSX.</h1>
//     </div>
// )

return React.createElement('div', {className: 'dummyClass'}, React.createElement('h1', null, "we don't  use JSX."))

}

export default Hello