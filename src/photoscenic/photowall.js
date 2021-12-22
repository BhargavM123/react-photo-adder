import React from "react";
import Photo from "./photo";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
//instead od button we used anchor tag, href attribute to navigate through site

function PhotoWall(props){

    return <div>
         {/* <a className ="btn-btn" onClick={props.onNavigate} href="AddPhoto"> </a> */}
         {/* <Link className ="btn-btn" onClick={props.onNavigate} to="./AddPhoto"> </Link>  */}
         <Link className ="btn-btn" to="./AddPhoto"> </Link>  {/* after routing we dont need  onClick and navigation function*/}
         {/* <button onClick={props.onNavigate} >  </button> */}
            <div className="photo-grid">
                 {props.posts
                 .sort(function(x,y){
                     return y.id - x.id
                 }).map((post, index) => <Photo key={index} post = {post} onRemovePhoto = {props.onRemovePhoto}/>)}
             </div>
        </div>
}
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    // onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall; 