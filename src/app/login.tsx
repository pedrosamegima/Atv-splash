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
            
            {/*texto login8*/}
            <Text style={styles.text}>Login:</Text>

            {/*input do login*/}
            <TextInput placeholder="Insira o seu email" style={styles.input}/>

            {/*texto da senha*/}
            <Text style={styles.text}>Senha:</Text>

            {/*input da senha */}
            <TextInput secureTextEntry placeholder="Insira sua senha" style={styles.input}/>
            {/*div pra alinhar o botao*/}
            <View style={styles.subBtn}>
                <TouchableOpacity><Link href={'/cadastro'} style={styles.subBtn}>Cadastrar</Link></TouchableOpacity>
                <TouchableOpacity><Link href={'/esqueciSenha'} style={styles.subBtn1}>Esqueci a senha</Link></TouchableOpacity>
              </View>
            </View>
              {/*div pra alinhar o botao de entrada*/}
            <View style={styles.formbtn}>
                <Link href={'home'} style={styles.btn}>Entrar</Link>
            </View>
        </View>
    )
}