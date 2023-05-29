import './Settings.css'
import cogs from './setting-line-icon.svg'

const Settings = (props) => {
    return (
        <div className="settings">
            <button class="settings-icon">
                <img alt="settings" src={cogs} />
            </button>
            <div class="settings-popover">
                <ul>
                    <li><button type="button">item 1 com um nome até que bem compridinho</button></li>
                    <li><button type="button">item 2</button></li>
                    <li><button type="button">item 3</button></li>
                    <li><button type="button">item 4</button></li>
                    <li><button type="button">item 5</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Settings
