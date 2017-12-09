import React, { Component } from 'react';
import Banner from './sections/banner/Banner';
import Content from './sections/contents/Content';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Banner />
          <Content/>
        </Container>
      </div>
    );
  }
}

export default App;
