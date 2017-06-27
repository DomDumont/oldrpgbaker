import * as React from 'react';
import { TileMap } from '../model';

interface TileMapItemProps {
  tileMap: TileMap;
}
interface TileMapItemState {
  editing: boolean;
};

class TileMapItem extends React.Component<TileMapItemProps, TileMapItemState> {

  render() {
   return ( <li> {this.props.tileMap.text} </li>);
  }
}



export default TileMapItem;