import '../styles/App.css'

function App() {
  return (
    <div className="root">

      <div id='wrapper'>
        <div id='header'>
          <p>Header</p>
        </div>

        <div id='flex-container'>

          <div id='input-presets'>
            <div id='groupLists'>
              <p>Group List</p>
            </div>

            <div id='input-settings'>
              <p>Input Settings</p>
            </div>
          </div>

          <div id='train-output'>
            <p>Train Output</p>
          </div>

        </div>

        <div id='footer'>
          <p>Footer</p>
        </div>

      </div>                

    </div>
  )
}

export default App;
