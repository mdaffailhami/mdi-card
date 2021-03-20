import { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Socmed } from "./components";
import { Facebook, Instagram, Telegram, Twitter, WhatsApp, YouTube } from "../../assets/icons";
import { CardNotFound } from "../../assets/gifs";

class Card extends Component {
  constructor() {
    super();

    // UPDATE cek responsive
    window.addEventListener("resize", () => {
      this.setState({ windowWidth: window.innerWidth });
      this.responsiveViews();
    });
  }

  state = {
    windowWidth: window.innerWidth,
    containerWidth: 0,
    containerPaddingHorizontal: 0,
    socmedWidth: 0,
    linkCopied: false,
    userCard: {},
    cardNotFound: false,
    mobileVersion: false,
  };

  componentDidMount() {
    // START cek responsive
    this.responsiveViews();

    const splitURL = window.location.href.split("/");
    const card__id = splitURL[splitURL.length - 1];

    // Fetch data card user ke API
    fetch(process.env.REACT_APP_BACKEND_URL + "/api/card/" + card__id)
      .then((res) => res.json())
      .then((data) => {
        // Jika card tidak ditemukan
        if (!data.status) {
          this.setState({ cardNotFound: true });
          return;
        }
        // Jika card ditemukan
        let {
          name,
          bio,
          whatsapp_number,
          instagram_username,
          telegram_username,
          twitter_username,
          facebook_url,
          youtube_url,
        } = data.card;

        this.setState({
          userCard: {
            name,
            bio,
            whatsapp_number,
            instagram_username,
            telegram_username,
            twitter_username,
            facebook_url,
            youtube_url,
          },
        });
      })
      .catch((err) => console.error("ERROR:", err));
  }

  responsiveViews = () => {
    // Versi desktop
    if (this.state.windowWidth <= 766) {
      this.setState({ mobileVersion: true });
      this.setState({ containerWidth: "80%" });
      this.setState({ containerPaddingHorizontal: "10%" });
      this.setState({ socmedWidth: "100%" });
    }
    // Versi mobile
    else {
      this.setState({ mobileVersion: false });
      this.setState({ containerWidth: 450 });
      this.setState({ containerPaddingHorizontal: 50 });
      this.setState({ socmedWidth: 250 });
    }
  };

  render() {
    const {
      containerWidth,
      containerPaddingHorizontal,
      socmedWidth,
      cardNotFound,
      mobileVersion,
    } = this.state;
    const {
      name,
      bio,
      whatsapp_number,
      instagram_username,
      telegram_username,
      twitter_username,
      facebook_url,
      youtube_url,
    } = this.state.userCard;

    return (
      <ScrollView>
        {/* Jika card tidak ditemukan */}
        {cardNotFound && (
          <View style={{ alignItems: "center", paddingTop: 80 }}>
            <Text style={{ fontFamily: "arial", fontSize: (() => (mobileVersion ? 25 : 35))() }}>
              Kartu tidak ditemukan!
            </Text>
            <Text style={{ fontFamily: "arial", color: "red", marginBottom: 20 }}>
              Silahkan masukkan link yang benar!!
            </Text>
            <Image
              source={CardNotFound}
              style={{
                width: (() => (mobileVersion ? "80%" : 400))(),
                height: (() => (mobileVersion ? 200 : 250))(),
                borderRadius: 10,
              }}
            />
          </View>
        )}

        {/* Jika card ditemukan */}
        {!cardNotFound && (
          <View
            style={{
              margin: "auto",
              borderWidth: 1,
              borderColor: "#777",
              borderRadius: 10,
              paddingHorizontal: containerPaddingHorizontal,
              paddingVertical: 15,
              marginTop: 45,
              width: containerWidth,
              backgroundColor: "#f9ffef",
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                fontFamily: "sans-serif",
                position: "relative",
              }}
            >
              {name}
            </Text>

            <View style={{ marginVertical: 3 }} />

            {bio && (
              <Text
                style={{
                  fontSize: 14,
                  color: "#333",
                  borderWidth: 1,
                  borderColor: "#999",
                  borderRadius: 10,
                  padding: 5,
                  fontFamily: "arial",
                }}
              >
                {bio}
              </Text>
            )}

            {/* horizontal-line */}
            <View
              style={{
                width: "100%",
                borderTopWidth: 1,
                borderColor: "#777",
                marginTop: 25,
              }}
            />
            {/* /horizontal-line */}

            <View style={{ marginVertical: 25 / 2 }} />

            {/* Menampilkan seluruh socmed user */}
            <Text style={{ fontSize: 25, textAlign: "center", fontFamily: "arial" }}>
              Social Media
            </Text>
            <View style={{ marginVertical: 6 }} />
            {whatsapp_number && (
              <>
                <Socmed
                  onPress={() => window.open("https://wa.me/" + whatsapp_number, "_blank")}
                  icon={WhatsApp}
                  label={"WhatsApp"}
                  bgColor={"#4caf50"}
                  borderColor={"#388e3c"}
                  width={socmedWidth}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}
            {instagram_username && (
              <>
                <Socmed
                  onPress={() =>
                    window.open("https://www.instagram.com/" + instagram_username, "_blank")
                  }
                  icon={Instagram}
                  label={"Instagram"}
                  bgColor={"#ec407a"}
                  borderColor={"#d81b60"}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}
            {telegram_username && (
              <>
                <Socmed
                  onPress={() => window.open("https://t.me/" + telegram_username, "_blank")}
                  icon={Telegram}
                  label={"Telegram"}
                  bgColor={"#03a9f4"}
                  borderColor={"#0288d1"}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}
            {twitter_username && (
              <>
                <Socmed
                  onPress={() => window.open("https://twitter.com/" + twitter_username, "_blank")}
                  icon={Twitter}
                  label={"Twitter"}
                  bgColor={"#4fc3f7"}
                  borderColor={"#03a9f4"}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}
            {facebook_url && (
              <>
                <Socmed
                  onPress={() => window.open(facebook_url, "_blank")}
                  icon={Facebook}
                  label={"Facebook"}
                  bgColor={"#3f51b5"}
                  borderColor={"#303f9f"}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}
            {youtube_url && (
              <>
                <Socmed
                  onPress={() => window.open(youtube_url, "_blank")}
                  icon={YouTube}
                  label={"YouTube"}
                  bgColor={"#e53935"}
                  borderColor={"#c62828"}
                  width={socmedWidth}
                />
                <View style={{ marginVertical: 7 / 2 }} />
              </>
            )}

            <View style={{ marginVertical: 10 }} />
          </View>
        )}
      </ScrollView>
    );
  }
}

export default Card;
