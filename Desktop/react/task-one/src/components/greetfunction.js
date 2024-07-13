import react from 'react'

/*function Greet (){
    return <h1>hello</h1>

}
export default Greet
*/

const GreetingFunction = ({ name, message }) => {
  return (
    <div>
      <h1>{message}, {name}!</h1>
    </div>
  );
};

export default GreetingFunction;
