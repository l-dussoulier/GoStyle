import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import LoginScreen from './screens/Auth/LoginScreen';
import testZebi from './screens/Auth/LoginScreen';
import Button from './components/Button';

import MyC from './screens/Auth/LoginScreen';

import { StyleSheet,View,TextInput,TouchableOpacity,Text, Alert} from "react-native";
import Discount from "./screens/Discounts/discount";
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

Enzyme.configure({ adapter: new Adapter() });



describe('TDD', () => {
    it('essai', () => {
        const tree = "COUCOU";
        expect(tree).toBe("COUCOU");
    });

    it('nombre element login screen', () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree.children.length).toBe(3);
    });

    it('Rendu login screen', () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });



});

describe('Interaction', () => {
        it('should call onPress essai', () => {
            // Arrange
            const mockOnPress = jest.fn();      // 1. mock function
            const component = shallow(<Button
                label= "test label"
                onPress={mockOnPress}           // 2. passing in mock function as props
            />);
            const instance = component.instance();  // 3. getting an instance of component
            // Act
            instance.test();          // 4. manually triggering onPressHandler()
            // Assert
            expect(mockOnPress).toHaveBeenCalled();
            expect(mockOnPress).toHaveBeenCalledTimes(1);   // 5. checking return values
        });
});


describe('Test Login',() => {

    it('fonction test',() => {
        const mockOnPress = jest.fn();
        const component = shallow(<LoginScreen
            onPress={mockOnPress}/>);

        const instance = component.instance();

        instance.testZebi();

        expect(mockOnPress).toBeCalled();
        expect(mockOnPress).toHaveReturned(1);


    });


});


