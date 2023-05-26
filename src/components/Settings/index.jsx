import './Settings.css'
import cogs from './setting-line-icon.svg'

const Settings = (props) => {
    return (
        <div className="settings">
            <button class="settings-icon">
                <img src={cogs} />
            </button>
            <div class="settings-popover">
                <ul>
                    <li><button>item 1</button></li>
                    <li><button>item 1</button></li>
                    <li><button>item 1</button></li>
                    <li><button>item 1</button></li>
                    <li><button>item 1</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Settings
