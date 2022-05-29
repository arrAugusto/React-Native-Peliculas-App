
import React from 'react'
import { ActivityIndicator, Dimensions,  ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies'
import { LogBox } from 'react-native'


LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])

const {width: windowsWith} = Dimensions.get('window');

export const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} =useMovies();
  const {top}=useSafeAreaInsets();

  if (isLoading){
    return (
      <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    )
  } 
  return (
    <ScrollView>
    <View style={{marginTop: top+20}}>
        {/*<MovieCard 
          movie={peliculasCine[1]}
        /> */}
        {/* CAROUSEL PRINCIPAL */}
        <View style={{ height: 440 }}>
        <Carousel 
          data={nowPlaying}
          renderItem={ ({item}: any) => <MovieCard  movie={item} /> }
          sliderWidth={windowsWith}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />
        </View>
        {/* peliculas populares */}
        <HorizontalSlider title="Popular" movies={popular} />
        {/* peliculas Top Rated */}
        <HorizontalSlider title="Top Rated" movies={topRated} />
        {/* peliculas Up coming */}
        <HorizontalSlider title="Up coming" movies={upcoming} />

    </View>
    </ScrollView>
  )
}
