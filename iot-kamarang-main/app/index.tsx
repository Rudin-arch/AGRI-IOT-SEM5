import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  const router = useRouter();

  const onLoginPress = () => {
    // Bisa tambahkan validasi login di sini sebelum navigate
    router.push('/dashboard');
  };

  return (
    <View style={styles.container}>
      {/* Background Gradient */}
      <LinearGradient
        colors={['#45D2F5', '#00417D']}
        style={styles.background}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />

      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 50,
          paddingTop: 60,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Bagian Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.circle}>
            <Image
              source={require('@/assets/images/tokopedia.png')}
              style={styles.logoImage}
              contentFit='contain'
            />
          </View>
          <View style={styles.cornerLogo}>
            <Image
              source={require('@/assets/images/logo-kamarang-tandang-2.png')}
              style={{ width: "100%", flex: 1 }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>AGRI-IOT</Text>
            <Text style={styles.subtitle}>Greenhouse Kamarang Tandang</Text>
          </View>
        </View>

        {/* Input Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons name="account" size={28} color={"#fff"} />
            <TextInput
              style={styles.input}
              placeholder='Email atau Telepon'
              placeholderTextColor={"#fff"}
            />
          </View>

          <View style={[styles.inputWrapper, { marginTop: 20 }]}>
            <MaterialCommunityIcons name="lock" size={28} color={"#fff"} />
            <TextInput
              style={styles.input}
              placeholder='Kata Sandi'
              placeholderTextColor={"#fff"}
              secureTextEntry
            />
          </View>
        </View>

        {/* Bagian Putih */}
        <View style={styles.bottomContainer}>
          <Link href="/forgot-password" asChild>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
            </TouchableOpacity>
          </Link>

          <LinearGradient
            colors={['#45D2F5', '#00417D']}
            style={styles.buttonMasuk}
            start={[0, 0.5]}
            end={[1, 0.5]}
          >
            <TouchableOpacity onPress={onLoginPress}>
              <Text style={styles.text}>Masuk</Text>
            </TouchableOpacity>
          </LinearGradient>

          <Text style={{ marginTop: 10 }}>Atau</Text>

          <Link href="/register" asChild>
            <TouchableOpacity style={styles.buttonDaftar}>
              <Text
                style={{
                  color: "rgba(62, 68, 62, 1)",
                  fontWeight: "500"
                }}
              >
                Membuat Akun Baru
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  background: { position: 'absolute', left: 0, right: 0, top: 0, height: "100%" },
  logoContainer: { position: 'relative', width: 300, height: 450, alignContent: 'center', justifyContent: 'center', marginBottom: 20 },
  circle: { width: 280, height: 280, borderRadius: 140, backgroundColor: 'rgba(252, 252, 252, 0.6)', alignItems: 'center', justifyContent: 'center' },
  logoImage: { width: 230, height: 230 },
  cornerLogo: { width: 150, height: 150, position: 'absolute', top: 0, right: 0 },
  textContainer: { position: "absolute", bottom: 20, justifyContent: "center", alignItems: "center", width: "100%" },
  title: { fontSize: 58, fontWeight: "bold", color: "#ebb134", textShadowColor: "rgba(0,0,0,0.75)", textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, textAlign: "center" },
  subtitle: { fontSize: 14, color: "#fff", textAlign: "center", textShadowColor: "rgba(0,0,0,0.75)", textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 10, fontWeight: "bold" },
  formContainer: { justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 10 },
  inputWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "75%", marginTop: 10, borderWidth: 1, paddingHorizontal: 20, borderRadius: 50, borderColor: "#fff", gap: 10 },
  input: { height: 50, width: 300, color: '#fff' },
  bottomContainer: { backgroundColor: "#fff", width: "90%", borderRadius: 30, justifyContent: "center", alignItems: "center", paddingVertical: 25, gap: 10, marginBottom: 40, elevation: 5 },
  buttonMasuk: { paddingVertical: 12, alignItems: 'center', borderRadius: 50, width: "75%", shadowColor: "#000", shadowOffset: { width: 2, height: 4 }, shadowOpacity: 0.3, shadowRadius: 3 },
  buttonDaftar: { padding: 15, alignItems: 'center', borderRadius: 50, width: "75%", backgroundColor: "rgba(219, 219, 219, 1)" },
  text: { fontSize: 15, color: '#fff', fontWeight: 'bold' },
  forgotPasswordText: { color: "#00417D", fontWeight: "bold", fontSize: 14, marginBottom: 10 }
});
