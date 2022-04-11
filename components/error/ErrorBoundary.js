import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // console.error();
  }

  render() {
    if (this.state.hasError) {
      //prettier-ignore
      return <h1>Something went wrong at our server.</h1>;
    }
    {
      console.log(`Chegou até aqui?`);
    }
    return this.props.children;
  }
}
