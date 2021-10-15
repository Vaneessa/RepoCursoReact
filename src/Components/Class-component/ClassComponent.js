import { Component } from "react";

class ClassComponent extends Component {
    ShowMessage(Hello) {
        alert('Bienvenidos!');
    }
    render () {
        const {Hello} = this.props;

        return (<div>
                <h1>ClassComponent</h1>
                <p>Gracias {Hello}</p>
                <button onClick={() => this.ShowMessage (Hello)}>Mostrar Alert</button>
               </div>
        );
    }
}

export default ClassComponent;