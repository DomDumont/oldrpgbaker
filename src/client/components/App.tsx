import * as React from 'react';
import {Footer} from './Footer';
import {TileMapList} from './TileMapList';
import { Dispatch } from 'redux';
import { TileMap } from '../model';
import { connect } from 'react-redux';
import { editTileMap,deleteTileMap} from '../actions';

interface AppProps { 
      tileMaps: TileMap[];
      dispatch: Dispatch<{}>;
 }

class App extends React.Component<AppProps, void> {
    render() {
        return  (<div> 
                <TileMapList tileMaps={this.props.tileMaps}
            editTileMap={(t,s) => this.props.dispatch(editTileMap(t, s))}
            deleteTileMap={(t: TileMap) => this.props.dispatch(deleteTileMap(t))}
            />
                <Footer compiler="TypeScript" framework="React" /> 
        </div>);
    }
}

const mapStateToProps = state => ({
  tileMaps: state.tileMaps
});

export default connect(mapStateToProps)(App);
