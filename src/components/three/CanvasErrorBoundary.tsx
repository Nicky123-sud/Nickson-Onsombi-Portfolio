import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

type State = { hasError: boolean };

/**
 * Catches WebGL/Three.js failures (unsupported browser, disabled GPU,
 * driver issues, headless/sandboxed environments) so a 3D crash degrades
 * to the SVG fallback instead of taking down the whole page.
 */
export class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D visual failed to render, falling back to SVG diagram:", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
