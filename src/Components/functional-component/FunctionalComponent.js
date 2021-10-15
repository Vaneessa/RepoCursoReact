
const FunctionalComponent = ({Hello}) => {
    const ShowMessage = (Hello) => {
        alert('Bienvenido!');
    };

    return (
        <div>
            <h1>FunctionalComponent</h1>
            <p>Gracias {Hello}</p>
            <button onClick={ShowMessage}>Mostrar Alert</button>
        </div>
        
    );
};

export default FunctionalComponent;