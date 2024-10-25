import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import Login from './components/login/Login';

export default function App() {
    return (
        <SafeAreaView>
            <Login />
        </SafeAreaView>
    );
}
