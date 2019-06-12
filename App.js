import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default function App() {
  return (
    
    <Container>
    <Header />
    <Content>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://scontent.fnag1-2.fna.fbcdn.net/v/t1.0-9/45539891_499866930526347_8630867172224139264_o.jpg?_nc_cat=111&_nc_oc=AQm3Zp4ENVoE4DH6qR4E_PWYs-UeiRd7nPtedSvIpxXiS8SDKjhqtjKjNvPew8vi5LPZQSpOG4dhjztVlVnPWNY2&_nc_ht=scontent.fnag1-2.fna&oh=fc04085293e74e6a3c3d3f3d617a1f05&oe=5D9F4C4F'}} />
            <Body>
              <Text>Saad Patel</Text>
              <Text note>Random Photo</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: 'https://images.pexels.com/photos/1144281/pexels-photo-1144281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  </Container>

  );
}


