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
         const { tileMaps, dispatch } = this.props;
        return  (<div> 
                <TileMapList tileMaps={tileMaps}
            editTileMap={(t,s) => dispatch(editTileMap(t, s))}
            deleteTileMap={(t: TileMap) => dispatch(deleteTileMap(t))}
            />
                <Footer compiler="TypeScript" framework="React" /> 
        </div>);
    }
}
function mapStateToProps(state) {
  return { tileMaps: state.tileMaps }
}
export default connect(mapStateToProps)(App as any);
