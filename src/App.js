import "./App.css";
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Image,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";
import temp from "./Danfo-Regular.ttf";
import tempImage from "./test.png";

Font.register({ family: "Roboto", src: temp });

// Reference font
const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
  },
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PDFViewer style={{ width: "100%", height: "1000px" }}>
          <Document>
            <Page>
              <View>
                <Text style={styles.title}> test</Text>
                <Image src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />
              </View>
              <Image src={tempImage}></Image>
            </Page>
          </Document>
        </PDFViewer>
      </header>
    </div>
  );
}

export default App;
