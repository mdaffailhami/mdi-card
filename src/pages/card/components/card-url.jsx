// import { useState } from "react";
// import { Image, Text, TouchableOpacity, View } from "react-native";
// import { CopyClipboard } from "../../../assets/icons";

// function CardURL() {
//   const [linkCopied, setLinkCopied] = useState(false);

//   const copyCardURL = () => {
//     // navigator.clipboard.writeText(this.card_url);
//     const el = document.createElement("textarea");
//     el.value = this.card_url;
//     document.body.appendChild(el);
//     el.select();
//     document.execCommand("copy");
//     document.body.removeChild(el);

//     // Memunculkan component setelah terklik
//     setLinkCopied(true);
//   };
//   return (
//     <>
//       <View
//         style={{
//           // alignItems: "center",
//           shadowRadius: 5,
//           width: "fit-content",
//           borderRadius: 10,
//           margin: "auto",
//         }}
//       >
//         <View
//           style={{
//             height: 30,
//             justifyContent: "center",
//             paddingHorizontal: 5,
//           }}
//         >
//           <Text
//             style={{
//               textDecorationLine: "underline",
//               fontFamily: "arial",
//               color: "#333",
//             }}
//           >
//             {window.location.href || "..."}
//           </Text>
//         </View>
//         <TouchableOpacity
//           onPress={copyCardURL}
//           style={{
//             borderLeftWidth: 1,
//             backgroundColor: "#50f6fc",
//             height: 30,
//             justifyContent: "center",
//             paddingHorizontal: 5,
//           }}
//         >
//           <Image source={CopyClipboard} style={{ width: 20, height: 20 }} />
//         </TouchableOpacity>
//       </View>

//       {/* alert-link-copied */}
//       {linkCopied && (
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Text
//             style={{
//               fontStyle: "italic",
//               fontSize: 16,
//               textDecorationLine: "underline",
//               color: "#ff9100",
//             }}
//           >
//             Link copied
//           </Text>
//           <Text style={{ color: "green", fontSize: 20, marginLeft: 5 }}>✔</Text>
//         </View>
//       )}
//       {/* /alert-link-copied */}
//     </>
//   );
// }

// export default CardURL;
