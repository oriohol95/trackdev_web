import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import {FormStyles} from '../native/styles/nativeStyles';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(key, value) {
        this.setState(Object.assign(
          {},
          this.state,
          { [key]: value }))
    }

    onSubmit() {
        this.props.userLoginRequest(this.state).then(
            ()=>{},
            (data)=>this.setState({errors:data})
        );
        console.log(this.state);
    }

    render() {
        return(
            <View style={FormStyles.mainDiv}>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Usuari</Text>
                    <TextInput
                        onChangeText={(text) => this.onChange('email', text)}
                        style={FormStyles.input}
                        value={this.state.email}
                    />
                </View>
                <View style={FormStyles.inputGroup}>
                    <Text style={FormStyles.title}>Password</Text>
                    <TextInput
                        onChangeText={(text) => this.onChange('password', text)}
                        style={FormStyles.input}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>
                <Button onPress={this.onSubmit} title="Log in">
                </Button>
            </View>
        );
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired
}


export default LoginForm;