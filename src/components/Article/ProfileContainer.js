import React from "react";
import './Article.scss'
import Article from "./Article";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/articleReduce";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 9;
        }

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId ).then(response => {
            this.props.setUserProfile(response.data);
        });

    }

    render() {
       return (
           <Article {...this.props} profile={this.props.profile}/>
       );
   }
}
let mapStateToProps = (state) => ({
    profile: state.article.profile
});

let withUrlDataContainer =  withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(withUrlDataContainer);