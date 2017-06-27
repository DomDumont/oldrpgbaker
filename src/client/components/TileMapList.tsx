import * as React from 'react';
import { TileMap } from '../model';
import TileMapItem from './TileMapItem';

interface TileMapListProps {
  tileMaps: TileMap[];
}
interface TileMapListState {
  filter: string;
};

export class TileMapList extends React.Component<TileMapListProps, TileMapListState> {

  render() {
   return ( <ul> 
       {this.props.tileMaps.map(tileMap => <TileMapItem tileMap= {tileMap}/>)} 
       </ul>);
  }
}



