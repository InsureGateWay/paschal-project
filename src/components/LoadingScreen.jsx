import './LoadingScreen.css'

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <p>Loading content...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
