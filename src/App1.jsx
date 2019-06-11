import React, {Component, lazy, Suspense} from 'react'


const About = lazy(() => import(/*webpackChunkName:"about" */'./About.jsx'))

class App extends Component {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError(e) {
    return { hasError: true };
  }
  render() {

    if (this.state.hasError) {
      return <div>error</div>
    }
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <About></About>
        </Suspense>
      </div>
    );
  }
}

export default App;