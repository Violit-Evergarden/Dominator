import React,{ClassType, PureComponent,useState} from "react";
import './App.less'
import smallImg from '@/assets/logo192.png'
import bigImg from './assets/0zm2112000box5kwt8FC0.png'


function addAge(...args:[]){
  console.log('hh',args)
  // Target.prototype.age = 111
}

function readonly(Target:Function){}



class App extends PureComponent{
  age?:number
  @addAge
  render(): React.ReactNode {
      return (
        <>
          <h2>I  class Comp ---- {this.age}</h2>
          <img src={smallImg} alt="" />
          <img src={bigImg} alt="" />
          <input type="text" name="" id="" />
        </>
      )
  }
}

// function App() {
//   const [ count, setCounts ] = useState('')
//   const onChange = (e: any) => {
//     setCounts(e.target.value)
//   }
//   return (
//     <>
//       <h2>webpack5+react+ts</h2>
//       <p>受控组件</p>
//       <input type="text" value={count} onChange={onChange} />
//       <br />
//       <p>非受控组件</p>
//       <input type="text" />
//     </>
//   )
// }


export default App