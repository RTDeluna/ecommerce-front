import { CartContextProvider } from '@/components/CartContext';
import Fpixel from '@/components/Fpixel';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
    background-color: #eee;
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<Fpixel />
			<GlobalStyles />
			<CartContextProvider>
				<Component {...pageProps} />
			</CartContextProvider>
		</>
	);
}
