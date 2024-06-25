import { SafeAreaView } from "react-native";
import safeViewAndroid from './styles/androidSafeView';


export default function settingsPage() {
    return(
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
        <View style={homeStyles.container}>
        <StatusBar style="auto" />
            <Text>Settings</Text>
        </View>

    
    </SafeAreaView>
    );
}