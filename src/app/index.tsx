
import { View } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../css/style';
import LottieView from 'lottie-react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
          source={require("../../assets/nave.json")}
          style={{width: "100%", height: "100%"}}
          autoPlay
          loop = {false}
          autoSize
          onAnimationFinish={()=> router.navigate('login')}
          />
    </View>
  );
}

