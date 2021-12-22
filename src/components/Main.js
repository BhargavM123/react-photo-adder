import React, {Component} from "react";
import List from './List'
import Body from '../Body'
import Title from '../Title'
class Main extends Component{
    render(){
        return <div>
            <Title title = {'To Do List and add your own'}/>
            <List tasks ={['open the insta', 'follow me']}/>
            <List tasks ={['open the fb', 'follow my acc']}/>
            <Body b1 = {'hi i am bhargav I am full stack web developer'}/>
            <Body b1 = {'You will see me cracking gate and in iit bombay'}/>

        </div>
    }
}
export default Main;