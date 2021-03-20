import { Component } from "react";
import { ScrollView, View } from "react-native";
import { Form, Title } from "./components";

class Home extends Component {
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
    formPaddingHorizontal: 0,
    socmedPaddingHorizontal: 0,
  };

  componentDidMount() {
    // START cek responsive
    this.responsiveViews();
  }

  responsiveViews = () => {
    if (this.state.windowWidth <= 766) {
      this.setState({ containerWidth: "90%" });
      this.setState({ formPaddingHorizontal: "5%" });
      this.setState({ socmedPaddingHorizontal: "2.5%" });
    } else {
      this.setState({ containerWidth: 700 });
      this.setState({ formPaddingHorizontal: 130 });
      this.setState({ socmedPaddingHorizontal: 40 });
    }
  };

  render() {
    const { containerWidth, formPaddingHorizontal, socmedPaddingHorizontal } = this.state;
    return (
      <ScrollView
        style={{
          margin: "auto",
          marginVertical: 30,
          width: containerWidth,
          borderWidth: 1,
          borderColor: "#777",
          borderRadius: 10,
          shadowRadius: 4,
        }}
      >
        <View style={{ marginVertical: 10 }} />

        <Title />

        <View style={{ marginVertical: 15 }} />

        <Form
          formPaddingHorizontal={formPaddingHorizontal}
          socmedPaddingHorizontal={socmedPaddingHorizontal}
        />
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     margin: "auto",
//     border: "1px solid black",
//   },
// });

export default Home;
