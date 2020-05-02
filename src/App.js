import React from "react";
import Navigation from './Navigation';
import ContextWrapper from './ContextWrapper';

class App extends React.Component {
    render() {
        return (
            <ContextWrapper>
                <Navigation />
            </ContextWrapper>
        )
    }
}

export default App;