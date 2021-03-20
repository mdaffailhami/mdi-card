import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import { WhatsApp, Instagram, Telegram, YouTube, Facebook, Twitter } from "../../../assets/icons";

function Form(props) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [whatsAppNumber, setWhatsAppNumber] = useState(["62", ""]);
  const [instagramUsername, setInstagramUsername] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [twitterUsername, setTwitterUsername] = useState("");
  const [facebookURL, setFacebookURL] = useState("");
  const [youTubeURL, setYouTubeURL] = useState("");

  const formSubmit = () => {
    let whatsapp_number;
    // Cek jika nomor WhatsApp-nya kosong
    if (whatsAppNumber[1].length === 0) {
      whatsapp_number = "";
    } else {
      whatsapp_number = whatsAppNumber.join("");
    }

    // Menampilkan loader
    document.getElementById("root").innerHTML = process.env.REACT_APP_PAGE_LOADER;

    fetch(process.env.REACT_APP_BACKEND_URL + "/api/card", {
      method: "POST",
      body: JSON.stringify({
        name,
        bio,
        whatsapp_number,
        instagram_username: instagramUsername,
        telegram_username: telegramUsername,
        twitter_username: twitterUsername,
        facebook_url: facebookURL,
        youtube_url: youTubeURL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          // Jika success maka redirect ke halaman /card-created
          window.location = "/card-created?link=" + data.card_url;
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.warn(error);
        alert("Publish gagal, silahkan coba lagi!");
        window.location.reload();
      });
  };

  return (
    <View style={{ paddingHorizontal: props.formPaddingHorizontal }}>
      <TextInput
        style={[styles.textInput, { fontWeight: "600" }]}
        placeholder={"Nama"}
        onChangeText={(value) => setName(value)}
        value={name}
      />
      <TextInput
        style={[styles.textInput, { height: 80 }]}
        placeholder={"Bio"}
        multiline={true}
        onChangeText={(value) => setBio(value)}
        value={bio}
      />

      <View style={{ paddingHorizontal: props.socmedPaddingHorizontal }}>
        <Text style={{ textAlign: "center", fontSize: 25, marginTop: 20 }}>
          Tautkan sosial media!
        </Text>

        <Socmed
          icon={WhatsApp}
          leftTextInputOnChangeText={(value) => setWhatsAppNumber([value, whatsAppNumber[1]])}
          leftTextInputValue={whatsAppNumber[0]}
          rightTextInputPlaceHolder={"WhatsApp Number"}
          rightTextInputOnChangeText={(value) => setWhatsAppNumber([whatsAppNumber[0], value])}
          rightTextInputValue={whatsAppNumber[1]}
          rightTextInputKeyboardType="numeric"
        />

        <Socmed
          icon={Instagram}
          leftTextInputValue={"@"}
          leftTextInputFocusable={false}
          rightTextInputPlaceHolder={"Instagram Username"}
          rightTextInputOnChangeText={(value) => setInstagramUsername(value)}
          rightTextInputValue={instagramUsername}
        />

        <Socmed
          icon={Telegram}
          leftTextInputValue={"@"}
          leftTextInputFocusable={false}
          rightTextInputPlaceHolder={"Telegram Username"}
          rightTextInputOnChangeText={(value) => setTelegramUsername(value)}
          rightTextInputValue={telegramUsername}
        />

        <Socmed
          icon={Twitter}
          leftTextInputValue={"@"}
          leftTextInputFocusable={false}
          rightTextInputPlaceHolder={"Twitter Username"}
          rightTextInputOnChangeText={(value) => setTwitterUsername(value)}
          rightTextInputValue={twitterUsername}
        />

        <Socmed
          icon={Facebook}
          leftTextInputValue={"url"}
          leftTextInputFocusable={false}
          rightTextInputPlaceHolder={"Facebook Profile URL"}
          rightTextInputOnChangeText={(value) => setFacebookURL(value)}
          rightTextInputValue={facebookURL}
        />

        <Socmed
          icon={YouTube}
          leftTextInputValue={"url"}
          leftTextInputFocusable={false}
          rightTextInputPlaceHolder={"Youtube Channel URL"}
          rightTextInputOnChangeText={(value) => setYouTubeURL(value)}
          rightTextInputValue={youTubeURL}
        />
      </View>

      {/* horizontal-line */}
      <View
        style={{
          width: "100%",
          borderTopWidth: 1,
          borderColor: "#777",
          marginBottom: 30,
          marginTop: 28,
        }}
      />
      {/* /horizontal-line */}

      {/* submit-button */}
      <TouchableOpacity
        onPress={formSubmit}
        style={{
          width: "40%",
          height: 35,
          borderRadius: 7,
          backgroundColor: "#0288d1",
          margin: "auto",
          marginBottom: 50,

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}>PUBLISH</Text>
      </TouchableOpacity>
      {/* /submit-button */}
    </View>
  );
}

function Socmed(props) {
  return (
    <View style={styles.socmed}>
      <Image source={props.icon} style={styles.socmedIcon} />
      <TextInput
        style={styles.socmedLeftTextInput}
        onChangeText={props.leftTextInputOnChangeText}
        value={props.leftTextInputValue}
        focusable={props.leftTextInputFocusable}
      />
      <TextInput
        style={styles.socmedRightTextInput}
        placeholder={props.rightTextInputPlaceHolder}
        onChangeText={props.rightTextInputOnChangeText}
        value={props.rightTextInputValue}
        rightTextInputKeyboardType={props.keyboardType || "default"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 32,
    borderWidth: 1,
    borderColor: "#999",
    marginVertical: 7,
    borderRadius: 7,
    padding: 5,
  },
  socmed: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 7,
  },
  socmedIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  socmedLeftTextInput: {
    height: 32,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 7,
    padding: 5,

    width: 40,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    textAlign: "center",
    fontWeight: "500",
  },
  socmedRightTextInput: {
    height: 32,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 7,
    padding: 5,

    width: "100%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});

export default Form;
