import RainStream from './MatrixRain';

const Matrix = () => {
    const streamCount = Math.floor(window.innerWidth /20);
    return (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'black',
        display: 'flex',
    }}>
{new Array(streamCount).fill().map(_ => (
    <RainStream />
))}    
</div>
    );
};

export default Matrix;