import React from 'react';
import { connect } from 'react-redux';
//import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    //If Memoize function is used for this project in action creater then uncomment below code
    //componentDidMount() {
    //    this.props.fetchUser(this.props.userId);
    //}

    render() {
        console.log('userHeader');
        const { user } = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className="header"> {user.name}</div>
            );
    };
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);