import { Component } from "react";

class ErrorBoundary extends Component{
    state = {hasError: false}
    static getDerivedStateFromError(){
        return { hasError: true }
    }
    componentDidCatch(error,info){
        console.error("ErrorBoundary caught some stupid error", error, info)
    }
    render(){
        if (this.state.hasError){
            return(
                <div className="error-boundary">
                    <h2>Oops</h2>
                    <p>
                        There was an error with this page.<Link to="/">Click to go back</Link>
                    </p>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;