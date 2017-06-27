import * as React from 'react';
import {Footer} from './Footer';
import {TileMapList} from './TileMapList';
import { Dispatch } from 'redux';
import { TileMap } from '../model';

export interface AppProps { 
      tileMaps: TileMap[];
        dispatch: Dispatch<{}>;
 }

export class App extends React.Component<AppProps, void> {
    render() {
        return  <div> 
                <TileMapList tileMaps={this.props.tileMaps}/>
                <Footer compiler="TypeScript" framework="React" /> 
                </div>;
    }
}
