import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import CheckBox from "expo-checkbox";

export default function RegisterScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* ===== HEADER ===== */}
        <LinearGradient
          colors={["#4CC9F0", "#1565C0"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_React.svg",
              }}
              style={styles.logo}
            />
            <Link href="/" asChild>
              <TouchableOpacity>
                <Ionicons name="close" size={22} color="#fff" />
              </TouchableOpacity>
            </Link>
          </View>

          <Text style={styles.textAyo}>Ayo</Text>
          <Text style={styles.textTitle}>Buat Akun Baru Kamu !!</Text>
        </LinearGradient>

        {/* ===== FORM ===== */}
        <View style={styles.outerContainer}>
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <Ionicons
                name="person-outline"
                size={18}
                color="#4E4E4E"
                style={styles.icon}
              />
              <TextInput placeholder="Nama Lengkap" style={styles.input} />
            </View>

            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="email"
                size={18}
                color="#4E4E4E"
                style={styles.icon}
              />
              <TextInput
                placeholder="Alamat Email"
                style={styles.input}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#4E4E4E"
                style={styles.icon}
              />
              <TextInput
                placeholder="Kata Sandi"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <View style={styles.inputWrapper}>
              <Ionicons
                name="lock-closed-outline"
                size={18}
                color="#4E4E4E"
                style={styles.icon}
              />
              <TextInput
                placeholder="Ketik Ulang Kata Sandi"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox value={isChecked} onValueChange={setIsChecked} />
              <Text style={styles.checkboxText}>
                Saya Setuju Dengan{" "}
                <Text style={styles.linkText}>Syarat & Privasi</Text>
              </Text>
            </View>
          </View>

          {/* ===== BUTTON ===== */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => router.push("/success")}
              disabled={!isChecked}
            >
              <LinearGradient
                colors={
                  isChecked
                    ? ["#4CC9F0", "#1565C0"]
                    : ["#B0BEC5", "#90A4AE"]
                }
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>Daftar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* ===== FOOTER ===== */}
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text style={styles.footerText}>
                Sudah Punya Akun?{" "}
                <Text style={styles.linkText}>Masuk</Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1 },
  header: {
    height: 250,
    paddingHorizontal: 25,
    paddingTop: 80,
    borderBottomRightRadius: 80,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  logo: { width: 55, height: 55, borderRadius: 12 },
  textAyo: { color: "#fff", fontSize: 22, fontWeight: "300" },
  textTitle: { color: "#fff", fontSize: 28, fontWeight: "bold" },
  outerContainer: { alignItems: "center", marginTop: -20 },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 25,
    width: "90%",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#004D40",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 45,
    width: "100%",
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 14, color: "#333" },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 10,
    width: "100%",
  },
  checkboxText: {
    fontSize: 13,
    color: "#333",
    marginLeft: 6,
    textAlign: "center",
  },
  linkText: { color: "#0D47A1", fontWeight: "bold" },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  buttonGradient: {
    borderRadius: 50,
    paddingVertical: 14,
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  footerText: {
    fontSize: 13,
    textAlign: "center",
    color: "#333",
  },
});
