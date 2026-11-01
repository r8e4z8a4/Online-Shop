import { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
      // این قسمت برای اینکه مشخص بشه خطایی رخ داده یا نه هست
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
          // این قسمت برای نشون دادن اینکه خطایی رخ داده هست میشه یک کامپوننتی ساخت که یه ظاهر زیایی داشته باشه و بگیم که اون کامپوننت رو ریترن کن
            return <div>{this.props.fallback}</div>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
