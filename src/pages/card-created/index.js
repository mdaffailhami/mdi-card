import { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { CopyClipboard } from "../../assets/icons";
class CardCreated extends Component {
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
    linkFontSize: 0,
    linkCopied: false,
  };

  componentDidMount() {
    // START cek responsive
    this.responsiveViews();
  }

  responsiveViews = () => {
    if (this.state.windowWidth <= 766) {
      this.setState({ containerWidth: "80%" });
      this.setState({ linkFontSize: 8.5 });
    } else {
      this.setState({ containerWidth: 700 });
      this.setState({ linkFontSize: 15 });
    }
  };

  copyLink = () => {
    // navigator.clipboard.writeText(this.card_url);
    const el = document.createElement("textarea");
    el.value = this.card_url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);

    // Memunculkan component setelah terklik
    this.setState({ linkCopied: true });
  };

  card_url = new URLSearchParams(window.location.search).get("link");

  render() {
    const { containerWidth, linkCopied, linkFontSize } = this.state;

    return (
      <ScrollView>
        <View style={{ marginVertical: 50 }} />

        <View
          style={{
            margin: "auto",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "#777",
            width: containerWidth,
            textAlign: "center",
            shadowRadius: 4,
          }}
        >
          <View style={{ marginVertical: 20 }}></View>

          <Text style={{ fontSize: 28 }}>Kartu berhasil dibuat!</Text>
          <Text style={{ fontSize: 18 }}>Silahkan salin dan simpan link dibawah,</Text>
          <Text style={{ fontSize: 18 }}>jangan sampai hilang okee..</Text>

          <View style={{ marginVertical: 12 }}></View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: "#ff3d00",
                height: 30,
                justifyContent: "center",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textDecorationLine: "underline",
                  fontSize: linkFontSize,
                  fontFamily: "arial",
                }}
              >
                {this.card_url || "..."}
              </Text>
            </View>
            <TouchableOpacity
              onPress={this.copyLink}
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: "yellow",
                height: 30,
                justifyContent: "center",
                paddingHorizontal: 5,
              }}
            >
              <Image source={CopyClipboard} style={{ width: 20, height: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 4 }}></View>

          {/* alert-link-copied */}
          {linkCopied && (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: 16,
                  textDecorationLine: "underline",
                  color: "#ff9100",
                }}
              >
                Link copied
              </Text>
              <Text style={{ color: "green", fontSize: 20, marginLeft: 5 }}>✔</Text>
            </View>
          )}
          {/* /alert-link-copied */}

          <View style={{ marginVertical: 5 }}></View>

          {/* tombol-buka-link */}
          <TouchableOpacity
            onPress={() => (window.location = this.card_url)}
            style={{
              width: "40%",
              height: 35,
              borderRadius: 7,
              backgroundColor: "#0288d1",
              margin: "auto",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "500" }}>
              BUKA LINK!
            </Text>
          </TouchableOpacity>
          {/* /tombol-buka-link */}

          <View style={{ marginVertical: 25 }}></View>
        </View>
      </ScrollView>
    );
  }
}

export default CardCreated;
