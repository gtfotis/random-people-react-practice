import React from 'react';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            user: []
        })
    }

    componentDidMount() {
        this._fetchUser();
    }
    
    _fetchUser = async () => {
        const response = await fetch(
            'https://randomuser.me/api/?results=1'
        ).then(response => response.json());
        this.setState({
            user: response.results,
         });
         console.log(this.state.user[0])
    }

    render() {
        return (
            <div>
                {this.state.user.map((user) => {
                    return (
                        <>
                            <h2>Find the perfect random person for you</h2>
                            <div className='userCard'>
                                <img alt='randomphoto' src={user.picture.large}></img>
                                <p>
                                    Name: {user.name.first} {user.name.last}
                                </p>
                                <p>
                                    Email: {user.email}
                                </p>
                                <p>
                                    Age: {user.dob.age}
                                </p>
                                <button type='button' onClick={this._fetchUser}>Find A New Person</button>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    }

}

export default UserCard;