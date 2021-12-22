import React, {Component} from "react";
import PhotoWall from "./photowall";
import Body from '../Body'
import Title from '../Title'
import Photo from "./photo";
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
// import {connect} from 'react-redux'


class Main1 extends Component{
    constructor(){
        super()
        this.state = {
            posts:[],
            // screen: 'photo'//photos, addphotos after adding router we dont need this
        }
        this.removePhoto = this.removePhoto.bind(this); 
        // console.log('constructor')
        // this.navigate = this.navigate.bind(this); //after rounting we dont need this
    }
    removePhoto(postremoved){
        console.log(postremoved.description)
        this.setState((state)=> ({
            posts:state.posts.filter(post => post !== postremoved)
        }))
    }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])   //concat means adding to the array of posts
        }))
    }

    componentDidMount(){
     const data = simulateFetchFromDatabase();
     this.setState({
         posts: data
     })
    //  console.log('componentDidMount')
}

    // componentDidUpdate(){
    //     alert('re-render...')
    // }
// navigate(){
//     this.setState({             //it gives null exception cause in main method we have to bind (this)
//         screen: 'AddPhoto'
//     })
// }
    render(){
        // console.log('render')
        // console.log(this.props.posts)
        return (

        <div>
            <Route exact path = "/" render={()=> (
                <div>
                    <Title title = {'PhotoWall'}/>
                    {/* <Body b1 = {'hi i am bhargav I am full stack web developer'}/> */}
                    {/* <Body b1 = {'You will see me cracking gate and in iit bombay'}/> */}
                    <PhotoWall posts = {this.state.posts} onRemovePhoto = {this.removePhoto} onNavigate = {this.navigate}/>
                    {/* <PhotoWall posts={this.props.posts}/> */}
                </div>
            )}/>

            <Route path ="/AddPhoto" render ={({history}) =>(
                <AddPhoto onAddPhoto ={(addedPost) =>{
                    this.addPhoto(addedPost)
                    history.push('/')
                }}/>
            )} />
            {/* render = {() => { 
            <div>
                <AddPhoto/>
            </div> */}
        </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         posts : state
//     }
// }

function simulateFetchFromDatabase(){
    return [{
        id: 0,
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg"
        }, {
        id: 1,
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
        "08323785_735653395_n.jpg"
        }, {
        id: 2,
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        },{
        id: 3,
        description: "paris op",
        imageLink: "https://images.unsplash.com/photo-1640112114406-0373977a5413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
        },{
            id: 4,
            description: "magnificent",
            imageLink: "https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            }]
}
export default Main1;

// export default connect(mapStateToProps)(Main1)