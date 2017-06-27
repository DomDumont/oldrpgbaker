import * as React from 'react';
import {Footer} from './Footer';

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, undefined> {
    render() {
        return  <div> 
                <Footer compiler="TypeScript" framework="React" /> 
                </div>;
    }
}
