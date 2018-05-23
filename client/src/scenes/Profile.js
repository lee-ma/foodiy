import React, { Component } from 'react';
import { Text, Modal, EditProfileForm } from '../components'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showEditProfileModal: false
        }
    }

    openEditProfileModal = () => {
        this.setState({ showEditProfileModal: true })
    }

    closeEditProfileModal = () => {
        this.setState({ showEditProfileModal: false })
    }

    render() {
        return (
            <div>
                <button onClick={this.openEditProfileModal}>OPEN EDIT PROFILE MODAL</button>
                <Modal show={this.state.showEditProfileModal} hide={this.closeEditProfileModal} title="Edit Profile">
                    <EditProfileForm />
                </Modal>
            </div>
        )
    }
}

export default Home;
