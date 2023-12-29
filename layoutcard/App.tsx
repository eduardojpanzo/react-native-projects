/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type ColorCardProps = {
  title: string;
  bgColor?: string;
};

type ContactProps = {
  name: string;
  bio?: string;
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    padding: 4,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardContainer: {
    borderRadius: 5,
    width: 100,
    height: 100,
    backgroundColor: '#c7c7c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fdfdfd',
  },
  places: {
    width: '95%',
    maxHeight: 390,
    borderRadius: 5,
    margin: 'auto',
    backgroundColor: '#fcfcfc',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  placesText1: {
    marginVertical: 30,
    color: '#000',
  },
  placesText2: {
    padding: 10,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },
  buttons: {
    marginTop: 60,
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    padding: 6,
    borderRadius: 2,
    backgroundColor: '#5a5402',
    fontWeight: '600',
    fontSize: 16,
  },
  contact: {
    marginHorizontal: 20,
    marginBottom: 10,
    gap: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    flexDirection: 'row',
    width: 50,
    height: 50,
    backgroundColor: '#d8fcfd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#3b3b3b',
  },
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const {height} = useWindowDimensions();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const openWebsite = (website: string) => {
    Linking.openURL(website);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="scrollableAxes"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.darker : Colors.white,
            minHeight: height,
          }}>
          <Section title="Flat Cards">
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <ColorCard title="red" bgColor="red" />
              <ColorCard title="Green" bgColor="#0bf192" />
              <ColorCard title="Blue" bgColor="skyblue" />
            </View>
          </Section>

          <Section title="Elevated Cards">
            <ScrollView horizontal>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  gap: 10,
                }}>
                <ColorCard title="red" />
                <ColorCard title="red" />
                <ColorCard title="red" />
                <ColorCard title="red" />
                <ColorCard title="red" />
                <ColorCard title="red" />
              </View>
            </ScrollView>
          </Section>

          <Section title="Trending places">
            <View style={styles.places}>
              <Image
                style={{width: '100%', maxHeight: 250}}
                source={require('./assets/img.jpg')}
              />

              <Text
                style={[
                  styles.placesText1,
                  {
                    color: '#5b06bd',
                  },
                ]}>
                Eduards JP
              </Text>

              <Text style={styles.placesText1}>12 mins away</Text>
            </View>
          </Section>

          <Section title="Blog  Card">
            <View style={styles.places}>
              <Text style={styles.placesText2}>
                what's new in Javascript 21 - ES12
              </Text>
              <Image
                style={{width: '100%', maxHeight: 250}}
                source={require('./assets/js.jpg')}
              />
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() => openWebsite('https://www.google.com')}>
                  <Text style={styles.links}>Read more</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => openWebsite('https://www.google.com')}>
                  <Text style={styles.links}>Follow me</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Section>

          <Section title="Contacts">
            <View style={styles.contact}>
              <ContactItem
                name="Adam Jone"
                bio="Just an extra ordinary teacher"
              />
              <ContactItem name="Anurag Tiwari" bio="To code an Teach!" />
              <ContactItem name="John Doe" bio="Marking your GPay smooth" />
              <ContactItem
                name="Milton Luiz"
                bio="Building secure Dital banks"
              />
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.darkgrey : Colors.black,
          },
        ]}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function ColorCard({title, bgColor}: ColorCardProps): JSX.Element {
  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: bgColor
            ? bgColor
            : styles.cardContainer.backgroundColor,
        },
      ]}>
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
}

function ContactItem({name, bio}: ContactProps): JSX.Element {
  const iniciais = name.split(' ').map(nome => nome.charAt(0).toUpperCase());

  return (
    <View style={styles.contactItem}>
      <View style={styles.avatar}>
        {iniciais.map((letra, i) => (
          <Text style={styles.avatarText} key={`${letra} ${i}`}>
            {letra}
          </Text>
        ))}
      </View>
      <View>
        <Text>{name}</Text>
        {bio && <Text>{bio}</Text>}
      </View>
    </View>
  );
}

export default App;
