import React from "react";
import './Article.scss'
import Article from "./Article";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/articleReduce";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
             userId = this.props.authorizedUserId;
                if(!userId){
                    this.props.history.push('/login');
                }
            }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
       return (
           <Article {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
       );
   }

}


let mapStateToProps = (state) => ({
    profile: state.article.profile,
    status: state.article.status,
    authorizedUserId: state.authReduce.userId,
    isAuth : state.authReduce.isAuth
});

let withUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps,{ getUserProfile, updateStatus, getStatus})(withUrlDataContainer);