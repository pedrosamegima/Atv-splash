import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../css/style";
import { Link } from "expo-router";

export default function Login(){
    return(
        //div principal
        <View style={styles.imagemBody}>
            {/*imagem logo senai8*/}
            <Image style={styles.imagems} source={require('../../assets/sesi-senai.webp')} />

            {/* Inicio do formulario*/}
            <View style={styles.form}>
                
               
            {/*texto do nome*/}
            <Text style={styles.text}>Nome:</Text>

            {/*input do nome*/}
            <TextInput placeholder="Insira o seu nome completo" style={styles.input}/>
            
            {/*texto cadastro*/}
            <Text style={styles.text}>Email:</Text>

            {/*input do login*/}
            <TextInput placeholder="Insira o seu email" style={styles.input}/>

            {/*texto da senha*/}
            <Text style={styles.text}>Senha:</Text>

            {/*input da senha */}
            <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input}/>


            </View>
              {/*div pra alinhar o botao de entrada*/}
            <View style={styles.formbtn}>
                <Link href={'login'} style={styles.btn}>Entrar</Link>
            </View>
        </View>
    )
}