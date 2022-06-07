import './style.ts';
import { ThemeProvider } from 'styled-components';
import { Container } from './style';
import theme from './styles';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { FeedProvider } from './context/feed';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <FeedProvider>
      <Container>
        <Header />
        <Body />
      </Container>
      </FeedProvider>
    </ThemeProvider>
  );
}

export default App;
