import Theme from "../styles/theme";
import "../components/Accomplishments/image-modal.css";

export default function App({ Component, pageProps }) {
  return (
    <>

      <Theme>

        <Component {...pageProps} />
      </Theme>
    </>
  );
}
