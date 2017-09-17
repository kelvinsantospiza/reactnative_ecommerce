import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

import ProductItem from './ProductItem'; 
import {
  metrics,
  styles,
  colors,
  fonts
} from '../../themes';

class RecentlyViewedProduct extends PureComponent {

  static propTypes = {
    products: PropTypes.array
  };

  static defaultProps = {
    products: []
  };

  _keyExtractor = (item) => item.id;

  render() {

    const { products } = this.props;

    return (
      <View style={style.container}>
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          horizontal={true}
          renderItem={({ item }) => (<ProductItem
            type={"vertical"}
            item={item}
            cart={true}
          />)}
        />
      </View>
    );
  }
}
export default (RecentlyViewedProduct);

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})